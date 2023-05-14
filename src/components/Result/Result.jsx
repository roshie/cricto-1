import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../config";
import "./Result.css";
import Card from "./Card";
import Loading from "../../assets/loader.gif";

export default function Result() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // const sampleData = {
  //   analysis: {
  //     percentage: 100,
  //     statistics: { 0: 0, 50: 0, 100: 2 },
  //   },
  //   data: [
  //     {
  //       ball_type: "full",
  //       recommended_shots: [
  //         ["Straight Drive", "XS8swTgb3Hg"],
  //         ["Cover Drive", "i_MbWx8BUx8"],
  //         ["On Drive", "KDxJlW6cxRk"],
  //         ["Leg Glance", "jTo14VFNCHk"],
  //         ["Defence", "pzRORhkiaDk"],
  //       ],
  //       shot_played: "Drive",
  //       shot_selection_accuracy: 100,
  //       thumbnail_url: Test,
  //       video_id: 1,
  //     },
  //     {
  //       ball_type: "full",
  //       recommended_shots: [
  //         ["Straight Drive", "XS8swTgb3Hg"],
  //         ["Cover Drive", "i_MbWx8BUx8"],
  //         ["On Drive", "KDxJlW6cxRk"],
  //         ["Leg Glance", "jTo14VFNCHk"],
  //         ["Defence", "pzRORhkiaDk"],
  //       ],
  //       shot_played: "Drive",
  //       shot_selection_accuracy: 100,
  //       thumbnail_url: Test,
  //       video_id: 2,
  //     },
  //   ],
  // };

  useEffect(() => {
    const fetchData = async () => {
      const formData = new FormData();
      formData.append("session_id", localStorage.getItem("session_id"));
      try {
        const response = await fetch(`${BACKEND_URL}/api/analyze-video`, {
          method: "POST",
          body: formData,
        });
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("error fetching video");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center flex-col">
      {loading ? (
        <>
          <div className="mt-[5rem] mb-3 flex justify-center">
            <img src={Loading} alt="loading" />
          </div>
          <h1 className="project_Title font-bold text-center">
            Please Wait while we are Analyzing Your Videos
          </h1>
          <div className="flex justify-center">
            <div class="lds-ring mx-2">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <h1 className="font-bold text-center text-4xl mt-[5rem]">
              Analyzed Results...
            </h1>
          </div>
          {/* <div className="grid grid-cols-2 my-3 mx-[5rem]">
            <div>
              <button className="btn btn-blue text-lg font-bold">
                {"<"} Prev
              </button>
            </div>
            <div className="flex justify-end">
              <button className="btn btn-blue text-lg font-bold">
                Next {">"}
              </button>
            </div>
          </div> */}
          <div>
            {data.data.map((card, i) => {
              return <Card {...card} id={i} />;
            })}
          </div>
          <div className="text-center">
            <button
              className="btn btn-blue my-4"
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              Go to Home
            </button>
          </div>
        </>
      )}
    </div>
  );
}
