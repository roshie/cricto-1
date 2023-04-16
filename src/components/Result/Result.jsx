import React, { useEffect, useState } from "react";
import "./Result.css";
import Card from "./Card";

export default function Result() {
  const [data, setData] = useState([]);

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
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("error fetching video");
      }
    };
    fetchData();
  }, []);

//   if (data.length === 0) {
//     return <div>Loading data...</div>;
//   }

  return (
    <div className="container">
      <div>
        <h1 className="project_Title font-bold flex justify-center">
          Analyse Results
        </h1>
      </div>
      
      
        {data.map((card) => {
                  return <Card {...card} />;
                })}
      
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
