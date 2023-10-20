import Curhat from 'src/components/Curhat/Curhat'

export const QUERY = gql`
  query FindCurhatById($id: String!) {
    curhat: curhat(id: $id) {
      id
      text
      createdAt
      authorId
      parentCurhatId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Curhat not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ curhat }) => {
  return <Curhat curhat={curhat} />
}
