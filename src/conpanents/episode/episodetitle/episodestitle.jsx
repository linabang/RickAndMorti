import s from './episodestitle.module.css'
import Title from './img/rick-and-morty2 1.svg'
const Episodestitle = () => {
  return (
    <div className={s.title__wrapper}>
        <div className={s.title}>
          <img src={Title} alt="Заголовок" />
        </div>
    </div>
  )
}

export default Episodestitle