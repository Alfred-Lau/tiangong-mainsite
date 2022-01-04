import React, { useState } from 'react';
import type { MatchParams } from '@/hooks/hook';
import useQuery from '@/hooks/useQuery';
import request from '@/utils/request';
import styles from './index.less';
import { useHistory } from 'umi';

const Login: React.FC<MatchParams> = (props) => {
  const { goto } = useQuery(props);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    request('/api/user/login', {
      method: 'POST',
      data: JSON.stringify({ username, password }),
    })
      .then((resp) => {
        if (resp.status === 'ok') {
          const userInfo = {
            ...resp,
          };

          window.user = userInfo;
        }
      })
      .then(() => {
        if (goto) {
          history.push(goto);
        }
      });
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLElement>) => {
    setUsername((e.target as HTMLInputElement).value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLElement>) => {
    setPassword((e.target as HTMLInputElement).value);
  };
  return (
    <div className={styles.login}>
      <div className={styles['login-form']}>
        <form>
          <div className={styles['form-item']}>
            <label htmlFor="username">用户名</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="请输入姓名"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className={styles['form-item']}>
            <label htmlFor="password">密码</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="请输入密码"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className={styles.submit}>
            <button type="submit" onClick={handleSubmit}>
              登录
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
