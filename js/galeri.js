document.addEventListener('DOMContentLoaded', function() {
    // Mengambil semua elemen yang diperlukan
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galeriItems = document.querySelectorAll('.galeri-item');

    // Fungsi untuk filter galeri
    function filterGaleri(category) {
        galeriItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'semua' || itemCategory === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }

    // Event listener untuk tombol filter
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Menghapus kelas active dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Menambah kelas active ke tombol yang diklik
            button.classList.add('active');
            // Menjalankan filter
            const category = button.getAttribute('data-filter');
            filterGaleri(category);
        });
    });

    // Lightbox functionality
    const galeriContainer = document.querySelector('.galeri-container');
    
    // Membuat elemen lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img src="" alt="Lightbox Image">
            <div class="lightbox-caption">
                <h3></h3>
                <p></p>
            </div>
            <button class="prev-btn">&lt;</button>
            <button class="next-btn">&gt;</button>
        </div>
    `;
    document.body.appendChild(lightbox);

    // Variabel untuk tracking gambar aktif
    let currentImageIndex = 0;
    const visibleItems = () => Array.from(galeriItems).filter(item => 
        item.style.display !== 'none'
    );

    // Fungsi untuk membuka lightbox
    function openLightbox(item, index) {
        const img = item.querySelector('img');
        const caption = item.querySelector('.galeri-overlay');
        const lightboxImg = lightbox.querySelector('img');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');

        lightboxImg.src = img.src;
        lightboxCaption.querySelector('h3').textContent = caption.querySelector('h3').textContent;
        lightboxCaption.querySelector('p').textContent = caption.querySelector('p').textContent;

        currentImageIndex = index;
        lightbox.style.display = 'flex';
        setTimeout(() => {
            lightbox.style.opacity = '1';
        }, 10);
    }

    // Event listeners untuk galeri items
    galeriItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(item, index));
    });

    // Event listener untuk menutup lightbox
    lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    });

    // Navigasi lightbox
    lightbox.querySelector('.next-btn').addEventListener('click', () => {
        const items = visibleItems();
        currentImageIndex = (currentImageIndex + 1) % items.length;
        openLightbox(items[currentImageIndex], currentImageIndex);
    });

    lightbox.querySelector('.prev-btn').addEventListener('click', () => {
        const items = visibleItems();
        currentImageIndex = (currentImageIndex - 1 + items.length) % items.length;
        openLightbox(items[currentImageIndex], currentImageIndex);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') {
                lightbox.click();
            } else if (e.key === 'ArrowRight') {
                lightbox.querySelector('.next-btn').click();
            } else if (e.key === 'ArrowLeft') {
                lightbox.querySelector('.prev-btn').click();
            }
        }
    });
});