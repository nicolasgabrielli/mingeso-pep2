import axios from "axios";
class FileUploadService {
    uploadFile(file){
        return axios.post(`gateway-service:8090/fileupload`, file);
    }
}

export default new FileUploadService();