import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

//#region importation pages
import { Login } from './views/Login'
import { HomePage } from './views/HomePage'
//#endregion

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
