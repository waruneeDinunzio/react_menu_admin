package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.StudentModel;
import com.example.demo.repository.StudentRepository;


import com.example.demo.exception.ResourceNotFoundException;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class StudentController {

@Autowired
	private StudentRepository studentRepo;
    


	//get all students
	
	@GetMapping("/allstudents")
	public List<StudentModel> getAllStudents()
	{
		
		return studentRepo.findAll();
	}
	

	@PostMapping("/addstudent")
    public StudentModel newStudent(@RequestBody StudentModel s)
    {
		
		return studentRepo.save(s);
    }
	
	
	@GetMapping("/student/{id}")
	public ResponseEntity<StudentModel> getStudentById(@PathVariable int id)
	{
		StudentModel s= studentRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Student not found"));
		return ResponseEntity.ok(s);                 
	}
	
	@GetMapping("/students/{name}")
	public List<StudentModel> getStudentByName(@PathVariable String name)
	{
		//return studentRepo.findByName(name);
		
		List <StudentModel> students=studentRepo.findByName(name);
		if(students.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("Student(s) with the name "+ name +" not found"));
		}
		
		return studentRepo.findByName(name);
	}
	
	
	
	@PutMapping("/student/{id}")
	public ResponseEntity<StudentModel> updateStudent(@PathVariable int id, @RequestBody StudentModel student)
	{
		StudentModel s= studentRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Student not found"));
	    s.setName(student.getName());
	    s.setGrade(student.getGrade());
	    StudentModel updatedStudent=studentRepo.save(s);
	    return ResponseEntity.ok(updatedStudent);
	}
	

	
	@DeleteMapping("/student/{id}")
	public String deleteStudent(@PathVariable int id)
	{
		studentRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Student not found"));
	    studentRepo.deleteById(id);
	    return "The student with id: "+ id +" is removed from the database.";
	}
	
}
