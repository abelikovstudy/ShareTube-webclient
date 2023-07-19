import {NavLink} from 'react-router-dom'
import { useState, useRef } from 'react';

export function AuthPanel(){
    const [authForm, setAuthForm] = useState({
        username: '',
        password: '',
    });
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleUsernameChange = (e) => {
      setAuthForm({
        ...authForm,
        username: e.target.value
      })

      if(e.target.value.length < 5){
        usernameRef.current.style.color = 'red';
      }
      else{
        usernameRef.current.style.color = '';
      }
    }   
    const handlePasswordChange = (e) => {
        setAuthForm({
          ...authForm,
          password: e.target.value
        })

        if(e.target.value.length < 5){
            passwordRef.current.style.color = 'red';
          }
          else{
            passwordRef.current.style.color = '';
          }
    }

    const handleSubmit = () => {
        alert(authForm)
    }
    
    return (
    <>
        <div class="auth-panel">
            <form method="POST" class="auth-panel-form" onSubmit={handleSubmit}>
                <h1>
                    Авторизация
                </h1>
                <input type="text" value={authForm.username} onChange={handleUsernameChange} ref={usernameRef} placeholder="Логин или email" autoFocus required minlength="5" maxLength="20" on/>
                <hr />
                <br />
                <input type="password" value={authForm.password} onChange={handlePasswordChange} ref={passwordRef} placeholder="Пароль" required minlength="5" maxlength="20"/>
                <hr />
                <br />
                <input type="submit" value="Войти" />
            </form>
            <br />
            <NavLink to="/register"> У меня нет аккаунта </NavLink>
        </div>
    </>
    )
}