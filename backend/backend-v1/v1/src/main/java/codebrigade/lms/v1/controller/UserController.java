package codebrigade.lms.v1.controller;

import codebrigade.lms.v1.entity.HOD;
import codebrigade.lms.v1.entity.HRManager;
import codebrigade.lms.v1.entity.User;
import codebrigade.lms.v1.exception.ResourceNotFoundException;
import codebrigade.lms.v1.repository.HODRepository;
import codebrigade.lms.v1.repository.HRManagerRepository;
import codebrigade.lms.v1.repository.UserRepository;
import codebrigade.lms.v1.security.CurrentUser;
import codebrigade.lms.v1.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping()
public class UserController {



    @Autowired
    private UserRepository userRepository;

    @Autowired
    private HODRepository hodRepository;

    @Autowired
    private HRManagerRepository HRManagerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;




    //Add user controller
    @PostMapping("/users")
    public User addUser(@RequestBody User user){


        return userRepository.save(user);
    }

    @GetMapping("/user/me")
//    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }







    //HOD update profile
    @PutMapping("/update-user/{id}")
    public ResponseEntity<HOD> updateUser(@PathVariable Integer id, @RequestBody HOD hod){
       HOD hod1 = hodRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Id","",""));

        hod1.setfName(hod.getfName());
        hod1.setlName(hod.getlName());
        hod1.setEmail(hod.getEmail());
        hod1.setContactNo(hod.getContactNo());
        hod1.setUsername(hod.getUsername());
//        hod1.setPassword(passwordEncoder.encode(hod.getPassword()));


        HOD updateHOD = hodRepository.save(hod1);

        return ResponseEntity.ok(updateHOD);
    }

    //forgot password for HOD & Leave Clarke

    //Forget Password
    @PostMapping("/forgotPasswordHOD")
    public ResponseEntity<String> updatePassword(@RequestBody HOD hod){


      HOD ob = hodRepository.findByUsername(hod.getUsername());

        ob.setPassword(passwordEncoder.encode(hod.getPassword()));
        hodRepository.save(ob);
        return  ResponseEntity.ok("Suucessful!") ;





    }

    //Forget Password
    @PostMapping("/forgotPasswordLeaveClarke")
    public ResponseEntity<String> updatePasswordClarke(@RequestBody HRManager HRManager){


        HRManager ob = HRManagerRepository.findByUsername(HRManager.getUsername());

        ob.setPassword(passwordEncoder.encode(HRManager.getPassword()));
        HRManagerRepository.save(ob);
        return  ResponseEntity.ok("Suucessful!") ;





    }




}
