export const schema = gql`
  type Bookmark {
    id: Int!
    curhat: Curhat!
    curhatId: String!
    user: User!
    userId: String!
  }

  type Query {
    bookmarks: [Bookmark!]! @requireAuth
    bookmark(id: Int!): Bookmark @requireAuth
  }

  input CreateBookmarkInput {
    curhatId: String!
    userId: String!
  }

  input UpdateBookmarkInput {
    curhatId: String
    userId: String
  }

  type Mutation {
    createBookmark(input: CreateBookmarkInput!): Bookmark! @requireAuth
    updateBookmark(id: Int!, input: UpdateBookmarkInput!): Bookmark!
      @requireAuth
    deleteBookmark(id: Int!): Bookmark! @requireAuth
  }
`
