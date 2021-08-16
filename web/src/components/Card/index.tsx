import MonetaryIcon from "../MonetaryIcon";
import ParticipantsIcon from "../ParticipantsIcon";
import "./styles.css";

interface CardProps {
  date: number;
  title: string;
  participants: number;
  money: number;
  onClick: () => void;
}

function Card({ date, title, participants, money, onClick }: CardProps) {
  return (
    <div className="card-component" onClick={onClick}>
      <h2>
        {Intl.DateTimeFormat("pt-br", {
          day: "2-digit",
          month: "2-digit",
        }).format(new Date(date))}
      </h2>
      <p>{title}</p>

      <div className="card-footer">
        <label>
          <ParticipantsIcon />
          {participants}
        </label>

        <label>
          <MonetaryIcon />
          {Intl.NumberFormat("pt-br", {
            currency: "BRL",
            style: "currency",
          }).format(money)}
        </label>
      </div>
    </div>
  );
}

export default Card;
