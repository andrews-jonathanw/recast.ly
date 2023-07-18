const { useState } = React;
const white = '#ffffff';
const blue = '#5252ab';
var VideoPlayer = ({mainVideo}) => {
  if (mainVideo.id === undefined) {
    return <div className="video-player"></div>;
  }

  // toggle button
  const [play, setPlay] = useState(false);
  const [color, toggleColor] = useState(white);

  const toggleChecked = function() {
    setPlay(value => !value);
    const newColor = color === white ? blue : white;
    toggleColor(color => newColor);
  };
  const url = play
    ? `https://www.youtube.com/embed/${mainVideo.id.videoId}${'?autoplay=1'}`
    : `https://www.youtube.com/embed/${mainVideo.id.videoId}`;
  //${'?autoplay=1'}

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allow="accelerometer; autoplay" allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{mainVideo.snippet.title}</h3>
        <div>{mainVideo.snippet.description}</div>
      </div>
      <div class="autoplay"><button style={{background: color}} class="toggle-button" type="button" onClick={() => toggleChecked()}>AutoPlay</button></div>
      {console.log('value of play is: ', play)}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  mainVideo: PropTypes.object,
//  setMainVideo: PropTypes.func.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
