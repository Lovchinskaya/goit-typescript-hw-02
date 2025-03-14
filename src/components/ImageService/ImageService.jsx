import axios from "axios";


export const fetchImages = async (topic) => {
    const response = await axios.get(
              `https://api.unsplash.com/photos/?client_id=1faky0Z-L8WXuSOFqf8qkWNtiTYUvTwzwxWKCsw4lAA&query=${topic}`
            );
            return (response.data)
}