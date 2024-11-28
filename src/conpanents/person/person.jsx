import s from "./person.module.css";
import { Link, useParams } from "react-router-dom";
import Linkimg from "./img/Group 4.svg";
import Arrow from "./img/10728680.png";
import { useState, useEffect } from "react";

const Person = () => {
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const param = useParams("");
  const [episode, setEpisode] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        const result = await fetch(
          `https://rickandmortyapi.com/api/character/${param.id}`
        );
        if (!result.ok) {
          return setError(true);
        }
        const resultsJson = await result.json();
        console.log(resultsJson);
        setData(resultsJson);

        const episodeLink = resultsJson.episode;
        const episodeRes = await Promise.all(
          episodeLink.map((url) => fetch(url).then((res) => res.json()))
        );
        setEpisode(episodeRes);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setIsLoading(false);
    };
    getData();
  }, [param.id]);

  if (isLoading) {
    return <h1>Is loading ...</h1>;
  }

  return (
    <>
      <Link to={"/"} className={s.link__img}>
        <img src={Linkimg} alt="выйти" />
      </Link>

      {isError ? (
        <div className={s.error}>
          <h1>Произошла ошибка</h1>
        </div>
      ) : (
        <div className={s.person__data_wraapper}>
          <div className={s.person__data}>
            <img
              className={s.person__data__img}
              src={data?.image}
              alt={data?.name}
            />
            <h1 className={s.person__data__title}>{data?.name}</h1>
          </div>
          <div className={s.person__col}>
            <div className={s.person__informations}>
              <div className={s.person__Informations__title}>
                <span>Informations</span>
              </div>
              <div className={s.person__informations__inner}>
                <div className={s.information__el}>
                  <span>Gender</span>
                  <span>{data?.gender}</span>
                </div>
                <div className={s.information__el}>
                  <span>Status</span>
                  <span>{data?.status}</span>
                </div>
                <div className={s.information__el}>
                  <span>Specie</span>
                  <span>{data?.species}</span>
                </div>
                <div className={s.information__el}>
                  <span>Origin</span>
                  <span>{data?.origin?.name}</span>
                </div>
                <div className={s.information__el}>
                  <span>Type</span>
                  <span>{data?.type || "unknow"}</span>
                </div>
                <div id={s.block} className={s.information__el}>
                  <div className={s.information__el__text}>
                    <span>Location</span>
                    <span>{data?.location?.name} </span>
                  </div>
                  <a href="#">
                    <img className={s.imege} src={Arrow} />
                  </a>
                </div>
              </div>
            </div>
            <div className={s.person__episodes}>
              <div className={s.person__episodes__title}>
                <span>Episodes</span>
              </div>
              <div className={s.person__episodes__inner}>
               <Link>{episode.map((ep) => (
                  <div id={s.block} className={s.epesodes__el}key={ep.id}>
                    <div className={s.episodes__el__text} >
                      <span>{ep.name}</span>
                      <span>{ep.air_date}</span>
                      <span>{ep.episode}</span>
                    </div>
                    <a href="#">
                      <img className={s.imege} src={Arrow} />
                    </a>
                  </div>
                ))}</Link> 
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Person;
