import { defineDb, defineTable, column, NOW } from 'astro:db'

const Member = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    first_name: column.text(),
    last_name: column.text(),
    profession: column.text(),
    email: column.text(),
    role: column.text({ optional: true }),
    image_url: column.text(),
    linkedin_url: column.text({ optional: true, unique: true }),
    github_url: column.text({ optional: true, unique: true }),
    createdAt: column.date({ default: NOW }),
  },
})

export default defineDb({
  tables: { Member },
})
