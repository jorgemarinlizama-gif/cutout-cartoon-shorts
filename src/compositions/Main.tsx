import React from "react";
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from "remotion";

export const Main: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const titleOpacity = interpolate(frame, [0, 18, durationInFrames - 18, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: "clamp", extrapolateRight: "clamp"});
  const titleY = interpolate(frame, [0, 20], [50, 0], {extrapolateLeft: "clamp", extrapolateRight: "clamp"});

  return (
    <AbsoluteFill style={{backgroundColor: "#171522", justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
      <div style={{position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 42%, #51406e 0%, #252039 45%, #171522 100%)"}} />
      <div style={{opacity: titleOpacity, transform: `translateY(${titleY}px)`, color: "#fff7e8", fontFamily: "Arial, sans-serif", fontSize: 82, fontWeight: 900, textAlign: "center", lineHeight: 1.05, padding: 70, textShadow: "0 8px 0 rgba(0,0,0,.2)"}}>
        YOUR NEXT<br />CARTOON SHORT
      </div>
      <div style={{position: "absolute", bottom: 150, color: "#d7c8f5", fontFamily: "Arial, sans-serif", fontSize: 26, letterSpacing: 5, fontWeight: 700}}>CUTOUT CARTOON STUDIO</div>
    </AbsoluteFill>
  );
};
