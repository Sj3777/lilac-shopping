import React, { useState } from 'react'
import './login.css'
import logo from "../../components/assets/images/Logo.png"
import facebook from '../../components/assets/images/facebook.png'
import google from '../../components/assets/images/google.png'
import instagram from '../../components/assets/images/instagram.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API } from '../../config'
import Swal from 'sweetalert2';
export default function Login() {
  const history = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goRegister = () => {
    history("/register")
  }

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const handleLogin = (e) => {
    e.preventDefault();
    const cred = {
      u_email: email,
      u_password: password
    };

    let url = `${API.localhost}/product/login`;
    axios.post(url, cred).then((res) => {
      console.log("api res----", res, cred)
      localStorage.setItem("user", JSON.stringify(res.data.user))
      Toast.fire({
        icon: 'success',
        title: res.data.message
      })
      // dispatchEvent({action: , data: })
      history("/shop");
    }).catch((err) => {
      Toast.fire({
        icon: 'error',
        title: "Wrong credentials!"
      })
      console.log("-----errr", err)
    })
  }
  return (
    <>
      <div className='main_login_container'>
        <div className='container_login '>
          <div className='left_box'>
            <img className='logo_def' src={logo} />
          </div>
          <div className='right_box'>
            <p>Welcome back!</p>
            <h4>Sign in</h4>
            <form onSubmit={handleLogin}>
              <div className='input_con'>
                <label>
                  Email
                </label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className='input_box'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='input_con'>
                <label>
                  Password
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className='input_box'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button className='sign_button' type='submit'>
                Sign in
              </button>
            </form>
            <div className="social_icon">
              <h5>or</h5>
            </div>
            <div className="social_icon icon_stl">
              <a href="#" class="social"><img src={facebook} alt="facebook" className='icon_sz' /></a>
              <a href="#" class="social"><img src={google} alt="google" className='icon_sz' /></a>
              <a href="#" class="social"><img src={instagram} alt="instagram" className='icon_sz' /></a>
            </div>
            <div className='register_here'>
              <h5>New to ShopX? <button className='go_btn' onClick={() => { goRegister() }}>Register here!</button></h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
