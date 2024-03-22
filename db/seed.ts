import { db, Member } from 'astro:db'

export default async function () {
  await db.insert(Member).values([])
}
