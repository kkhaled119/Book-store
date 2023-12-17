import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/footer/Footer";
import {BrowserRouter,Routes,Route}from "react-router-dom"
import HomePage from "./pages/home/HomePage";
import About from './pages/about/About'
import Authors from './pages/authors/Authors'
import Book from './pages/book/Book'
import Cart from './pages/cart/Cart'
import Contact from './pages/contact/Contact'
import Login from './pages/forms/Login'
import Register from './pages/forms/Register'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"element={  <HomePage/> }/>
        <Route path="/about"element={  <About/> }/>
        <Route path="/authors"element={  <Authors/> }/>
        <Route path="/book/:id"element={  <Book/> }/>
        <Route path="/cart"element={ <Cart/>  }/>
        <Route path="/contact"element={ <Contact/>  }/>
        <Route path="/login"element={ <Login/>  }/>
        <Route path="/register"element={ <Register/>  }/>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
