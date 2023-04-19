import React from "react";

const comments = {
  100: "Good",
  50: "Okay",
  0: "To be Improved",
};

const emojis = {
  100: "😀",
  50: "🙂",
  0: "🤔",
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Card(props) {
  return (
    <div className="mx-[3rem] md:mx-[5rem] my-[5rem] custom-card">
      <article key="1" className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center mx-3">
          <img width={450} src={props.thumbnail_url} alt="gif" />
        </div>
        <div className="col mx-3">
          <h3 className="font-bold text-4xl my-5">Ball {props.id + 1}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-6 m-3">
              <b>Ball Length:</b>
              <div className="values font-bold text-xl">
                {capitalizeFirstLetter(props.ball_type)}
              </div>
            </div>
            <div className="col-6 m-3">
              <b>Shot Played:</b>
              <div className="values font-bold text-xl">
                {props.shot_played}
              </div>
            </div>
            <div className="col-6 m-3">
              <b>Accuracy:</b>
              <div className="values font-bold text-xl">
                {comments[props.shot_selection_accuracy]}
              </div>
            </div>
            <div className="col-6 m-3">
              <b>Performance:</b>
              <div className="text-4xl text-center">
                {emojis[props.shot_selection_accuracy]}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-4xl font-bold my-4">
              Other Suggested shots for this Length...
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {props.recommended_shots.map(([shot, url]) => {
                return (
                  <div>
                    <div>{shot}</div>
                    <iframe
                      title={shot}
                      width="200"
                      height="200"
                      src={`https://www.youtube.com/embed/${url}`}
                      allowfullscreen
                    ></iframe>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
