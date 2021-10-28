import React, { useState } from 'react';
import type { MatchParams } from '@/hooks/hook.d';
import useQuery from '@/hooks/useQuery';
import styles from './index.less';

const Login: React.FC<MatchParams> = (props) => {
  const { goto } = useQuery(props);

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (goto) {
      window.open(goto);
    }
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
            />
          </div>
          <div className={styles['form-item']}>
            <label htmlFor="password">密码</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="请输入密码"
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
