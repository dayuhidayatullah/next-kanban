import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div className='container flex'>
      <Sidebar></Sidebar>
      <Header></Header>
    </div>
  );
}
