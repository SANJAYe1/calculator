import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Calculator from "./components/Calculator";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Calculator></Calculator>
    </>
  );
}

export default App;
