import React from "react";
import VideoCard from '.././components/VideoCard.jsx';
import { videos } from '.././data/dummyVideos.js';

function WatchLater({  valueWL , onChangeWL , valueL , onChangeL}) {
    document.title = "Watch Later - Mini YouTube"; // Set the document title for the Watch Later page
    return (
        <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
            {videos
                .filter(video => valueWL.includes(video.id))
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
                ))
            }
        </div>
    );
}

export default WatchLater;