import React, { useEffect, useState } from 'react'
import './register.css'
import logo from "../../components/assets/images/Logo.png"
import facebook from '../../components/assets/images/facebook.png'
import google from '../../components/assets/images/google.png'
import instagram from '../../components/assets/images/instagram.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {API} from '../../config'
export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const pic = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F10%2F05%2F22%2F37%2Fblank-profile-picture-973460__340.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fuser%2F&tbnid=ksweUyHJewvXXM&vet=12ahUKEwjV77jUrof4AhXD_TgGHa0FCjUQMygAegUIARDaAQ..i&docid=rmmzhVPJUKwfiM&w=340&h=340&q=user%20pic&ved=2ahUKEwjV77jUrof4AhXD_TgGHa0FCjUQMygAegUIARDaAQ'
  const history = useNavigate()
  const goSignin = () => {
    history('/login')
  }
  const handleRegister=(e)=>{
    e.preventDefault();
    const cred = { 
      u_email: email, 
      u_password: password, 
      u_name: username, 
      u_phone: phone,
      u_pic: pic
    };

    let url = `${API.production}/product/signup`;
        axios.post(url, cred).then((res) => {
            console.log("api res----", res, cred)
            // localStorage.setItem("user", JSON.stringify(res.data.u_token))
            // Toast.fire({
            //     icon: 'success',
            //     title: res.data.message
            // })
            // dispatchEvent({action: , data: })
            // navigate("/home");
        }).catch((err) => {
            // Toast.fire({
            //     icon: 'error',
            //     title:  "Wrong credentials!"
            //   })
            console.log("-----errr", err)
        })
  }

  return (
    <>
      <div className='main_login_container'>
        <div className='container_login '>
          <div className='left_box_r'>
            <div className='logo_cont'>
              <img className='logo_def' src={logo} />
            </div>
            <div className="social_icon_r icon_stl_r">
              <a href="#" class="social"><img src={facebook} alt="facebook" className='icon_sz' /></a>
              <a href="#" class="social"><img src={google} alt="google" className='icon_sz' /></a>
              <a href="#" class="social"><img src={instagram} alt="instagram" className='icon_sz' /></a>
            </div>
          </div>
          <div className='right_box_r'>
            <p>Welcome to ShoX!</p>
            <form onSubmit={handleRegister}>
              <div className='input_con_r'>
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
              <div className='input_con_r'>
                <label>
                  Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className='input_box'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className='input_con_r'>
                <label>
                  Phone Number
                </label>
                <br />
                <input
                  type="phone"
                  placeholder="Enter your phone number"
                  className='input_box'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className='input_con_r'>
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
                Sign up
              </button>
            </form>
            <div className="social_icon">
              <h5>or</h5>
            </div>

            <div className='register_here'>
              <h5>Already have an account? <button className='go_btn' onClick={() => { goSignin() }}>Sign in now!</button></h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
