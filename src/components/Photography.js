import React, { useState } from 'react'
import Navbar from './Navbar'
import './styles/Styles.css'
import style from './styles/photography.module.css'

// Import photos
import photo1 from './photos/DSCF2560.jpg'
import photo2 from './photos/DSCF2843.jpg'
import photo3 from './photos/DSCF3635.jpg'
import photo4 from './photos/DSCF3890.jpg'
import photo5 from './photos/DSCF4199.jpg'
import photo6 from './photos/IMG_8878.jpg'
import photo7 from './photos/IMG_mountain.JPG'
import photo8 from './photos/4B4F2FE8-3EF9-40C3-B869-F89F1FB81DDA.jpg'
import photo9 from './photos/E43CBFC1-692C-430E-897D-A92BC655F5B7.JPG'
import photo10 from './photos/EE4E56DC-D417-4D16-8E7B-F598FC816308.jpg'

const Photography = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null)

    const photos = [
        { src: photo1, alt: 'Photo 1', location: 'Location 1' },
        { src: photo2, alt: 'Photo 2', location: 'Location 2' },
        { src: photo3, alt: 'Photo 3', location: 'Location 3' },
        { src: photo4, alt: 'Photo 4', location: 'Location 4' },
        { src: photo5, alt: 'Photo 5', location: 'Location 5' },
        { src: photo6, alt: 'Photo 6', location: 'Location 6' },
        { src: photo7, alt: 'Photo 7', location: 'Location 7' },
        { src: photo8, alt: 'Photo 8', location: 'Location 8' },
        { src: photo9, alt: 'Photo 9', location: 'Location 9' },
        { src: photo10, alt: 'Photo 10', location: 'Location 10' },
    ]

    const openLightbox = (photo) => {
        setSelectedPhoto(photo)
    }

    const closeLightbox = () => {
        setSelectedPhoto(null)
    }

    return (
        <section className='ideas'>
            <Navbar/>
            <div className="bookshelf"> 
                <div className="cards title">
                    <h1>Photography</h1>
                    <br></br>
                </div>
            </div>
            
            <div className={style.photoGalleryContainer}>
                <div className={style.photoGallery}>
                    {photos.map((photo, index) => (
                        <div key={index} className={style.photoItem} onClick={() => openLightbox(photo)}>
                            <img src={photo.src} alt={photo.alt} />
                        </div>
                    ))}
                </div>
            </div>

            {selectedPhoto && (
                <div className={style.lightbox} onClick={closeLightbox}>
                    <div className={style.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <span className={style.closeButton} onClick={closeLightbox}>&times;</span>
                        <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
                        {selectedPhoto.location && (
                            <p className={style.caption}>{selectedPhoto.location}</p>
                        )}
                    </div>
                </div>
            )}

        </section>
    )
}

export default Photography

