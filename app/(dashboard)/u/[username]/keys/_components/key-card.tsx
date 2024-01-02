'use client';

import { CopyButton } from '@/app/(dashboard)/u/[username]/keys/_components/copy-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FC, useState } from 'react';

type KeyCardProps = {
  value: string | null;
};

export const KeyCard: FC<KeyCardProps> = ({ value }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='rounded-xl bg-muted p-6'>
      <div className='flex items-start gap-x-10'>
        <p className='font-semibold shrink-0'>Stream Key</p>
        <div className='space-y-2 w-full'>
          <div className='w-full flex items-center gap-x-2'>
            <Input
              value={value || ''}
              type={show ? 'text' : 'password'}
              disabled
              placeholder='Stream key'
            />
            <CopyButton value={value || ''} />
          </div>
          <Button onClick={() => setShow(!show)} size='sm' variant='link'>
            {show ? 'Hide' : 'Show'}
          </Button>
        </div>
      </div>
    </div>
  );
};
