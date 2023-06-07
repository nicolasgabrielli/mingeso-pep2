package cl.mingeso.supplierservice.controllers;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import cl.mingeso.supplierservice.services.SupplierService;

@RestController
@RequestMapping("/suppliers")
public class SupplierController {
    @Autowired
    SupplierService supplierService;



}
