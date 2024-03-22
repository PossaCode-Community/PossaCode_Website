import { defineDb, defineTable, column, NOW } from 'astro:db'

const Member = defineTable({
  columns: {
    id: column.number({ primaryKey: true, unique: true, autoIncrement: true }),
    first_name: column.text(),
    last_name: column.text(),
    role: column.text({ optional: true }),
    profession: column.text(),
    email: column.text({ optional: true, unique: true }),
    linkedin_url: column.text(),
    github_url: column.text(),
    createdAt: column.date({ default: NOW }),
  },
})

export default defineDb({
  tables: { Member },
})
