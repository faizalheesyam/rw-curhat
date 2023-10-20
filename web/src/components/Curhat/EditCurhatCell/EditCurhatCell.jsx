import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CurhatForm from 'src/components/Curhat/CurhatForm'

export const QUERY = gql`
  query EditCurhatById($id: String!) {
    curhat: curhat(id: $id) {
      id
      text
      createdAt
      authorId
      parentCurhatId
    }
  }
`
const UPDATE_CURHAT_MUTATION = gql`
  mutation UpdateCurhatMutation($id: String!, $input: UpdateCurhatInput!) {
    updateCurhat(id: $id, input: $input) {
      id
      text
      createdAt
      authorId
      parentCurhatId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ curhat }) => {
  const [updateCurhat, { loading, error }] = useMutation(
    UPDATE_CURHAT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Curhat updated')
        navigate(routes.curhats())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateCurhat({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Curhat {curhat?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CurhatForm
          curhat={curhat}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
