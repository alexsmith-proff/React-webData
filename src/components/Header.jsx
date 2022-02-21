import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import st from './header.module.scss'
import { setUserData } from '../feature/user/userSlice';

function Header() {

    const[isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const firstName = useSelector(state => state.user.user.firstName)
    const lastName = useSelector(state => state.user.user.lastName)

    const handlerLogOut = () => {
        localStorage.removeItem('accessToken')
        dispatch(setUserData({}))
        setIsLoading(false)
    }
    useEffect(() => {
        if(localStorage.getItem('accessToken')) setIsLoading(true)
    })
  return (
    <div>
        <header>
            <div className={st.header}>
                <div className="container">
                    <div className={st.header__wrap}>
                        <div className={st.header__logowrap}>
                            <Link className={st.header__logo} to="/">Logo</Link>
                        </div>

                        <nav className={st.header__nav}>
                            <Link className={st.header__navLink} to="/">Главная</Link>
                            <Link className={st.header__navLink} to="/about">О нас</Link>
                            <Link className={st.header__navLink} to="/contacts">Контакты</Link>
                        </nav>

                        {
                            isLoading ? 
                                (
                                    <div className={st.header__authNameWrap}>
                                        <div className={st.header__authName}> Привет, {firstName} {lastName}</div>      
                                        <button
                                            className={st.authbtn}
                                            onClick={handlerLogOut}
                                        >
                                            Выйти</button>   
                                    </div>
                                )
                                :
                                <div className={st.header__btnWrap}>
                                    <button 
                                        className={st.authbtn}
                                        onClick={() => navigate('/login')}
                                    >
                                        Войти</button>
                                    <button
                                        className={st.authbtn}
                                        onClick={() => navigate('/register')}
                                    >
                                        Регистрация</button>
                                </div>
                        }

                        


                        

                    
                    </div>
                </div>
            </div>
            
        </header>

    </div>
  )
}

export default Header