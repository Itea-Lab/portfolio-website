import Hero from '../components/Hero';
import About from '../components/About';
import WorkStyle from '../components/WorkStyle';
import Community from '../components/Community';
import JoinUs from '../components/JoinUs';
import News from '../components/News';
function Home() {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <WorkStyle />
      <Community />
      <JoinUs />
      <News />
    </div>
  );
}
export default Home;