package codebrigade.lms.v1.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "employee")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class Employee extends User {


    @Column(name = "empid",nullable = false)
    private String empid;


    @Column(name = "address")
    private String address;

    @Column(name = "etype")
    private String eType;

    @Column(name = "join_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd" ,timezone = "GMT+5.5")
    private Date joinDate;

    private Boolean locked;
    private Boolean enabled;


    public Employee(int id, String fName, String lName, String username, String password, String email, String contactNo, Boolean locked, Boolean enabled) {
        super(id, fName, lName, username, password, email, contactNo, locked, enabled);
    }

    public Employee(int id, String fName, String lName, String username, String password, String email, String contactNo, Boolean locked, Boolean enabled, String empid, String address, String eType, Date joinDate, Boolean locked1, Boolean enabled1) {
        super(id, fName, lName, username, password, email, contactNo, locked, enabled);
        this.empid = empid;
        this.address = address;
        this.eType = eType;
        this.joinDate = joinDate;
        this.locked = locked1;
        this.enabled = enabled1;
    }

    public Employee() {

    }

    public String getEmpid() {
        return empid;
    }

    public void setEmpid(String empid) {
        this.empid = empid;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String geteType() {
        return eType;
    }

    public void seteType(String eType) {
        this.eType = eType;
    }

    public Date getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(Date joinDate) {
        this.joinDate = joinDate;
    }

    @Override
    public Boolean getLocked() {
        return locked;
    }

    @Override
    public void setLocked(Boolean locked) {
        this.locked = locked;
    }

    @Override
    public Boolean getEnabled() {
        return enabled;
    }

    @Override
    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }



    @Override
    public Role getRole() {
        return Role.EMPLOYEE;
    }
}
