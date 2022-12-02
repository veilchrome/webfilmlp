import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import Anime from './components/Anime';
import './style/landingpage.css';

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of Intro Section */}

      {/* Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      {/* end of Trending Section */}

      {/* Superhero Section */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* end of Superhero Section */}

      {/* Anime Section */}
      <div className="anime">
        <Anime />
      </div>
    </div>
  );
}

export default App;
