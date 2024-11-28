import Linkimg from "./img/Group 4.svg";
import s from "./episodeper.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react"; 


const Episodeper = () => {
  
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const param = useParams("");

  

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        const result = await fetch(
          `https://rickandmortyapi.com/api/episode/${param.id}`
        );
        if (!result.ok) {
          return setError(true);
        }
        const resultsJson = await result.json();
        console.log(resultsJson);
        setData(resultsJson);

        const charactersLink = resultsJson.characters;
        const charactersRes = await Promise.all(
          charactersLink.map((url) => fetch(url).then((res) => res.json()))
        );
        setCharacters(charactersRes);
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
      <Link to={"/episode"} className={s.link__img}>
        <img src={Linkimg} alt="выйти" />
      </Link>

      {isError ? (
        <div className={s.error}>
          <h1>Произошла ошибка</h1>
        </div>
      ) : (
        <div className={s.definition}>
          <div>
            <h1 className={s.definition__title}>{data?.name}</h1>
          </div>
          <div className={s.definition__modifier}>
            <div className={s.definition__madifier__el}>
              <span>Episode</span>
              <span>{data?.episode}</span>
            </div>
            <div className={s.definition__madifier__el}>
              <span>Date</span>
              <span>{data?.air_date}</span>
            </div>
          </div>
          <div className={s.characters}>
            <span className={s.characters__title}>Residents</span>
            <div className={s.characters__wrapper}>
                {characters.map((ep) => (
                  <Link to={`/character/${ep.id}`} className={s.characters__el} key={ep.id}>
                    <div className={s.characters__img}>
                      <img src={ep.image} alt="фото персонажа" />
                    </div>
                    <div className={s.characters__subtitle}>
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