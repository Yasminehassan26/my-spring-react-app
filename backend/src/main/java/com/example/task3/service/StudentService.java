package com.example.task3.service;

import com.example.task3.entity.Student;
import com.example.task3.repositries.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

     public List<Student> getStudents (int num){
        List<Student> list= new ArrayList();
        int val = (num-1)*20;
        for(int i=val+1;i<val+21;i++) {
        	Student s = studentRepository.findById(i).orElse(null);
        	if(s!=null)
        	list.add(s);
        }
        return list;
     }
     
}
