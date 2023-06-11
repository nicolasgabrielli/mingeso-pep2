import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import SupplierListComponent from './components/SupplierListComponent';
import SupplierCreateComponent from './components/SupplierCreateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent/>}/>
          <Route path="/supplier" element={<SupplierListComponent/>}/>
          <Route path="/supplier/create" element={<SupplierCreateComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
