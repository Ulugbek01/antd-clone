import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { Contact, HeaderContainer, Logo, Telegram, Git } from './style'

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo className='logo c-pointer' onClick={() => navigate('/')}>
        <img width={32} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
        <h4 className='logo__title'>Ant Design</h4>
      </Logo>
      <div className='menu'>
        {navbar.map((item) => 
          <NavLink key={item.id} to={item.path}>{item.title}</NavLink>
        )}
      </div>
      <Contact>
        <p>Duvlanov Ulugbek</p>
        <a href="https://t.me/Duvlanov_ulugbek" target={'_blank'} rel="noopener noreferrer">
          <Telegram/>
        </a>
        <a href="https://github.com/Ulugbek01" target={'_blank'} rel="noopener noreferrer">
          <Git/>
        </a>
      </Contact>
    </HeaderContainer>
  )
}

export default Header