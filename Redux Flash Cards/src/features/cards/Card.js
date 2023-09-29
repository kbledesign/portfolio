import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCardById } from "./cardSlice";

export default function Card({ id }) {
  const { front, back } = useSelector(selectCardById(id));
  const [flipped, setFlipped] = useState(false);

  const toggleFlipped = () => {
    setFlipped(!flipped)
  }

  return (
    <li>
      <button className={`card ${flipped ? "flipped" : ""}`} onClick={toggleFlipped}>
        {flipped ? back : front}
      </button>
    </li>
  );
}


