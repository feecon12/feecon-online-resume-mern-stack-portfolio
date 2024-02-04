import './App.css'
import HomePage from './pages/HomePage'
//import Layout from './components/Layout'
import Navbar from './components/Navbar'
import About from './pages/About'
import Project from './pages/Project'
// import Blogs from './pages/Blogs'
// import Articles from './pages/Articles'
import Footer from './components/Footer'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <hr/>
      <About />
      <hr />
      <Project />
      <hr />
      {/* <Blogs />
      <hr />
      <Articles />
      <hr /> */}
      <Contact/>
      <Footer/>    
    </>
  )
}

export default App
