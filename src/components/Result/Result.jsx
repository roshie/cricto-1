import React, { useEffect, useState } from "react";
import "./Result.css";

export default function Result() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://3f0e-2409-4072-d-c198-f5c5-676b-c55e-5054.ngrok-free.app/api/analyze-video"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch video");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("error fetching video");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div>
        <h1 className="project_Title font-bold flex justify-center">
          Analyse Results
        </h1>
      </div>
      return (
      <div className="m-[5rem] project_container">
        <div className="project_container ">
          <article key="1" className="project_item">
            <img
              className="project_item-image ml-[3.5rem]"
              src={data.thumbnail_url}
            />
            <p className="project_title flex justify-center">
              Length: {data.ball_type}
            </p>
            <p className="project_title flex justify-center">
              Speed: {data.ball_speed}
            </p>
            <p className="project_title flex justify-center">
              Shot Played: {data.shot_played}
            </p>
            <p className="project_title flex justify-center">
              Accuracy: {data.shot_selection_accuracy}
            </p>
            <p className="project_title flex justify-center">
              Ideal Shot: {data.other_recommended_shots}
            </p>
            <iframe
              width="100"
              height="100"
              src={data.url}
              allowfullscreen
            ></iframe>
          </article>
        </div>
      </div>
      ) ;
    </div>
  );
}

// video_id: 1,
//     thumbnail_url: "url",
//     ball_type: "Full Length",
//     ball_speed: "6 mps",
//     shot_played: "On Drive",
//     shot_selection_accuracy: "100%",
//     other_recommended_shots: ["Cover Drive"],
