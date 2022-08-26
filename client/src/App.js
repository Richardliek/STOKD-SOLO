import { Routes, Route, BrowserRouter } from "react-router-dom";
import UpdateProduct from "./components/UpdateProduct";
import DashBoard from "./components/DashBoard";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path="/products/:id/edit" element={<UpdateProduct/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

