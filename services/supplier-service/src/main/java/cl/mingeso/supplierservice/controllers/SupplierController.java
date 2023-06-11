package cl.mingeso.supplierservice.controllers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;

import cl.mingeso.supplierservice.services.SupplierService;
import cl.mingeso.supplierservice.entities.SupplierEntity;

@RestController
@RequestMapping("/supplier")
public class SupplierController {
    @Autowired
    SupplierService supplierService;

    @GetMapping
    public ResponseEntity<List<SupplierEntity>> getSuppliers() {
        List<SupplierEntity> suppliers = supplierService.getAllSuppliers();
        if(suppliers.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(suppliers);
    }

    @PostMapping
    public ResponseEntity<SupplierEntity> createSupplier(@RequestBody SupplierEntity supplier) {
        supplierService.createSupplier(supplier);
        return ResponseEntity.ok(supplier);
    }

}
