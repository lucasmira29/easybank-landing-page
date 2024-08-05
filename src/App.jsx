import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "@/styles/reset.css";
import GlobalStyle from "@/styles/GlobalStyle"; 


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <GlobalStyle/>
    </BrowserRouter>
  )
}

export default App
