import logoDH from '../assets/images/logo-DH.png'
import {Link} from 'react-router-dom'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MovieIcon from '@mui/icons-material/Movie';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

function SideBar(){
  return(
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* <!-- Sidebar --> */}

			{/* <!-- Sidebar - Brand --> */}
			<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={logoDH} alt="Digital House" />
				</div>
			</Link>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0" />

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<LocalMoviesIcon style={{ marginRight: '1rem' }}/>
					<span>Dashboard - DH movies</span>
				</Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Actions</div>

			{/* <!-- Nav Item - Pages --> */}
			<li className="nav-item">
				<Link className="nav-link collapsed" to="/lastMovieInDb">
					<MovieIcon style={{ marginRight: '1rem' }}/>
					<span>Last Movie</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Charts --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/genresInDb">
					<TheaterComedyIcon style={{ marginRight: '1rem' }}/>
					<span>Genres</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Tables --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/info">
					<DonutLargeIcon style={{ marginRight: '1rem' }}/>
					<span>Info</span>
				</Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>

  )
}

export default SideBar;