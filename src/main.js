import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  clearGallery,
  showLoadingIndicator,
  hideLoadingIndicator,
  scrollPage,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');

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

    renderGallery(hits, totalHits, currentPage, perPage);
    lightbox.refresh();
    iziToast.success({
      title: 'Success',
      message: `Found ${totalHits} images!`,
    });
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

    renderGallery(hits, totalHits, currentPage, perPage);
    lightbox.refresh();
    scrollPage();

    if (currentPage * perPage >= totalHits) {
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
