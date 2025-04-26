import axios from 'axios';



interface Image {
  id: number;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
  slug: string,
  likes: number,
}

interface SearchResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

export const fetchImage = async (topic: string, currentPage: number) : 
Promise<Image[]> => {
    const axiosParams = {
      params: {
        query: topic,
        client_id: '1faky0Z-L8WXuSOFqf8qkWNtiTYUvTwzwxWKCsw4lAA',
        page: currentPage,
        per_page: 15,
      },
    };
    console.log(axiosParams);
    const response = await axios.get<SearchResponse>(
      `https://api.unsplash.com/search/photos`,
      axiosParams
    );
    return response.data.results;
  };

