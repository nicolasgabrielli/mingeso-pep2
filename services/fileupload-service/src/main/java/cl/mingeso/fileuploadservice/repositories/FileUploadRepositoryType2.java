package cl.mingeso.fileuploadservice.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import cl.mingeso.fileuploadservice.entities.FileUploadEntityType2;

@Repository
public interface FileUploadRepositoryType2 extends JpaRepository<FileUploadEntityType2, Long>{
    
}
