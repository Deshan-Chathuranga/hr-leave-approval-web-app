package codebrigade.lms.v1.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "HR_Manager")
@Data
public class HRManager extends User{
    @Override
    public Role getRole() {
        return Role.HR_Manager;
    }
}
