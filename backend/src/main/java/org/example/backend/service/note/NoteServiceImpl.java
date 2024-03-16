package org.example.backend.service.note;

import org.example.backend.models.dto.NoteDto;
import org.example.backend.models.entities.Note;
import org.example.backend.models.entities.User;
import org.example.backend.repository.NoteRepository;
import org.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class NoteServiceImpl implements NoteService {

    private final NoteRepository noteRepository;
    private final UserRepository userRepository;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository, UserRepository userRepository) {
        this.noteRepository = noteRepository;
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public List<NoteDto> encontrarTodosPorUsuario(UUID userId) {
        return noteRepository.findAllByUser_UserId(userId).stream()
                .map(note -> new NoteDto(
                        note.getId(),
                        note.getTitle(),
                        note.getDescription(),
                        note.getTag()
                ))
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public NoteDto guardarParaUsuario(Note note, UUID userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            note.setUser(user);
            Note savedNote = noteRepository.save(note);
            return new NoteDto(
                    savedNote.getId(),
                    savedNote.getTitle(),
                    savedNote.getDescription(),
                    savedNote.getTag()
            );
        } else {
            // Aquí puedes manejar la lógica de lo que sucede si el usuario no existe
            return null;
        }
    }

    @Override
    @Transactional
    public void eliminarPorIdYUsuario(UUID idnote, UUID userId) {
        noteRepository.deleteByIdAndUser_UserId(idnote, userId);
    }

    @Override
    @Transactional
    public Optional<NoteDto> actualizarParaUsuario(Note note, UUID idnote, UUID userId) {
        Optional<Note> noteOptional = noteRepository.findByIdAndUser_UserId(idnote, userId);
        if (noteOptional.isPresent()) {
            Note noteToUpdate = noteOptional.get();
            noteToUpdate.setTitle(note.getTitle());
            noteToUpdate.setDescription(note.getDescription());
            noteToUpdate.setTag(note.getTag());
            // Actualiza la nota
            Note updatedNote = noteRepository.save(noteToUpdate);
            return Optional.of(new NoteDto(
                    updatedNote.getId(),
                    updatedNote.getTitle(),
                    updatedNote.getDescription(),
                    updatedNote.getTag()
            ));
        } else {
            // La nota no existe o no pertenece al usuario
            return Optional.empty();
        }

    }
    @Override
    @Transactional
    public Optional<NoteDto> encontrarPorIdYUsuario(UUID idnote, UUID userId) {
        Optional<Note> noteOptional = noteRepository.findByIdAndUser_UserId(idnote, userId);
        return noteOptional.map(note -> new NoteDto(
                note.getId(),
                note.getTitle(),
                note.getDescription(),
                note.getTag()
        ));
    }
}
