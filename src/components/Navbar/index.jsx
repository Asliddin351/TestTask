import React from 'react'
import {
  NavbarRow,
  NavbarContainer,
  NavbarLogo,
  Dropdown,
  Button,
  NavButton,
  NavButtonWrapper
} from './style'

import logo from '../../assets/header-logo.webp'

const Navbar = () => {
  // const [isActive, setIsActive] = React.useState(false)
  return (
    <NavbarContainer>
      <NavbarRow>
        <NavbarLogo href="/">
          <img src={logo} alt="logo" width="100%" height="100%" />
        </NavbarLogo>

        <Dropdown defaultValue={'Russion-Русский'}>
          <option disabled>Russion-Русский</option>
          <option>Russion2</option>
          <option>Russion3</option>
          <option>Russion4</option>
          <option>Russion5</option>
        </Dropdown>

        <Button>Войти</Button>

        <div className="d-flex ml-auto">
          <div className="social">
            <a className="twitter" href="https://twitter.com/Light_shot">
              <img
                src={
                  'https://st.prntscr.com/2022/09/11/1722/img/icon-twitter_gscale.png'
                }
                alt="twitter"
                width={18}
                height={18}
              />
            </a>
            <a className="facebook" href="https://www.facebook.com/Lighshot">
              <img
                src={
                  'https://st.prntscr.com/2022/09/11/1722/img/icon-facebook_gscale.png'
                }
                alt="facebook"
                width={10}
                height={18}
              />
            </a>
          </div>

          <NavButton href='https://app.prntscr.com/ru/download.html' target='_blank'>
            <NavButtonWrapper>
                Бесплатно скачать Lightshot на свой компьютер
            </NavButtonWrapper>
          </NavButton>
        </div>
      </NavbarRow>
    </NavbarContainer>
  )
}

export default Navbar
