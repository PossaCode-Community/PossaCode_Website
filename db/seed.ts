import { db, Member } from 'astro:db'

// Seed when db is empty

const fakeMemersList = [
  {
    first_name: 'Catty',
    last_name: 'Bobbie',
    profession: 'test',
    email: 'test@test.com',
    role: 'test',
    image_url:
      'https://as2.ftcdn.net/v2/jpg/02/66/72/41/1000_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg',
    linkedin_url: 'https://as2.ftcdn.net',
    github_url: 'https://github.com/',
  },
]

export default async function () {
  await db.insert(Member).values(fakeMemersList)
}
