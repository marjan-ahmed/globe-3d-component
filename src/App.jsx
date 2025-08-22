import './App.css';
import WorldCitiesGlobe from './components/WorldCitiesGlobe';

function App() {
  return (
    <div className="app-container">
      <div className="left-content">
        <h1>Hello, welcome!</h1>
        <p>This is your left side content.</p>
      </div>

      <div className="right-globe">
        <WorldCitiesGlobe />
      </div>
    </div>

  );
}

export default App;
