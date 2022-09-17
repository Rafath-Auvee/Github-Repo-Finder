import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Profile from "./components/main/Profile.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
