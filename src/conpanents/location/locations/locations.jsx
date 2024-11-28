import s from "./locations.module.css";
import Sersh from "./img/Sersh.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Episodes = () => {
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const result = await axios.get(
          `https://rickandmortyapi.com/api/location/`,
          {
            params: {
              name: query,
              page: page,
            },
          }
        );

        setData(result.data.results || []);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setQuery(name);
    }
  };

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
              placeholder="Filter by name..."
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
      <div className={s.location__wrapper}>
        {isError ? (
          <div className={s.error}>
            <h1>Произошла ошибка</h1>
          </div>
        ) : (
          data.map((item ) => (
            <Link to={`/locationper/${item.id}`} className={s.locatoin__el} key={item.id}>
              <div className={s.location__el__subtitle}>
                <span>{item.name}</span>
                <span>{item.type}</span>
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
