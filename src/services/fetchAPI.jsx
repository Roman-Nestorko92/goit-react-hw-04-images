import axios from 'axios';

const apiKey = '33632271-865dceae4afc82cedaa0ea243';
const perPage = 12;
const baseURL = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}&q=`;

const fetchImg = ({ query, currentPage = 1 }) => {
  const url = `${baseURL}${query}&page=${currentPage}`;
  return axios.get(url).then(({ data }) => data.hits);
};

export default fetchImg;
