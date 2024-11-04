import "imagehover.css/css/imagehover.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Suspense, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fontfamily.css";
import "./index.css";

import useUser from "./contexts/userContext";

import Loading from "./components/Loading";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { loading } = useUser();
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Header />
          <AnimatedRoutes />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
