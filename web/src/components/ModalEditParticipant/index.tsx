import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { ParticipantsType } from "../../types/ParticipantsType";
import { editParticipant } from "../../store/actions/participants.action";

import "./styles.css";

interface ModalEditParticipantProps {
  participant: ParticipantsType;
  onClose: () => void;
}

export default function ModalEditParticipant({
  participant,
  onClose,
}: ModalEditParticipantProps) {
  const dispatch = useDispatch();

  const [name, setName] = useState(participant.name);
  const [value, setValue] = useState(String(participant.value));

  function onSave(e: FormEvent) {
    e.preventDefault();

    if (isNaN(Number(value))) {
      alert("Valor inválido");
      return;
    }

    dispatch(editParticipant({ ...participant, name, value: Number(value) }));

    onClose();
  }

  return (
    <div className="modal-edit-churras">
      <form className="modal-form" onSubmit={onSave}>
        <div className="form-header">
          <h2>Editar churras</h2>

          <button type="button" className="button-close" onClick={onClose}>
            <IoMdClose />
          </button>
        </div>

        <div className="box-input">
          <label>Título</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="box-input">
          <label>Valor</label>
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>

        <button className="button-save" type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
}
