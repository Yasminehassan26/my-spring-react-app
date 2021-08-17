package com.example.task3.service;

import com.example.task3.entity.Student;
import com.example.task3.repositries.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public Student getStudent(Integer id) {
        Student student = studentRepository.findById(id).orElse(null);
        return student;
    }
     public void addStudent(Student student){
         studentRepository.save(student);
     }

     public List<Student> getStudents (){
        List<Student> list= studentRepository.findAll();
        return list;
     }
     
}
