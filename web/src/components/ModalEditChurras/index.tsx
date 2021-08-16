import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { StoreType } from "../../types/StoreType";
import { editChurras } from "../../store/actions/churras.action";

import "./styles.css";

interface ModalEditChurrasProps {
  churrasId: number;
  onClose: () => void;
}

export default function ModalEditChurras({
  churrasId,
  onClose,
}: ModalEditChurrasProps) {
  const dispatch = useDispatch();

  const churras = useSelector((store: StoreType) =>
    store.churrasState.churras.find((item) => item.id === churrasId)
  );

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [money, setMoney] = useState("");
  const [observations, setObservations] = useState("");

  useEffect(() => {
    if (churras) {
      setTitle(churras.title);
      setDate(new Date(churras.date).toISOString().split("T")[0]);
      setMoney(String(churras.money));
      setObservations(churras.observations);
    }
  }, [churras]);

  function onSave(e: FormEvent) {
    e.preventDefault();

    if (isNaN(Number(money))) {
      alert("Valor inválido");
      return;
    }

    const validDate = new Date(date)
      ? new Date(date + " 00:00:00-0300").getTime()
      : new Date().getTime();

    if (churras) {
      dispatch(
        editChurras({
          ...churras,
          title,
          date: validDate,
          money: Number(money),
          observations,
        })
      );
    }

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
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="box-input">
          <label>Data</label>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <div className="box-input">
          <label>Valor sugerido (por participante)</label>
          <input
            value={money}
            onChange={(event) => setMoney(event.target.value)}
          />
        </div>

        <div className="box-input">
          <label>Observações</label>
          <textarea
            value={observations}
            onChange={(event) => setObservations(event.target.value)}
          />
        </div>

        <button className="button-save" type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
}
