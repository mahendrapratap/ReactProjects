import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Edit from "./pages/Edit";
import Create from "./pages/Create";
import NoPage from "./pages/NoPage";


function App() {
  return (
    <>
      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route
              path="/create"
              element={<Create />}
            />
            <Route
              path="/edit"
              element={<Edit />}
            />

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}


export default App;
