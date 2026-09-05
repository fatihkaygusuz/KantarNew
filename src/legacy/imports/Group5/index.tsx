import MaskGroup from "@/legacy/imports/MaskGroup";

export default function Group() {
  return (
    <div className="absolute bottom-0 right-0 w-[1083px] h-[818px] md:top-[0px] md:left-[0px] md:right-[0px] md:bottom-[0px] md:w-[853px] md:h-[638px] lg:bottom-0 lg:right-0 lg:top-auto lg:left-auto d1:w-[823.1px] d2:w-[888.1px] d3:w-[953px] d4:w-[1018px] d5:w-[1083px] d1:h-[621.7px] d2:h-[670.8px] d3:h-[719.8px] d4:h-[768.9px] d5:h-[818px]">
      <div className="s4-mask relative size-full md:w-[853px] md:h-[638px] lg:size-full">
        <MaskGroup />
      </div>
      <p
        className="s4-iq absolute font-['Palanquin:Bold',sans-serif] leading-none tracking-[-20px] d1:tracking-[-15.2px] d2:tracking-[-16.4px] d3:tracking-[-17.6px] d4:tracking-[-18.8px] d5:tracking-[-20px] whitespace-nowrap z-10 select-none pointer-events-none text-[524px] top-[158px] left-[397px] md:text-[364px] md:top-auto md:right-[19px] md:bottom-[20px] md:left-[387px] md:h-[360px] d1:text-[398.2px] d2:text-[429.7px] d3:text-[461.1px] d4:text-[492.6px] d5:text-[524px] d1:top-[120.1px] d2:top-[129.6px] d3:top-[139px] d4:top-[148.5px] d5:top-[158px] d1:left-[301.7px] d2:left-[325.5px] d3:left-[349.4px] d4:left-[373.2px] d5:left-[397px] lg:right-auto lg:bottom-auto lg:h-auto"
        style={{ color: "var(--color-text-primary)", fontWeight: 900 }}
      >IQ</p>
    </div>
  );
}
