import "./App.css";
import Slidebar from "./components/slide-bar/slidebar";
import Topbar from "./components/top-bar/topbar";
import Card from "./components/card/card";
import Context from "./components/context/context"; 

function App() {
  return (
    <div className="App">
      <Slidebar />
      <Topbar />
      <Context />
    </div>
  );
}

export default App;
