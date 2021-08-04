import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import CodeCell from "./components/code-cell";
import {Provider} from "react-redux";
import {store} from "./state";
// import TextEditor from "./components/text-editor";
import ReactDom from "react-dom";
import CellList from "./components/cell-list";


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
    
  );
};

ReactDom.render(<App />, document.getElementById("root"));
