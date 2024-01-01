import { Navbar } from '@/app/(dashboard)/u/[username]/_components/navbar';
import { Sidebar } from '@/app/(dashboard)/u/[username]/_components/sidebar';
import { Container } from '@/app/(dashboard)/u/[username]/_components/sidebar/container';
import { getSelfByUsername } from '@/lib/auth-service';
import { redirect } from 'next/navigation';

import { FC, ReactNode } from 'react';

type LayoutProps = {
  params: { username: string };
  children: ReactNode;
};

const Layout: FC<LayoutProps> = async ({ children, params }) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect('/');
  }

  return (
    <>
      <Navbar />
      <div className='flex h-full pt-20'>
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default Layout;
