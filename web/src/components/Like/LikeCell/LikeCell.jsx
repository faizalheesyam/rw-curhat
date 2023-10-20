import Like from 'src/components/Like/Like'

export const QUERY = gql`
  query FindLikeById($id: Int!) {
    like: like(id: $id) {
      id
      curhatId
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Like not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ like }) => {
  return <Like like={like} />
}
