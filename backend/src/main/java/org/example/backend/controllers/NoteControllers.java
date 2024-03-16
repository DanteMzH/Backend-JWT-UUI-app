package org.example.backend.controllers;

import org.example.backend.models.dto.NoteDto;
import org.example.backend.models.entities.Note;
import org.example.backend.service.note.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/users/{userId}/notes")
@CrossOrigin(originPatterns = "*")
public class NoteControllers {

    @Autowired
    private NoteService service;

    @GetMapping
    public List<NoteDto> lista(@PathVariable UUID userId){
        return service.encontrarTodosPorUsuario(userId);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> mostrarId(@PathVariable UUID userId, @PathVariable UUID id){
        Optional<NoteDto> noteOptional = service.encontrarPorIdYUsuario(id, userId);

        if (noteOptional.isPresent()) {
            return ResponseEntity.ok(noteOptional.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> crear(@RequestBody Note note, @PathVariable UUID userId){
        return ResponseEntity.status(HttpStatus.CREATED).body(service.guardarParaUsuario(note, userId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Note note, @PathVariable UUID userId, @PathVariable UUID id) {
        Optional<NoteDto> o = service.actualizarParaUsuario(note, id, userId);
        if (o.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(o.get());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> remove(@PathVariable UUID userId, @PathVariable UUID id) {
        Optional<NoteDto> o = service.encontrarPorIdYUsuario(id, userId);

        if (o.isPresent()) {
            service.eliminarPorIdYUsuario(id, userId);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}