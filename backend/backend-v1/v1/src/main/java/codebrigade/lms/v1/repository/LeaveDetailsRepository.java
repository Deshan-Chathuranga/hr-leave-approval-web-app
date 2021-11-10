package codebrigade.lms.v1.repository;

import codebrigade.lms.v1.entity.LeaveDetails;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LeaveDetailsRepository extends JpaRepository<LeaveDetails,Integer> {
    List<LeaveDetails> findByempcode(String empcode);

    List<LeaveDetails> findByActingOfficer(String name);







}
