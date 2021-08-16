import ChurrasIcon from "../ChurrasIcon";
import "./styles.css";

interface AddCardProps {
  onClick: () => void;
}

function AddCard({ onClick }: AddCardProps) {
  return (
    <div className="add-card-component" onClick={() => onClick()}>
      <div className="elipse">
        <ChurrasIcon />
      </div>

      <p>Adicionar Churras</p>
    </div>
  );
}

export default AddCard;
