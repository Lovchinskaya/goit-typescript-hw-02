export const fetchImage = async (topic, currentPage) => {
    const axiosParams = {
      params: {
        query: topic,
        client_id: '1faky0Z-L8WXuSOFqf8qkWNtiTYUvTwzwxWKCsw4lAA',
        page: currentPage,
        per_page: 15,
      },
    };
    console.log(axiosParams);
    const response = await axios.get(
      `https://api.unsplash.com/search/photos`,
      axiosParams
    );
    return response.data.results;
  };


// import axios from "axios";

// const keyId = '1faky0Z-L8WXuSOFqf8qkWNtiTYUvTwzwxWKCsw4lAA';

// export const fetchImages = async (topic) => {
//     const response = await axios.get(
//               `https://api.unsplash.com/photos/?client_id=${keyId}&query=${topic}`
//             );
//             return (response.data)
// }