import { db } from 'src/lib/db'

export const curhats = () => {
  return db.curhat.findMany()
}

export const curhat = ({ id }) => {
  return db.curhat.findUnique({
    where: { id },
  })
}

export const createCurhat = ({ input }) => {
  return db.curhat.create({
    data: input,
  })
}

export const updateCurhat = ({ id, input }) => {
  return db.curhat.update({
    data: input,
    where: { id },
  })
}

export const deleteCurhat = ({ id }) => {
  return db.curhat.delete({
    where: { id },
  })
}

export const Curhat = {
  author: (_obj, { root }) => {
    return db.curhat.findUnique({ where: { id: root?.id } }).author()
  },
  parentCurhat: (_obj, { root }) => {
    return db.curhat.findUnique({ where: { id: root?.id } }).parentCurhat()
  },
  replies: (_obj, { root }) => {
    return db.curhat.findUnique({ where: { id: root?.id } }).replies()
  },
  likes: (_obj, { root }) => {
    return db.curhat.findUnique({ where: { id: root?.id } }).likes()
  },
  bookmarks: (_obj, { root }) => {
    return db.curhat.findUnique({ where: { id: root?.id } }).bookmarks()
  },
}
