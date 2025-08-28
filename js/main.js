fetch('list/index.json')
    .then(res => res.json())
    .then(files => {
        files.forEach(file => {
            fetch(`${file}`)
                .then(res => res.json())
                .then(data => {
                    const gallery = document.getElementById('gallery');
                    const image = document.createElement('div');
                    image.className = 'artwork';
                    const img = document.createElement('img');
                    img.src = data.image;
                    img.alt = data.description;
                    image.append(img);
                    gallery.append(image);
                });
        });
    });

fetch('content/about.json')
    .then(res => res.json())
    .then(data => {
       const about = document.getElementById('about-me');
       const text = document.createElement('div');
       text.className = 'desc';
       const txt = document.createElement('p');
       txt.textContent = data.description;
       text.append(txt);
       about.append(text);
    });