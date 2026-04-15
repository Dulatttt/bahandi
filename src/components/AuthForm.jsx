import { useState } from "react";
import { useAuth } from "react-use-auth";
function AuthForm(mode='login'){

    const [email,SetEmail]=useState('');
    const [password,Setpassword]=useState('');
    const [message,SetMessage]=useState('');

    const[login, register]=useAuth();

    const isLogin=mode==='login';

    const buttonText=isLogin ? 'Войти': 'Зарегистрироваться'
    const title=isLogin ? 'Авторизация' : 'Регистрация'

    const handleSubmit=async (e)=>{
        e.preventDefault();
        SetMessage('')

        const action=isLogin ? login : register;

        const result = await action(email, password);

        if(result.success){
            SetMessage(`Успешный  ${isLogin} ? 'Вход' : 'регистрация'`);
        }
        else{
            SetMessage('ошибка')
        }

    }



    return(
        <div>
            <h2>{title}</h2>
            <form action="">


                <label >Введите почту</label>
                <input type="email"  value={email} onChange={(e) => SetEmail(e.target.value)}/>


                    <label>Введите Пароль</label>
                <input type="password"  value={password} onChange={(e) => Setpassword(e.target.value)}/>

                <button type="submit">Отправить</button>


            </form>
         
        </div>
    )
}

export default AuthForm;