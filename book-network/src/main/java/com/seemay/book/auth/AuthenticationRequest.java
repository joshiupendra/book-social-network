package com.seemay.book.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AuthenticationRequest {

    @Email(message = "Email is not well formatted")
    @NotEmpty(message = "Email should not be Empty")
    @NotNull(message = "Email should not be Null")
    private String email;
    @NotEmpty(message = "Password should not be Empty")
    @NotNull(message = "Password should not be Null")
    @Size(min = 8, message = "Password should be 8 characters long minimum")
    private String password;
}
