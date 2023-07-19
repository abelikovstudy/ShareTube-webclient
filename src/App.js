import { Route, Routes } from "react-router-dom"
import './App.css';
import {NavigationBar} from './components/NavBar.js'
import { AuthPanel } from "./components/AuthPanel";
import { RegisterPanel } from "./components/RegisterPanel";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}/>
      <Route path="/auth" element={<AuthPanel />} />
      <Route path="/register" element={<RegisterPanel/>} />
      <Route path="*" element={<h1>Not found</h1>}/>
    </Routes>
  );
}

export default App;
