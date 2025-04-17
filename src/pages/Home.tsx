import Hero from '../components/Hero';
import About from '../components/About';
import WorkStyle from '../components/WorkStyle';
import Community from '../components/Community';
import JoinUs from '../components/JoinUs';
function Home() {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <WorkStyle />
      <Community />
      <JoinUs />
    </div>
  );
}
export default Home;