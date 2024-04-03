import { pgTable, serial, text, varchar, uuid, timestamp } from "drizzle-orm/pg-core";

export const may = pgTable('may', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});

export const way = pgTable('way', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'string'
  }),
  workspaceOwner: uuid('workspace_owner'),
  title: text('title').notNull(),
  iconId: text('icon_id').notNull(),
  data: text('data'),
  inTrash: text('in_trash'),
  logo: text('logo'),
  bannerUrl: text('banner_url')
});