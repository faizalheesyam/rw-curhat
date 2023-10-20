import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Bookmark/BookmarksCell'
import { truncate } from 'src/lib/formatters'

const DELETE_BOOKMARK_MUTATION = gql`
  mutation DeleteBookmarkMutation($id: Int!) {
    deleteBookmark(id: $id) {
      id
    }
  }
`

const BookmarksList = ({ bookmarks }) => {
  const [deleteBookmark] = useMutation(DELETE_BOOKMARK_MUTATION, {
    onCompleted: () => {
      toast.success('Bookmark deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bookmark ' + id + '?')) {
      deleteBookmark({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Curhat id</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {bookmarks.map((bookmark) => (
            <tr key={bookmark.id}>
              <td>{truncate(bookmark.id)}</td>
              <td>{truncate(bookmark.curhatId)}</td>
              <td>{truncate(bookmark.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.bookmark({ id: bookmark.id })}
                    title={'Show bookmark ' + bookmark.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBookmark({ id: bookmark.id })}
                    title={'Edit bookmark ' + bookmark.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete bookmark ' + bookmark.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(bookmark.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookmarksList
