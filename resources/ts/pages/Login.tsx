import { useState, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// ベースURLの設定
axios.defaults.baseURL = '/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      // 認証成功後に /dashboard に遷移
      navigate('/dashboard');
    } catch (error) {
      setError('メールアドレスまたはパスワードが間違っています');
    }
  };

  return (
    <div className="py-[6.2rem]">
      <h2 className="font-bold text-[3.8rem] tracking-wider flex items-center flex-col gap-[2.8rem]">
        <span className="z-10 leading-7">ログイン</span>
        <span className="w-[6.5rem] h-[0.6rem] bg-accent"></span>
      </h2>
      <form className="max-w-[42rem] mx-auto shadow-[3px_3px_14px_0_rgba(0,0,0,0.08)] rounded-[1.5rem] px-[2.4rem] py-[3.2rem] mt-[6.3rem]" onSubmit={ handleSubmit }>
        <div className="flex flex-col gap-[0.6rem] items-start">
          <label className="text-[1.4rem]" htmlFor="email">メールアドレス</label>
          <input className="w-[100%] h-[3.8rem] border border-gray-300 rounded-[0.6rem] text-[1.6rem] px-[1.2rem] focus:outline-none"
            type="email"
            id="email"
            value={ email }
            onChange={ e => setEmail(e.target.value) } />
        </div>
        <div className="flex flex-col gap-[0.6rem] items-start mt-[2.4rem]">
          <label className="text-[1.4rem]" htmlFor="password">パスワード</label>
          <input className="w-[100%] h-[3.8rem] border border-gray-300 rounded-[0.6rem] text-[1.6rem] px-[1.2rem] focus:outline-none"
            type="password"
            id="password"
            value={ password }
            onChange={ e => setPassword(e.target.value) } />
        </div>
        { error && <p className="text-red-500 text-[1.4rem] mt-[1.6rem]">{ error }</p> }
        <div className="flex flex-col gap-[0.6rem] items-start mt-[2.4rem]">
          <input
            className="inline-block text-white rounded-[0.4rem] text-[1.4rem] px-8 py-3 transition hover:opacity-70 bg-blue-500"
            type="submit"
            value="ログイン" />
        </div>
        <div className="mt-[4.2rem]">
          <a href="#" className="text-[1.4rem] hover:underline">新規会員登録はこちら</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
