"use client";

import { useState } from "react";
import DogList from "./Doglist";
import DogForm from "./dogform";
import dogdata from "./dogdata.json";

export default function Page() {
  const [dogs, setDogs] = useState(dogdata);

  const handleAddDog = (dog) => {
    setDogs([...dogs, dog]);
  };

  const handleDeleteDog = (id) => {
    setDogs(dogs.filter((dog) => dog.id !== id));
  };

  return (
    <main>
      <DogList dogs={dogs} onDeleteDog={handleDeleteDog} />
      <DogForm onAddDog={handleAddDog} />
    </main>
  );
}
