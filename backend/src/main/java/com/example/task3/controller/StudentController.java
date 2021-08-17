package com.example.task3.controller;
import com.example.task3.entity.Student;
import com.example.task3.repositries.StudentRepository;
import com.example.task3.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable(name = "id") Integer id) {
        return studentService.getStudent(id);
    }

    @PostMapping("/addStudent")
    public void addStudent(@RequestBody Map<String,Object> map) {
        Student student=new Student();
        student.setGrade_num(Integer.parseInt(map.get("grade").toString()));
        student.setFirstName(map.get("first").toString());
        student.setLastName(map.get("last").toString());
        student.setEmail(map.get("email").toString());
        studentService.addStudent(student);

    }
    @GetMapping("/getStudents")
    public List<Student> getStudents() {
        return studentService.getStudents();
    }
}
