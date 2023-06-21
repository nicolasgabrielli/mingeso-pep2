import axios from "axios";

class SupplierService {
    
    SaveSupplier(confirmedSupplier){
        return axios.post(`gateway-service:8090/supplier`, confirmedSupplier);
    }
}

export default new SupplierService();