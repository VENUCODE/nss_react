import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./fontfamily.css";
import Hero from "./components/Carousel";
import Quote from "./components/Quote";
import Tablist from "./components/Tablist";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Quote />
      <Tablist />
    </div>
  );
}

export default App;
