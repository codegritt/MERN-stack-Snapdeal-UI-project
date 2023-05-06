import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";
import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import { ToastContainer } from "react-toastify";
import Appheader from "./components/Appheader";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-center"></ToastContainer>
      <BrowserRouter>
        <Appheader />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route exact path="/home2" element={<ShowBookList />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
          <Route path="/show-book/:id" element={<ShowBookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
