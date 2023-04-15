import React, { useState } from "react";
import "./Upload.css";

export default function Upload() {
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	
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
				<button className="btn btn-blue" onClick={handleSubmission}>Submit</button>
			</div>
            </div>
		</div>
        </div>
	)
}

