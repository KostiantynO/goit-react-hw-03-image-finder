export const getImages = (query, page) => {
  const baseURL = 'https://pixabay.com/api/';
  const API_KEY = '24385209-6a81cc27bd8e526ba32a03073';
  const url = `${baseURL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&safesearch=true`;

  return fetch(url);
};
