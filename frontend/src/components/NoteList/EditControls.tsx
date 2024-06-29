import React from 'react';

import editIcon from '../../assets/icon/edit.svg';
import newPageIcon from '../../assets/icon/new.svg';
import doneIcon from '../../assets/icon/done.svg';

type EditControlsProps = {
  isEditing: boolean;
  onToggleEditing: () => void;
  onAddNote: () => void;
}

const EditControls: React.FC<EditControlsProps> = ({ isEditing, onToggleEditing, onAddNote }) => {
  return (
    <>
      {isEditing ? (
        <div className='flex justify-between'>
          <button
            onClick={onAddNote}
            className='h-40px w-90px mr-10px border border-brandColor hover:bg-buttonSecondaryHover rounded'
          >
            <div className='flex justify-center'>
              <img src={newPageIcon} alt='NewPage'/>
            </div>
            <p className='text-minimum text-brandColor'>New page</p>
          </button>
          <button
            onClick={onToggleEditing}
            className='h-40px w-90px bg-brandColor hover:bg-buttonPrimaryHover rounded-md'
          >
            <div className='flex justify-center'>
              <img src={doneIcon} alt='Done'/>
            </div>
            <p className='text-minimum text-white'>Done</p>
          </button>
        </div>
      ) : (
        <div className='text-right'>
          <button
            onClick={onToggleEditing}
            className='h-40px w-90px bg-brandColor hover:bg-buttonPrimaryHover rounded-md'
          >
            <div className='flex justify-center'>
              <img src={editIcon} alt='Edit' />
            </div>
            <p className='text-minimum text-white'>Edit</p>
          </button>
        </div>
      )}
    </>
  );
};

export default EditControls;
