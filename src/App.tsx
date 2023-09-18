import "./App.css";
import Greeting from "./Components/Greeting/Greeting";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      <div className="main-wrapper">
        <Navbar/>
        <Greeting/>
      </div>
    </>
  );
}

export default App;
