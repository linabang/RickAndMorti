import s from './locationtitle.module.css'
import Title from './img/rick-and-morty 1.svg'
const Locationtitle = () => {
  return (
    <div className={s.title__wrapper}>
        <div className={s.title}>
          <img src={Title} alt="Заголовок" />
        </div>
    </div>
  )
}

export default Locationtitle