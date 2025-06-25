import React from "react";
import VideoCard from '.././components/VideoCard.jsx';
import { videos } from '.././data/dummyVideos.js';

function Home({ valueWL, onChangeWL, valueL, onChangeL, tag, setTag }) {
  /**
   * Home Component
   * 
   * Displays a list of video cards.
   * Filters videos based on the selected tag.
   * 
   * @param {Object} props - The properties passed to the component.
   * @param {Array} props.valueWL - Watch Later list.
   * @param {Function} props.onChangeWL - Function to update Watch Later list.
   * @param {Array} props.valueL - Liked videos list.
   * @param {Function} props.onChangeL - Function to update Liked videos list.
   * @param {string} props.tag - Selected tag for filtering videos.
   */
    document.title = "Home - Mini YouTube" // Set the document title for the Home page 
  const tags = ['All', 'Web Development', 'Music', 'Comedy', 'Mixes', 'Chessboard', 'Python', 'Live'];
  return (
    <div className="container-fluid">
        {/* tags filter */}
      <div className="p-3 m-0 border-0 bd-example m-0 border-0" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '14px', paddingTop: '3px', paddingBottom: '3px', paddingLeft: '6px', paddingRight: '6px', backgroundColor: '#282c34' }}>
        {tags.map(videoTag => (
          <button
            key={videoTag}
            type="button"
            className={`btn btn-secondary${tag === videoTag || (tag === '' && videoTag === 'All') ? ' active' : ''}`}
            onClick={() => setTag(videoTag === 'All' ? '' : videoTag)}
            style={{ margin: '0 5px', padding: '5px 10px', fontSize: '14px', opacity: tag === videoTag || (tag === '' && videoTag === 'All') ? 1 : 0.7, backgroundColor: tag === videoTag || (tag === '' && videoTag === 'All') ? ' antiquewhite' : ' black', color: tag === videoTag || (tag === '' && videoTag === 'All') ? ' black' : ' white' }}
          >
            {videoTag}
          </button>
        ))}
      </div>
      <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
        {videos
          .filter(video => !tag || video.tag === tag)
          .map(video => (
            <VideoCard
              key={video.id}
              id={video.id}
              thumbnail={video.thumbnail}
              title={video.title}
              channel={video.channel}
              views={video.views}
              time={video.time}
              onChangeWL={onChangeWL}
              valueWL={valueWL}
              onChangeL={onChangeL}
              valueL={valueL}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;