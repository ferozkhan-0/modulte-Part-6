import axios from "../../utils/axios";
//videos?tags_like=javascript&tags_like=react&tags_like=tips&id_ne=1&_limit=5
export const getRelatedVideos = async ({tags,id}) => {
    const limit=5;
    console.log(tags)
    let queryString = tags?.length >0 ? tags.map(tag=>`tags_like=${tag}`)
    .join('&')+`&id_ne=${id}&_limit=${limit}`:`&id_ne=${id}&_limit=${limit}`
    const response = await axios.get(`/videos?${queryString}`);
    console.log(`/videos?${queryString}`)
    return response.data;
};
