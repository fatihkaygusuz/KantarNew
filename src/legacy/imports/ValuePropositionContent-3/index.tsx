import svgPaths from "./svg-1zy762th92";
import dualOrbitVideo from "./dual-orbit.mp4";

export default function ValuePropositionContent() {
  return (
    <div className="bg-[#f9f6f6] flex flex-row items-center justify-center gap-[32px] d1:gap-[24.32px] d2:gap-[26.24px] d3:gap-[28.16px] d4:gap-[30.08px] d5:gap-[32px] pl-[128px] d1:pl-[97.28px] d2:pl-[105px] d3:pl-[112.6px] d4:pl-[120.3px] d5:pl-[128px] pt-[112px] d1:pt-[85.12px] d2:pt-[91.84px] d3:pt-[98.56px] d4:pt-[105.3px] d5:pt-[112px] pb-[64px] d1:pb-[48.64px] d2:pb-[52.48px] d3:pb-[56.32px] d4:pb-[60.16px] d5:pb-[64px] relative w-full" data-name="Value Proposition Content">
      <div className="absolute w-full" style={{ top: "-1px", right: "-95px", bottom: "-651px", left: "1px", paddingLeft: "30px", paddingRight: "30px", marginTop: "0px", marginBottom: "0px" }} data-name="dual orbit 1">
        <video
          src={dualOrbitVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute h-full object-cover"
          style={{ left: "0px", width: "637px", height: "780px", borderRadius: "32px", marginTop: "30px", marginBottom: "30px", marginRight: "0px", marginLeft: "0px" }}
        />
      </div>
    </div>
  );
}