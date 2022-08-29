/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Button from '../Button';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [showDrop, setShowDrop] = useState(false);
  const [scrollDir, setScrollDir] = useState("menu-up");

useEffect(() => {
  const threshold = 0;
  let lastScrollY = window.pageYOffset;
  let ticking = false;

  const updateScrollDir = () => {
    const scrollY = window.pageYOffset;
    setScrollDir(scrollY > 0 ? "menu-down" : "menu-up");
    lastScrollY = scrollY > 0 ? scrollY : 0;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollDir);
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
}, [scrollDir]);

  const router = useRouter();

  useEffect(()=>{
    setCurrentUrl(router.pathname);
  });


    return (
        <div className={`menu ${scrollDir} ${currentUrl !== '/' ? 'bg-menu' : ''}`}>
            <div className="container-menu">
              <div className='left-panel'>
              <div className={`${scrollDir === 'menu-up' ? 'logo': 'logo-min'}`}>
              <Link href="/">
                <a>
                <img src='/img/logo.png' alt='logo' />
                </a>
              </Link>
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
                    <div className={`section 
                    ${currentUrl === '/integrated-distribution-services' && 'active'}
                    ${currentUrl === '/shipping' && 'active'}
                    ${currentUrl === '/ecommerce-integrations' && 'active'}
                    `} onMouseOver={() => setShowDrop(true)} onMouseLeave={() => setShowDrop(false)}>
                      our services
                      {showDrop && (
                      <div className='dropdown' onMouseOver={() => [setShowDrop(false)]}>
                          <div className="sub-section">
                            <Link href="/integrated-distribution-services">
                              <a>
                              Integrated Distribution Services
                              </a>
                            </Link>
                          </div>
                          <div className="sub-section">
                            <Link href="/ecommerce-integrations">
                              <a>
                              Ecommerce Integrations
                              </a>
                            </Link>
                          </div>
                          <div className="sub-section">
                            <Link href="/shipping">
                              <a>
                              Shipping
                              </a>
                            </Link>
                          </div>
                      </div>
                      )}
                    </div>
                <Link href={`/${currentUrl !== '/' ? '/#' : '#'}technology`}>
                  <a>
                    <div className={`section ${currentUrl === '/technology' && 'active'}`}>
                      technology
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
                      typeOfBtn={`${scrollDir === 'menu-up' ? 'primary' : 'secondary'}`}
                      text="CUSTOMER PORTAL"
                      icon={`${scrollDir === 'menu-up' ? 'padlock' : ''}`}
                    />
                  </a>
                </Link>
              </div>
            </div> 
        </div>
    );
};

export default Menu;