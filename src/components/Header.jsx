import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import st from './header.module.scss'

function Header() {
    const navigate = useNavigate()
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

                        <div className={st.header__btnWrap}>
                            <button 
                                className={st.authbtn}
                                onClick={() => navigate('/login')}
                            >
                                Войти</button>
                            <button className={st.authbtn}>Регистрация</button>
                        </div>


                        

                    
                    </div>
                </div>
            </div>
            
        </header>

    </div>
  )
}

export default Header