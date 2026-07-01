import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <div className='header'>
        <div className='icon'><Link to='/'>GAIA ITURRALDE</Link></div>
        <div className='pages'><Link to='/'>Home</Link></div>
    </div>)
}

export default Header