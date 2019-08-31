import React, {useState, useEffect} from 'react';
import axios from "axios"
import styled from 'styled-components';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const CharacterDiv = styled.div`
    display: flex;
    justify-content: space-around;
    color: white;
    background: rgba(0, 0, 0, 0.4);
  `;

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

  const [name6, setName6] = useState("");
  const [mass6, setMass6] = useState("");
  const [gender6, setGender6] = useState("");
  const [birthYear6, setBirthYear6] = useState("");

  const [name7, setName7] = useState("");
  const [mass7, setMass7] = useState("");
  const [gender7, setGender7] = useState("");
  const [birthYear7, setBirthYear7] = useState("");

  const [name8, setName8] = useState("");
  const [mass8, setMass8] = useState("");
  const [gender8, setGender8] = useState("");
  const [birthYear8, setBirthYear8] = useState("");

  const [name9, setName9] = useState("");
  const [mass9, setMass9] = useState("");
  const [gender9, setGender9] = useState("");
  const [birthYear9, setBirthYear9] = useState("");

  const [name10, setName10] = useState("");
  const [mass10, setMass10] = useState("");
  const [gender10, setGender10] = useState("");
  const [birthYear10, setBirthYear10] = useState("");

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

    useEffect(() => {
      axios
      .get('https://swapi.co/api/people/6')
      .then((response) => {
        console.log(response);
        setName6(response.data.name)
        setMass6(response.data.mass);
        setGender6(response.data.gender);
        setBirthYear6(response.data.birth_year);
      })
      .catch(err => console.log(err));
    }, [setName6, mass6, setMass6, gender6, setGender6, birthYear6, setBirthYear6]);

    useEffect(() => {
      axios
      .get('https://swapi.co/api/people/7')
      .then((response) => {
        console.log(response);
        setName7(response.data.name)
        setMass7(response.data.mass);
        setGender7(response.data.gender);
        setBirthYear7(response.data.birth_year);
      })
      .catch(err => console.log(err));
    }, [setName7, mass7, setMass7, gender7, setGender7, birthYear7, setBirthYear7]);

    useEffect(() => {
      axios
      .get('https://swapi.co/api/people/8')
      .then((response) => {
        console.log(response);
        setName8(response.data.name)
        setMass8(response.data.mass);
        setGender8(response.data.gender);
        setBirthYear8(response.data.birth_year);
      })
      .catch(err => console.log(err));
    }, [setName8, mass8, setMass8, gender8, setGender8, birthYear8, setBirthYear8]);

    useEffect(() => {
      axios
      .get('https://swapi.co/api/people/9')
      .then((response) => {
        console.log(response);
        setName9(response.data.name)
        setMass9(response.data.mass);
        setGender9(response.data.gender);
        setBirthYear9(response.data.birth_year);
      })
      .catch(err => console.log(err));
    }, [setName9, mass9, setMass9, gender9, setGender9, birthYear9, setBirthYear9]);

    useEffect(() => {
      axios
      .get('https://swapi.co/api/people/10')
      .then((response) => {
        console.log(response);
        setName10(response.data.name)
        setMass10(response.data.mass);
        setGender10(response.data.gender);
        setBirthYear10(response.data.birth_year);
      })
      .catch(err => console.log(err));
    }, [setName10, mass10, setMass10, gender10, setGender10, birthYear10, setBirthYear10]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterDiv>
        <div>
          <h1>{name}</h1>
          <h3>Mass: {mass}kg</h3>
          <h3>Gender: {gender}</h3>
          <h3>Born: {birthYear}</h3>
        </div>
        <div>
          <h1>{name2}</h1>
          <h3>Mass: {mass2}kg</h3>
          <h3>Gender: {gender2}</h3>
          <h3>Born: {birthYear2}</h3>
        </div>
        <div>
          <h1>{name3}</h1>
          <h3>Mass: {mass3}kg</h3>
          <h3>Gender: {gender3}</h3>
          <h3>Born: {birthYear3}</h3>
        </div>
        <div>
          <h1>{name4}</h1>
          <h3>Mass: {mass4}kg</h3>
          <h3>Gender: {gender4}</h3>
          <h3>Born: {birthYear4}</h3>
        </div>
        <div>
          <h1>{name5}</h1>
          <h3>Mass: {mass5}kg</h3>
          <h3>Gender: {gender5}</h3>
          <h3>Born: {birthYear5}</h3>
        </div>
      </CharacterDiv>
      <CharacterDiv>
        <div>
          <h1>{name6}</h1>
          <h3>Mass: {mass6}kg</h3>
          <h3>Gender: {gender6}</h3>
          <h3>Born: {birthYear6}</h3>
        </div>
        <div>
          <h1>{name7}</h1>
          <h3>Mass: {mass7}kg</h3>
          <h3>Gender: {gender7}</h3>
          <h3>Born: {birthYear7}</h3>
        </div>
        <div>
          <h1>{name8}</h1>
          <h3>Mass: {mass8}kg</h3>
          <h3>Gender: {gender8}</h3>
          <h3>Born: {birthYear8}</h3>
        </div>
        <div>
          <h1>{name9}</h1>
          <h3>Mass: {mass9}kg</h3>
          <h3>Gender: {gender9}</h3>
          <h3>Born: {birthYear9}</h3>
        </div>
        <div>
          <h1>{name10}</h1>
          <h3>Mass: {mass10}kg</h3>
          <h3>Gender: {gender10}</h3>
          <h3>Born: {birthYear10}</h3>
        </div>
      </CharacterDiv>
    </div>
  );
}

export default App;
