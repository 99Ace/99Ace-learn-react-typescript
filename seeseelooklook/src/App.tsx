import './App.css';
import Navbar from './components/Navbar';
import Person from './components/Profile';

function App() {
  return (
    <div className="App">
      <Navbar
        name="Ace"
        messageCount={10}
        isLoggedIn={false}
      />

      <Person student={{
        fname: "John",
        lname: "Tan",
        age: 30,
        gender: "male"
      }}

      />
    </div>
  );
}

export default App;
