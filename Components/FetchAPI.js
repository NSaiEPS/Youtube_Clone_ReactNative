
const BASE_URL='https://youtube-v31.p.rapidapi.com'
// import axios from "axios";






const options = {
	method: 'GET',
//   params: {
      
//     minResults: '50'
//   },
	headers: {
		'X-RapidAPI-Key': '71fc0cf23amshc5358da3033f688p147819jsn0fe53a3f616e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchFromAPI= async(url)=>{
  const response = await fetch(`${BASE_URL}/${url}`, options);
    const data = await response.json();
    return data;


	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));
}




// export const fetchFromAPI= async(url)=>{
// const {data}=  await  axios.get(`${BASE_URL}/${url}`,
// options);

// return data;
// }