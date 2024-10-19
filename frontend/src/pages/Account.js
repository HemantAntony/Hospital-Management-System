import { useState } from "react";
import "../styles/Account.css"
import axios from "axios"

export default function Account() {

    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
    
    const [signup, setSignup] = useState({
        name: "",
        username: "",
        password: "",
        email: "",
        blood_type: "",
        family_health_problems: "",
        allergies: ""
    })

    function textfieldChangedLogin(event) {
        const {name, value} = event.target
        setLogin(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function textfieldChangedSignup(event) {
        const {name, value} = event.target
        setSignup(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function onLoginSubmit(event) {
        event.preventDefault()
        console.log(login)
        const func = async () => {
            const data = await axios.post('http://localhost:5000/account/login', login)
            localStorage.setItem('jwt', data.data)
            console.log(data.data)
        }
        func()
    }

    function onSignupSubmit(event) {
        event.preventDefault()
        console.log(signup)
        const func = async () => {
            const data = await axios.post('http://localhost:5000/account/signup', signup)
            localStorage.setItem('jwt', data.data)
            console.log(data.data)
        }
        func()
    }
    
  return (
    <div className="account">
      <h2>Login</h2>
      <form className="account--box">
        <label htmlFor="username">Username</label>
        <input type="text" id="username1" name="username" onChange={textfieldChangedLogin}></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password1"
          name="password"
          onChange={textfieldChangedLogin}
        ></input>
        <input type="submit" name="login--submit" onClick={onLoginSubmit} />
      </form>
      <h1>Or</h1>
      <h2>Signup</h2>
      <form className="account--box">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={textfieldChangedSignup}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={textfieldChangedSignup}
        ></input>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={textfieldChangedSignup}></input>
        <label htmlFor="email">Email address</label>
        <input type="text" id="email" name="email" onChange={textfieldChangedSignup}></input>
        <label htmlFor="blood_type">Blood type</label>
        <input type="text" id="blood_type" name="blood_type" onChange={textfieldChangedSignup}></input>
        <label htmlFor="family_health_problems">Health problems</label>
        <input
          type="text"
          id="family_health_problems"
          name="family_health_problems"
          onChange={textfieldChangedSignup}
        ></input>
        <label htmlFor="allergies">Allergies</label>
        <input
          type="text"
          id="allergies"
          name="allergies"
          onChange={textfieldChangedSignup}
        ></input>
        <input type="submit" name="submit" onClick={onSignupSubmit}/>
      </form>
    </div>
  );
}
