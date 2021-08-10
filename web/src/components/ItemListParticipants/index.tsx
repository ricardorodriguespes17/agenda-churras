import { useState } from "react";
import "./styles.css";

function ItemListParticipants() {
  const [selected, setSelected] = useState(false);

  return (
    <li className="item-list-participants">
      <div
        className={selected ? "select-button selected" : "select-button"}
        onClick={() => setSelected(!selected)}
      />
      <p className="participant-name">Alice</p>
      <p>R$ 20,00</p>
    </li>
  );
}

export default ItemListParticipants;
