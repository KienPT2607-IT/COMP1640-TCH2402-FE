import "./share.css";
import React, { useState } from 'react';


export default function Share() {
   const [selectedFile, setSelectedFile] = useState(null);

   const handleFileChange = (event) => {
     const file = event.target.files[0];
     setSelectedFile(file);
   };
 
   const handleUpload = () => {
     if (selectedFile) {
       console.log('Uploading file:', selectedFile);
     } else {
       console.log('No file selected.');
     }
   };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="https://imgs.vietnamnet.vn/Images/2011/08/23/10/20110823104022_avatar09.jpg" alt="" />
          <input
            placeholder="Description"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
        <div className="shareOption">
  <label htmlFor="fileInput" className="fileInputWrapper">
    <input type="file" id="fileInput" onChange={handleFileChange} />
  </label>
  {selectedFile && <p>Selected file: {selectedFile.name}</p>}
</div>
            <div>
    </div>
            <button className="shareButton">Post</button>
        </div>
      </div>
    </div>
  );
}
