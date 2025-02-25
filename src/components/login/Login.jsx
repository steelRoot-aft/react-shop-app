import React, { useState } from 'react';
import styles from './login.module.css';

import { isLogin } from '../../redux/loginSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() && password.trim()) {
      dispatch(isLogin(username));
    } else {
      setError('Заполните все поля');
    }
  };

  return (
    <article className={styles.body}>
      <form onSubmit={handleLogin}>
        <div className={styles.username}>
          <input
            placeholder='Username...'
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={styles.password}>
          <input
            placeholder='Password...'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </article>
  );
};

export default Login;
