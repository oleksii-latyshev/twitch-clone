'use client';

import { Button } from '@/components/ui/button';
import { unblockUser } from '@/lib/block-service';
import { FC, useTransition } from 'react';
import { toast } from 'sonner';

type UnblockButtonProps = {
  userId: string;
};

export const UnblockButton: FC<UnblockButtonProps> = ({ userId }) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      unblockUser(userId)
        .then(() => toast.success('User unblocked!'))
        .catch(() => toast.error('Something went wrong'));
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={onClick}
      variant='link'
      size='sm'
      className='text-blue-500 w-full'
    >
      Unblock
    </Button>
  );
};
