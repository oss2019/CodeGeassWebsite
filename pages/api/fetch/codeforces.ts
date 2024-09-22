import { prisma } from '@/prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {
    let cf_ppl // just so that typescript stops complaining

    try {
      cf_ppl = await prisma.codeforcesLeaderBoard.findMany({
        orderBy: {
          rating: 'desc',
        },
        select: {
          rollNumber: true,
          name: true,
          userHandle: true,
          rating: true,
          contests: true,
          last_contest_id: true,
        },
      })
    } catch (error) {
      return res.status(400).json({
        errorMessage:
          'We have a problem with our database, please try again after some time',
      })
    }

    return res.status(200).json({
      codeforces: JSON.stringify(cf_ppl, (key, value) => {
        return typeof value === 'bigint' ? value.toString() : value
      }),
    })
  }
  return res.status(404).json('Unknown endpoint')
}
