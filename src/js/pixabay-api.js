import axios from 'axios';

const API_KEY = '48284605-8cfffb6b97886c5ff39067830';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 15) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  });

  const url = `${BASE_URL}?${params.toString()}`;

  try {
    const { data } = await axios.get(url);

    if (!data.hits.length) {
      throw new Error('No images found');
    }

    return data;
  } catch (error) {
    console.error('Error fetching images:', error.message);
    throw new Error('Failed to fetch images. Please try again later.');
  }
}
