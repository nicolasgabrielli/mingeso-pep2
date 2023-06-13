import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import SupplierListComponent from './components/SupplierListComponent';
import SupplierCreateComponent from './components/SupplierCreateComponent';
import FileUploadComponent from './components/FileUploadComponent';
import FileInfoComponent from './components/FileInfoComponent';
import SummaryComponent from './components/SummaryComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent/>}/>
          <Route path="/supplier" element={<SupplierListComponent/>}/>
          <Route path="/supplier/create" element={<SupplierCreateComponent/>}/>
          <Route path="/file-upload" element={<FileUploadComponent/>}/>
          <Route path="/file-info" element={<FileInfoComponent/>}/>
          <Route path="/summary" element={<SummaryComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
