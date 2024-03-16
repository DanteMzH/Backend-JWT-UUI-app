package org.example.backend.models.dto.mapper;

import org.example.backend.models.dto.UserDto;
import org.example.backend.models.entities.User;

public class DtoMapperUser {

    private User user;
    public DtoMapperUser() {
    }

    public static DtoMapperUser builder(){
        return new DtoMapperUser();
    }

    public DtoMapperUser setUser(User user){
        this.user = user;
        return this;
    }

    public UserDto build(){
        if (user == null){
            throw new RuntimeException("Debe de pasar la entidad de usuario");
        }

        return new UserDto(
                this.user.getUserId(),
                this.user.getUsername(),
                this.user.getPassword()
        );
    }
}
