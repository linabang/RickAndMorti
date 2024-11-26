import { useEffect, useState } from "react";
import s from "./charastersperson.module.css";
import Sersh from "./img/Sersh.svg";
import FilterBySelects from "../charasternav/filtrBySelects.jsx";
import { Link } from "react-router-dom";
function Chaster() {
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        const result = await fetch(
          `https://rickandmortyapi.com/api/character/?gender=${gender}&status=${status}&name=${name}&species=${species}&page=${page}`
        );
        console.log(result);
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
  }, [name, gender, species, status, page]);

  const handleFilterChange = (value, setter) => {
    setter(value);
    setPage(1);
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
            />
          </div>
        </div>
        <FilterBySelects
          onHandleChenge={(value) => handleFilterChange(value, setSpecies)}
          options={[
            { value: "", label: "Species" },
            { value: "alien", label: "Alien" },
            { value: "human", label: "Human" },
            { value: "humanoid", label: "Humanoid" },
            { value: "unknown", label: "Unknown" },
          ]}
        />
        <FilterBySelects
          onHandleChenge={(value) => handleFilterChange(value, setGender)}
          options={[
            { value: "", label: "Gender" },
            { value: "female", label: "Female" },
            { value: "male", label: "Male" },
            { value: "genderles", label: "Genderles" },
            { value: "unknown", label: "Unknown" },
          ]}
        />
        <FilterBySelects
          onHandleChenge={(value) => handleFilterChange(value, setStatus)}
          options={[
            { value: "", label: "Status" },
            { value: "alive", label: "Alive" },
            { value: "dead", label: "dead" },
            { value: "unknown", label: "Unknown" },
          ]}
        />
      </div>
      <div className={s.charaster}>
        {isError ? (
          <div className={s.error}>
            <h1>Произошла ошибка</h1>
          </div>
        ) : (
          data.map((item, index) => (
              <Link to={`/character/${item.id}`}className={s.character__el} key={index}>
                <img src={item.image} alt={item.name} />
                <div className={s.character__subtitle}>
                  <h2>{item.name}</h2>
                  <h6>{item.species}</h6>
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
}

export default Chaster;
