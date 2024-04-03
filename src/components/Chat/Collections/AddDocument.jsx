import React, { useState } from "react";

import axios from "axios";

const AddDocument = ({ collectionId, fetchDocuments }) => {
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    const url = `http://localhost:3001/add-document?collectionId=${collectionId}`;

    const formData = new FormData();

    formData.append("files", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios.post(url, formData, config).then((response) => {
      console.log("Response: ", response.data);
      fetchDocuments();
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>

        <input type="file" onChange={handleChange} />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default AddDocument;
