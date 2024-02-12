import React, { RefObject } from 'react';
import { LuPlus } from 'react-icons/lu';
import { SlOptions } from 'react-icons/sl';
import { CardTask } from './CardTask';
import { Draggable } from 'react-beautiful-dnd';
export const Board = ({ titleBoard }: { titleBoard: string }) => {
  return (
    <div className='container max-w-[300px] bg-[#f9fbfc] px-3 py-3 rounded-md'>
      <div className='flex justify-between items-center'>
        <p>{titleBoard}</p>
        <div className='flex gap-1'>
          <LuPlus></LuPlus>
          <SlOptions></SlOptions>
        </div>
      </div>
      <Draggable draggableId={'1'} index={1}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
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
        )}
      </Draggable>
    </div>
  );
};
