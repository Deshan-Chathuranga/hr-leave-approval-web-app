package codebrigade.lms.v1.service;

import codebrigade.lms.v1.entity.*;
import codebrigade.lms.v1.repository.*;
import codebrigade.lms.v1.security.CurrentUser;
import codebrigade.lms.v1.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.util.*;

@Service
public class LeaveService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private LeaveDetailsRepository leaveDetailsRepository;

    @Autowired
    private ShortHalfLeavesRepository shortHalfLeavesRepository;

    @Autowired
    private ELeavesTableRepository eLeavesTableRepository;



    public List<LeaveDetails> getActingOfficers(@CurrentUser UserPrincipal userPrincipal){
        User user = userRepository.getOne(userPrincipal.getId());

        List<LeaveDetails> leaveDetails = leaveDetailsRepository.findByActingOfficer(user.getfName() + " " + user.getlName());
        return leaveDetails;
    }

    public List<LeaveDetails> getHODAllNotifications(@CurrentUser UserPrincipal userPrincipal){

        User user = userRepository.getOne(userPrincipal.getId());

        List<LeaveDetails> leaveDetails= leaveDetailsRepository.findAll(Sort.by(Sort.Direction.DESC,"requestDate"));
        return leaveDetails;
    }

    public long getCasualLeaveValues(@CurrentUser UserPrincipal userPrincipal){

        long casual=0;

        int currentYear = new Date().toInstant().atZone(ZoneId.systemDefault()).toLocalDate().getYear();




        Employee emp =employeeRepository.getOne(userPrincipal.getId());

        List<LeaveDetails> leaveDetails=leaveDetailsRepository.findByempcode(emp.getEmpid());

        for (LeaveDetails ld:
                leaveDetails) {

            Date date = ld.getRequestDate();
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(date);

            int obYear = calendar.get(Calendar.YEAR);
            if(currentYear==obYear){
                if(ld.getType().equals("Casual") )  {
                    if(ld.getActingOfficerStatus().equals("Accepted") && ld.getHodStatus().equals("Approved")){
                        casual=casual+ld.getNoOfDays();
                    }

                }
            }

        }

        return casual;
    }

    public long getMedicalLeaveValues(@CurrentUser UserPrincipal userPrincipal){

        long medical=0;

        int currentYear = new Date().toInstant().atZone(ZoneId.systemDefault()).toLocalDate().getYear();

        Employee emp =employeeRepository.getOne(userPrincipal.getId());

        List<LeaveDetails> leaveDetails=leaveDetailsRepository.findByempcode(emp.getEmpid());

        for (LeaveDetails ld:
                leaveDetails) {

            Date date = ld.getRequestDate();
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(date);

            int obYear = calendar.get(Calendar.YEAR);
            if(currentYear==obYear) {
                if (ld.getType().equals("Medical")) {
                    if (ld.getActingOfficerStatus().equals("Accepted") && ld.getHodStatus().equals("Approved")) {
                        medical = medical + ld.getNoOfDays();
                    }

                }

            }
        }

        return medical;
    }

    public long getEmployeeCasualValues(String empid){

        long casual=0;

        int currentYear = new Date().toInstant().atZone(ZoneId.systemDefault()).toLocalDate().getYear();

        List<LeaveDetails> leaveDetails=leaveDetailsRepository.findByempcode(empid);

        for (LeaveDetails ld:
                leaveDetails) {
            Date date = ld.getRequestDate();
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(date);

            int obYear = calendar.get(Calendar.YEAR);
            if(currentYear==obYear) {
            if(ld.getType().equals("Casual") )  {
                if(ld.getActingOfficerStatus().equals("Accepted") && ld.getHodStatus().equals("Approved")){
                    casual=casual+ld.getNoOfDays();
                }

            } }
        }

        return casual;
    }

    public long getEmployeeMedicalValues(String empid){

        long medical=0;

        int currentYear = new Date().toInstant().atZone(ZoneId.systemDefault()).toLocalDate().getYear();

        List<LeaveDetails> leaveDetails=leaveDetailsRepository.findByempcode(empid);

        for (LeaveDetails ld:
                leaveDetails) {

            Date date = ld.getRequestDate();
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(date);

            int obYear = calendar.get(Calendar.YEAR);


            if(currentYear==obYear) {
            if(ld.getType().equals("Medical") )  {
                if(ld.getActingOfficerStatus().equals("Accepted") && ld.getHodStatus().equals("Approved")){
                    medical=medical+ld.getNoOfDays();
                }

            } }
        }

        return medical;
    }

    public List<LeaveDetails> getEmployeeLeavesByEmpId(@CurrentUser UserPrincipal userPrincipal){

        Employee emp = employeeRepository.getOne(userPrincipal.getId());

        List<LeaveDetails> ld = leaveDetailsRepository.findByempcode(emp.getEmpid());



        return ld;
    }

    public List<LeaveDetails> getAllLeaves(){
        return leaveDetailsRepository.findAll(Sort.by(Sort.Direction.DESC,"requestDate"));
    }

    public List<ELeaveTable> getALLELeaves(){
        return eLeavesTableRepository.findAll();
    }

    public Optional<LeaveDetails> getLeaveDetailsByLeaveid(Integer id){
        return leaveDetailsRepository.findById(id);
    }

    //For get monthly leaves

    public List<ELeaveTable> getMonthlyLeaves(Integer month){

        List<ELeaveTable> eLeaveTables = eLeavesTableRepository.findAll();

        Calendar calendar = Calendar.getInstance();

        List<ELeaveTable> relatedTable = new ArrayList<ELeaveTable>();



        for (ELeaveTable ob:eLeaveTables) {

            calendar.setTime(ob.getUpdatingDate());


            if(calendar.get(Calendar.MONTH)==month){
               relatedTable.add(ob);
            }
        }

        return relatedTable;
    }
}
