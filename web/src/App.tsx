import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";

import "./styles/global.css";
import "./styles/colors.css";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
