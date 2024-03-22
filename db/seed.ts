import { db, Member } from 'astro:db'

const fakeData = [
  {
    first_name: 'Fariol Blondeau',
    last_name: 'NZIODZIAMI',
    role: 'Responsable Formation',
    profession: 'Développeur Frontend',
    email: 'blondeau.nbif@gmail.com',
    linkedin_url: 'https://www.linkedin.com/in/fariolblondeau/',
    github_url: 'https://github.com/bruxx-6243',
  },
  {
    first_name: 'De Boumas',
    last_name: 'MACK LAFOND',
    role: 'Président',
    profession: 'Développeur Full-stack Web et Mobile',
    email: 'macklafonddeboumas@gmail.com',
    linkedin_url: 'https://www.linkedin.com/in/de-boumas-mack-lafond/',
    github_url: 'https://github.com/Lafonddeboumas',
  },
]

export default async function () {
  await db.insert(Member).values(fakeData)
}
