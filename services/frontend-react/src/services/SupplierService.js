import axios from "axios";

class SupplierService {
    
    SaveSupplier(confirmedSupplier){
        return axios.post(`/supplier`, confirmedSupplier);
    }
}

export default new SupplierService();