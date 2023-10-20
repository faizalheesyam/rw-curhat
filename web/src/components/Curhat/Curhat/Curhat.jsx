import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_CURHAT_MUTATION = gql`
  mutation DeleteCurhatMutation($id: String!) {
    deleteCurhat(id: $id) {
      id
    }
  }
`

const Curhat = ({ curhat }) => {
  const [deleteCurhat] = useMutation(DELETE_CURHAT_MUTATION, {
    onCompleted: () => {
      toast.success('Curhat deleted')
      navigate(routes.curhats())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete curhat ' + id + '?')) {
      deleteCurhat({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Curhat {curhat.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{curhat.id}</td>
            </tr>
            <tr>
              <th>Text</th>
              <td>{curhat.text}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(curhat.createdAt)}</td>
            </tr>
            <tr>
              <th>Author id</th>
              <td>{curhat.authorId}</td>
            </tr>
            <tr>
              <th>Parent curhat id</th>
              <td>{curhat.parentCurhatId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCurhat({ id: curhat.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(curhat.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Curhat
