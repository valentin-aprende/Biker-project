import { ProductProvider } from './context/product-context.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import ProductCustomizer from './Customizer.jsx';
import Home from './components/home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ProductProvider>
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/producto/:id"
          element={<ProductCustomizer />}
        />
      </Routes>

      <Footer />
    </Router>
    </ProductProvider>
  );
}

export default App;