import MovieIcon from '@mui/icons-material/Movie';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {ContentRowMovies} from './ContentRowMovies';

export default function ContentTop() {
  return (
    <div className="row">
      <ContentRowMovies color="primary" title="Movies in DB" recurso="movies" key={1} Icon={MovieIcon} />
      <ContentRowMovies color="warning" title="Actors Quantity" recurso="actors" key={2} Icon={PersonIcon} />
      <ContentRowMovies color="success" title="Total Awards" recurso="awards" key={3} Icon={EmojiEventsIcon} />
    </div>
  )
}