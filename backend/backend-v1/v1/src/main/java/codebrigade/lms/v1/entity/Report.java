package codebrigade.lms.v1.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "report")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "reportId")
    private int reportId;
    @Column(name = "description",nullable = false)
    private String description;
    @Column(name = "reportDate",nullable = false)
    private java.util.Date reportDate;

    public int getReportId() {
        return reportId;
    }

    public void setReportId(int reportId) {
        this.reportId = reportId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getReportDate() {
        return reportDate;
    }

    public void setReportDate(Date reportDate) {
        this.reportDate = reportDate;
    }

    public Report(){

    }

    public Report(String description, Date reportDate) {
        this.description = description;
        this.reportDate = reportDate;
    }
}
