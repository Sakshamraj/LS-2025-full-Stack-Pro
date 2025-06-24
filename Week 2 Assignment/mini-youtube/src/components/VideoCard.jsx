import React from 'react';

/** VideoCard Component
 * Displays a single video thumbnail, title, and description.
 * Video Feed (Home Page):
    * A grid/flex layout of Video Cards
    * Each card should include:
      * Thumbnail (placeholder image)
      * Video title
      * Channel name
      * Views + Time posted
      * ❤️ Like button
      * ➕ Add to Watch Later button
 * Watch Later Page:
    Shows only the videos marked “Watch Later”
    Cards should look the same
    Option to remove from list

    * @param {Object} props - The properties passed to the component.
 */
function VideoCard(thumbnail = 'https://via.placeholder.com/150', title = 'Video Title', channel = 'Video Description', views="10k", time="10 days") {
  return (
<div class="video-card">
  <img src={thumbnail} alt={title} />
  <div>
   <div>
      <h3 class="video-title">{title}</h3>
      <p class="video-channel">{channel}</p>
      <p class="video-views">{views} views • {time} ago</p>
   </div>
   <div class="video-actions dropdown">
      <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item like-button" href="#">❤️ Like</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item watch-later-button" href="#">➕ Watch Later</a></li>
      </ul>
   </div>
  </div>
</div>
   );
}

export default VideoCard;
// This VideoCard component can be used in various parts of the application
// where a video thumbnail and details are needed, such as in a video feed or watch later list
