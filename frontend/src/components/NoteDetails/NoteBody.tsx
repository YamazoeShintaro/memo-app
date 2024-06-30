import React, { useState, useEffect } from 'react';
import editIcon from '../../assets/icon/edit.svg';
import cancelIcon from '../../assets/icon/cancel.svg';
import saveIcon from '../../assets/icon/save.svg';

type NoteBodyProps = {
  body: string;
  onSave: (newBody: string) => void; // 本文を保存するための関数
}

const NoteBody: React.FC<NoteBodyProps> = ({ body, onSave }) => {
  const [isEditing, setIsEditing] = useState(false); // 編集モードの状態を管理
  const [editedBody, setEditedBody] = useState(body); // 編集されたノートの本文を管理

  // ノートの本文が変更された場合にeditedBodyを更新
  useEffect(() => {
    setEditedBody(body);
  }, [body]);

  // 本文を保存するハンドラー
  const handleSave = () => {
    onSave(editedBody);
    setIsEditing(false);
  };

  return (
    <div className='flex flex-col h-full overflow-scroll'>
      {isEditing ? ( // 編集モードの場合
        <div className='flex-1 flex'>
          <textarea
            value={editedBody}
            onChange={(e) => setEditedBody(e.target.value)}
            className='h-full w-full p-30px mr-20px text-body text-textRegular bg-white rounded-lg overflow-scroll resize-none'
          />
          <div className='flex'>
            <button
              onClick={() => setIsEditing(false)}
              className='h-40px w-40px mr-10px text-white bg-buttonNormal hover:bg-buttonNormalHover rounded-md'
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
      ) : ( // 非編集モードの場合
        <div className='flex-1 flex overflow-scroll'>
          <div className='w-full h-full p-30px mr-20px bg-white rounded-lg overflow-scroll'>
            <p className='text-body text-textRegular whitespace-pre-wrap'>{editedBody}</p>
          </div>
          <div className='flex flex-col'>
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
        </div>
      )}
    </div>
  );
};

export default NoteBody;
