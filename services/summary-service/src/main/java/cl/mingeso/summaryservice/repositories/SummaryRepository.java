package cl.mingeso.summaryservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cl.mingeso.summaryservice.entities.SummaryEntity;

@Repository
public interface SummaryRepository extends JpaRepository<SummaryEntity, Long>{
    
}

