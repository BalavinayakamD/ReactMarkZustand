import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Subject from "./components/Subject";

function App() {
  return (
    <>
      <Routes>
        <Route path="/ReactMarkZustand" element={<Home />} />
        <Route path="/ReactMarkZustand/login" element={<Login />} />
        <Route path="/ReactMarkZustand/subject" element={<Subject />} />
      </Routes>
    </>
  );
}

export default App;
