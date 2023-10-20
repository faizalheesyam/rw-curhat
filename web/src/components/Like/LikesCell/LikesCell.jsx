import { Link, routes } from '@redwoodjs/router'

import Likes from 'src/components/Like/Likes'

export const QUERY = gql`
  query FindLikes {
    likes {
      id
      curhatId
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No likes yet. '}
      <Link to={routes.newLike()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ likes }) => {
  return <Likes likes={likes} />
}
