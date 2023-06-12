package cl.mingeso.fileuploadservice.controllers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import cl.mingeso.fileuploadservice.entities.FileUploadEntity;
import cl.mingeso.fileuploadservice.services.FileUploadService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;


@RestController
@RequestMapping("/fileupload")
public class FileUploadController {
    @Autowired
    FileUploadService fileUploadService;

    @PostMapping()
    public void createFileUpload(@RequestParam("file") MultipartFile file) {
        fileUploadService.saveFile(file);
        fileUploadService.readCsv(file.getOriginalFilename());
    }
    
}
