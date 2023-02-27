import "../sass/main.scss";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import FollowUp from "./pages/FollowUp";
import Message from "./pages/Message";
import Upcoming from "./pages/Upcoming";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/follow-up" element={<FollowUp />} />
          <Route path="/message" element={<Message />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
