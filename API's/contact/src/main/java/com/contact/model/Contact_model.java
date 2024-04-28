package com.contact.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
//import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(value = "contact_us")
//@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
public class Contact_model {
	@Id
	private String id;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	private String name;
	private String email;
	private String text;

	public Contact_model(String id, String name, String email, String text) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.text = text;
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "id is" + id + "name is " + name + "email is " + email + "text is " + text;
	}
}
