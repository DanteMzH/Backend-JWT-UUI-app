package org.example.backend.models.dto.mapper;

import org.example.backend.models.dto.NoteDto;
import org.example.backend.models.entities.Note;

public class DtoMapperNote {

    private Note note;

    public DtoMapperNote() {
    }

    public static DtoMapperNote builder(){
        return new DtoMapperNote();
    }

    public DtoMapperNote setNote(Note note){
        this.note = note;
        return this;
    }

    public NoteDto build(){
        if (note == null){
            throw new RuntimeException("Debe de pasar la entidad de nota");
        }

        return new NoteDto(
                this.note.getId(),
                this.note.getTitle(),
                this.note.getDescription(),
                this.note.getTag()
        );
    }
}
