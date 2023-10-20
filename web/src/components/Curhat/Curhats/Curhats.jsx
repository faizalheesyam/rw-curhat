import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Curhat/CurhatsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_CURHAT_MUTATION = gql`
  mutation DeleteCurhatMutation($id: String!) {
    deleteCurhat(id: $id) {
      id
    }
  }
`

const CurhatsList = ({ curhats }) => {
  const [deleteCurhat] = useMutation(DELETE_CURHAT_MUTATION, {
    onCompleted: () => {
      toast.success('Curhat deleted')
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
    if (confirm('Are you sure you want to delete curhat ' + id + '?')) {
      deleteCurhat({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Text</th>
            <th>Created at</th>
            <th>Author id</th>
            <th>Parent curhat id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {curhats.map((curhat) => (
            <tr key={curhat.id}>
              <td>{truncate(curhat.id)}</td>
              <td>{truncate(curhat.text)}</td>
              <td>{timeTag(curhat.createdAt)}</td>
              <td>{truncate(curhat.authorId)}</td>
              <td>{truncate(curhat.parentCurhatId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.curhat({ id: curhat.id })}
                    title={'Show curhat ' + curhat.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCurhat({ id: curhat.id })}
                    title={'Edit curhat ' + curhat.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete curhat ' + curhat.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(curhat.id)}
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

export default CurhatsList
