document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('img01');
    var captionText = document.getElementById('caption');
    var closeBtn = document.getElementsByClassName('close')[0];
    var thumbnails = document.getElementsByClassName('thumbnail');
    var donateBtn = document.getElementById('donateBtn'); // Select donate button
    var qrImageSrc = './images/demo.svg'; // Update with the correct QR image path
    var currentIndex;

    function openModal(index) {
        modal.style.display = 'block';

        if (index === 'donate') {
            modalImg.src = qrImageSrc;
            captionText.innerHTML = 'Scan to Donate';
            return;
        }

        modalImg.src = thumbnails[index].src;
        captionText.innerHTML = thumbnails[index].alt;
        currentIndex = index;
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        openModal(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        openModal(currentIndex);
    }

    // Attach click events to thumbnails
    Array.prototype.forEach.call(thumbnails, function(thumbnail, index) {
        thumbnail.addEventListener('click', function() {
            openModal(index);
        });
    });

    // Attach click event to Donate button
    if (donateBtn) {
        donateBtn.addEventListener('click', function() {
            openModal('donate');
        });
    } else {
        console.error('Donate button not found!');
    }

    // Attach close event
    closeBtn.addEventListener('click', closeModal);

    // Next & Prev buttons (if they exist)
    var nextBtn = document.getElementsByClassName('next')[0];
    var prevBtn = document.getElementsByClassName('prev')[0];

    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);

    // Close modal on outside click
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') showNext();
        else if (event.key === 'ArrowLeft') showPrev();
        else if (event.key === 'Escape') closeModal();
    });
});
