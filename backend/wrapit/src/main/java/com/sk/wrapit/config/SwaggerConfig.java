package com.sk.wrapit.config;

import java.util.List;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import io.swagger.v3.oas.models.security.SecurityRequirement;

@Configuration
public class SwaggerConfig {

    @Value("${wrapit.swagger.contact.name}")
    private String name;

    @Value("${wrapit.swagger.contact.email}")
    private String email;

    @Value("${wrapit.swagger.contact.url}")
    private String url;

    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI().info(new Info()
                .title("WrapIt")
                .description("WrapIt is an online party event management system")
                .version("1.0.0")
                .contact(new Contact()
                        .name(name)
                        .email(email)
                        .url(url))
                .license(new License()
                        .name("Apache 2.0")
                        .url("https://www.apache.org/licenses/LICENSE-2.0.html")))
                .servers(List.of(new Server().url("http://localhost:8080")))
                .addSecurityItem(new SecurityRequirement().addList("bearerAuth"))
                .components(new Components()
                        .addSecuritySchemes("bearerAuth", new SecurityScheme()
                                .name("Auth")
                                .type(SecurityScheme.Type.HTTP)
                                .scheme("bearer")
                                .description("Provide a Json Web Token")
                                .bearerFormat("JWT")));
    }
}
