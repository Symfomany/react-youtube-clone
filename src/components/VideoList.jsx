import React from 'react';

const VideoList = (props) => {
  console.log(props)
  const VideoItems = props.videos.map((video) => {
    return (
      <li>{video.snippet.title}</li>
    )
  });
  return (
    <ul className="col-md-4 list-group">
      {VideoItems}
    </ul>
  )
}

export default VideoList;