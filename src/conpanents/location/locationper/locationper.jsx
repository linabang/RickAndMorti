import Linkimg from "./img/Group 4.svg";
import s from "./locationper.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react"; 


const Episodeper = () => {
  
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [residents, setResidents] = useState([]);
  const param = useParams("");

  

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        const result = await fetch(
          `https://rickandmortyapi.com/api/location/${param.id}`
        );
        if (!result.ok) {
          return setError(true);
        }
        const resultsJson = await result.json();
        console.log(resultsJson);
        setData(resultsJson);

        const residentsLink = resultsJson.residents;
        const residentsRes = await Promise.all(
          residentsLink.map((url) => fetch(url).then((res) => res.json()))
        );
        setResidents(residentsRes);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [param.id]);

  if (isLoading) {
    return <h1>Is loading ...</h1>;
  }

  return (
  
      
    <>
      <Link to={"/locations"} className={s.link__img}>
        <img src={Linkimg} alt="выйти" />
      </Link>

      {isError ? (
        <div className={s.error}>
          <h1>Произошла ошибка</h1>
        </div>
      ) : (
        <div className={s.decision}>
          <div>
            <h1 className={s.decision__title}>{data?.name}</h1>
          </div>
          <div className={s.decision__modifier}>
            <div className={s.decision__madifier__el}>
              <span>Episode</span>
              <span>{data?.episode}</span>
            </div>
            <div className={s.decision__madifier__el}>
              <span>Date</span>
              <span>{data?.air_date}</span>
            </div>
          </div>
          <div className={s.residents}>
            <span className={s.residents__title}>Residents</span>
            <div className={s.residents__wrapper}>
                {residents.map((ep) => (
                  <Link to={`/character/${ep.id}`} className={s.residents__el} key={ep.id}>
                    <div className={s.residents__img}>
                      <img src={ep.image} alt="фото персонажа" />
                    </div>
                    <div className={s.residents__subtitle}>
                      <span>{ep.name}</span>
                      <span>{ep.species}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

      )}
    
    </>
  )
}

export default Episodeper