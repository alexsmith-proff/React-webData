import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import st from './header.module.scss'
import { setEmail_, setFirstName_, setId_, setIsAuth_, setLastName_ } from '../feature/user/userSlice';

function Header() {
    const navigate = useNavigate()
    const dispath = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)
    const firstName = useSelector(state => state.user.firstName)
    const lastName = useSelector(state => state.user.lastName)

    const handlerLogOut = () => {
        localStorage.removeItem('accessToken')
        dispath(setFirstName_(''))
        dispath(setLastName_(''))
        dispath(setEmail_(''))
        dispath(setId_(''))
        dispath(setIsAuth_(false))
    }
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
                            isAuth ? 
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
                                    <button className={st.authbtn}>Регистрация</button>
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