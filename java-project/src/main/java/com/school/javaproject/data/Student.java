package com.school.javaproject.data;

import java.util.ArrayList;
import java.util.List;

public class Student {
    
    private int id;
    private String firstname;
    private String lastname;

    private static int idCounter = 0;

    private List<StudyCourse> studentCourses = new ArrayList<>();

    public Student(){
        this("","");
    }

    public Student(String firstname, String lastname){
        this.id = idCounter++; 
        this.firstname = firstname;
        this.lastname = lastname;
    }

    public void addStudyCourse(StudyCourse course){
        studentCourses.add(course);
    }

    public List<StudyCourse> getStudenStudyCourses() {
        return new ArrayList<>(this.studentCourses);
    }

    public int getId() {
        return this.id;
    }

    public String getFirstname() {
        return this.firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return this.lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }


}
