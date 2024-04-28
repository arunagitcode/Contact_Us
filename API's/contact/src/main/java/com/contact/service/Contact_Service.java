package com.contact.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.contact.dto.Contact_To;
import com.contact.model.Contact_model;
import com.contact.repository.Contact_Repository;

@Service
public class Contact_Service {
 @Autowired
 private Contact_Repository contactRepository;
 

}
