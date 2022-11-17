import "./App.css";
import Slidebar from "./components/slide-bar/slidebar";
import Topbar from "./components/top-bar/topbar";
import Card from "./components/card/card"; 

function App() {
  return (
    <div className="App">
      <Slidebar />
      <Topbar />
      <Card />
    </div>
  );
}

export default App;
