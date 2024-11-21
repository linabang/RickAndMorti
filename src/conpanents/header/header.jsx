
import s from './header.module.css'
import Logo from './img/logo-black 1.svg'
import Menu from './img/menu_24px.svg'
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
            <p className={s.header__nav__link} >Characters</p>
            <p className={s.header__nav__link} >Locations</p>
            <p className={s.header__nav__link} >Episodes</p>
          </nav>
          <img className={s.header__nav__img} src={Menu}/>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header