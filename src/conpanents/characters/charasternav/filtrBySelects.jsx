/* eslint-disable react/prop-types */
import Navlane from './img/10728680.png'
import s from './charastersnav.module.css'

const FilterByStatys = ({ options, onHandleChenge }) => {
  return (
    <div className={s.nav__el}>
      <select onChange={(e) => onHandleChenge(e.target.value)}>
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <img className={s.nav__el__img} src={Navlane} />
    </div>
  );
};

export default FilterByStatys;
