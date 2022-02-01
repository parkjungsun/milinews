import { Route } from "react-router-dom";

import NewsContainer from "./components/News/NewsContainer";
import "./css/App.css";

function App() {
  return (
    <>
      <Route path="/news" component={NewsContainer} exact={true} />
      <Route path="/" component={NewsContainer} exact={true} />
    </>
  );
}

export default App;
