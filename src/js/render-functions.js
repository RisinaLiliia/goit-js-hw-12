const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

export function renderGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags = 'No description',
        likes = 0,
        views = 0,
        comments = 0,
        downloads = 0,
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
}

export function clearGallery() {
  gallery.innerHTML = '';
}

function toggleVisibility(element, action) {
  if (action === 'show') {
    element.classList.remove('hidden');
  } else if (action === 'hide') {
    element.classList.add('hidden');
  }
}

export function showLoadingIndicator() {
  toggleVisibility(loader, 'show');
}

export function hideLoadingIndicator() {
  toggleVisibility(loader, 'hide');
}

export function showLoadMoreButton() {
  toggleVisibility(loadMoreBtn, 'show');
}

export function hideLoadMoreButton() {
  toggleVisibility(loadMoreBtn, 'hide');
}

export function scrollPage() {
  if (!gallery.firstElementChild) return;

  const { height: cardHeight } =
    gallery.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
