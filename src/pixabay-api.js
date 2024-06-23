const BASE_LINK = "https://pixabay.com/api/";
const API_KEY = "42886429-7a7bfb8153d3dee4354b6c91e";

async function fetchQuery(query, page) {
   const res = await fetch(`${BASE_LINK}?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`);
   const data = await res.json();
   return data;
}

export default fetchQuery;