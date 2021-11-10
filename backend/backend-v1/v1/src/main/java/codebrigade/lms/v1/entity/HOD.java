package codebrigade.lms.v1.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "HOD")
@Data
public class HOD extends User{
    @Override
    public Role getRole() {
        return Role.HOD;
    }
}
