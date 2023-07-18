import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
const { useState } = React;


  /*
  const changeVideo = (video) => {
    console.log(video);
    //useState({video: video});
  };
  */

//var chosenVideo = video;

var App = () => {


  const [mainVideo, setMainVideo] = useState(exampleVideoData[0]);
  const [videos, setVideos] = useState(exampleVideoData);



  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
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
