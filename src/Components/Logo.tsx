import logo from '../assets/logo/image.png'
import {Link} from 'react-router-dom';
const Logo = () => {
  return (<Link className="navbat-brand" to="/">
    <img src={logo} alt='logo' width={45} height={45} className='rounded-circle'/>
    </Link>
  )
}

export default Logo