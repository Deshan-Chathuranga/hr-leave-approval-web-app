package codebrigade.lms.v1.service;

import codebrigade.lms.v1.entity.Employee;
import codebrigade.lms.v1.entity.ShortHalfLeaves;
import codebrigade.lms.v1.repository.EmployeeRepository;
import codebrigade.lms.v1.repository.ShortHalfLeavesRepository;
import codebrigade.lms.v1.security.CurrentUser;
import codebrigade.lms.v1.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;


import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private ShortHalfLeavesRepository shortHalfLeavesRepository;

    public Employee getEmployeeByempid(String empid) {
        return employeeRepository.findByEmpid(empid);
    }


    public List<ShortHalfLeaves> getIndividualShortHAlfDetails(@CurrentUser UserPrincipal userPrincipal) {

        Employee emp = employeeRepository.getOne(userPrincipal.getId());

        List<ShortHalfLeaves> leaves = shortHalfLeavesRepository.findByEmpid(emp.getEmpid());

        return leaves;
    }

    public ResponseEntity<String> getEmployeeID(String fullName) {
        List<Employee> emp = employeeRepository.findAll();
        String empid = new String();

        for (Employee ob :
                emp) {
            if ((ob.getfName() + " " + ob.getlName()).equals(fullName)) {
                empid = ob.getEmpid();
            }
        }

        return ResponseEntity.ok(empid);
    }

    public List<Employee> getEmployeeByCategory(@CurrentUser UserPrincipal userPrincipal) {
        Employee emp = employeeRepository.getOne(userPrincipal.getId());
        String etype = emp.geteType();

        List<Employee> listEmp = employeeRepository.findAll();

        List<Employee> res = new ArrayList<Employee>();

        for (Employee ob :
                listEmp) {
            if(!(emp.getEmpid().equals(ob.getEmpid()))){
                if (etype.equals(ob.geteType())) {
                    res.add(ob);
                }
            }


        }


//
//
//
        return res;
    }
}
