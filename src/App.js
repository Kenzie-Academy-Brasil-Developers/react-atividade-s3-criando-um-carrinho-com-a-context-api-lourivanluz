import { CartProvider } from "./providers/cart";
import { CatalogueProvider } from "./providers/catalogue";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { Footer } from "./components/layout/Footer";
import { Routes } from "./Routers/router";

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <Header />
          <Main>
            <Routes />
          </Main>
          <Footer />
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
