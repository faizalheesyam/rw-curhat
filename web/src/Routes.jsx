// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Home" titleTo="home" buttonLabel="😬" buttonTo="newCurhat">
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Bookmarks" titleTo="bookmarks" buttonLabel="New Bookmark" buttonTo="newBookmark">
        <Route path="/bookmarks/new" page={BookmarkNewBookmarkPage} name="newBookmark" />
        <Route path="/bookmarks/{id:Int}/edit" page={BookmarkEditBookmarkPage} name="editBookmark" />
        <Route path="/bookmarks/{id:Int}" page={BookmarkBookmarkPage} name="bookmark" />
        <Route path="/bookmarks" page={BookmarkBookmarksPage} name="bookmarks" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Likes" titleTo="likes" buttonLabel="New Like" buttonTo="newLike">
        <Route path="/likes/new" page={LikeNewLikePage} name="newLike" />
        <Route path="/likes/{id:Int}/edit" page={LikeEditLikePage} name="editLike" />
        <Route path="/likes/{id:Int}" page={LikeLikePage} name="like" />
        <Route path="/likes" page={LikeLikesPage} name="likes" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Curhats" titleTo="curhats" buttonLabel="New Curhat" buttonTo="newCurhat">
        <Route path="/curhats/new" page={CurhatNewCurhatPage} name="newCurhat" />
        <Route path="/curhats/{id}/edit" page={CurhatEditCurhatPage} name="editCurhat" />
        <Route path="/curhats/{id}" page={CurhatCurhatPage} name="curhat" />
        <Route path="/curhats" page={CurhatCurhatsPage} name="curhats" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
