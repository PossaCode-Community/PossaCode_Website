import { db, Member } from 'astro:db'

const fakeMembers = [
  {
    first_name: 'Fariol Blondeau',
    last_name: 'NZIODZIAMI',
    role: 'Résponsable Formation',
    profession: 'Software Developer',
    email: 'blondeau.nbif@gmail.com',
    linkedin_url: 'https://www.linkedin.com/in/fariolblondeau/',
    github_url: 'https://github.com/bruxx-6243',
  },
  {
    first_name: 'De Boumas',
    last_name: 'MACK LAFOND',
    role: 'Président',
    profession: 'FullStack Developer',
    email: 'macklafonddeboumas@gmail.com',
    linkedin_url: 'https://www.linkedin.com/in/de-boumas-mack-lafond/',
    github_url: 'https://github.com/Lafonddeboumas',
  },
]

export default async function () {
  await db.insert(Member).values(fakeMembers)
}
