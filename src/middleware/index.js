import axios from 'axios';
const YT_KEY = process.env.REACT_APP_YT_API_KEY;

export async function searchYouTube(query) {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          part: 'snippet',
          q: query,
          type: 'video',
          key: YT_KEY,
        },
      }
    );
    // Extract the video data from the response
    const videoData = response.data.items;
    // Create an array of videos to be returned
    const videos = videoData.map((video) => {
      return {
        keyId: video.id.videoId,
        url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      };
    });
    return videos;
  } catch (error) {
    return error;
  }
}
export async function extractVideoId(url) {
  // Regular expression for matching the video ID
  const videoIdRegex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  // Extract the video ID from the URL
  const match = url.match(videoIdRegex);
  if (match && match[1]) {
    return match[1];
  }
}
