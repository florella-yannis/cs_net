import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav.js';
import HeroBanner from './components/HeroBanner.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>hello</h1>
        <HeroBanner />
      </header>
    </div>
  );
}

export default App;
