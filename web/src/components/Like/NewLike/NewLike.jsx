import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LikeForm from 'src/components/Like/LikeForm'

const CREATE_LIKE_MUTATION = gql`
  mutation CreateLikeMutation($input: CreateLikeInput!) {
    createLike(input: $input) {
      id
    }
  }
`

const NewLike = () => {
  const [createLike, { loading, error }] = useMutation(CREATE_LIKE_MUTATION, {
    onCompleted: () => {
      toast.success('Like created')
      navigate(routes.likes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createLike({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Like</h2>
      </header>
      <div className="rw-segment-main">
        <LikeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLike
