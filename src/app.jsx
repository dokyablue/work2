import { useState , useEffect , useCallback } from 'react';
import styles from './app.module.css';
import SearchBar from './component/search_bar/search_bar';
import VideoList from './component/video_list/video_list';
import VideoDetail from './component/video_detail/video_detail';

function App({youtube}) {
  const [videos,setVideos] = useState([]);
  const [selectedVideo,setSelectedVideo] = useState(null);

  const selectVideo  = (video) => {
    setSelectedVideo(video);
  };
  const search = useCallback(query => {
    setSelectedVideo(null);
    youtube
    .search(query)
    .then(videos => {
      setVideos(videos);
    });
  },[]);
  useEffect(()=>{
    console.log('useEffect');
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));    
  },[youtube]);


  return (
    <div className={styles.app}>
      <SearchBar onSearch={search}/>
      <section className={styles.content}>
        {
          selectedVideo &&  (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo?'list':'grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;
