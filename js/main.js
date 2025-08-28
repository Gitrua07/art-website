const gallery = document.getElementById('gallery');

fetch('list/index.json')
    .then(res => res.json())
    .then(files => {
        files.forEach(file => {
            fetch(`${file}`)
                .then(res => res.json())
                .then(data => {
                    const image = document.createElement('div');
                    image.className = 'artwork';

                    const img = document.createElement('img');
                    img.src = data.image;
                    img.alt = data.description;

                    image.append(img);
                    gallery.append(image);

                    img.addEventListener('click', () => {
                        lightbox.style.display = 'flex';
                        lightbox_img.src = img.src;
                        lightbox_img.alt = img.alt;
                    })
                });
        });
    });

const artworks = document.querySelectorAll('.artwork img');

const lightbox = document.getElementById('lightbox');
const lightbox_img = document.getElementById('lightbox-img');
const close_btn = document.getElementById('close');

close_btn.addEventListener('click', () => {
    lightbox.style.display = 'none';
})