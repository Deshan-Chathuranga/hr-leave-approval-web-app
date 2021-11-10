package codebrigade.lms.v1.entity;





import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "user")
@Inheritance(strategy = InheritanceType.JOINED)
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
public abstract class User  {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="user_id")
    private int id;

    @Column(name="fName",length = 45,nullable = false)
    private String fName;

    @Column(name="lName",length = 45,nullable = false)
    private String lName;

    @Column(name="username",nullable = false,length = 25,unique = true)
    private String username;

    @Column(name="password",nullable = false,length = 64)
    private String password;

    @Column(name="email",nullable = false)
    private String email;

    @Column(name = "contact_no",length = 15)
    private String contactNo;



    private Boolean locked;
    private Boolean enabled;

    public abstract Role getRole();

    public User() {
    }


    public User(int id, String fName, String lName, String username, String password, String email, String contactNo, Boolean locked, Boolean enabled) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.contactNo = contactNo;
        this.locked = locked;
        this.enabled = enabled;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public Boolean getLocked() {
        return locked;
    }

    public void setLocked(Boolean locked) {
        this.locked = locked;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }
}
