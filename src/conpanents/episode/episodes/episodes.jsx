import s from "./episodes.module.css";
import Sersh from "./img/Sersh.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Episodes = () => {
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        const result = await fetch(`https://rickandmortyapi.com/api/episode/?&name=${name}&page=${page}`);
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
  }, [name , page]);

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
          data.map((item) => (
            <Link to={`/episodeper/${item.id}`} className={s.episodes__el} key={item.id}>
                <div className={s.episodes__el__subtitle}>
                  <span>{item.name}</span>
                  <span>{item.air_date}</span>
                  <span>{item.episode}</span>
                </div>
            </Link>
          ))
        )}
      </div>
      <div className={s.button__wrapper}>
        <button className={s.button} onClick={() => setPage(page + 1)}>
          LOAD MORE
        </button>
      </div>
    </>
  );
};

export default Episodes;
