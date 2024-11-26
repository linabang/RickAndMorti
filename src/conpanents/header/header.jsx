
import s from './header.module.css'
import Logo from './img/logo-black 1.svg'
import Menu from './img/menu_24px.svg'
import { Link } from 'react-router-dom';

function Header () {

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
          <img className={s.header__nav__img} src={Menu}/>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header