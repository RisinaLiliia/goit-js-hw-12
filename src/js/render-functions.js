const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

export function renderGallery(images, totalHits, currentPage, perPage) {
  if (images.length === 0) {
    hideLoadMoreButton();
  } else {
    const markup = images
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => `
      <a href="${largeImageURL}" class="gallery__item">
        <div class="photo-card">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${likes}</p>
            <p class="info-item"><b>Views:</b> ${views}</p>
            <p class="info-item"><b>Comments:</b> ${comments}</p>
            <p class="info-item"><b>Downloads:</b> ${downloads}</p>
          </div>
        </div>
      </a>
    `
      )
      .join('');
    gallery.insertAdjacentHTML('beforeend', markup);

    if (currentPage * perPage < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  }
}

export function clearGallery() {
  gallery.innerHTML = '';
  hideLoadMoreButton();
}

export function showLoadingIndicator() {
  loader.classList.remove('hidden');
  loader.classList.add('visible');
  loader.classList.add('animate__animated', 'animate__fadeIn');
}

export function hideLoadingIndicator() {
  setTimeout(() => {
    loader.classList.add('hidden');
    loader.classList.remove('animate__fadeIn');
  }, 500);
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
  loadMoreBtn.classList.add('visible');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}

export function scrollPage() {
  const { height: cardHeight } =
    gallery.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
