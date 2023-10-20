import {
  curhats,
  curhat,
  createCurhat,
  updateCurhat,
  deleteCurhat,
} from './curhats'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('curhats', () => {
  scenario('returns all curhats', async (scenario) => {
    const result = await curhats()

    expect(result.length).toEqual(Object.keys(scenario.curhat).length)
  })

  scenario('returns a single curhat', async (scenario) => {
    const result = await curhat({ id: scenario.curhat.one.id })

    expect(result).toEqual(scenario.curhat.one)
  })

  scenario('creates a curhat', async (scenario) => {
    const result = await createCurhat({
      input: { text: 'String', authorId: scenario.curhat.two.authorId },
    })

    expect(result.text).toEqual('String')
    expect(result.authorId).toEqual(scenario.curhat.two.authorId)
  })

  scenario('updates a curhat', async (scenario) => {
    const original = await curhat({ id: scenario.curhat.one.id })
    const result = await updateCurhat({
      id: original.id,
      input: { text: 'String2' },
    })

    expect(result.text).toEqual('String2')
  })

  scenario('deletes a curhat', async (scenario) => {
    const original = await deleteCurhat({
      id: scenario.curhat.one.id,
    })
    const result = await curhat({ id: original.id })

    expect(result).toEqual(null)
  })
})
