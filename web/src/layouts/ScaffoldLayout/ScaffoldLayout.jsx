import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ScaffoldLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes[titleTo]()} className="rw-link">
            {title}
          </Link>
        </h1>
        <nav>
          <ul
            style={{
              listStyle: 'none',
            }}
          >
            <li style={{ float: 'left', marginRight: '10px' }}>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li style={{ float: 'left', marginRight: '10px' }}>
              <Link to={routes.curhats()}>Curhats</Link>
            </li>
            <li style={{ float: 'left', marginRight: '10px' }}>
              <Link to={routes.likes()}>Likes</Link>
            </li>
            <li style={{ float: 'left', marginRight: '10px' }}>
              <Link to={routes.bookmarks()}>Bookmarks</Link>
            </li>
          </ul>
        </nav>

        <Link to={routes[buttonTo]()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> {buttonLabel}
        </Link>
      </header>
      <hr />
      <br />
      <br />
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ScaffoldLayout
