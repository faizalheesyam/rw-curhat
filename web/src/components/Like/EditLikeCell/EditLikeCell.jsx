import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LikeForm from 'src/components/Like/LikeForm'

export const QUERY = gql`
  query EditLikeById($id: Int!) {
    like: like(id: $id) {
      id
      curhatId
      userId
    }
  }
`
const UPDATE_LIKE_MUTATION = gql`
  mutation UpdateLikeMutation($id: Int!, $input: UpdateLikeInput!) {
    updateLike(id: $id, input: $input) {
      id
      curhatId
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ like }) => {
  const [updateLike, { loading, error }] = useMutation(UPDATE_LIKE_MUTATION, {
    onCompleted: () => {
      toast.success('Like updated')
      navigate(routes.likes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateLike({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Like {like?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <LikeForm like={like} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
