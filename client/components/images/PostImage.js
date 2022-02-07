import React from 'react';

function PostImage({url}) {
  return (
    
    <div style = {{
        backgroundImage: "url(" + url + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "900px",
      }}>

    </div>
   
  )
}

export default PostImage;
