package codebrigade.lms.v1.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "eLeaveTable")
public class ELeaveTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "fullName")
    private String fullName;
    @Column(name = "empid")
    private String empid;
    @Column(name = "casual")
    private int casual;
    @Column(name = "medical")
    private int medical;
    @Column(name = "shortLeaves")
    private int shortLeaves;
    @Column(name = "halfDays")
    private int halfDays;
    @Column(name = "availableLeaves")
    private int availableLeaves;
    @Column(name = "updatingDate")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd" ,timezone = "GMT+5.5")
    private Date updatingDate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmpid() {
        return empid;
    }

    public void setEmpid(String empid) {
        this.empid = empid;
    }

    public int getCasual() {
        return casual;
    }

    public void setCasual(int casual) {
        this.casual = casual;
    }

    public int getMedical() {
        return medical;
    }

    public void setMedical(int medical) {
        this.medical = medical;
    }

    public int getShortLeaves() {
        return shortLeaves;
    }

    public void setShortLeaves(int shortLeaves) {
        this.shortLeaves = shortLeaves;
    }

    public int getHalfDays() {
        return halfDays;
    }

    public int getAvailableLeaves() {
        return availableLeaves;
    }

    public void setAvailableLeaves(int availableLeaves) {
        this.availableLeaves = availableLeaves;
    }

    public void setHalfDays(int halfDays) {
        this.halfDays = halfDays;
    }

    public Date getUpdatingDate() {
        return updatingDate;
    }

    public void setUpdatingDate(Date updatingDate) {
        this.updatingDate = updatingDate;
    }

    public ELeaveTable(int id, String fullName, String empid, int casual, int medical, int shortLeaves, int halfDays, int availableLeaves, Date updatingDate) {
        this.id = id;
        this.fullName = fullName;
        this.empid = empid;
        this.casual = casual;
        this.medical = medical;
        this.shortLeaves = shortLeaves;
        this.halfDays = halfDays;
        this.availableLeaves = availableLeaves;
        this.updatingDate = updatingDate;
    }

    public ELeaveTable() {
    }
}
