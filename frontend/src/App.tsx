import React, { useState, useEffect } from 'react';

import { Note } from './components/types/note';
import NoteList from './components/NoteList/NoteList';
import NoteDetail from './components/NoteDetails/NoteDetail';
import { getNotes, createNote, updateNote, deleteNote } from './services/noteService';

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [error, setError] = useState<string | null>(null);

  // マウント時に全noteデータを取得
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await getNotes();
        setNotes(fetchedNotes);
      } catch (err) {
        setError('Failed to fetch notes');
      }
    };

    fetchNotes();
  }, []);

  // 新しいnoteを追加するハンドラー
  const handleAddNote = async (note: Partial<Note>) => {
    try {
      const newNote = await createNote(note);
      setNotes([...notes, newNote]);
    } catch (err) {
      setError('Failed to add note');
    }
  };

  // noteを削除するハンドラー
  const handleDeleteNote = async (id: number) => {
    try {
      await deleteNote(id);
      setNotes(notes.filter(note => note.id !== id));
    } catch (err) {
      setError('Failed to delete note');
    }
  };

  // noteを更新するハンドラー
  const handleUpdateNote = async (updatedNote: Note) => {
    try {
      const note = await updateNote(updatedNote.id, updatedNote);
      setNotes(notes.map(n => (n.id === note.id ? note : n)));
    } catch (err) {
      setError('Failed to update note');
    }
  };

  if(error) {
    return <div>{error}</div>;
  };

  return (
    <div className="flex h-screen">
      <div className="border-r border-backgroundLight dark:border-backgroundDark w-1/4">
        <NoteList
          notes={notes}
          onSelectNote={setSelectedNote}
          onDeleteNote={handleDeleteNote}
          onAddNote={handleAddNote}
        />
      </div>
      <div className="w-3/4">
        <NoteDetail
          note={selectedNote}
          onUpdateNote={handleUpdateNote}
        />
      </div>
    </div>
  );
};

export default App;
