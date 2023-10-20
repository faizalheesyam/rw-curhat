import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CurhatForm from 'src/components/Curhat/CurhatForm'

const CREATE_CURHAT_MUTATION = gql`
  mutation CreateCurhatMutation($input: CreateCurhatInput!) {
    createCurhat(input: $input) {
      id
    }
  }
`

const NewCurhat = () => {
  const [createCurhat, { loading, error }] = useMutation(
    CREATE_CURHAT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Curhat created')
        navigate(routes.curhats())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createCurhat({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Curhat</h2>
      </header>
      <div className="rw-segment-main">
        <CurhatForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCurhat
