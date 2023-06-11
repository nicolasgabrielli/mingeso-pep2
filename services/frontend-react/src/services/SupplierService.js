import axios from "axios";

class SupplierService {
    
    SaveSupplier(confirmedSupplier){
        return axios.post(`http://localhost:8080/supplier`, confirmedSupplier);
    }
}

export default new SupplierService();