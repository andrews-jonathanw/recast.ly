import searchYouTube from '../lib/searchYouTube.js';
const { useState } = React;

var Search = ({ searchYouTube }) => {
  var debounceTimeout = null;
  const [term, setTerm] = useState('');

  var handleSearch = (query) => {
    searchYouTube(query);
  };
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={(event), function(event) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(handleSearch(event.target.value), 500);
      }} />
      <button className="btn hidden-sm-down" onClick={() => setTerm(event.target.value)}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
