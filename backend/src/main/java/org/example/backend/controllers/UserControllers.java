package org.example.backend.controllers;

import org.example.backend.models.dto.NoteDto;
import org.example.backend.models.entities.Note;
import org.example.backend.models.entities.User;
import org.example.backend.service.note.NoteService;
import org.example.backend.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/user")
@CrossOrigin(originPatterns = "*")
public class UserControllers {

    @Autowired
    private UserService service;


    @PostMapping
    public ResponseEntity<?> crear(@RequestBody User user){

        return ResponseEntity.status(HttpStatus.CREATED).body(service.guardar(user));
    }


}
