import axios from "axios";

class SupplierService {
    
    SaveSupplier(confirmedSupplier){
        return axios.post(`gateway-service/supplier`, confirmedSupplier);
    }
}

export default new SupplierService();