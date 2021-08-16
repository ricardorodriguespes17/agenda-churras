import { ButtonHTMLAttributes } from "react";
import { BsPlusCircle } from "react-icons/bs";

import "./styles.css";

export default function ButtonAddParticipants({
  onClick,
}: ButtonHTMLAttributes<any>) {
  return (
    <button className="button-add-participants" onClick={onClick}>
      <BsPlusCircle className="icon" />
    </button>
  );
}
