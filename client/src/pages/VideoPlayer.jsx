import React from 'react';

const VideoPlayer = () => {
  // Specify the file path of the movie
  const videoUrl = "/MovieFiles/BatmanTheDarkKnight.mp4"; // Adjust the file path accordingly

  return (
    <div>
      <video controls>
        {/* Set the source directly to the file path */}
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
