package cl.mingeso.summaryservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SupplierModel {
    private Long id;
    private String name;
    private int code;
    private String category;
    private String retention;
}
