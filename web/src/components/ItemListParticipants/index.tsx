import { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { ParticipantsType } from "../../types/ParticipantsType";
import formatMoney from "../../utils/formatMoney";

import "./styles.css";
import ModalEditParticipant from "../ModalEditParticipant";

interface ItemListParticipantsProps {
  item: ParticipantsType;
  onDelete: () => void;
}

function ItemListParticipants({ item, onDelete }: ItemListParticipantsProps) {
  const [selected, setSelected] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);

  return (
    <li className="item-list-participants">
      {modalEdit && (
        <ModalEditParticipant
          participant={item}
          onClose={() => setModalEdit(false)}
        />
      )}

      <div
        className={selected ? "select-button selected" : "select-button"}
        onClick={() => setSelected(!selected)}
      />
      <p className="participant-name">{item.name}</p>
      <p className="participant-value">{formatMoney(item.value)}</p>
      <div className="actions">
        <button onClick={() => setModalEdit(true)}>
          <BsPencil />
        </button>

        <button onClick={() => onDelete()}>
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  );
}

export default ItemListParticipants;
