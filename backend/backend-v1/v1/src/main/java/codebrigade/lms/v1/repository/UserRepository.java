package codebrigade.lms.v1.repository;

import codebrigade.lms.v1.entity.Employee;
import codebrigade.lms.v1.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
//@Transactional(readOnly = true)
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);

    User findByEmail(String email);

    Optional<User> findById(Integer id);



    Boolean existsByUsername(String username);


}
