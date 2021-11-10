package codebrigade.lms.v1.repository;

import codebrigade.lms.v1.entity.Employee;
import codebrigade.lms.v1.entity.HOD;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HODRepository extends JpaRepository<HOD,Integer> {
    Optional<HOD> findById(Integer id);
    HOD findByUsername(String username);
}
