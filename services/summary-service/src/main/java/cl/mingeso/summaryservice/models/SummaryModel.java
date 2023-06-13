package cl.mingeso.summaryservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import cl.mingeso.summaryservice.models.FileUploadType1Model;
import cl.mingeso.summaryservice.models.FileUploadType2Model;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SummaryModel {
    // Data from database
    private int supplierCode;
    private String supplierCategory;
    private String supplierName;
    private Boolean supplierRetention;
    private ArrayList<FileUploadType1Model> fileUploads;
    private ArrayList<FileUploadType2Model> fileUploadsType2;

    // Summary data
    private float milkPayment;
    private float categoryPayment;
    private float fatPayment;
    private float totalSolidsPayment;
    private float shiftPayment;
    private float discountKgsPayment;
    private float discountFatPayment;
    private float discountTotalSolidsPayment;
    private float taxRetention;
    private float totalPayment;
    private float finalPayment;

    // Variations
    private float milkVariation;
    private float fatVariation;
    private float totalSolidsVariation;

}
