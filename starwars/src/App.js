import React, {useState, useEffect} from 'react';
import axios from "axios"
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [name, setName] = useState("");
  const [mass, setMass] = useState("");
  const [gender, setGender] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const [name2, setName2] = useState("");
  const [mass2, setMass2] = useState("");
  const [gender2, setGender2] = useState("");
  const [birthYear2, setBirthYear2] = useState("");

  const [name3, setName3] = useState("");
  const [mass3, setMass3] = useState("");
  const [gender3, setGender3] = useState("");
  const [birthYear3, setBirthYear3] = useState("");

  const [name4, setName4] = useState("");
  const [mass4, setMass4] = useState("");
  const [gender4, setGender4] = useState("");
  const [birthYear4, setBirthYear4] = useState("");

  const [name5, setName5] = useState("");
  const [mass5, setMass5] = useState("");
  const [gender5, setGender5] = useState("");
  const [birthYear5, setBirthYear5] = useState("");

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
      axios
      .get('https://swapi.co/api/people/1')
      .then((response) => {
        console.log(response);
        setName(response.data.name)
        setMass(response.data.mass);
        setGender(response.data.gender);
        setBirthYear(response.data.birth_year);
      })
      .catch(err => console.log(err));
    }, [setName, mass, setMass, gender, setGender, birthYear, setBirthYear]);

    useEffect(() => {
      axios
      .get('https://swapi.co/api/people/2')
      .then((response) => {
        console.log(response);
        setName2(response.data.name)
        setMass2(response.data.mass);
        setGender2(response.data.gender);
        setBirthYear2(response.data.birth_year);
      })
      .catch(err => console.log(err));
    }, [setName2, mass2, setMass2, gender2, setGender2, birthYear2, setBirthYear2]);
    
    useEffect(() => {
      axios
      .get('https://swapi.co/api/people/3')
      .then((response) => {
        console.log(response);
        setName3(response.data.name)
        setMass3(response.data.mass);
        setGender3(response.data.gender);
        setBirthYear3(response.data.birth_year);
      })
      .catch(err => console.log(err));
    }, [setName3, mass3, setMass3, gender3, setGender3, birthYear3, setBirthYear3]);

    useEffect(() => {
      axios
      .get('https://swapi.co/api/people/4')
      .then((response) => {
        console.log(response);
        setName4(response.data.name)
        setMass4(response.data.mass);
        setGender4(response.data.gender);
        setBirthYear4(response.data.birth_year);
      })
      .catch(err => console.log(err));
    }, [setName4, mass4, setMass4, gender4, setGender4, birthYear4, setBirthYear4]);

    useEffect(() => {
      axios
      .get('https://swapi.co/api/people/5')
      .then((response) => {
        console.log(response);
        setName5(response.data.name)
        setMass5(response.data.mass);
        setGender5(response.data.gender);
        setBirthYear5(response.data.birth_year);
      })
      .catch(err => console.log(err));
    }, [setName5, mass5, setMass5, gender5, setGender5, birthYear5, setBirthYear5]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="characters">
        <div className="character1">
          <h1>{name}</h1>
          <h3>Mass: {mass}kg</h3>
          <h3>Gender: {gender}</h3>
          <h3>Born: {birthYear}</h3>
        </div>
        <div className="character2">
          <h1>{name2}</h1>
          <h3>Mass: {mass2}kg</h3>
          <h3>Gender: {gender2}</h3>
          <h3>Born: {birthYear2}</h3>
        </div>
        <div className="character3">
          <h1>{name3}</h1>
          <h3>Mass: {mass3}kg</h3>
          <h3>Gender: {gender3}</h3>
          <h3>Born: {birthYear3}</h3>
        </div>
        <div className="character4">
          <h1>{name4}</h1>
          <h3>Mass: {mass4}kg</h3>
          <h3>Gender: {gender4}</h3>
          <h3>Born: {birthYear4}</h3>
        </div>
        <div className="character5">
          <h1>{name5}</h1>
          <h3>Mass: {mass5}kg</h3>
          <h3>Gender: {gender5}</h3>
          <h3>Born: {birthYear5}</h3>
        </div>
      </div>
      </div>
  );
}

export default App;
