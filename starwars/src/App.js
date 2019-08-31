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

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
    let i = 1;
    for (i; i < 10; i++){
      axios
      .get('https://swapi.co/api/people/'+[i])
      .then((response) => {
        console.log(response);
        setName(response.data.name)
        setMass(response.data.mass);
        setGender(response.data.gender);
        setBirthYear(response.data.birth_year);
      })
      .catch(err => console.log(err));
    }
    }, [setName, mass, setMass, gender, setGender, birthYear, setBirthYear]);

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
          <h1>{name}</h1>
          <h3>Mass: {mass}kg</h3>
          <h3>Gender: {gender}</h3>
          <h3>Born: {birthYear}</h3>
        </div>
        <div className="character3">
          <h1>{name}</h1>
          <h3>Mass: {mass}kg</h3>
          <h3>Gender: {gender}</h3>
          <h3>Born: {birthYear}</h3>
        </div>
        <div className="character4">
          <h1>{name}</h1>
          <h3>Mass: {mass}kg</h3>
          <h3>Gender: {gender}</h3>
          <h3>Born: {birthYear}</h3>
        </div>
        <div className="character5">
          <h1>{name}</h1>
          <h3>Mass: {mass}kg</h3>
          <h3>Gender: {gender}</h3>
          <h3>Born: {birthYear}</h3>
        </div>
        <div className="character6">
          <h1>{name}</h1>
          <h3>Mass: {mass}kg</h3>
          <h3>Gender: {gender}</h3>
          <h3>Born: {birthYear}</h3>
        </div>
        <div className="character7">
          <h1>{name}</h1>
          <h3>Mass: {mass}kg</h3>
          <h3>Gender: {gender}</h3>
          <h3>Born: {birthYear}</h3>
        </div>
        <div className="character8">
          <h1>{name}</h1>
          <h3>Mass: {mass}kg</h3>
          <h3>Gender: {gender}</h3>
          <h3>Born: {birthYear}</h3>
        </div>
        <div className="character9">
          <h1>{name}</h1>
          <h3>Mass: {mass}kg</h3>
          <h3>Gender: {gender}</h3>
          <h3>Born: {birthYear}</h3>
        </div>
        <div className="character10">
          <h1>{name}</h1>
          <h3>Mass: {mass}kg</h3>
          <h3>Gender: {gender}</h3>
          <h3>Born: {birthYear}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
