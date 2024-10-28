"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [dogUrl, setDogUrl] = useState(null);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);

  const getRandomDog = async (breed) => {
    const response = breed
      ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      : await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    const url = data.message;
    setDogUrl(url);
  };

  const getBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const breedObject = data.message;
    const breedArray = Object.keys(breedObject);
    setBreeds(breedArray);
  };

  useEffect(() => {
    getRandomDog();
    getBreeds();
  }, []);

  useEffect(() => {
    if (selectedBreed === "") return;
    getRandomDog(selectedBreed);
  }, [selectedBreed]);

  return (
    <div>
      <h1>Dog API Practice</h1>
      <p>Page</p>
      <select onChange={(event) => setSelectedBreed(event.target.value)}>
        {breeds.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <div>
        <img src={dogUrl} alt="Random dog" />
      </div>
    </div>
  );
}
