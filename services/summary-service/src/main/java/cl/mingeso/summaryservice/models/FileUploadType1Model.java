package cl.mingeso.summaryservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class FileUploadType1Model {
    private Long id;
    private String date;
    private String shift;
    private int supplier;
    private int kgs_milk;
}
