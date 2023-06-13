package cl.mingeso.summaryservice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.mingeso.summaryservice.entities.SummaryEntity;
import cl.mingeso.summaryservice.services.SummaryService;

@RestController
@RequestMapping("/summary")
public class SummaryController {
    @Autowired
    SummaryService summaryService;

    @GetMapping
    public ResponseEntity<List<SummaryEntity>> getSummary(){
        summaryService.makeSummary();
        List<SummaryEntity> summaries = summaryService.getSummaries();
        return ResponseEntity.ok(summaries);
    }
    
}
