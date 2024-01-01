import { Actions } from '@/app/(dashboard)/u/[username]/_components/navbar/actions';
import { Logo } from '@/app/(dashboard)/u/[username]/_components/navbar/logo';

export const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm'>
      <Logo />
      <Actions />
    </nav>
  );
};
