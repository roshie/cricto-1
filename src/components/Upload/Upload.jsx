import React from 'react'
import Dropzone from 'react-dropzone';


export default function Upload() {

    const handleDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
      };
    
  return (
    <Dropzone onDrop={handleDrop}>
  {({ getRootProps, getInputProps }) => (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag and drop files here, or click to select files</p>
    </div>
  )}
</Dropzone>

  )
}
