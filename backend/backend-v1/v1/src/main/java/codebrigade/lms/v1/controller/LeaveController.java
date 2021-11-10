package codebrigade.lms.v1.controller;

import codebrigade.lms.v1.entity.ELeaveTable;
import codebrigade.lms.v1.entity.LeaveDetails;
import codebrigade.lms.v1.repository.ELeavesTableRepository;
import codebrigade.lms.v1.repository.LeaveDetailsRepository;
import codebrigade.lms.v1.security.CurrentUser;
import codebrigade.lms.v1.security.UserPrincipal;
import codebrigade.lms.v1.service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping()
public class LeaveController {

    @Autowired
    private LeaveDetailsRepository leaveDetailsRepository;

    @Autowired
    private ELeavesTableRepository eLeavesTableRepository;

    @Autowired
    private LeaveService leaveService;

    @PostMapping("/apply_leave")
    public ResponseEntity<String> requestLeave(@RequestBody LeaveDetails leaveDetails,@CurrentUser UserPrincipal userPrincipal){

       long diff= leaveDetails.getToDate().getTime()-leaveDetails.getFromDate().getTime();
        TimeUnit time = TimeUnit.DAYS;
        long diffrence = time.convert(diff, TimeUnit.MILLISECONDS);


        if(leaveService.getCasualLeaveValues(userPrincipal)+leaveService.getMedicalLeaveValues(userPrincipal)!=45){
            if(leaveDetails.getNoOfDays()==diffrence){
                leaveDetailsRepository.save(leaveDetails);
                return ResponseEntity.ok("Successfully recorded your leave request!");
            }
        }



       return ResponseEntity.ok("Please Enter Valid Inputs!");
    }

    @GetMapping("/acting-officers")
    public List<LeaveDetails> getAllActingOfficers(@CurrentUser UserPrincipal userPrincipal){
        return leaveService.getActingOfficers(userPrincipal);
    }

    @GetMapping("/hodNotifications")
    @PreAuthorize("hasAuthority(T(codebrigade.lms.v1.entity.Role).HOD)")
    public List<LeaveDetails> getAllHODNotifications(@CurrentUser UserPrincipal userPrincipal){
        return leaveService.getHODAllNotifications(userPrincipal);
    }

    //Update HOD Leave Status

    @PutMapping("/update-leave/{id}")
    public ResponseEntity<LeaveDetails> updateLeave(@PathVariable Integer id, @RequestBody LeaveDetails leaveDetails){

        LeaveDetails ld = leaveDetailsRepository.findById(id).orElse(null);
        ld.setHodStatus(leaveDetails.getHodStatus());
        LeaveDetails updateHodLeaveStatus= leaveDetailsRepository.save(ld);

        return ResponseEntity.ok(updateHodLeaveStatus);


    }

    //Update Acting Officer Leave Status
    @PutMapping("/update-actingOfficerStatus/{id}")
    public ResponseEntity<LeaveDetails> updateActingOfficerLeaveStatus(@PathVariable Integer id,@RequestBody LeaveDetails leaveDetails){

        LeaveDetails ld = leaveDetailsRepository.findById(id).orElse(null);
        ld.setActingOfficerStatus(leaveDetails.getActingOfficerStatus());
        LeaveDetails updateHodLeaveStatus= leaveDetailsRepository.save(ld);

        return ResponseEntity.ok(updateHodLeaveStatus);


    }


    @GetMapping("/casualvalue")
    public long getCasualTypeLeaves(@CurrentUser UserPrincipal userPrincipal){
        return leaveService.getCasualLeaveValues(userPrincipal);
    }

    @GetMapping("/medicalvalue")
    public long getMedicalTypeLeaves(@CurrentUser UserPrincipal userPrincipal){
        return leaveService.getMedicalLeaveValues(userPrincipal);
    }
    //get casual leaves using empcode

    @GetMapping("/casualvalues/{empid}")
    public long getCasualValues(@PathVariable String empid){

        return  leaveService.getEmployeeCasualValues(empid);
    }

    //get medical leaves using empcode

    @GetMapping("/medicalvalues/{empid}")
    public long getMedicalValues(@PathVariable String empid){

        return  leaveService.getEmployeeMedicalValues(empid);
    }

    //Get Employee individual leave details

    @GetMapping("/getEmployeeLeaves")
    public List<LeaveDetails> getEmployeeIndividualLeaves(@CurrentUser UserPrincipal userPrincipal){

        return  leaveService.getEmployeeLeavesByEmpId(userPrincipal);
    }

    //Get all leave details

    @GetMapping("/getAllLeaves")
    public List<LeaveDetails> getAllLeaves(){
        return leaveService.getAllLeaves();
    }

    //Add data to ELeaves Table
    @PostMapping("/addELeaves")
    public ELeaveTable addELeaves(@RequestBody ELeaveTable eLeaveTable){

        return eLeavesTableRepository.save(eLeaveTable);
    }

    //Get e leave table details

    @GetMapping("/getELeaves")
    public List<ELeaveTable> getAllELeaves(){

        return leaveService.getALLELeaves();
    }

    //Get Individual Employee leave notification

    @GetMapping("/individual/{id}")
    public Optional<LeaveDetails> getIndividualNotification(@PathVariable Integer id){

        return  leaveService.getLeaveDetailsByLeaveid(id);
    }

    //Get Monthly e leaves

    @GetMapping("/monthly/{index}")
    public List<ELeaveTable> getMonthlyELeaves(@PathVariable Integer index){
        return leaveService.getMonthlyLeaves(index);
    }

}
