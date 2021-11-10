package codebrigade.lms.v1.controller;



import codebrigade.lms.v1.entity.Employee;
import codebrigade.lms.v1.entity.ShortHalfLeaves;
import codebrigade.lms.v1.entity.User;
import codebrigade.lms.v1.exception.ResourceNotFoundException;
import codebrigade.lms.v1.repository.EmployeeRepository;
import codebrigade.lms.v1.repository.UserRepository;
import codebrigade.lms.v1.security.CurrentUser;
import codebrigade.lms.v1.security.UserPrincipal;
import codebrigade.lms.v1.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping()
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EmployeeService employeeService;


    //create employee
    @PostMapping("/addemployees")
    @PreAuthorize("hasAuthority(T(codebrigade.lms.v1.entity.Role).HR_Manager)")
    public Employee createEmployee(@RequestBody Employee employee, @CurrentUser UserPrincipal userPrincipal){
        employee.setPassword(
                passwordEncoder.encode(
                        employee.getPassword()
                )
        );
        return employeeRepository.save(employee);

    }

    //Get All Employees
    @GetMapping("/employee")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
    //Get Employees By Category

    @GetMapping("/employees")
    public List<Employee> getEmployeesByCategory(@CurrentUser UserPrincipal userPrincipal){
        return employeeService.getEmployeeByCategory(userPrincipal);
    }

    //update employee rest api
    @PutMapping("/update-employee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Integer id, @RequestBody Employee employeeDetails){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Id","",""));

        employee.setfName(employeeDetails.getfName());
        employee.setlName(employeeDetails.getlName());
        employee.setEmail(employeeDetails.getEmail());
        employee.setContactNo(employeeDetails.getContactNo());
        employee.setUsername(employeeDetails.getUsername());
        employee.setPassword(passwordEncoder.encode(employeeDetails.getPassword()));

        Employee updatedEmployee = employeeRepository.save(employee);

        return ResponseEntity.ok(updatedEmployee);
    }

    //filter by emp_id

    @GetMapping("/{empid}")
    public Employee findByempid(@PathVariable String empid){

        return  employeeService.getEmployeeByempid(empid);
    }

    //Forget Password
    @PostMapping("/forget-password")
    public Employee updatePassword(@RequestBody Employee employee){


        Employee employee1= employeeRepository.findByUsername(employee.getUsername());

        employee1.setPassword(passwordEncoder.encode(employee.getPassword()));
        return  employeeRepository.save(employee1);





    }

    //Get Employee individual short,half leaves details

    @GetMapping("/employeeShortHalfLeaves")
    public List<ShortHalfLeaves> getIndividualShortHAlfDetails(@CurrentUser UserPrincipal userPrincipal){

        return employeeService.getIndividualShortHAlfDetails(userPrincipal);
    }

    //Get Employee ID
    @GetMapping("/getEmpId/{fullName}")
    public ResponseEntity<String> getEmployeeId(@PathVariable String fullName){
        return employeeService.getEmployeeID(fullName);
    }



}
