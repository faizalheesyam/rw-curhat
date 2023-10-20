export const schema = gql`
  type Curhat {
    id: String!
    text: String!
    createdAt: DateTime!
    author: User!
    authorId: String!
    parentCurhat: Curhat
    parentCurhatId: String
    replies: [Curhat]!
    likes: [Like]!
    bookmarks: [Bookmark]!
  }

  type Query {
    curhats: [Curhat!]! @requireAuth
    curhat(id: String!): Curhat @requireAuth
  }

  input CreateCurhatInput {
    text: String!
    authorId: String!
    parentCurhatId: String
  }

  input UpdateCurhatInput {
    text: String
    authorId: String
    parentCurhatId: String
  }

  type Mutation {
    createCurhat(input: CreateCurhatInput!): Curhat! @requireAuth
    updateCurhat(id: String!, input: UpdateCurhatInput!): Curhat! @requireAuth
    deleteCurhat(id: String!): Curhat! @requireAuth
  }
`
