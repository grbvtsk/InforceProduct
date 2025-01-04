import Layout from "./components/Layout/Layout.tsx";
import Products from "./components/Shop/Products.tsx";
import AddProduct from "./components/AddProduct/AddProduct.tsx";

function App() {

  return (
      <Layout>
          <AddProduct/>
          <Products/>
      </Layout>
  )
}

export default App
