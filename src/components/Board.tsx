import React from 'react';
import { LuPlus } from 'react-icons/lu';
import { SlOptions } from 'react-icons/sl';
import { CardTask } from './CardTask';

export const Board = ({ titleBoard }: { titleBoard: string }) => {
  return (
    <div className='container max-w-[250px] bg-[#f9fbfc] px-3 py-3 rounded-md'>
      <div className='flex justify-between items-center'>
        <p>{titleBoard}</p>
        <div className='flex gap-1'>
          <LuPlus></LuPlus>
          <SlOptions></SlOptions>
        </div>
      </div>
      <CardTask
        taskTitle='Ngapain yak'
        companyName='test23'
        tags={['makansiang']}
        description='Testavsdadsa'
        assignedTo={['naim', 'summirah']}
        date={new Date().toDateString()}
        comment={2}
      />
    </div>
  );
};
