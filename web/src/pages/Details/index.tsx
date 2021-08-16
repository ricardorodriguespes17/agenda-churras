import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import ButtonAddParticipants from "../../components/ButtonAddParticipants";
import Header from "../../components/Header";
import ItemListParticipants from "../../components/ItemListParticipants";
import ModalEditChurras from "../../components/ModalEditChurras";
import MonetaryIcon from "../../components/MonetaryIcon";
import ParticipantsIcon from "../../components/ParticipantsIcon";
import { deleteChurras } from "../../store/actions/churras.action";
import {
  addParticipant,
  deleteParticipant,
} from "../../store/actions/participants.action";
import { StoreType } from "../../types/StoreType";
import formatDate from "../../utils/formatDate";
import formatMoney from "../../utils/formatMoney";
import { BiLeftArrow } from "react-icons/bi";

import "./styles.css";

function Details() {
  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  const dispatch = useDispatch();

  const churras = useSelector((store: StoreType) =>
    store.churrasState.churras.find((item) => item.id === Number(id))
  );

  const participants = useSelector((store: StoreType) =>
    store.participantsState.participants.filter(
      (item) => item.churrasId === churras?.id
    )
  );

  const [onModal, setOnModal] = useState<{ id: number }>();

  function onAddParticipant() {
    if (churras) {
      const newParticipant = {
        id: Math.random(),
        name: "Novo participante",
        value: churras.money,
        churrasId: churras.id,
      };

      dispatch(addParticipant(newParticipant));
    }
  }

  function removeParticipant(participantId: number) {
    if (churras) {
      dispatch(deleteParticipant(participantId));
    }
  }

  function onDelete() {
    if (churras) {
      participants.map((item) => {
        dispatch(deleteParticipant(item.id));
        return item;
      });
      dispatch(deleteChurras(churras.id));
    }
  }

  return (
    <div className="details-page">
      {onModal && (
        <ModalEditChurras
          churrasId={onModal.id}
          onClose={() => setOnModal(undefined)}
        />
      )}

      <Header />

      {churras ? (
        <div className="churras-details">
          <div className="actions-header">
            <button onClick={() => history.push("/")}>
              <BiLeftArrow />
              <label>Voltar</label>
            </button>
            <button onClick={() => setOnModal({ id: churras.id })}>
              <BsPencilSquare />
              <label>Editar</label>
            </button>
            <button className="button-delete" onClick={() => onDelete()}>
              <AiOutlineDelete />
              <label>Deletar</label>
            </button>
          </div>

          <div className="header">
            <div>
              <h3>{formatDate(churras.date)}</h3>
              <h1>{churras.title}</h1>
              <p className="header-observations">{churras.observations}</p>
            </div>

            <div>
              <div>
                <ParticipantsIcon />
                {participants.length}
              </div>
              <div>
                <MonetaryIcon />
                {formatMoney(participants.reduce((p, c) => p + c.value, 0))}
              </div>
            </div>
          </div>

          <h3>Participantes (valor sugerido: {formatMoney(churras.money)})</h3>

          <ul className="list-participants">
            {participants.map((item) => (
              <ItemListParticipants
                item={item}
                onDelete={() => removeParticipant(item.id)}
              />
            ))}
            <ButtonAddParticipants onClick={() => onAddParticipant()} />
          </ul>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}

export default Details;
