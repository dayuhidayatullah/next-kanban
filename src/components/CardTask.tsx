import Image from 'next/image';
import React from 'react';
import { SlOptions } from 'react-icons/sl';
import Avatar from '../app/avatar.jpeg';

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
    <div className='container rounded-md border-2 border-b-slate-900 mt-5'>
      <div className='flex justify-between items-center'>
        <p>{taskTitle}</p>
        <SlOptions></SlOptions>
      </div>
      <p>{companyName}</p>
      <p>{tags}</p>
      <p>{description}</p>
      <div className='flex justify-between items-center'>
        <Image width={10} height={10} src={Avatar} alt='at' />
        <p>{date}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};
