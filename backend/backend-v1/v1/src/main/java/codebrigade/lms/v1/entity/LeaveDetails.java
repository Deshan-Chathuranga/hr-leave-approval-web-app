package codebrigade.lms.v1.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "leave_details")
public  class LeaveDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "lid")
    private int id;
    @Column(name = "empcode",nullable = false)
    private String empcode;
    @Column(name = "fName",nullable = false)
    private String fName;
    @Column(name = "lName")
    private String lName;
    @Column(name = "currentYear")
    private String currentYear;
    @Column(name = "noOfDays",nullable = false)
    private long noOfDays;
    @Column(name = "fromDate",nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd" ,timezone = "GMT+5.5")
    private Date fromDate;
    @Column(name = "toDate")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd" ,timezone = "GMT+5.5")
    private Date toDate;
    @Column(name = "leaveType",nullable = false)
    private String type;
    @Column(name = "reason",nullable = false)
    private String reason;
    @Column(name = "actingOfficer",nullable = false)
    private String actingOfficer;
    @Column(name = "address")
    private String address;
    @Column(name = "requestDate",nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd" ,timezone = "GMT+5.5")
    private Date requestDate;
    @Column(name = "actingOfficerFlag")
    private boolean actingOfficerFlag=false;

    @Column(name = "actingOfficerStatus")
    private String actingOfficerStatus;
    @Column(name = "hodStatus")
    private String hodStatus;



    @Enumerated(EnumType.ORDINAL)
    private LeaveStatus leaveStatus;



    public LeaveDetails() {
    }



    public LeaveDetails(int id, String empcode, String fName, String lName, String currentYear, int noOfDays, Date fromDate, Date toDate, String type, String reason, String address, Date requestDate, String actingOfficerStatus, String hodStatus, LeaveStatus leaveStatus) {
        this.id = id;
        this.empcode = empcode;
        this.fName = fName;
        this.lName = lName;
        this.currentYear = currentYear;
        this.noOfDays = noOfDays;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.type = type;
        this.reason = reason;
        this.address = address;
        this.requestDate = requestDate;
        this.actingOfficerStatus = actingOfficerStatus;
        this.hodStatus = hodStatus;
        this.leaveStatus = leaveStatus;
    }

    public String getActingOfficerStatus() {
        return actingOfficerStatus;
    }

    public void setActingOfficerStatus(String actingOfficerStatus) {
        this.actingOfficerStatus = actingOfficerStatus;
    }

    public String getHodStatus() {
        return hodStatus;
    }

    public void setHodStatus(String hodStatus) {
        this.hodStatus = hodStatus;
    }

    public Date getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(Date requestDate) {
        this.requestDate = requestDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmpcode() {
        return empcode;
    }

    public void setEmpcode(String empcode) {
        this.empcode = empcode;
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

    public String getCurrentYear() {
        return currentYear;
    }

    public void setCurrentYear(String currentYear) {
        this.currentYear = currentYear;
    }

    public long getNoOfDays() {
        return noOfDays;
    }

    public void setNoOfDays(long noOfDays) {
        this.noOfDays = noOfDays;
    }

    public Date getFromDate() {
        return fromDate;
    }

    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }

    public Date getToDate() {
        return toDate;
    }

    public void setToDate(Date toDate) {
        this.toDate = toDate;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getActingOfficer() {
        return actingOfficer;
    }

    public void setActingOfficer(String actingOfficer) {
        this.actingOfficer = actingOfficer;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LeaveStatus getLeaveStatus() {
        return leaveStatus;
    }

    public void setLeaveStatus(LeaveStatus leaveStatus) {
        this.leaveStatus = leaveStatus;
    }

    public boolean isActingOfficerFlag() {
        return actingOfficerFlag;
    }

    public void setActingOfficerFlag(boolean actingOfficerFlag) {
        this.actingOfficerFlag = actingOfficerFlag;
    }
}
