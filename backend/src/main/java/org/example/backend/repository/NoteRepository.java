package org.example.backend.repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.example.backend.models.entities.Note;
import org.springframework.data.repository.CrudRepository;

public interface NoteRepository extends CrudRepository<Note, UUID> {

    List<Note> findAllByUser_UserId(UUID userId);

    Optional<Note> findByIdAndUser_UserId(UUID id, UUID userId);

    void deleteByIdAndUser_UserId(UUID id, UUID userId);
}
