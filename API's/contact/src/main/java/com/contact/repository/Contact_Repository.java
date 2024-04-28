package com.contact.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.contact.model.Contact_model;

@Repository
public interface Contact_Repository extends MongoRepository<Contact_model, String> {

}
