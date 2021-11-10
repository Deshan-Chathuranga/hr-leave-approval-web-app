package codebrigade.lms.v1.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "shorthalfleaves")
public class ShortHalfLeaves {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;
    @Column(name = "fName")
    private String fName;
    @Column(name = "lName")
    private String lName;
    @Column(name = "empid")
    private String empid;
    @Column(name = "eType")
    private String eType;
    @Column(name = "lType")
    private String lType;
    @Column(name = "toDate")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd" ,timezone = "GMT+5.5")
    private Date date;

    public ShortHalfLeaves(Integer id, String fName, String lName, String empid, String eType, String lType, Date date) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.empid = empid;
        this.eType = eType;
        this.lType = lType;
        this.date = date;
    }

    public ShortHalfLeaves() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getEmpid() {
        return empid;
    }

    public void setEmpid(String empid) {
        this.empid = empid;
    }

    public String geteType() {
        return eType;
    }

    public void seteType(String eType) {
        this.eType = eType;
    }

    public String getlType() {
        return lType;
    }

    public void setlType(String lType) {
        this.lType = lType;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
