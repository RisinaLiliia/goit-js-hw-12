import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  clearGallery,
  showLoadingIndicator,
  hideLoadingIndicator,
  showLoadMoreButton,
  hideLoadMoreButton,
  scrollPage,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

let currentPage = 1;
let query = '';
let totalHits = 0;
const perPage = 15;

const lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', async e => {
  e.preventDefault();
  query = e.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
    });
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  currentPage = 1;

  try {
    showLoadingIndicator();
    const { hits, totalHits: total } = await fetchImages(
      query,
      currentPage,
      perPage
    );
    totalHits = total;

    if (!hits.length) {
      iziToast.error({
        title: 'Error',
        message: 'No images found. Try again!',
      });
      return;
    }

    renderGallery(hits);
    lightbox.refresh();
    iziToast.success({
      title: 'Success',
      message: `Found ${totalHits} images!`,
    });

    if (hits.length < totalHits) {
      loadMoreBtn.classList.add('visible');
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoadingIndicator();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;

  try {
    showLoadingIndicator();
    const { hits } = await fetchImages(query, currentPage, perPage);

    renderGallery(hits);
    lightbox.refresh();
    scrollPage();

    if (currentPage * perPage >= totalHits) {
      loadMoreBtn.classList.remove('visible');
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoadingIndicator();
  }
});
