import s from './charasterstitle.module.css'
import Title from './img/PngItem_438051 1.svg'
function Charasterstitle (){
  return (
    <div className={s.title__wrapper}>
        <div className={s.title}>
          <img src={Title} alt="Заголовок" />
        </div>
    </div>
  )
}

export default Charasterstitle