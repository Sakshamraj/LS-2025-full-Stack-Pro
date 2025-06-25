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


function handleSetL(id, L) {
    const newL = L.slice();
    const newItem = id;
    // Check if the item is already in the like list
    if (newL.includes(newItem)) {
        // If it is, remove it from the list
        const index = newL.indexOf(newItem);
        if (index > -1) {
            newL.splice(index, 1);
        }
        return newL; // Exit the function after removing
    }
    // If it is not, add it to the list
    // This ensures that the item is only added if it is not already present
    // This prevents duplicates in the like list
    // and allows for toggling the like status
    // This is useful for the "Like" button functionality
    // This is useful for the "Remove from Like" button functionality
    newL.push(newItem);
   return newL;
}
function handleSetWL(id, WL) {
    const newWL = WL.slice();
    // Check if the item is already in the watch later list
    if (newWL.includes(id)) {
        // If it is, remove it from the list
        const index = newWL.indexOf(id);
        if (index > -1) {
            newWL.splice(index, 1);
        }
        return newWL; // Exit the function after removing
    }
    // If it is not, add it to the list
    // This ensures that the item is only added if it is not already present
    // This prevents duplicates in the watch later list
    // and allows for toggling the watch later status
    // This is useful for the "Add to Watch Later" button functionality
    // This is useful for the "Remove from Watch Later" button functionality
    // This is useful for the "Watch Later" page functionality
    newWL.push(id);
    return newWL;
}

    

function VideoCard({id, thumbnail, title, channel, views, time, onChangeWL, valueWL, onChangeL, valueL}) {
return (
   <div className="col" style={{ padding: '0 6px' }}>
      <div className="video-card">
         <img 
            src={thumbnail}
            alt={title}
         />
         <div>
            <div style={{float:'left',width:'90%'}}>
               <h3 className="video-title">{title}</h3>
               <p className="video-channel">{channel}</p>
               <p className="video-views">{views} views • {time} ago</p>
            </div>
            <div className="video-actions nav-item dropdown block" style={{float:'left',width:'10%'}}>
               <svg className="nav-link dropdown-toggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" role="button" data-bs-toggle="dropdown" aria-expanded="false" height={20}>
                  <path className="fa-secondary" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256z" />
                  <path className="fa-primary" d="M120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0zm0 320A56 56 0 1 0 8 416a56 56 0 1 0 112 0z" />
               </svg>
               <ul className="dropdown-menu">
                  <li  
                     className="dropdown-item like-button"
                     onClick={() => onChangeL(handleSetL(id, valueL))}
                     style={{color: valueL.includes(id) ? 'red' : 'inherit'}}
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={16}><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                     {valueL.includes(id) ? ' Unlike' : ' Like'}
                  </li>
                  <li 
                     className="dropdown-item watch-later-button"
                     onClick={() => onChangeWL(handleSetWL(id, valueWL))}
                     style={{color: valueWL.includes(id) ? 'red' : 'inherit'}}
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={16}><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                     {valueWL.includes(id) ? ' Remove from Watch Later' : ' Add to Watch Later'}
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
);
}

export default VideoCard;
// This VideoCard component can be used in various parts of the application
// where a video thumbnail and details are needed, such as in a video feed or watch later list
