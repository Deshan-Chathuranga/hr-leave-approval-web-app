package codebrigade.lms.v1.controller;


//import com.example.springsocial.exception.BadRequestException;
//import com.example.springsocial.model.AuthProvider;
//import com.example.springsocial.model.User;
//import com.example.springsocial.payload.ApiResponse;
//import com.example.springsocial.payload.AuthResponse;
//import com.example.springsocial.payload.LoginRequest;
//import com.example.springsocial.payload.SignUpRequest;
//import com.example.springsocial.repository.UserRepository;
//import com.example.springsocial.security.TokenProvider;
import codebrigade.lms.v1.payload.AuthResponse;
import codebrigade.lms.v1.payload.LoginRequest;
import codebrigade.lms.v1.payload.SignUpRequest;
import codebrigade.lms.v1.repository.UserRepository;
import codebrigade.lms.v1.security.TokenProvider;
import codebrigade.lms.v1.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenProvider tokenProvider;


    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
        
        // TODO Edit this
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.createToken(authentication);
        var authResponse = new AuthResponse();
        authResponse.setAccessToken(token);
        authResponse.setRole(
                ((UserPrincipal)authentication.getPrincipal())
                        .getAuthorities()
                        .iterator()
                        .next()
        );
        return ResponseEntity.ok(authResponse);
    }

//    @PostMapping("/signup")
//    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
//        if(userRepository.existsByEmail(signUpRequest.getUsername())) {
//            throw new BadRequestException("Email address already in use.");
//        }
//
//        // Creating user's account
//        User user = new User();
//        user.setName(signUpRequest.getName());
//        user.setEmail(signUpRequest.getEmail());
//        user.setPassword(signUpRequest.getPassword());
//        user.setProvider(AuthProvider.local);
//
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//
//        User result = userRepository.save(user);
//
//        URI location = ServletUriComponentsBuilder
//                .fromCurrentContextPath().path("/user/me")
//                .buildAndExpand(result.getId()).toUri();
//
//        return ResponseEntity.created(location)
//                .body(new ApiResponse(true, "User registered successfully@"));
//    }
}

