import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import validator from 'validator';
import allEndpoints from '../services/api';

import st from './loginpage.module.scss';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isEmailAlert, setIsEmailAlert] = useState(false);
  const [isPasswordAlert, setIsPasswordAlert] = useState(false);
  const [isConfirmPasswordAlert, setIsConfirmPasswordAlert] = useState(false);
  const [isMessage, setIsMessage] = useState(false);

  const navigate = useNavigate()


  const handleChangeEmail = (e) => {
      setEmail(e.target.value);
  }
  const handleChangePassword = (e) => {
      setPassword(e.target.value);
  }
  const handleChangeConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
  }

  const handleLoginClick = async() => {
      setIsEmailAlert(false)
      setIsPasswordAlert(false)
      setIsConfirmPasswordAlert(false)
      if(!validator.isEmail(email)){
          setIsEmailAlert(true)
      }else if(password.length < 5){
          setIsPasswordAlert(true)
      }else if(password != confirmPassword) {
          setIsConfirmPasswordAlert(true)
      }else{
        try {
          // console.log(email, password)
          const response = await allEndpoints.auth.login({
            "email": email,
            "password": password                              
          })
          Cookies.set('auth-token', response.data.token)
          navigate('/')          
        } catch (e) {
          if(e.response.status === 422){
            console.log('status 422')
          }
          console.log('catch')
        }
        


      }
  }

return (
  <div className={st.freespace}>
    <div className={st.form}>
    <div className={st.titlewrap}>
        <div className={st.title}>Вход</div>
        <button
          className={st.loginbtn}
          onClick={() => navigate('/register')}
          >
          Регистрация
        </button>
    </div>
    <input className={st.input} type="text" value={email} onChange={handleChangeEmail} placeholder='E-mail' />
    <input className={st.input} type="password" value={password} onChange={handleChangePassword} placeholder='Пароль' />
    <input className={st.input} type="password" value={confirmPassword} onChange={handleChangeConfirmPassword} placeholder='Повторите пароль' />
    <button className={st.logbtn} onClick={handleLoginClick}>Вход</button>
    {isMessage && <div className={st.message}>Логин или пароль неверные</div>}
    
    {isEmailAlert && <div className={st.alert + ' ' + st.mailalert}>Вы ввели некорректный email</div>}
    {isPasswordAlert && <div className={st.alert + ' ' + st.passwordalert}>Пароль должен содержать более 7 символов </div>}
    {isConfirmPasswordAlert && <div className={st.alert + ' ' + st.confirmpasswordalert}>Вы ввели некорректный email</div>}
    </div>
  </div>
  

)

}

export default LoginPage