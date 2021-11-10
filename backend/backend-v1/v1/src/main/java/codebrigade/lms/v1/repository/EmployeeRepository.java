package codebrigade.lms.v1.repository;

import codebrigade.lms.v1.entity.Employee;
import codebrigade.lms.v1.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    Optional<Employee> findById(Integer id);

    Employee findByEmpid(String empid);

    Employee findByEmail(String email);

    Employee findByUsername(String username);

//    List<Employee> findByeType(String eType);
}
