import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_BOOKMARK_MUTATION = gql`
  mutation DeleteBookmarkMutation($id: Int!) {
    deleteBookmark(id: $id) {
      id
    }
  }
`

const Bookmark = ({ bookmark }) => {
  const [deleteBookmark] = useMutation(DELETE_BOOKMARK_MUTATION, {
    onCompleted: () => {
      toast.success('Bookmark deleted')
      navigate(routes.bookmarks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bookmark ' + id + '?')) {
      deleteBookmark({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Bookmark {bookmark.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{bookmark.id}</td>
            </tr>
            <tr>
              <th>Curhat id</th>
              <td>{bookmark.curhatId}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{bookmark.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBookmark({ id: bookmark.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(bookmark.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Bookmark
