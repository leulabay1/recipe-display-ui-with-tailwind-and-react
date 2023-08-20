import './App.css';
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Link, Routes, Outlet} from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";
import Layout from "./components/layout";

function App() {

  return (<>

      <div className="flex md:flex-row flex-col">

          <Router>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                      <Route path="home" element={<Home/>}/>
                  <Route index  element={<Home/>}/>
                  <Route path="detail" element={<RecipeDetail/>}/>
                      </Route>
                  </Routes>
          </Router>
          <Outlet/>
      </div>
      </>
  );
}

export default App;
