import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./fontfamily.css";
import "imagehover.css/css/imagehover.min.css";
import Hero from "./components/Carousel";
import Quote from "./components/Quote";
import Tablist from "./components/Tablist";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {" "}
      <Header /> <Hero /> <About /> <Quote /> <Tablist /> <Footer />
    </div>
  );
}

export default App;
