import React, { useState, useEffect } from 'react';

import editIcon from '../../assets/icon/edit.svg';
import cancelIcon from '../../assets/icon/cancel.svg';
import saveIcon from '../../assets/icon/save.svg';

type NoteTitleProps = {
  title: string;
  onSave: (newTitle: string) => void;
}

const NoteTitle: React.FC<NoteTitleProps> = ({ title, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  useEffect(() => {
    setEditedTitle(title);
  }, [title]);

  const handleSave = () => {
    onSave(editedTitle);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className='flex justify-between'>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className='w-full h-full px-30px py-10px mr-20px text-title font-bold text-textRegular rounded-lg resize-none'
          />
          <div className='flex'>
            <button
              onClick={() => setIsEditing(false)}
              className=' h-40px w-40px mr-10px text-white bg-buttonNormal hover:bg-buttonNormalHover rounded-md'
            >
              <div className='flex justify-center'>
                <img src={cancelIcon} alt='Cancel' />
              </div>
              <p className='text-minimum text-white'>Cancel</p>
            </button>
            <button
              onClick={handleSave}
              className='h-40px w-40px text-white bg-buttonPrimary hover:bg-buttonPrimaryHover rounded-md'
            >
              <div className='flex justify-center'>
                <img src={saveIcon} alt='Save' />
              </div>
              <p className='text-minimum text-white'>Save</p>
            </button>
          </div>
        </div>
      ) : (
        <div className='flex justify-between'>
          <h2 className='flex-1 px-30px text-left text-title font-bold text-textRegular truncate'>{editedTitle}</h2>
          <button
            onClick={() => setIsEditing(true)}
            className='h-40px w-90px bg-buttonPrimary hover:bg-buttonPrimaryHover rounded-md'
          >
            <div className='flex justify-center'>
              <img src={editIcon} alt='Edit' />
            </div>
            <p className='text-minimum text-white'>Edit</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteTitle;
