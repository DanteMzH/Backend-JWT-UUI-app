package org.example.backend.service.user;

import org.example.backend.models.dto.NoteDto;
import org.example.backend.models.dto.UserDto;
import org.example.backend.models.entities.Note;
import org.example.backend.models.entities.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserService {

    UserDto guardar(User user);

}
