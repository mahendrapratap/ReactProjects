import './App.css';
// import Child1 from './Child1.js';
import ReactDOM from "react-dom/client";
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
            {/* <Route path="/" element={<Home />} /> */}
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


        {/* <h1> Parent App component.</h1>
      <p>============= child component given below:</p>
      <Child1 /> */}

      </div>
    </>
  );
}


export default App;
