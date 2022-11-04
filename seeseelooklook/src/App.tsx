import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Input } from './components/Input';

// import components
import Navbar from './components/Navbar';
import { OptionalType } from './components/OptionalType';
import { Oscar } from './components/Oscar';
import Person from './components/Profile';
import PersonList from './components/ProfileList';
import Status from './components/Status';

function App() {
  const data = [
    {
      fname: "John",
      lname: "Tan",
      age: 30,
      gender: "male"
    },
    {
      fname: "Mary",
      lname: "Chen",
      age: 20,
      gender: "female"
    },
    {
      fname: "Kelly",
      lname: "Tan",
      age: 19,
      gender: "female"
    }
  ]
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
      <hr />
      <PersonList students={data} />
      <hr />
      {/* Status TSX */}
      <Status status="error" />
      <hr />

      {/* Header tsx */}
      <Heading> This is header children </Heading>


      {/* Pass Header into Oscar tsx */}
      <Oscar>
        <Heading>Oscar goes to Leonardo Concert</Heading>
      </Oscar>

      <hr />

      {/* Optional Type  */}
      <OptionalType
        name="Ken"
        isLoggedIn={false}
      />
      <hr />

      {/* Buttons : Click */}
      <Button
        handleClick1={() => console.log("nothing")}
        handleClick2={(e) => console.log(e)}
        handleClick3={(e, id) => console.log(e, id)}
      />
      <hr />

      {/* Input : Onchange */}
      <Input value='' handleChange={e => console.log(e)} />
      <hr />

      {/* Style */}
      <Container styles={{ backgroundColor: 'turquoise', padding: '1rem' }} />

    </div>


  );
}

export default App;
