import Scrollbars from "react-custom-scrollbars-2";
import Layout from "./layout/Layout";
import "./styles/App.css";
// import Alert from "./components/Alert";

function App() {
  return (
    <>
      <Scrollbars style={{ width: "100%", height: "100vh" }}>
        <Layout />
        {/* <Alert message="error message" type="danger" /> */}
      </Scrollbars>
    </>
  );
}

export default App;
