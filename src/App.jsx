import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/header.jsx";
import { ItemListContainer } from "./components/itemlistcontainer/itemlistcontainer.jsx";
import { ItemDetailContainer } from "./components/itemdetailcontainer/itemdetailcontainer.jsx";
import { Footer } from "./components/footer/footer.jsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<h1>Carrito</h1>} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          {/* opcional: filtro por categorias */}
          <Route path="/category/:category" element={<ItemListContainer />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;