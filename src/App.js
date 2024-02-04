import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Room from "./Room";
import Results from './Results';
import Scoreboard from './Scoreboard';
import Categories from './Categories';
import Host from './Host';
import Lobby from './Lobby';
import Guest from './Guest';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="/results/:roomId" element={<Results />} />
          <Route path="/scoreboard/:roomId" element={<Scoreboard />} />

          {/* ellen: just placeholder boilerplate for testing bc my page routes to yours, feel free to delete/edit/whatever */}
          <Route path="/categories/:roomId" element={<Categories />} />

          <Route path="/host/:roomId" element={<Host />} />
          <Route path="/guest/" element={<Guest />} />
          <Route path="/lobby/:roomId/:guestName" element={<Lobby />} />

          {/* ellen: setup route by adding path (url) and element (react component) */}
          {/* example: <Route path="/my/URL" element={<MyComponent />} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

