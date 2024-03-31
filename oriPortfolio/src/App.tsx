import './view/style.css'
import Header from './components/header'
import Proof from './components/proof'
import AboutMe from './components/about_me'
import Skills from './components/skills'
import Projects from './components/projects'
import { Footer } from './components/footer'

function App() {

  return (
    <>
    <Header/>
    <Proof/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App
