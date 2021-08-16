import { gql } from '@apollo/client';

const ADD_NOTE = gql`
  mutation addNote(
    $course: ID!
    $courseTopic: ID!
    $name: String!
    $text: String!
  ) {
    createLectureNote(
      course: $course
      courseTopic: $courseTopic
      name: $name
      text: $text
    ) {
      message
      value
    }
  }
`;

const UPLOAD_NOTE_ATTACHMENT = gql`
  mutation uploadNoteAttachments($lectureNoteId: ID!, $file: Upload!) {
    uploadNoteAttachments(lectureNoteId: $lectureNoteId, file: $file) {
      message
      value
    }
  }
`;

const EDIT_NOTE = gql`
  mutation editNote($noteId: ID!, $name: String!, $text: String!) {
    updateNote(noteId: $noteId, name: $name, text: $text) {
      message
      value
    }
  }
`;

const DELETE_NOTE = gql`
  mutation deleteNote($noteId: ID!) {
    deleteNote(NoteId: $noteId) {
      message
      value
    }
  }
`;

export { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, UPLOAD_NOTE_ATTACHMENT };
