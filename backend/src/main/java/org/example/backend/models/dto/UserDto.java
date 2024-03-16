package org.example.backend.models.dto;


import java.util.UUID;

public class UserDto {


    UUID userId;
    String username;
    String password;


    public UserDto(UUID userId,String username, String password) {
        this.userId = userId;
        this.username=username;
        this.password = password;
    }

    public UserDto() {
    }

    public UUID getuserId() {
        return userId;
    }

    public void setuserId(UUID userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}
