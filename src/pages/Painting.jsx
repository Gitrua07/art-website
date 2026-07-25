import { useParams } from 'react-router-dom'
import paintings from '../db'
import { useState } from 'react'

const Painting = () => {
    const id = useParams()
    const { title, date, material, images, rationale } = paintings.find(val => val.id == id.id)
    const [selectedImage, setSelectedImage] = useState()

    return (
        <div className='paintings-info'>
            <div className='full-image'>
                {images.map(image => {
                    return (
                        <div className='painting-image'>
                            <img key={image.alt} onClick={() => setSelectedImage(image)} src={image.src} alt={image.alt} />
                            {image.title && (<div className='image-title'>{image.title}</div>)}
                        </div>
                    )
                })}
            </div>
            <div className='full-text'>
                <h2>Assignment {id.id}: {title} </h2>
                <div><b>Date:</b> {date}</div>
                <div><b>Material:</b> {material}</div>
                {rationale && (
                    <div><div><b>Rationale</b>:</div><div className='rationale-text'>{rationale}</div></div>
                )}
            </div>

            {selectedImage && (
                <div onClick={() => setSelectedImage()} className='popup-tab'>
                    <img src={selectedImage.src} alt={selectedImage.alt} />
                </div>
            )}
        </div>
    )
}

export default Painting