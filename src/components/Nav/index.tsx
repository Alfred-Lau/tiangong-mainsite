import React, { useCallback, useEffect, useState } from 'react';
import classnames from 'classnames';
import './index.less';
import login from '@/pages/login';
import useAuth from '@/hooks/useAuth';
import { useHistory } from 'umi';

/*
## 技术方案设计

### PC 端
1. 需求描述
2. 参数设计
3. 实现方案设计
4. 模板，样式，交互落地
5. 文档 & 测试

### 移动端【移动优先设计】
- 三明治导航

*/

export function isNullOrUndefined(t: any): boolean {
  return t === null || t === undefined;
}

export type MenuItemType = {
  id: number;
  title: string;
  link: string;
  items: string[];
};

export type fixedOption = {
  top: string;
};

export type NavProps = {
  menus: MenuItemType[];
  scrollable?: boolean;
  fixed?: fixedOption | boolean;
  logo: string;
  user: MainSiteApi.User | {};
};

const Nav = (props: NavProps & { children?: React.ReactElement }) => {
  const { children, scrollable, fixed = false, menus, logo } = props;
  const [active, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const { gotoLoginPage } = useAuth();
  const history = useHistory();

  const gotoLoginPage = useCallback(() => {
    history.push(`/login?goto=${encodeURIComponent(window.location.pathname)}`);
  }, []);
  const goToUserPage = useCallback(() => {
    history.push(`/personal`);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.body.scrollTop
        ? document.body.scrollTop
        : document.documentElement.scrollTop;
      const target = document.querySelector('.tiangong-nav') as HTMLElement;

      if (scrollHeight > 80) {
        target.style.position = 'fixed';
        target.style.zIndex = '1000';
        target.style.top = '0';
        target.style.left = '0';
      } else {
        target.style.position = 'relative';
        target.style.zIndex = '0';
      }
    };
    if (fixed) {
      // target：支持吸顶, 默认距离顶部 80px
      window.addEventListener('scroll', handleScroll);
    }

    return window.removeEventListener('scroll', handleScroll);
  }, []);

  const showMore = (id?: number) => {
    setActive(true);
    if (!isNullOrUndefined(id)) {
      setCurrentIndex(id!);
    }
  };
  const showLess = (id?: number) => {
    setActive(false);
    if (!isNullOrUndefined(id)) {
      setCurrentIndex(id!);
    }
  };

  return (
    <div className="tiangong-nav">
      <div className="left">
        <a href={window.location.href}>
          <img src={logo} alt="brand" className="brand" height="60px" />
        </a>
      </div>
      <div className="menu">
        <ul className="menu-main">
          {menus.map((menu, index) => {
            return (
              <li
                className="menu-main-item"
                onMouseEnter={() => showMore(index)}
                onMouseLeave={() => showLess(index)}
              >
                {menu.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={classnames('menu-mask', {
          'menu-mask-active': active,
        })}
        onMouseLeave={() => {
          showLess();
        }}
        onMouseEnter={() => {
          showMore();
        }}
      >
        <div className="popover">
          <ul className="popover-menu">
            {menus[currentIndex]?.items.map((item) => {
              return <li className="popover-menu-item">{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="right">
        {window?.user?.nickName || window?.user?.name ? (
          <div className="avatar" onClick={goToUserPage}>
            {window.user?.nickName || window?.user?.name}
          </div>
        ) : (
          <>
            <span className="login" onClick={gotoLoginPage}>
              登录
            </span>
            <span className="signup" onClick={gotoLoginPage}>
              立即注册
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
