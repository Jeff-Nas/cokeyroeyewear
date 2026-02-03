import "./App.css";
import { Header } from "./Header";
import { Products } from "./Products";
import { ProductsProvider } from "./ProductsProvider";

function App() {
  return (
    <ProductsProvider>
      <div>
        <Header />
        <Products />
      </div>
    </ProductsProvider>
  );
}

export default App;
