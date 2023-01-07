package com.school.javaproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.school.javaproject.data.Student;
import com.school.javaproject.data.StudyCourse;
import com.school.javaproject.service.SchoolService;

@RestController
public class SchoolRestController {

    @Autowired 
    SchoolService sService;
    
    @GetMapping("students")
    public List<Student> getStudents(){
        return sService.getAllStudents();
    }

    @PostMapping("addstudent")
    public Student addStudent(@RequestBody Student student){
        sService.addStudent(student);
        return student;
    }

    @GetMapping("studycourses")
        public List<StudyCourse> getStudyCourses(){
            return sService.getAllCourses();
        }

    @PostMapping("addstudycourse")
    public StudyCourse addStudyCourse(@RequestBody StudyCourse course){
        sService.addStudyCourse(course);
        return course;
    }
    
}
