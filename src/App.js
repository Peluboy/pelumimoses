import Scrollbars from "react-custom-scrollbars-2";
import Layout from "./layout/Layout";
import "./styles/App.css";

function App() {
  return (
    <>
      <Scrollbars style={{ width: "100%", height: "100vh" }}>
        <Layout />
      </Scrollbars>
    </>
  );
}

export default App;
