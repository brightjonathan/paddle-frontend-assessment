import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header2 from './Component/Header2';
import About from './Pages/About'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact';
import GitHub from './Pages/GitHub'



const App = () => {

  return (
   <>
<Router>
    <Header2 />
      <Routes>
      <Route path='/comingsoon' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/github' element={<GitHub />} />
      <Route path='/contact' element={<Contact/>} />
      </Routes>
</Router>
</>
  )
}

export default App



