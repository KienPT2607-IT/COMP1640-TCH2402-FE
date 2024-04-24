import "./share.css";
import React, { useState } from 'react';
import contributionApi from '../../api/contributionApi'

export default function Share({ eventId, handleToggleReloadContribution }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState("")

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log('file', file)
    setSelectedFile(file);
  };

  const handleUpload = () => {
    const handler = async () => {
      const bodyFormData = new FormData();

      bodyFormData.append('content', content)
      bodyFormData.append('event', eventId)
      bodyFormData.append('documents', selectedFile)

      const response = await contributionApi.create(bodyFormData)
      console.log('reponse', response)
      if (response) {
        console.log(response.message)
        handleToggleReloadContribution()
      }
    }

    handler()
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <input
            placeholder="Content"
            className="shareInput"
            onChange={(e) => {
              setContent(e.target.value)
            }}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOption">
            <label htmlFor="fileInput" className="fileInputWrapper">
              <input type="file" id="fileInput" onChange={handleFileChange} />
            </label>
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
          </div>
          <div>
          </div>
          <button onClick={handleUpload} className="shareButton">Post</button>
        </div>
      </div>
    </div>
  );
}
