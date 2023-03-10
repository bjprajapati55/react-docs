import { sculptureList } from "./Data";
import { useState } from "react";
export default function StateOne() {
  const [index, setIndex] = useState(0);
  function handleNextClick() {
    setIndex((prevIndex) => prevIndex + 1);
  }
  function handlePrevClick() {
    setIndex((prevIndex) => prevIndex - 1);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button
        disabled={sculptureList.length === index + 1}
        onClick={handleNextClick}
      >
        Next
      </button>
      <button disabled={index === 0} onClick={handlePrevClick}>
        Previous
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
