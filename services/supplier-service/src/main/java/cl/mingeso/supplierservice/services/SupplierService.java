package cl.mingeso.supplierservice.services;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import cl.mingeso.supplierservice.repositories.SupplierRepository;
import cl.mingeso.supplierservice.entities.SupplierEntity;
import java.util.List;

@Service
public class SupplierService {
    @Autowired
    private SupplierRepository supplierRepository;

    public List<SupplierEntity> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    public SupplierEntity getSupplierById(Long id) {
        return supplierRepository.findById(id).orElse(null);
    }

    public void createSupplier(SupplierEntity supplier) {
        supplierRepository.save(supplier);
    }

}
