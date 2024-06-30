import React, { useEffect, useState } from 'react';

import { Note } from '../types/note';
import NoteTitle from './NoteTitle';
import NoteBody from './NoteBody';

type NoteDetailProps = {
  note: Note | null;
  onUpdateNote: (updatedNote: Note) => void;
}

const NoteDetail: React.FC<NoteDetailProps> = ({ note, onUpdateNote }) => {
  const [editedNote, setEditedNote] = useState<Note | null>(note);

  // 現在選択されているnoteをeditedNoteにセットする
  useEffect(() => {
    setEditedNote(note);
  }, [note]);

  // titleが保存されたときの処理
  const handleTitleSave = (newTitle: string) => {
    if (editedNote) {
      const updatedNote = {
        ...editedNote,
        title: newTitle,
      };
      onUpdateNote(updatedNote); // 更新されたノートを親コンポーネントに渡す
      setEditedNote(updatedNote); // ローカルの状態を更新
    }
  };

  // bodyが保存されたときの処理
  const handleBodySave = (newBody: string) => {
    if (editedNote) {
      const updatedNote = {
        ...editedNote,
        body: newBody,
      };
      onUpdateNote(updatedNote); // 更新されたノートを親コンポーネントに渡す
      setEditedNote(updatedNote); // ローカルの状態を更新
    }
  };

  // ノートが選択されていない場合の表示(初期表示)
  if (!note) {
    return <div></div>;
  }

  return (
    <div className='flex flex-col justify-between h-screen px-40px pt-30px'>
      <div className='flex-1 flex flex-col p-30px bg-backgroundLight dark:bg-backgroundDark rounded-3xl overflow-scroll'>
        <div className='mb-20px'>
          <NoteTitle title={note.title} onSave={handleTitleSave} />
        </div>
        <div className='flex-1 overflow-scroll'>
          <NoteBody body={note.body} onSave={handleBodySave} />
        </div>
      </div>
      <div className='flex justify-between items-center h-60px text-caption text-textLight'>
        <p>Copyright © 2024 Sample</p>
        <p>運営会社</p>
      </div>
    </div>
  );
};

export default NoteDetail;
