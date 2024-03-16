package org.example.backend.service.user;

import org.example.backend.models.dto.NoteDto;
import org.example.backend.models.dto.UserDto;
import org.example.backend.models.dto.mapper.DtoMapperNote;
import org.example.backend.models.dto.mapper.DtoMapperUser;
import org.example.backend.models.entities.Note;
import org.example.backend.models.entities.User;
import org.example.backend.repository.NoteRepository;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;



    @Override
    @Transactional
    public UserDto guardar(User user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return DtoMapperUser.builder().setUser(repository.save(user)).build();

    }

}
