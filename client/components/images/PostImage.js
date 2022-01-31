import React from 'react';

function PostImage({url}) {
  return (
    
    <div style = {{
        backgroundImage: "url(" + url + ")",
        backgroundRepewat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "500px",
      }}>

    </div>
   
  )
}

export default PostImage;
