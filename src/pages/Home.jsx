import { Link } from 'react-router-dom'
import paintings from '../db'

const Home = () => {
    return (
        <div id='root'>
            <div className='paintings'>
                {
                    paintings.map(painting => {
                        const link = `painting/${painting.id}`
                        return (
                            <div key={painting.id} className='painting'>
                                <Link to={link}>
                                    <img className='home-image' src={painting.img} alt={painting.alt} />
                                </Link>
                                <div className='title'>{painting.title}</div>
                                <div className='year'>{painting.year}</div>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Home