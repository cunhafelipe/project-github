import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Repositories from "./view/components/repositories";
import Favorites from "./view/components/favorite";
import { Home } from "./view/components/home";

function App() {
  return (
    <Router>
      <div>
        <Home />
        <div className="max-w-[80%] mx-auto">
          <Routes>
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/stars" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/repositories" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
