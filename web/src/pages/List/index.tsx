import { useHistory } from "react-router-dom";
import AddCard from "../../components/AddCard";
import Card from "../../components/Card";
import Header from "../../components/Header";

import "./styles.css";

function List() {
  const history = useHistory();

  return (
    <div className="list-page">
      <Header />

      <div className="churras-list">
        <Card
          date="2021-08-09"
          money={200}
          participants={4}
          title="Níver de Ricardo"
          onClick={() => history.push("/churras/1")}
        />
        <Card
          date="2021-08-09"
          money={230}
          participants={10}
          title="Níver de Ricardo"
          onClick={() => history.push("/churras/2")}
        />
        <Card
          date="2021-08-28"
          money={200}
          participants={4}
          title="Níver de Ricardo"
          onClick={() => history.push("/churras/3")}
        />
        <AddCard />
      </div>
    </div>
  );
}

export default List;
