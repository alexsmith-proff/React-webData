import React, { useState } from 'react'
import validator from 'validator';
import { useNavigate } from 'react-router';

import st from './registrationpage.module.scss';
import { Link } from 'react-router-dom';

function RegistrationPage() {
  const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isMailAlert, setIsMailAlert] = useState(false);
    const [isPasswordAlert, setIsPasswordAlert] = useState(false);
    const [isConfirmPasswordAlert, setIsConfirmPasswordAlert] = useState(false);
    const [isFirstNameAlert, setIsFirstNameAlert] = useState(false);
    const [isLastNameAlert, setIsLastNameAlert] = useState(false);
    const [isMessage, setIsMessage] = useState(false);

    let navigate = useNavigate();


    const handleChangeMail = (e) => {
        setMail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleRegisterClick = () => {
        setIsMailAlert(false)
        setIsPasswordAlert(false)
        setIsFirstNameAlert(false)
        setIsLastNameAlert(false)
        setIsConfirmPasswordAlert(false)
        if(!validator.isEmail(mail)){
            setIsMailAlert(true)
        }else if(password.length < 5){
            setIsPasswordAlert(true)
        }else if(password != confirmPassword) {
            console.log('password')
            setIsConfirmPasswordAlert(true)
        }else if(firstName == '') {
            console.log('firstname')
            setIsFirstNameAlert(true)
        }else if(lastName == '') {
            console.log('lastname')
            setIsLastNameAlert(true)
        }else{
           

        } 
    }

  return (
    <div className={st.freespace}>
      <div className={st.form}>
        <div className={st.titlewrap}>
          <div className={st.title}>Регистрация</div>
          <button 
            className={st.loginbtn}
            onClick={() => navigate('/login')}
            >
            Войти
          </button>
        </div>
        <input className={st.input} type="text" value={mail} onChange={handleChangeMail} placeholder='E-mail' />
        <input className={st.input} type="password" value={password} onChange={handleChangePassword} placeholder='Пароль' />
        <input className={st.input} type="password" value={confirmPassword} onChange={handleChangeConfirmPassword} placeholder='Повторите пароль' />
        <input className={st.input} type="text" value={firstName} onChange={handleChangeFirstName} placeholder='Введите имя' />
        <input className={st.input} type="text" value={lastName} onChange={handleChangeLastName} placeholder='Введите фамилию' />
        <button className={st.registerbtn} onClick={handleRegisterClick}>Регистрация</button>
        {isMessage && <div className={st.message}>Ошибка регистрации</div>}
      
        <div className={st.checkbox}>
          <input type="checkbox" name='isMailing'/>
          <div className={st.checkboxText}>Соглашаюсь на получение рассылки по электронной почте</div>
        </div>
        <div className={st.checkbox}>
          <input type="checkbox" name='isMailing'/>
          <div className={st.checkboxText}>Соглашаюсь с &nbsp; 
            <Link to="/" className={st.link}>политикой обработки персональных данных</Link>
          </div>
        </div>

        {isMailAlert && <div className={st.alert + ' ' + st.mailalert}>Вы ввели некорректный email</div>}
        {isPasswordAlert && <div className={st.alert + ' ' + st.passwordalert}>Пароль должен содержать более 7 символов </div>}
        {isConfirmPasswordAlert && <div className={st.alert + ' ' + st.confirmpasswordalert}>Пароль не совпадает</div>}
        {isFirstNameAlert && <div className={st.alert + ' ' + st.firstnamealert}>Введите имя</div>}
        {isLastNameAlert && <div className={st.alert + ' ' + st.lastnamealert}>Введите фамилию</div>}

      </div>
    </div>
    

  )

}

export default RegistrationPage