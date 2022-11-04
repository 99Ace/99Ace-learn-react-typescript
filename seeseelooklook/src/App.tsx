import './App.css';

// import components
import Person from './components/Profile';

function App() {

  return (
    <div className="App">
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
