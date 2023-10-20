import { likes, like, createLike, updateLike, deleteLike } from './likes'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('likes', () => {
  scenario('returns all likes', async (scenario) => {
    const result = await likes()

    expect(result.length).toEqual(Object.keys(scenario.like).length)
  })

  scenario('returns a single like', async (scenario) => {
    const result = await like({ id: scenario.like.one.id })

    expect(result).toEqual(scenario.like.one)
  })

  scenario('creates a like', async (scenario) => {
    const result = await createLike({
      input: {
        curhatId: scenario.like.two.curhatId,
        userId: scenario.like.two.userId,
      },
    })

    expect(result.curhatId).toEqual(scenario.like.two.curhatId)
    expect(result.userId).toEqual(scenario.like.two.userId)
  })

  scenario('updates a like', async (scenario) => {
    const original = await like({ id: scenario.like.one.id })
    const result = await updateLike({
      id: original.id,
      input: { curhatId: scenario.like.two.curhatId },
    })

    expect(result.curhatId).toEqual(scenario.like.two.curhatId)
  })

  scenario('deletes a like', async (scenario) => {
    const original = await deleteLike({ id: scenario.like.one.id })
    const result = await like({ id: original.id })

    expect(result).toEqual(null)
  })
})
