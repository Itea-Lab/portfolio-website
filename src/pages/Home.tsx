import Hero from '../components/Hero';
import Story from '../components/Story';
import Community from '../components/Community';
function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Story />
      <Community />
    </div>
  );
}
export default Home;