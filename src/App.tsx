import "./App.css";
import Greeting from "@/Components/Greeting/Greeting";
import Navbar from "@/Components/Navbar/Navbar";
import About from '@/Components/About/About'
import WorkExp from "@/Components/WorkExp/WorkExp";
function App() {
  return (
    <>
      <div className="main-wrapper">
        <Navbar/>
        <Greeting/>
        <About/>
        <WorkExp/>
      </div>
    </>
  );
}

export default App;
