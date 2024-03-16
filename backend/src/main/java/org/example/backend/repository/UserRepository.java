package org.example.backend.repository;

import org.example.backend.models.entities.Note;
import org.example.backend.models.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends CrudRepository<User, UUID> {


    Optional<User> getUserByUsername(String username);



}
