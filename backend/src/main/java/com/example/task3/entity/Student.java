package com.example.task3.entity;
import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Student")
@Data
public class Student implements Serializable {

    private static final long serialVersionUID = -2343243243242432341L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "Grade")
    private Integer grade_num;
    @Column(name = "firstname")
    private String firstName;
    @Column(name = "lastname")
    private String lastName;
    @Column(name = "AcademicEmail")
    private String email;


}