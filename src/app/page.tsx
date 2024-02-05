import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Tasks } from '../pages/Tasks';
export default function Home() {
  return (
    <div className='flex max-h-[100vh] overflow-y-hidden'>
      <Sidebar></Sidebar>
      <div className='w-full h-full'>
        <Header></Header>
        <Tasks />
      </div>
    </div>
  );
}
