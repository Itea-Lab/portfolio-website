import Hero from '../components/Hero';
import About from '../components/About';
import WorkStyle from '../components/WorkStyle';
import Community from '../components/Community';
import JoinUs from '../components/JoinUs';
import News from '../components/News';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Community />
      <WorkStyle />
      <JoinUs />
      <News />
    </div>
  );
}
export default Home;