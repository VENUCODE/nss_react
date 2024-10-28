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
import FileUpload from "./components/FileUpload";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Quote />
        <Tablist />
        <FileUpload />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
