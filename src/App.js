import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" >
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>}/>
          </Route>

          <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":uid" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
          </Route>

          <Route path="produts">
              <Route index element={<List/>}/>
              <Route path=":productid" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;