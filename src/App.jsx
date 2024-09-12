
import './App.css'
import Header from './components/common/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import CourseHome from './components/allcourses/CourseHome'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Contact from './components/contact/Contact'
import Footer from './components/common/footer/Footer'

function App() {
  

  return (
    <>
      <div>
      
      <Router>
      <Header/>
        <Routes>
         <Route path="/" element={<Home />}/>
        <Route path='/about'element={<About />}/>
        <Route path='/courses'element={<CourseHome />}/>
        <Route path='/contact'element={<Contact/>}/>
        </Routes>
      <Footer/>
      </Router>
       </div>
    </>
  )
}

export default App
