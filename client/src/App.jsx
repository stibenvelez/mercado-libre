import "./styles/styles.scss";
import Routers from "./routes";
import { ItemsProvider } from "./context/ItemsProvider";

function App() {
    return (
        <ItemsProvider>
            <Routers />
        </ItemsProvider>
    );
}

export default App;
