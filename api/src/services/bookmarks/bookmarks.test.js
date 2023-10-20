import {
  bookmarks,
  bookmark,
  createBookmark,
  updateBookmark,
  deleteBookmark,
} from './bookmarks'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('bookmarks', () => {
  scenario('returns all bookmarks', async (scenario) => {
    const result = await bookmarks()

    expect(result.length).toEqual(Object.keys(scenario.bookmark).length)
  })

  scenario('returns a single bookmark', async (scenario) => {
    const result = await bookmark({ id: scenario.bookmark.one.id })

    expect(result).toEqual(scenario.bookmark.one)
  })

  scenario('creates a bookmark', async (scenario) => {
    const result = await createBookmark({
      input: {
        curhatId: scenario.bookmark.two.curhatId,
        userId: scenario.bookmark.two.userId,
      },
    })

    expect(result.curhatId).toEqual(scenario.bookmark.two.curhatId)
    expect(result.userId).toEqual(scenario.bookmark.two.userId)
  })

  scenario('updates a bookmark', async (scenario) => {
    const original = await bookmark({
      id: scenario.bookmark.one.id,
    })
    const result = await updateBookmark({
      id: original.id,
      input: { curhatId: scenario.bookmark.two.curhatId },
    })

    expect(result.curhatId).toEqual(scenario.bookmark.two.curhatId)
  })

  scenario('deletes a bookmark', async (scenario) => {
    const original = await deleteBookmark({
      id: scenario.bookmark.one.id,
    })
    const result = await bookmark({ id: original.id })

    expect(result).toEqual(null)
  })
})
