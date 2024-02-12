import Image from 'next/image';
import React from 'react';
import { SlOptions } from 'react-icons/sl';
import Avatar from '../assets/avatar.jpeg';
export const CardTask = ({
  taskTitle,
  companyName,
  tags,
  description,
  assignedTo,
  date,
  comment,
}: {
  taskTitle: string;
  companyName: string;
  tags: string[];
  description: string;
  assignedTo: string[];
  date: string;
  comment: number;
}) => {
  return (
    <div className='container rounded-md border-2 border-b-slate-900 mt-5 p-2'>
      <div className='flex justify-between items-center mb-3'>
        <p className='text-lg'>{taskTitle}</p>
        <SlOptions></SlOptions>
      </div>
      <p className='mb-2'>{companyName}</p>
      <p className='mb-2'>{tags}</p>
      <p className='mb-3'>{description}</p>
      <div className='flex justify-between items-center'>
        <Image width={10} height={10} src={Avatar} alt='at' />
        <div className='flex'>
          <p>{date}</p>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};
