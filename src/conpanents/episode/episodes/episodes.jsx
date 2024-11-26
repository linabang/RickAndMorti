import s from "./episodes.module.css";
import Sersh from "./img/Sersh.svg";
import { useEffect, useState } from "react";

const Episodes = () => {
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        const result = await fetch(`https://rickandmortyapi.com/api/episode/?&name=${name}`);
        if (!result.ok) {
          return setError(true);
        }
        const resultsJson = await result.json();
        console.log(resultsJson);
        setData(resultsJson.results);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setIsLoading(false);
    };
    getData();
  }, [name]);

  if (isLoading) {
    return <h1>Is loading ...</h1>;
  }
  
  return (
    
    <>
     {" "}

      <div className={s.nav}>
        <div className={s.nav__el}>
          <div className={s.nav__serch}>
            <img src={Sersh} />
            <input
              type="text"
              placeholder="Filter by name or episode (ex. S01 or S01E02)"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={s.episodes__wrapper}>
        {isError ? (
          <div className={s.error}>
            <h1>Произошла ошибка</h1>
          </div>
        ) : (
          data.map((item, index) => (
            <div className={s.episodes__el} key={index}>
              <a href="#">
                <div className={s.episodes__el__subtitle}>
                  <span>{item.name}</span>
                  <span>{item.air_date}</span>
                  <span>{item.episode}</span>
                </div>
              </a>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Episodes;
