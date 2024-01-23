import { getSelf } from '@/lib/auth-service';
import { db } from '@/lib/db';

export const getStreams = async () => {
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch (error) {
    userId = null;
  }

  let streams = [];

  if (userId) {
    streams = await db.stream.findMany({
      where: {
        user: {
          NOT: {
            blocking: {
              some: {
                blockedId: userId,
              },
            },
          },
        },
      },
      select: {
        id: true,
        thumnailUrl: true,
        name: true,
        isLive: true,
        user: true,
      },
      orderBy: [
        {
          isLive: 'desc',
        },
        {
          updatedAt: 'desc',
        },
      ],
    });
  } else {
    streams = await db.stream.findMany({
      select: {
        id: true,
        thumnailUrl: true,
        name: true,
        isLive: true,
        user: true,
      },
      orderBy: [
        {
          isLive: 'desc',
        },
        {
          updatedAt: 'desc',
        },
      ],
    });
  }

  return streams;
};
