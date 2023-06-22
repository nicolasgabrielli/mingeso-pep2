import axios from "axios";
class FileUploadService {
    uploadFile(file){
        return axios.post(`gateway-service/fileupload`, file);
    }
}

export default new FileUploadService();