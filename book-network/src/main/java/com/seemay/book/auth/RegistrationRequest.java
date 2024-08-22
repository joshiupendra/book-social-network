package com.seemay.book.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
public class RegistrationRequest {

    @NotEmpty(message = "firstname should not be Empty")
    @NotNull(message = "firstname should not be Null")
    private String firstname;
    @NotEmpty(message = "lastname should not be Empty")
    @NotNull(message = "lastname should not be Null")
    private String lastname;
    @Email(message = "email is not well formatted")
    @NotEmpty(message = "email should not be Empty")
    @NotNull(message = "email should not be Null")
    private String email;
    @NotEmpty(message = "password should not be Empty")
    @NotNull(message = "password should not be Null")
    @Size(min = 8, message = "password should be 8 characters long minimum")
    private String password;
}
