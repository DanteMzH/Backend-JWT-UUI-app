package org.example.backend.service.note;

import org.example.backend.models.dto.NoteDto;
import org.example.backend.models.entities.Note;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface NoteService {

    List<NoteDto> encontrarTodosPorUsuario(UUID userId);

    NoteDto guardarParaUsuario(Note note, UUID userId);

    void eliminarPorIdYUsuario(UUID idnote, UUID userId);

    Optional<NoteDto> encontrarPorIdYUsuario(UUID idnote, UUID userId);
    Optional<NoteDto> actualizarParaUsuario(Note note, UUID idnote, UUID userId);
}

