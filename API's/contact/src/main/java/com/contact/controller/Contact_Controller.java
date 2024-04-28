package com.contact.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.contact.dto.Contact_To;
import com.contact.model.Contact_model;
import com.contact.repository.Contact_Repository;
import com.contact.service.Contact_Service;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("contact_us")
public class Contact_Controller {

	@Autowired
	private Contact_Repository contactRepo;

	@PostMapping("/add")
	public void  Create_contact(@RequestBody Contact_model obj) {
		System.out.print("hellooo");
		System.out.println(obj.toString());
		contactRepo.save(obj);	
	}

}
