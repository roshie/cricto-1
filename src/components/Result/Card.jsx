import React from 'react'

export default function Card(props) {
  return (
    <div>
      <div className="m-[5rem] project_container">
        <div className="project_container ">
          <article key="1" className="project_item">
            <img
              className="project_item-image ml-[3.5rem]"
              src={props.thumbnail_url}
            />
            <p className="project_title flex justify-center">
              Length: {props.ball_type}
            </p>
            <p className="project_title flex justify-center">
              Speed: {props.ball_speed}
            </p>
            <p className="project_title flex justify-center">
              Shot Played: {props.shot_played}
            </p>
            <p className="project_title flex justify-center">
              Accuracy: {props.shot_selection_accuracy}
            </p>
            <p className="project_title flex justify-center">
              Ideal Shot: {props.other_recommended_shots}
            </p>
            <iframe
              width="100"
              height="100"
              src={props.url}
              allowfullscreen
            ></iframe>
          </article>
        </div>
      </div>
    </div>
  )
}
