import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  curhats: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).curhats()
  },
  likes: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).likes()
  },
  bookmarks: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).bookmarks()
  },
}
