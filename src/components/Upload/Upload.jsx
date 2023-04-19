import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL, generateString, formatBytes } from "../../config";
import "./Upload.css";

export default function Upload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("session_id") === null)
      localStorage.setItem("session_id", generateString(5));
  }, []);

  const changeHandler = (event) => {
    let files = [...event.target.files];
    setSelectedFiles(files);
    setIsSelected(true);
  };

  const handleFormSubmit = async () => {
    if (selectedFiles.length < 1) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("session_id", localStorage.getItem("session_id"));
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("files", selectedFiles[i]);
      }

      const response = await fetch(`${BACKEND_URL}/api/upload-video`, {
        method: "POST",
        body: formData,
      });
      console.log(response.json());
      navigate("/result");
    } catch (error) {
      console.error("File upload failed", error);
    }
  };

  return (
    <div>
      <div>
        <h1 className="flex justify-center content-center mt-[4rem] font-bold text-3xl ">
          Upload files
        </h1>
      </div>
      <div className="flex flex-col justify-center content-center mt-[4rem] bg-gray-900 p-4 w-full h-[20rem]">
        <div className="flex flex-col items-center h-full border-2 justify-center gap-6">
          <p className="text-xl font-bold">
            Select the Practice Session Videos
          </p>
          <input
            type="file"
            name="file"
            onChange={changeHandler}
            className="ml-[6rem]"
            multiple
          />
          {isSelected ? (
            <div className="w-100">
              {selectedFiles.map((file) => {
                return (
                  <div className="flex justify-between video-card p-3 rounded">
                    <div className="col-4 px-2">{file.name}</div>
                    <div className="col-4 px-2">{formatBytes(file.size)}</div>
                    <div className="col-4 px-2">
                      {/* {loading && (
                        <div class="lds-ring">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      )} */}
                      {/* {file.isUploaded === "uploaded" && (
                        <span class="checkmark">
                          <div class="checkmark_stem"></div>
                          <div class="checkmark_kick"></div>
                        </span>
                      )} */}
                    </div>
                    {/* <div className="col-4 px-2">X</div> */}
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              <p className="text-lg">
                It is recommended to follow the following guidelines to Record
                and upload videos to ensure best results.
                <ul>
                  <li>
                    {" "}
                    - The Video should be in portrait mode, Straight to the
                    batsman. It Should cover only 70% of the pitch
                  </li>
                  <li>
                    {" "}
                    - Make sure that the video is trimmed only to the duration
                    of shot played
                  </li>
                  <li>
                    {" "}
                    - Only one ball, one batsman and one set of stumps should be
                    visible in the video
                  </li>
                </ul>
              </p>
            </>
          )}
          <div>
            <button
              type="button"
              disabled={loading}
              className="btn btn-blue"
              onClick={handleFormSubmit}
            >
              {loading ? (
                <div class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                "Analyze Now!"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
