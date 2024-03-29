import { db, Member } from 'astro:db'

export async function GET() {
  const members = await db.select().from(Member)

  if (!members) {
    return new Response(
      JSON.stringify({
        message: 'No member was found',
      }),
      {
        status: 404,
        statusText: 'Not found',
      },
    )
  }

  return new Response(JSON.stringify(members), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
