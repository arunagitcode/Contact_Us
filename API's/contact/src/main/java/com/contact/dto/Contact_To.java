package com.contact.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Contact_To {

	private String id;
	private String name;
	private String email;
	private String text;
}
