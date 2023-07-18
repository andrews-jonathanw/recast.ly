import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';
const { useState } = React;


searchYouTube('cats'); //

var App = () => {
  const [mainVideo, setMainVideo] = useState(exampleVideoData[0]);
  const [videos, setVideos] = useState(exampleVideoData);
  // const [userSearch, searchOptions] = useState(searchYouTube);


  const handleSearch = (query) => {
    searchYouTube(query, (data) => {
      setVideos(data);
      setMainVideo(data[0]); // Update the main video to the first video from search results
    });
  };


  console.log('example Vids', videos);
  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchYouTube={handleSearch} />
        </div>

      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer mainVideo={mainVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={videos} setMainVideo={setMainVideo}/>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
