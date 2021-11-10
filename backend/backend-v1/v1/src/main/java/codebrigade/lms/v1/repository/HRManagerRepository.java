package codebrigade.lms.v1.repository;

import codebrigade.lms.v1.entity.HRManager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HRManagerRepository extends JpaRepository<HRManager,Integer> {

    HRManager findByUsername(String username);
}
