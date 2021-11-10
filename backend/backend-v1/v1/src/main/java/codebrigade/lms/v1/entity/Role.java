package codebrigade.lms.v1.entity;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
    EMPLOYEE, HR_Manager, HOD;

    @Override
    public String getAuthority() {
        return name();
    }
}
