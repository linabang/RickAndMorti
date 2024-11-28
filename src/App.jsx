import s from "./App.module.css";
import Header from "./conpanents/header/header.jsx";
import Chasters from "./conpanents/characters/charasters.jsx";
import { Route, Routes } from "react-router-dom";
import Episode from "./conpanents/episode/episode.jsx";
import Locations from "./conpanents/location/location.jsx";
import Charaster from "./conpanents/person/person.jsx";
import Locationper from "./conpanents/location/locationper/locationper.jsx"
import Episodeper from "./conpanents/episode/episodeper/episodeper.jsx";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path={"/"}
          element={
            <div className={s.container}>
              <Chasters />
            </div>
          }
        />
        <Route
          path={"/episode"}
          element={
            <div className={s.container}>
              <Episode />
            </div>
          }
        />
        <Route
          path={"/locations"}
          element={
            <div className={s.container}>
              <Locations />
            </div>
          }
        />
        <Route
          path={"/character/:id"}
          element={
            <div className={s.container}>
              <Charaster />
            </div>
          }
        />
        <Route
          path={"/locationper/:id"}
          element={
            <div className={s.container}>
              <Locationper />
            </div>
          }
        />
        <Route
          path={"/episodeper/:id"}
          element={
            <div className={s.container}>
              <Episodeper />
            </div>
          }
        />
        <Route
          path={"*"}
          element={
            <div className={s.error}>
              <h1>404 error</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
