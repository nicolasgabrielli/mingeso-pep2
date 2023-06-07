package cl.mingeso.supplierservice.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import cl.mingeso.supplierservice.entities.SupplierEntity;

@Repository
public interface SupplierRepository extends JpaRepository<SupplierEntity, Long>{
}
