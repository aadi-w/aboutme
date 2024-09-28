import Header from "./comps/Header"
import Nav from "./comps/Nav"
import { Routes, Route } from 'react-router-dom'
import Home from "./comps/Home"
import NotFound from "./comps/NotFound"
import Profile from "./comps/Profile"
import Projects from "./comps/Projects"


function App() {

  return (
    <>
      <Header></Header>
      <div className="nav-main-wrapper">
        <Nav></Nav>
        <main>
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="*" Component={NotFound}></Route>
            <Route path="/profile" Component={Profile}></Route>
            <Route path="/projects" Component={Projects}></Route>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
