// Add banner animation initialization
document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Photo Gallery Lightbox functionality
    const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
    
    photoPlaceholders.forEach(photo => {
        photo.addEventListener('click', function() {
            openLightbox(this.getAttribute('data-img') || 'Placeholder Image', this.getAttribute('data-caption') || 'Image Caption');
        });
    });
    
    // Banner photo click functionality
    const bannerPhotos = document.querySelectorAll('.photo-banner-card');
    
    bannerPhotos.forEach(photo => {
        photo.addEventListener('click', function() {
            const imgElement = this.querySelector('img');
            const imgSrc = imgElement ? imgElement.getAttribute('alt') : 'Memorial Photo';
            const imgCaption = imgElement ? imgElement.getAttribute('alt') : 'Memorial Photo';
            
            openLightbox(imgSrc, imgCaption);
        });
    });
    
    // Audio Player functionality
    const audioPlayers = document.querySelectorAll('.media-placeholder:not(.video-placeholder)');
    
    audioPlayers.forEach(player => {
        player.addEventListener('click', function() {
            this.classList.toggle('playing');
            if (this.classList.contains('playing')) {
                this.innerHTML = 'Playing... (Click to Pause)';
            } else {
                this.innerHTML = this.getAttribute('data-title') || 'Audio Player';
            }
        });
    });
    
    // Video Player functionality
    const videoPlayers = document.querySelectorAll('.video-placeholder');
    
    videoPlayers.forEach(player => {
        player.addEventListener('click', function() {
            this.classList.toggle('playing');
            if (this.classList.contains('playing')) {
                this.innerHTML = 'Playing... (Click to Pause)';
            } else {
                this.innerHTML = this.getAttribute('data-title') || 'Video Player';
            }
        });
    });
    
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Lightbox functionality
function openLightbox(imgSrc, caption) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <div class="lightbox-placeholder">${imgSrc}</div>
            <div class="lightbox-caption">${caption}</div>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    // Close lightbox when clicking on the close button or outside the image
    const closeBtn = lightbox.querySelector('.close-lightbox');
    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        document.body.removeChild(lightbox);
        document.body.style.overflow = 'auto';
    }
}
