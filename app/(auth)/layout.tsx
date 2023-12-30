import { Logo } from '@/app/(auth)/_components/logo';
import { FC, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='h-full flex flex-col items-center justify-center space-y-6'>
      <Logo />
      {children}
    </div>
  );
};

export default Layout;
