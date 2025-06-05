
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Mission from "./pages/Mission";
import WhyUs from "./pages/WhyUs";
import Printing from "./pages/Printing";
import SocialMedia from "./pages/SocialMedia";
import Projects from "./components/Projects";
import Works from "./pages/Works";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <>

      <Navbar />
      <Home />
      <About />
      <Mission />
      <WhyUs />
      <Services />
      <Clients />
      <Works />
      <Projects />
      <SocialMedia />
      <Printing />
      <Contact />
    </>
  );
}

export default App;

