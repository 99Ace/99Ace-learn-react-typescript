import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar
        name="Ace"
        messageCount={10}
        isLoggedIn= {false}
        />
    </div>
  );
}

export default App;
