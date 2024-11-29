/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import s from "./personlocation.module.css"
import Arrow from "../img/10728680.png";

const Personlocation = ({name,date,id,origin,}) => {
  return (
    
      <Link to={`/episodeper/${id}`} id={s.block} className={s.epesodes__el} key={id}>
        <div className={s.episodes__el__text}>
          <span>{name}</span>
          <span>{date}</span>
          <span>{origin}</span>
        </div>
          <img className={s.imege} src={Arrow} />
      </Link>
    
  );
};

export default Personlocation;
