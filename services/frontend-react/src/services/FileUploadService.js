import axios from "axios";
class FileUploadService {
    uploadFile(file){
        return axios.post(`/fileupload`, file);
    }
}

export default new FileUploadService();