import { db } from 'src/lib/db'

export const likes = () => {
  return db.like.findMany()
}

export const like = ({ id }) => {
  return db.like.findUnique({
    where: { id },
  })
}

export const createLike = ({ input }) => {
  return db.like.create({
    data: input,
  })
}

export const updateLike = ({ id, input }) => {
  return db.like.update({
    data: input,
    where: { id },
  })
}

export const deleteLike = ({ id }) => {
  return db.like.delete({
    where: { id },
  })
}

export const Like = {
  curhat: (_obj, { root }) => {
    return db.like.findUnique({ where: { id: root?.id } }).curhat()
  },
  user: (_obj, { root }) => {
    return db.like.findUnique({ where: { id: root?.id } }).user()
  },
}
