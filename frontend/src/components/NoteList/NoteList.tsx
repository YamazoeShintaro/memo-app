import React, { useState } from 'react';

import { Note } from '../types/note';
import EditControls from './EditControls';
import logo from '../../assets/icon/logo.svg';
import deleteIcon from '../../assets/icon/delete.svg';

type NoteListProps = {
  notes: Note[];
  onSelectNote: (note: Note) => void;
  onDeleteNote: (id: number) => void;
  onAddNote: (note: Partial<Note>) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onSelectNote, onDeleteNote, onAddNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);

  const handleSelectNote = (note: Note) => {
    setSelectedNoteId(note.id);
    onSelectNote(note);
  };

  const handleAddNote = () => {
    const newNote: Partial<Note> = {
      title: 'タイトル',
      body: 'コンテンツ',
      createdAt: new Date(),
    };
    onAddNote(newNote);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className='flex flex-col justify-between h-screen pt-30px'>
      <div className='flex h-32px pl-40px mb-20px overflow-hidden'>
        <img src={logo} alt='Logo' className='block'/>
        <h1 className='flex items-center pl-4px text-title font-bold'>ServiceName</h1>
      </div>
      <div className='flex-1 pl-40px overflow-scroll'>
        {notes.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()).map(note => (
          <div
            key={note.id}
            className={`flex items-center justify-between h-44px w-full pr-10px rounded ${selectedNoteId === note.id ? 'bg-backgroundLight text-brandColor font-bold' : ''}`}
          >
            <button
              className="flex-1 text-left py-10px pl-10px mr-10px truncate hover:opacity-50"
              onClick={() => handleSelectNote(note)}
            >
              {note.title}
            </button>
            {isEditing &&
              <button
                onClick={() => onDeleteNote(note.id)}
                className='hover:bg-buttonSecondaryHover rounded-sm'
              >
                <img src={deleteIcon} alt='Delete' className='h-24px w-24px'/>
              </button>
            }
          </div>
        ))}
      </div>
      <div className='h-60px pl-40px pr-10px py-10px bg-backgroundLight dark:bg-backgroundDark'>
        <EditControls
          isEditing={isEditing}
          onToggleEditing={toggleEditing}
          onAddNote={handleAddNote}
        />
      </div>
    </div>
  );
};

export default NoteList;
