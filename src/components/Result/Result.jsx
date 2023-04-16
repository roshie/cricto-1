import React from "react";
import "./Result.css";
import IMG from "../../assets/sample.jpg"

const Results = [
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
//   <section>
//     <div className="container">
//       {Results.map(
//         ({
//           video_id,
//           thumbnail_url,
//           ball_type,
//           ball_speed,
//           shot_played,
//           shot_selection_accuracy,
//           other_recommended_shots,
//         }) => {
          return (
            <div className="m-[5rem]">
            <div>
                <h1 className="project_title font-bold flex justify-center">Analyse Results</h1>
            </div>
            <div className="project_container ">    
            <article key="1" className="project_item">
              <img className="project_item-image ml-[3.5rem]" src={IMG} />
              <p className="project_title flex justify-center">Length: Good Length</p>
              <p className="project_title flex justify-center">Speed: 106</p>
              <p className="project_title flex justify-center">Shot Played: Cover Drive</p>
              <p className="project_title flex justify-center">Accuracy: 80%</p>
              <p className="project_title flex justify-center">Ideal Shot: Straight Drive</p>
              <iframe width="100" height="100" src="" allowfullscreen></iframe>

            </article>
            </div>
            </div>
          )
        //   ;
//         }
//       )}
//     </div>
    
//   </section>;
}

<iframe width="480" height="480" src="https://www.youtube.com/embed/WSnQUKBD8g4" allowfullscreen></iframe>

