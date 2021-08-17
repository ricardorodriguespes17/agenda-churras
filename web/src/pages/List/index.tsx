import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AddCard from "../../components/AddCard";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { addChurras } from "../../store/actions/churras.action";
import { StoreType } from "../../types/StoreType";
import idGenerator from "../../utils/idGenerator";

import "./styles.css";

function List() {
  const history = useHistory();

  const dispatch = useDispatch();

  const churras = useSelector((store: StoreType) => store.churrasState.churras);

  const participants = useSelector(
    (store: StoreType) => store.participantsState.participants
  );

  function newChurras() {
    const id = idGenerator(churras);

    dispatch(
      addChurras({
        id,
        title: "Novo churras",
        date: new Date().getTime(),
        money: 50,
        numberParticipants: 0,
        observations: "",
      })
    );

    history.push(`/churras/${id}`);
  }

  return (
    <div className="list-page">
      <Header />

      <div className="churras-list">
        {churras.map((item) => (
          <Card
            date={item.date}
            money={participants
              .filter((participant) => participant.churrasId === item.id)
              .reduce((p, c) => p + c.value, 0)}
            participants={
              participants.filter(
                (participant) => participant.churrasId === item.id
              ).length
            }
            title={item.title}
            onClick={() => history.push(`/churras/${item.id}`)}
          />
        ))}
        <AddCard onClick={() => newChurras()} />
      </div>
    </div>
  );
}

export default List;
