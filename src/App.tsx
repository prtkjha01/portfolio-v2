import "./App.css";
import Greeting from "@/Components/Greeting/Greeting";
import Navbar from "@/Components/Navbar/Navbar";
import About from "@/Components/About/About";
import WorkExp from "@/Components/WorkExp/WorkExp";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <div className="main-wrapper">
        <Navbar />
        <Greeting />
        <About />
        <Skills />
        <WorkExp />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
