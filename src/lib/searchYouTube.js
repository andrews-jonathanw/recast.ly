import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      videoEmbeddable: true,
    },
    success: function(data) {
      data = data.slice(0, 5);
      //console.log('Youtube vids', data);
      callback(data);
      //callback(data.items);
    },
    error: function(data) {
      console.log('error!');
    },
  }, 500);
};

export default searchYouTube;
