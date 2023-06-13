package cl.mingeso.summaryservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class FileUploadType2Model {
    private Long id;
    private int supplier;
    private float fat;
    private float total_solids;
}
