package com.school.javaproject.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.school.javaproject.data.Student;
import com.school.javaproject.data.StudyCourse;

//tämä luokka käy dataa läpi ja etsii tietoa sieltä

@Service
public class SchoolService {
    
    private List<Student> students = new ArrayList<>();
    private List<StudyCourse> courses = new ArrayList<>();


    public void addStudent(Student student){
        students.add(student);
    }

    public void addStudyCourse(StudyCourse course){
        courses.add(course);
    }

    public boolean addStudentToCourse(int studentId, int studycourseId){

        Student student = getStudentById(studentId);
        StudyCourse course = getStudyCourseById(studycourseId);

        if(student != null && course != null){
            student.addStudyCourse(course);
            return true;
        }

        return false;
    }

    public Student getStudentById(int studentId){
        for (Student s : this.students) {
            if(s.getId()== studentId){
                return s;
            }
        }
        return null;
    }

    public StudyCourse getStudyCourseById(int studycourseId){
        for (StudyCourse c : this.courses) {
            if(c.getId()== studycourseId){
                return c;
            }
        }
        return null;
    }

    public List<Student> getAllStudents(){
        return new ArrayList<>(students);
    }

    public List<StudyCourse> getAllCourses(){
        return new ArrayList<>(courses);
    }

    
}