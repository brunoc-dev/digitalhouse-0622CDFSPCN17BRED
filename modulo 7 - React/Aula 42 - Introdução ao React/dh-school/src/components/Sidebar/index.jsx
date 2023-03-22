function Sidebar () {
  return (
    <aside className="sidemenu">
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>
              Dashboard - DH movies
            </span>
          </a>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">
          Actions
        </div>
        <li className="nav-item">
          <a className="nav-link" href="/">
          <i className="fas fa-fw fa-gears"></i>
            <span>
              Genres
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-film"></i>
            <span>
              Movies
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-user"></i>
            <span>Actors</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;