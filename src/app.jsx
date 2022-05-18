import { useState , useEffect } from 'react';
import styles from './app.module.css';
import SearchBar from './component/search_bar/search_bar';
import VideoList from './component/video_list/video_list';

function App({youtube}) {
  const [videos,setVideos] = useState([]);

  const search = query => {
    youtube
    .search(query)
    .then(videos => setVideos(videos));
  };
  useEffect(()=>{
    console.log('useEffect');
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));    
  },[]);
  return (
    <div className={styles.app}>
      <SearchBar onSearch={search}/>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
