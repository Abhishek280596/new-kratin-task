import React from "react";
import VideoPlayer from "react-video-js-player";
import Back from "./videos/back.mp4";
import Shoulder from "./videos/shoulder.mp4";
import Knee from "./videos/knee.mp4";
import "./Video.css";
import "../App.css";
import Footer from "./Footer";

const VideoJs = () => {
  const videoSrc1 = Back;
  const poster1 =
    "https://thumbs.dreamstime.com/b/elderly-man-suffering-back-pain-vector-backache-icon-grandfather-having-cartoon-136669616.jpg ";

  const videoSrc2 = Shoulder;
  const poster2 =
    "https://previews.123rf.com/images/ankomando/ankomando1808/ankomando180800004/112364960-senior-women-who-have-neck-pain.jpg";

  const videoSrc3 = Knee;
  const poster3 =
    "https://previews.123rf.com/images/imlucky/imlucky2002/imlucky200200172/141107576-woman-feel-knee-pain-vector-isolated-painful-joint-girl-with-sad-facial-expression-character-holding.jpg";

  return (
    <div class="header-color">
      <br />
      <div class="container">
        <div class="jumbotron" style={{ opacity: "0.7" }}>
          <div class="v1">
            <VideoPlayer
              src={videoSrc1}
              poster={poster1}
              width="350"
              height="200"
            />
            <p id="p1">
              Back exercises are almost always necessary to rehabilitate the
              spine and alleviate back pain.We provide an effective controlled,
              gradual exercise program that is tailored for every individual.
            </p>
            <br />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="jumbotron" style={{ opacity: "0.7" }}>
          <div class="v2">
            <VideoPlayer
              src={videoSrc2}
              poster={poster2}
              width="350"
              height="200"
            />
            <p id="p2">
              Shoulder stretches can help relieve muscle tension, pain, and
              tightness in the neck and shoulders.Our Effective exercise program
              will help you getting rid of all the shoulder problems.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="jumbotron" style={{ opacity: "0.7" }}>
          <div class="v3">
            <VideoPlayer
              src={videoSrc3}
              poster={poster3}
              width="350"
              height="200"
            />
            <p id="p3">
              Knee strengthening exercises do not affect the knee joint
              directly, but they strengthen the muscles surrounding it. Strong
              muscles in the legs can help provide support for the knees.Our
              exercise program will help you strengthen the msucles surrounding
              the knee.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideoJs;
