package com.school.javaproject.data;

public class StudyCourse {
    private int id;
    private String name;
    private String teacher;
    private String classroom;

    private static int idCounter = 0;
    
    public StudyCourse(String name, String teacher, String classroom) {
        this.id = idCounter++;
        this.name = name;
        this.teacher = teacher;
        this.classroom = classroom;
    }

    public int getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTeacher() {
        return this.teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public String getClassroom() {
        return this.classroom;
    }

    public void setClassroom(String classroom) {
        this.classroom = classroom;
    }
}
