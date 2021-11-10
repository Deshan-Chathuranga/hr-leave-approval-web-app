package codebrigade.lms.v1.controller;

import codebrigade.lms.v1.entity.ShortHalfLeaves;
import codebrigade.lms.v1.repository.ShortHalfLeavesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping()
public class ShortHalfLeavesController {

    @Autowired
    private ShortHalfLeavesRepository shortHalfLeavesRepository;

    @PostMapping("/shorthalfleaves")
    public ResponseEntity<String> ShortHalfLeaves(@RequestBody ShortHalfLeaves shortHalfLeaves){
        if(shortHalfLeaves.getlType().equals("Short Leave") || shortHalfLeaves.getlType().equals("Half Day") || shortHalfLeaves.getlType().equals("Nopay Leaves")){
          shortHalfLeavesRepository.save(shortHalfLeaves);
          return ResponseEntity.ok("Suucessfully Recorded!");
        }
        return ResponseEntity.ok("Check Again Your Inputs!");
    }

    @GetMapping("/getShortLeaves")
    public List<ShortHalfLeaves> getShortHalfLeaves(){

        return shortHalfLeavesRepository.findAll(Sort.by(Sort.Direction.DESC,"date"));
    }
}
