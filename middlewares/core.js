const express = require('express')
const router = express.Router()

const { getSupabase } = require("../initiate_db");

router.get('/departments', async (req, res) => {
    const supabase = getSupabase()
    const {data, error} = await supabase.from("Department").select('name, hod, numberOfStaff, info')
    if (error) {
        console.log(error.message)
        return;
    }
    console.log(data)
    res.json(data)
})

module.exports = router
