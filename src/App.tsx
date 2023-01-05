import { GlobalStyle } from "./styles/global";
import { RoutesMain } from "./routes";
import { UserContextProvider } from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyle/>

      <UserContextProvider >
        <RoutesMain />
      </UserContextProvider>

      <ToastContainer />
    </>
  );
}

export default App;
