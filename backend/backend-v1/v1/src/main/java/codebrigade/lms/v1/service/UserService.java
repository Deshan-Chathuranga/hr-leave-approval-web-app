package codebrigade.lms.v1.service;

import codebrigade.lms.v1.entity.User;
import codebrigade.lms.v1.exception.ResourceNotFoundException;
import codebrigade.lms.v1.repository.UserRepository;
import codebrigade.lms.v1.security.CurrentUser;
import codebrigade.lms.v1.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    //forgot password


//    public User updatePassword(@RequestBody User user){
//
//        User user1= userRepository.findByEmail(user.getEmail());
//        user1.setPassword(passwordEncoder.encode(user.getPassword()));
//
//        return  userRepository.save(user1);
//
//
//    }
}
