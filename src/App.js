import Home from "../src/component/Home/home";
import CartContent from "../src/component/CartConent/CartContents";
import DataProvider from "../src/component/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
