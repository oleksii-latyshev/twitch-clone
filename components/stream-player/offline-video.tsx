import { WifiOff } from 'lucide-react';

import { FC } from 'react';

type OfflineVideoProps = {
  username: string;
};

export const OfflineVideo: FC<OfflineVideoProps> = ({ username }) => {
  return (
    <div className='h-full flex flex-col space--y-4 justify-center items-center'>
      <WifiOff className='h-10 w-10 text-muted-foreground' />
      <p className='text-muted-foreground'>{username} is offline</p>
    </div>
  );
};
