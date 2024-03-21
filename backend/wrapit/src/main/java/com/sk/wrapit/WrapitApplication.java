package com.sk.wrapit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@RequestMapping("/wrapit/api/v1")
public class WrapitApplication {

	public static void main(String[] args) {
		SpringApplication.run(WrapitApplication.class, args);
	}

}
