"use client";
import { useState } from "react";

export default function FormPractice() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);

  const HandleNameChange = (event) => {
    let name = event.target.value;
    name = name.replace(/[^a-zA-Z]/g, "");
    if (name.length > 12) {
      name = name.slice(0, 12);
    }
    setName(name);
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    let dog = {
      name: name,
      breed: breed,
      age: age,
    };
    console.log(dog);
    setName("");
    setBreed("");
    setAge(0);
    alert("submited");
  };

  return (
    <div className="m-4 bg bg-white font-black text-black">
      <h1 className="text-2xl font-semibold">Dog Form</h1>
      <form onSubmit={HandleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-black"
            value={name}
            onChange={HandleNameChange}
            required
          />
          {name.length !== 12 && <p>Name must be 12 characters long</p>}
        </div>
        <div>
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            id="breed"
            name="breed"
            className="border border-black"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            className="border border-black"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            required
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
