
import s from './App.module.css'
import Header from './conpanents/header/header.jsx'
import Chasters from './conpanents/characters/charasters.jsx'
function App() {
  return (
    <div>
      <Header/>
      <div className={s.container}>
        <Chasters/>
      </div>
    </div>
  )
}

export default App
