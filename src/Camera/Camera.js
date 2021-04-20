import React, { useState, useRef } from "react";
import "./styles.css";
import { useUserMedia } from "../Hooks/use-camera";
import { Link } from "react-router-dom";
import capture from "../img/capture.png";

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" },
};

export function Camera({ onCapture }) {
  const canvasRef = useRef();
  const videoRef = useRef();

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const mediaStream = useUserMedia(CAPTURE_OPTIONS);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleCanPlay() {
    setIsVideoPlaying(true);
    videoRef.current.play();
  }

  function handleCapture() {
    let context = canvasRef.current.getContext("2d");
    context.drawImage(
      videoRef.current,
      0,
      0,
      videoRef.current.videoWidth,
      videoRef.current.videoHeight,
      0,0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    console.log("da chup",videoRef.current.width,videoRef.current.height);
  }

  return (
    <div className="app">
      <div className="app-page">
        <div className="content">
          <div className="scroll-content noscroll">
            <div className="container">
              <div className="text-container">
                <div className="col">
                  <div className="text">
                    <h1>Veuillez scanner une référence de couleur</h1>
                    <canvas ref={canvasRef}></canvas>
                  </div>
                </div>
              </div>
              <div id="scanner">
                <video
                  ref={videoRef}
                  onCanPlay={handleCanPlay}
                  autoPlay
                  playsInline
                  muted
                />
              </div>
              <div
                hidden={!isVideoPlaying}
                className="overlay scan-overlay"
              ></div>
              <div className="image-container">
                <div className="col">
                  <div className="btn-capture">
                    <Link
                      to="/Colordata"
                      onClick={handleCapture}
                    >
                      <img src={capture} alt="capture" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Camera;
