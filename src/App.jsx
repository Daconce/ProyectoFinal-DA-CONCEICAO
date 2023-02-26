import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ResponsiveAppBar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <ItemListContainer greeting={"Hola, Bienvenido"} />
    </div>
  );
}

export default App;
