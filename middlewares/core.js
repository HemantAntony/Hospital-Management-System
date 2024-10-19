const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')

const { getSupabase } = require("../initiate_db");

router.get('/departments', async (req, res) => {
    const supabase = getSupabase()
    const {data, error} = await supabase.from("Department").select('name, hod, numberOfStaff, info')
    if (error) {
        console.log(error.message)
        return;
    }
    res.json(data)
})

router.get('/doctors', async (req, res) => {
    const supabase = getSupabase()
    const {data, error} = await supabase.from("Doctor").select('name, dept, summary')
    if (error) {
        console.log(error.message)
        return;
    }
    res.json(data)
})

router.post('/account/login', async (req, res) => {
    const login = req.body
    const supabase = getSupabase()
    const {data, error} = await supabase.from("Patient").select().eq('username', login.username)
    if (error) {
        console.log(error.message)
        return;
    }
    if (data[0].password !== login.password) {
        console.log("wrong password")
        return res.sendStatus(401)
    }
    const accessToken = jwt.sign({name: login.username}, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken, doctor: (login.username === "doctor")})
})

router.post('/account/signup', async (req, res) => {
    const signup = req.body
    const supabase = getSupabase()
    const {data, error} = await supabase.from("Patient").insert({...signup})
    if (error) {
        console.log(error.message)
        return;
    }
    const accessToken = jwt.sign({name: signup.username}, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken})
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.sendStatus(401)
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        
        res.user = user
    })

    next()
}

router.post('/appointment', authenticateToken, async (req, res) => {
    const appointmentData= req.body
    const supabase = getSupabase()

    try {
        const doctorId = (await supabase.from("Doctor").select("id").eq("name", appointmentData.doctor)).data[0].id
        const patientId = (await supabase.from("Patient").select("id").eq("username", res.user.name)).data[0].id
        await supabase.from("Appointment").insert({
            "patient": patientId,
            "time": appointmentData.time,
            "summary": appointmentData.summary,
            "doctor": doctorId
        })
    } catch (error) {
        console.log(error)
    }
    
    res.sendStatus(200)
})

module.exports = router
