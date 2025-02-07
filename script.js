document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('img01');
    var captionText = document.getElementById('caption');
    var closeBtn = document.getElementsByClassName('close')[0];
    var thumbnails = document.getElementsByClassName('thumbnail');
    var currentIndex;

    function openModal(index) {
        modal.style.display = 'block';
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

    Array.prototype.forEach.call(thumbnails, function(thumbnail, index) {
        thumbnail.addEventListener('click', function() {
            openModal(index);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    document.getElementsByClassName('next')[0].addEventListener('click', showNext);
    document.getElementsByClassName('prev')[0].addEventListener('click', showPrev);

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            showNext();
        } else if (event.key === 'ArrowLeft') {
            showPrev();
        } else if (event.key === 'Escape') {
            closeModal();
        }
    });
});