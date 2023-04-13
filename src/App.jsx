import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Status from "./components/Status";
import Service from "./components/Service";
import Project from "./components/Project";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./assets/style/style.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Status />
      <Service />
      <Project />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
