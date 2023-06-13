package cl.mingeso.fileuploadservice.controllers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import cl.mingeso.fileuploadservice.entities.FileUploadEntity;
import cl.mingeso.fileuploadservice.entities.FileUploadEntityType2;
import cl.mingeso.fileuploadservice.services.FileUploadService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import java.util.List;


@RestController
@RequestMapping("/fileupload")
public class FileUploadController {
    @Autowired
    FileUploadService fileUploadService;

    @GetMapping("/getFileType1Info")
    public ResponseEntity<List<FileUploadEntity>> getFileType1Info() {
        List<FileUploadEntity> fileUploadEntities = fileUploadService.getAllFiles();
        return ResponseEntity.ok(fileUploadEntities);
    }

    @GetMapping("/getFileType2Info")
    public ResponseEntity<List<FileUploadEntityType2>> getFileType2Info() {
        List<FileUploadEntityType2> fileUploadEntities = fileUploadService.getAllFilesType2();
        return ResponseEntity.ok(fileUploadEntities);
    }

    @PostMapping()
    public void createFileUpload(@RequestParam("file") MultipartFile file) {
        fileUploadService.saveFile(file);
        fileUploadService.readCsv(file.getOriginalFilename());
    }
    
}
