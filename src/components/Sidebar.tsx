import Link from 'next/link';
import React from 'react';
import { BsFillKanbanFill } from 'react-icons/bs';
import { RxDashboard } from 'react-icons/rx';
import { IoIosNotificationsOutline } from 'react-icons/io';
import Image from 'next/image';
import { HiOutlineRectangleStack } from 'react-icons/hi2';
import { GoTasklist } from 'react-icons/go';
import { AiOutlineTeam } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { MdOutlineChat } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { RxAvatar } from 'react-icons/rx';
import Avatar from '../app/avatar.jpeg';
const Sidebar = () => {
  return (
    <div className='container relative max-w-64 h-[100vh] border-r-2 border-slate-100 pl-6 pt-4'>
      <nav className='h-full flex-col flex justify-between'>
        {/* <div className='flex justify-between'> */}
        <ul className='mb-4'>
          <li className='flex gap-2 items-center pb-4'>
            <Image
              src='https://static.thenounproject.com/png/1861811-200.png'
              alt='K'
              width={30}
              height={50}
            />
            <h3 className='text-bold text'>Kanva</h3>
          </li>
          <li>
            <Link href='Overview' className='flex gap-2 items-center pb-4'>
              <RxDashboard />
              <p>Overview</p>
            </Link>
          </li>
          <li>
            <Link href='notifications' className='flex gap-2 items-center pb-4'>
              <IoIosNotificationsOutline />
              <p>Notifications</p>
            </Link>
          </li>
          <li>
            <Link href='projects' className='flex gap-2 items-center pb-4'>
              <HiOutlineRectangleStack />
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link href='tasks' className='flex gap-2 items-center pb-4'>
              <GoTasklist />
              <p>Tasks</p>
            </Link>
          </li>
          <li>
            <Link href='team-member' className='flex gap-2 items-center pb-4'>
              <AiOutlineTeam />
              <p>Team Members</p>
            </Link>
          </li>
          <li>
            <Link href='calender' className='flex gap-2 items-center pb-4'>
              <SlCalender />
              <p>Calender</p>
            </Link>
          </li>
        </ul>
        <ul className='border-t-2 border-slate-100 mb-5'>
          <li>
            <Link href='support' className='flex gap-2 items-center pb-4 mt-3'>
              <MdOutlineChat />
              <p>Help & Support</p>
            </Link>
          </li>
          <li>
            <Link href='setting' className='flex gap-2 items-center pb-4'>
              <IoSettingsOutline />
              <p>Setting</p>
            </Link>
          </li>
          <li>
            <Link href='account' className='flex gap-2 items-center'>
              <Image src={Avatar} alt='avatar' width='32' height={32}></Image>
              <div>
                <p>Username</p>
                <p>Username@gmail.com</p>
              </div>
            </Link>
          </li>
        </ul>

        {/* </div> */}
      </nav>
    </div>
  );
};

export default Sidebar;
