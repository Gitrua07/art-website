import { useParams } from 'react-router-dom'
import paintings from '../db'

const Painting = () => {
    const id = useParams()
    const { _, title, year, material, size, img, alt } = paintings.find(val => val.id == id.id)

    return (
        <div className='paintings-info'>
            <div className='full-image'>
                <img className='painting-image' src={img} alt={alt} />
            </div>
            <div className='full-text'>
                <h2>Assignment {id.id}: {title} </h2>
                <div><b>Year:</b> {year}</div>
                <div><b>Material:</b> {material}</div>
                <div><b>Size:</b> {size}</div>
            </div>
        </div>
    )
}

export default Painting