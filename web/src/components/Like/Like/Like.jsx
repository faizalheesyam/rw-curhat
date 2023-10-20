import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_LIKE_MUTATION = gql`
  mutation DeleteLikeMutation($id: Int!) {
    deleteLike(id: $id) {
      id
    }
  }
`

const Like = ({ like }) => {
  const [deleteLike] = useMutation(DELETE_LIKE_MUTATION, {
    onCompleted: () => {
      toast.success('Like deleted')
      navigate(routes.likes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete like ' + id + '?')) {
      deleteLike({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Like {like.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{like.id}</td>
            </tr>
            <tr>
              <th>Curhat id</th>
              <td>{like.curhatId}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{like.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLike({ id: like.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(like.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Like
