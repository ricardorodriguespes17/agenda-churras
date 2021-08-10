import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import ItemListParticipants from "../../components/ItemListParticipants";
import MonetaryIcon from "../../components/MonetaryIcon";
import ParticipantsIcon from "../../components/ParticipantsIcon";

import "./styles.css";

function Details() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="details-page">
      <Header />

      <div className="churras-details">
        <div className="header">
          <div>
            <h3>01/12</h3>
            <h1>Niver de Ricardo</h1>
          </div>

          <div>
            <div>
              <ParticipantsIcon />
              15
            </div>
            <div>
              <MonetaryIcon />
              R$ 280
            </div>
          </div>
        </div>

        <ul className="list-participants">
          <ItemListParticipants />
          <ItemListParticipants />
          <ItemListParticipants />
          <ItemListParticipants />
        </ul>
      </div>
    </div>
  );
}

export default Details;
