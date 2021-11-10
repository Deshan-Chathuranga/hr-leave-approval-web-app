package codebrigade.lms.v1.repository;

import codebrigade.lms.v1.entity.ShortHalfLeaves;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShortHalfLeavesRepository  extends JpaRepository<ShortHalfLeaves,Integer> {
    List<ShortHalfLeaves> findByEmpid(String empid);
}
