package org.example.backend.models.dto;


import java.util.UUID;

public class NoteDto {



    UUID idNote;
    String title;
    String description;
    String tag;


    public NoteDto(UUID idNote, String title, String description, String tag) {
        this.idNote = idNote;

        this.title = title;
        this.description = description;
        this.tag = tag;
    }

    public NoteDto() {
    }

    public UUID getIdNote() {
        return idNote;
    }

    public void setIdNote(UUID idNote) {
        this.idNote = idNote;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }
}
