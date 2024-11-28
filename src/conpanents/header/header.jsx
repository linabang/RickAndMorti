
import s from './header.module.css'
import Logo from './img/logo-black 1.svg'
import Menu from './img/menu_24px.svg'
import Menu2 from './img/close_24px.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.header__img}>
          <img src={Logo} alt="логотип" />
        </div>
        <div className={s.header__nav__wrapper}>
          <nav className={s.header__nav}>
            <Link to={'/'} className={s.header__nav__link} >Characters</Link>
            <Link to={'/locations'} className={s.header__nav__link} >Locations</Link>
            <Link to={'/episode'}  className={s.header__nav__link} >Episodes</Link>
          </nav>
          <img className={s.header__nav__img} 
              src={isMenuOpen ? Menu2 : Menu}
              alt="Меню"
              onClick={toggleMenu}/>
          {isMenuOpen && (
            <div  className={s.header__nav__adaptiv}>
              <div  className={s.header__nav__adaptiv__wrapper}>
               <Link to={'/'} className={s.header__nav__adaptiv__link}  onClick={toggleMenu}>Characters</Link>
               <Link to={'/locations'} className={s.header__nav__adaptiv__link}  onClick={toggleMenu}>Locations</Link>
               <Link to={'/episode'} className={s.header__nav__adaptiv__link}  onClick={toggleMenu}>Episodes</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header