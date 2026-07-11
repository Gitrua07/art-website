import { useParams } from 'react-router-dom'
import paintings from '../db'
import { useState } from 'react'

const Painting = () => {
    const id = useParams()
    const { title, year, material,images} = paintings.find(val => val.id == id.id)
    const [selectedImage, setSelectedImage] = useState()

    return (
        <div className='paintings-info'>
            <div className='full-image'>
                {images.map(image => {
                    return(<img key={image.alt} onClick={() => setSelectedImage(image)} className='painting-image' src={image.src} alt={image.alt} />)
                })}
            </div>
            <div className='full-text'>
                <h2>Assignment {id.id}: {title} </h2>
                <div><b>Year:</b> {year}</div>
                <div><b>Material:</b> {material}</div>
            </div>

            {selectedImage && (
                <div onClick={() => setSelectedImage()} className='popup-tab'>
                    <img src={selectedImage.src} alt={selectedImage.alt}/>
                </div>
            )}
        </div>
    )
}

export default Painting