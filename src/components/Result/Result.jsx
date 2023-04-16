import React from "react";
import "./Result.css";

const Data = [
  {
    video_id: 1,
    thumbnail_url: "url",
    ball_type: "Full Length",
    ball_speed: "6 mps",
    shot_played: "On Drive",
    shot_selection_accuracy: "100%",
    other_recommended_shots: ["Cover Drive"],
  },
  {
    video_id: 2,
    thumbnail_url: "url",
    ball_type: "Full Length",
    ball_speed: "6 mps",
    shot_played: "On Drive",
    shot_selection_accuracy: "100%",
    other_recommended_shots: ["Cover Drive"],
  },
  {
    video_id: 3,
    thumbnail_url: "url",
    ball_type: "Full Length",
    ball_speed: "6 mps",
    shot_played: "On Drive",
    shot_selection_accuracy: "100%",
    other_recommended_shots: ["Cover Drive"],
  },
  {
    video_id: 4,
    thumbnail_url: "url",
    ball_type: "Full Length",
    ball_speed: "6 mps",
    shot_played: "On Drive",
    shot_selection_accuracy: "100%",
    other_recommended_shots: ["Cover Drive"],
  },
  {
    video_id: 5,
    thumbnail_url: "url",
    ball_type: "Full Length",
    ball_speed: "6 mps",
    shot_played: "On Drive",
    shot_selection_accuracy: "100%",
    other_recommended_shots: ["Cover Drive"],
  },
  {
    video_id: 6,
    thumbnail_url: "url",
    ball_type: "Full Length",
    ball_speed: "6 mps",
    shot_played: "On Drive",
    shot_selection_accuracy: "100%",
    other_recommended_shots: ["Cover Drive"],
  },
];

export default function Result() {
  <section>
    <div className="container">
      {Data.map(
        ({
          video_id,
          thumbnail_url,
          ball_type,
          ball_speed,
          shot_played,
          shot_selection_accuracy,
          other_recommended_shots,
        }) => {
          return (
            <article key={video_id} className="project_item">
              <img className="project_item-image" src={thumbnail_url} />
              <p className="project_title">{ball_type}</p>
              <p className="project_title">{ball_speed}</p>
              <p className="project_title">{shot_played}</p>
              <p className="project_title">{shot_played}</p>
              <h4 className="project_subtitle">{shot_selection_accuracy}</h4>
            </article>
          );
        }
      )}
    </div>
    Hello
  </section>;
}

