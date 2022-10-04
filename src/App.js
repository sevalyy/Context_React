import "./App.css";
import Cointainer from "./components/Cointainer";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Cointainer />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
