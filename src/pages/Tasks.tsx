import { Board } from '@/components/Board';
import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const Tasks = () => {
  const onDragEnd = (result: any) => {
    console.info(result, '<<< result');
  };
  return (
    <div className='bg-[#f3f4f8] h-[100vh] w-full p-10 flex gap-2 overflow-y-auto'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='1'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Board titleBoard={'Apakek'} />
            </div>
          )}
        </Droppable>
        <Droppable droppableId='list'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Board titleBoard={'Apakek'} />
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {/* <Board titleBoard={'Apakek'} /> */}
      {/* <Board titleBoard={'Apakek'} /> */}
      {/* <Board titleBoard={'Apakek'} /> */}
      {/* <Board titleBoard={'Apakek'} /> */}
      {/* <Board titleBoard={'Apakek'} /> */}
      {/* <Board titleBoard={'Apakek'} /> */}
    </div>
  );
};
