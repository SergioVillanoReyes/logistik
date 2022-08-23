/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Button from '../Button';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const router = useRouter()

  useEffect(()=>{
    setCurrentUrl(router.pathname);
  });

    return (
        <div className='menu'>
            <div className='container-menu'>
              <div className='left-panel'>
              <div className='logo'>
                <img src='/img/logo.png' alt='logo' />
              </div>
              <div 
              className='hamburger-menu' 
              onClick={() => setShowMenu(!showMenu)} 
              style={{ backgroundImage: `url('/img/${showMenu ? 'x' : 'menu'}.png')`, width: showMenu && '7vw' }}
              />
              <div className={`sections ${showMenu ? 'show' : 'hide'}`}>
                <Link href="/">
                  <a>
                    <div className={`section ${currentUrl === '/' && 'active'}`}>
                      home
                    </div>
                  </a>
                </Link>
                <Link href="/our-services">
                  <a>
                    <div className={`section ${currentUrl === '/our-services' && 'active'}`}>
                      our services
                    </div>
                  </a>
                </Link>
                <Link href="/contact">
                  <a>
                    <div className={`section ${currentUrl === '/contact' && 'active'}`}>
                      contact
                    </div>
                  </a>
                </Link>
              </div>
              </div>
              <div className='button-right'>
                <Link href="https://global.secure-wms.com/WebUI/Login">
                  <a target="_blank">
                    <Button 
                      typeOfBtn="primary"
                      text="CUSTOMER PORTAL"
                      icon="padlock"
                    />
                  </a>
                </Link>
              </div>
            </div> 
        </div>
    );
};

export default Menu;