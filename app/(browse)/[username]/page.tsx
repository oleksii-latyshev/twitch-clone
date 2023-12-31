import { Actions } from '@/app/(browse)/[username]/_components/actions';
import { isFollowingUser } from '@/lib/follow-service';
import { getUserByUsername } from '@/lib/user-service';
import { notFound } from 'next/navigation';
import { FC } from 'react';

type PageProps = {
  params: {
    username: string;
  };
};

const Page: FC<PageProps> = async ({ params }) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className='flex flex-col gap-y-4'>
      <p>username: {user.username}</p>
      <p>is following: {`${isFollowing}`}</p>
      <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
  );
};

export default Page;
