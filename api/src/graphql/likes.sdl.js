export const schema = gql`
  type Like {
    id: Int!
    curhat: Curhat!
    curhatId: String!
    user: User!
    userId: String!
  }

  type Query {
    likes: [Like!]! @requireAuth
    like(id: Int!): Like @requireAuth
  }

  input CreateLikeInput {
    curhatId: String!
    userId: String!
  }

  input UpdateLikeInput {
    curhatId: String
    userId: String
  }

  type Mutation {
    createLike(input: CreateLikeInput!): Like! @requireAuth
    updateLike(id: Int!, input: UpdateLikeInput!): Like! @requireAuth
    deleteLike(id: Int!): Like! @requireAuth
  }
`
