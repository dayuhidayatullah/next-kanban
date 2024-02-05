import React from 'react';
import { SlOptions } from 'react-icons/sl';

export const CardTask = ({ taskTitle }: { taskTitle: string }) => {
  return (
    <div className='container rounded-md border-2 border-b-slate-900 max-w-[100px]'>
      <div className='flex justify-between items-center'>
        <p>{taskTitle}</p>
        <SlOptions></SlOptions>
      </div>
    </div>
  );
};
