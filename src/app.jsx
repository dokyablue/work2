import { useState , useEffect } from 'react';
import './app.css';
import VideoList from './component/video_list/video_list';

function App() {
  const [videos,setVideos] = useState([]);

  const [name , setName ] = useState('kkh');

  useEffect(()=>{
    console.log('useEffect');

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBooXZSq_tSvK2YsJ8dVFL0v9eJYHbla_8", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  },[]);
  return (
    <VideoList videos={videos} />
  );
}

export default App;
