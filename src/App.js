import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Home from "./pages/Home";
import SimpleCounter from "./pages/SimpleCounter";
import SimpleForm from "./pages/SimpleForm";
import ReduxBlog from "./pages/ReduxBlog";

import "./main.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route element={<Outlet />} >
            <Route path="/" element={<Home />} />
            <Route path="/simplecounter" element={<SimpleCounter />} />
            <Route path="/simpleform" element={<SimpleForm />} />
            <Route path="/reduxblog" element={<ReduxBlog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
