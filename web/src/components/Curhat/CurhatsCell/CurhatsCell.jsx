import { Link, routes } from '@redwoodjs/router'

import Curhats from 'src/components/Curhat/Curhats'

export const QUERY = gql`
  query FindCurhats {
    curhats {
      id
      text
      createdAt
      authorId
      parentCurhatId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No curhats yet. '}
      <Link to={routes.newCurhat()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ curhats }) => {
  return <Curhats curhats={curhats} />
}
