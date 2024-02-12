'use client'
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Tasks } from '../pages/Tasks';
import ModalFilter from '@/components/ModalFilter';
import { useState } from 'react';
export default function Home() {
  const [openModalFilter, setOpenModalFilter] = useState<boolean>(false)
  const onClickFilter = () => {
    setOpenModalFilter(!openModalFilter)
  }
  return (
    <div className='flex max-h-[100vh] overflow-y-hidden'>
      <Sidebar></Sidebar>
      <div className='w-full h-full'>
        <Header onClickFilter={onClickFilter}></Header>
        <Tasks />
        <ModalFilter isOpen={openModalFilter} setIsOpen={setOpenModalFilter} />
      </div>
    </div>
  );
}
