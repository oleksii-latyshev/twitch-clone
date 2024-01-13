'use client';

import { useViewerToken } from '@/hooks/use-viewer-token';
import { Stream, User } from '@prisma/client';
import { FC } from 'react';
import {LiveKitRoom} from '@livekit/components-react'

type StreamPlayerProps = {
  user: User & { stream: Stream | null };
  stream: Stream;
  isFollowing: boolean;
};

export const StreamPlayer: FC<StreamPlayerProps> = ({ user, stream, isFollowing }) => {
  const { token, name, identity } = useViewerToken(user.id);

  if (!token || !name || !identity) {
    return <div>Cannot watch the stream</div>;
  }

  return <>
    <Livekit
  </>;
};
