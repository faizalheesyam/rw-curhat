import Bookmark from 'src/components/Bookmark/Bookmark'

export const QUERY = gql`
  query FindBookmarkById($id: Int!) {
    bookmark: bookmark(id: $id) {
      id
      curhatId
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Bookmark not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ bookmark }) => {
  return <Bookmark bookmark={bookmark} />
}
