import React, { useState } from "react";
import "./Upload.css";

export default function Upload() {
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [file, setFile] = useState(null);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
      };
    
      const handleFormSubmit = async () => {
        console.log('Submit');
        try {
          const formData = new FormData();
          formData.append('video', file);
    
          const response = await fetch('https://3f0e-2409-4072-d-c198-f5c5-676b-c55e-5054.ngrok-free.app/api/upload-video',
          {
            method: 'POST',
            body: formData,
            mode: "cors",

            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
          });
    
          if (response.ok) {
            
            console.log('File uploaded successfully');
          } else {
            
            console.error('File upload failed');
          }
        } catch (error) {
          
          console.error('File upload failed', error);
        }
      };
    

	return(
        <div>
        <div>
        <h1 className="flex justify-center content-center mt-[4rem] font-bold text-3xl ">
          Upload the files
        </h1>
      </div>
   <div className="flex flex-col justify-center content-center mt-[4rem] bg-gray-900 p-4 w-full h-[20rem]">
    <div className="flex flex-col items-center h-full border-2 justify-center gap-6">
			<input type="file" name="file" onChange={changeHandler} className="ml-[6rem]" />
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button type="submit" className="btn btn-blue" onClick={handleFormSubmit}>Submit</button>
			</div>
            </div>
		</div>
        </div>
	)
}

