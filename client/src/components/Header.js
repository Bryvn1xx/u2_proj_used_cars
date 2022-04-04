
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav>
        <Link className='headlink' to='/'>
          Home</Link>
        <Link className='headlink' to='./About'>
          About</Link>
        <Link className='headlink' to='./Economy'>
          Economy</Link>
        <Link className='headlink' to='/AddCar'>
          AddCar
        </Link>

      </nav>
    </header>
  )
}
export default Header