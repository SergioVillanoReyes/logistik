/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Button from '../Button';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [showDrop, setShowDrop] = useState(false);

  const router = useRouter()

  useEffect(()=>{
    setCurrentUrl(router.pathname);
  });

  console.log({currentUrl});

    return (
        <div className={`menu ${currentUrl !== '/' && 'bg-menu'}`}>
            <div className='container-menu'>
              <div className='left-panel'>
              <div className='logo'>
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
                    `} onClick={() => setShowDrop(!showDrop)}>
                      our services
                      {showDrop && (
                      <div className='dropdown'>
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