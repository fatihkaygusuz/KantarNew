import { useState, useEffect } from "react";

function DateCluster() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const target = 23;
    const duration = 900;
    const start = performance.now();
    const raf = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] d1:gap-[24.32px] d2:gap-[26.24px] d3:gap-[28.16px] d4:gap-[30.08px] d5:gap-[32px] md:gap-y-[13px] md:gap-x-[32px] d1:gap-y-[24.32px] d2:gap-y-[26.24px] d3:gap-y-[28.16px] d4:gap-y-[30.08px] d5:gap-y-[32px] items-start not-italic pt-[250px] md:pt-[170px] d1:pt-[190px] d2:pt-[205px] d3:pt-[220px] d4:pt-[235px] d5:pt-[250px] pr-[40px] md:pr-[20px] d1:pr-[30.4px] d2:pr-[32.8px] d3:pr-[35.2px] d4:pr-[37.6px] d5:pr-[40px] pb-[250px] md:pb-[170px] d1:pb-[190px] d2:pb-[205px] d3:pb-[220px] d4:pb-[235px] d5:pb-[250px] pl-[40px] md:pl-[20px] d1:pl-[30.4px] d2:pl-[32.8px] d3:pl-[35.2px] d4:pl-[37.6px] d5:pl-[40px] w-[390.068px] d1:w-[296.5px] d2:w-[319.9px] d3:w-[343.3px] d4:w-[366.7px] d5:w-[390.1px]" data-name="DateCluster">
      <p className="s1-date-label font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[72px] d1:leading-[54.72px] d2:leading-[59.04px] d3:leading-[63.36px] d4:leading-[67.68px] d5:leading-[72px] relative shrink-0 text-[#1e1e1e] text-[60px] d1:text-[45.6px] d2:text-[49.2px] d3:text-[52.8px] d4:text-[56.4px] d5:text-[60px] tracking-[-1.2px] d1:tracking-[-0.91px] d2:tracking-[-0.98px] d3:tracking-[-1.06px] d4:tracking-[-1.13px] d5:tracking-[-1.2px] whitespace-nowrap">Nov</p>
      <p className="s1-date-body font-['Kantar_Brown:Bold',sans-serif] leading-[260px] md:leading-[200px] d1:leading-[197.6px] d2:leading-[213.2px] d3:leading-[228.8px] d4:leading-[244.4px] d5:leading-[260px] relative shrink-0 text-[#1e1e1e] text-[330px] md:text-[242px] d1:text-[250.8px] d2:text-[270.6px] d3:text-[290.4px] d4:text-[310.2px] d5:text-[330px] tracking-[-26.4px] md:tracking-[-9.4px] d1:tracking-[-20.06px] d2:tracking-[-21.65px] d3:tracking-[-23.23px] d4:tracking-[-24.82px] d5:tracking-[-26.4px] whitespace-nowrap">{count}</p>
      <p className="s1-date-body font-['Kantar_Brown:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#616161] text-[28px] md:text-[22px] d1:text-[21.28px] d2:text-[22.96px] d3:text-[24.64px] d4:text-[26.32px] d5:text-[28px] w-[405px] d1:w-[307.8px] d2:w-[332.1px] d3:w-[356.4px] d4:w-[380.7px] d5:w-[405px] md:pr-[90px] lg:pr-0">insights shaping smarter energy decisions</p>
    </div>
  );
}

function MediaRegion() {
  return (
    <div className="absolute content-stretch flex h-[650px] d1:h-[494px] d2:h-[533px] d3:h-[572px] d4:h-[611px] d5:h-[650px] items-start left-0 min-w-[280px] d1:min-w-[212.8px] d2:min-w-[229.6px] d3:min-w-[246.4px] d4:min-w-[263.2px] d5:min-w-[280px] top-0 w-[280px] d1:w-[212.8px] d2:w-[229.6px] d3:w-[246.4px] d4:w-[263.2px] d5:w-[280px]" data-name="MediaRegion">
      <div className="s1-col-1 bg-[#e0e0e0] h-[507px] md:h-[400px] d1:h-[385.3px] d2:h-[415.7px] d3:h-[446.2px] d4:h-[476.6px] d5:h-[507px] relative shrink-0 w-[88px] md:w-[40px] d1:w-[66.88px] d2:w-[72.16px] d3:w-[77.44px] d4:w-[82.72px] d5:w-[88px]" data-name="ModernBuildingFacadePlaceholder" />
      <div className="s1-col-2 bg-[#e0e0e0] h-[665px] md:h-[450px] d1:h-[505.4px] d2:h-[545.3px] d3:h-[585.2px] d4:h-[625.1px] d5:h-[665px] relative shrink-0 w-[88px] md:w-[60px] d1:w-[66.88px] d2:w-[72.16px] d3:w-[77.44px] d4:w-[82.72px] d5:w-[88px]" data-name="ModernBuildingFacadePlaceholder" />
      <div className="s1-col-3 bg-[#e0e0e0] h-[360px] md:h-[300px] d1:h-[273.6px] d2:h-[295.2px] d3:h-[316.8px] d4:h-[338.4px] d5:h-[360px] relative shrink-0 w-[88px] md:w-[40px] d1:w-[66.88px] d2:w-[72.16px] d3:w-[77.44px] d4:w-[82.72px] d5:w-[88px]" data-name="ModernBuildingFacadePlaceholder">
        <div className="s1-violet absolute bg-[#eadbf8] h-[220px] d1:h-[167.2px] d2:h-[180.4px] d3:h-[193.6px] d4:h-[206.8px] d5:h-[220px] left-[87px] d1:left-[66.12px] d2:left-[71.34px] d3:left-[76.56px] d4:left-[81.78px] d5:left-[87px] right-[-23px] d1:right-[-17.48px] d2:right-[-18.86px] d3:right-[-20.24px] d4:right-[-21.62px] d5:right-[-23px] bottom-[140px] d1:bottom-[106.4px] d2:bottom-[114.8px] d3:bottom-[123.2px] d4:bottom-[131.6px] d5:bottom-[140px] w-[111.448px] d1:w-[84.7px] d2:w-[91.39px] d3:w-[98.07px] d4:w-[104.8px] d5:w-[111.4px] md:z-40 lg:z-auto" data-name="VioletDecorativeBlock" />
      </div>
      <DateCluster />
    </div>
  );
}

function Group1() {
  return (
    <div className="s1-dots absolute h-[90px] md:h-[80px] d1:h-[68.4px] d2:h-[73.8px] d3:h-[79.2px] d4:h-[84.6px] d5:h-[90px] left-[650px] md:left-[410px] d1:left-[494px] d2:left-[533px] d3:left-[572px] d4:left-[611px] d5:left-[650px] right-[677px] d1:right-[514.5px] d2:right-[555.1px] d3:right-[595.8px] d4:right-[636.4px] d5:right-[677px] top-[60px] md:top-[40px] d1:top-[45.6px] d2:top-[49.2px] d3:top-[52.8px] d4:top-[56.4px] d5:top-[60px] w-[151.027px] md:w-[120px] d1:w-[114.8px] d2:w-[123.8px] d3:w-[132.9px] d4:w-[142px] d5:w-[151px] md:bottom-[570px] lg:bottom-auto">
      <svg className="absolute block inset-0 size-full" fill="none" height="99.9999" preserveAspectRatio="none" viewBox="0 0 151.027 99.9999" width="151.027">
        <g id="Group 3">
          <ellipse cx="3.57206" cy="3.84616" fill="#CDA3F6" id="Ellipse" rx="3.57206" ry="3.84616" />
          <ellipse cx="33.1482" cy="3.84616" fill="#CDA3F6" id="Ellipse_2" rx="3.57206" ry="3.84616" />
          <ellipse cx="61.7246" cy="3.84616" fill="#CDA3F6" id="Ellipse_3" rx="3.57206" ry="3.84616" />
          <ellipse cx="90.3006" cy="3.84616" fill="#CDA3F6" id="Ellipse_4" rx="3.57206" ry="3.84616" />
          <ellipse cx="118.881" cy="3.84616" fill="#CDA3F6" id="Ellipse_5" rx="3.57206" ry="3.84616" />
          <ellipse cx="147.455" cy="3.84616" fill="#CDA3F6" id="Ellipse_6" rx="3.57206" ry="3.84616" />
          <ellipse cx="3.57206" cy="34.6152" fill="#CDA3F6" id="Ellipse_7" rx="3.57206" ry="3.84616" />
          <ellipse cx="33.1482" cy="34.6152" fill="#CDA3F6" id="Ellipse_8" rx="3.57206" ry="3.84616" />
          <ellipse cx="61.7246" cy="34.6152" fill="#CDA3F6" id="Ellipse_9" rx="3.57206" ry="3.84616" />
          <ellipse cx="90.3006" cy="34.6152" fill="#CDA3F6" id="Ellipse_10" rx="3.57206" ry="3.84616" />
          <ellipse cx="118.881" cy="34.6152" fill="#CDA3F6" id="Ellipse_11" rx="3.57206" ry="3.84616" />
          <ellipse cx="147.455" cy="34.6152" fill="#CDA3F6" id="Ellipse_12" rx="3.57206" ry="3.84616" />
          <ellipse cx="3.57206" cy="65.3847" fill="#CDA3F6" id="Ellipse_13" rx="3.57206" ry="3.84616" />
          <ellipse cx="33.1482" cy="65.3847" fill="#CDA3F6" id="Ellipse_14" rx="3.57206" ry="3.84616" />
          <ellipse cx="61.7246" cy="65.3847" fill="#CDA3F6" id="Ellipse_15" rx="3.57206" ry="3.84616" />
          <ellipse cx="90.3006" cy="65.3847" fill="#CDA3F6" id="Ellipse_16" rx="3.57206" ry="3.84616" />
          <ellipse cx="118.881" cy="65.3847" fill="#CDA3F6" id="Ellipse_17" rx="3.57206" ry="3.84616" />
          <ellipse cx="147.455" cy="65.3847" fill="#CDA3F6" id="Ellipse_18" rx="3.57206" ry="3.84616" />
          <ellipse cx="3.57206" cy="96.1538" fill="#CDA3F6" id="Ellipse_19" rx="3.57206" ry="3.84616" />
          <ellipse cx="33.1482" cy="96.1538" fill="#CDA3F6" id="Ellipse_20" rx="3.57206" ry="3.84616" />
          <ellipse cx="61.7246" cy="96.1538" fill="#CDA3F6" id="Ellipse_21" rx="3.57206" ry="3.84616" />
          <ellipse cx="90.3006" cy="96.1538" fill="#CDA3F6" id="Ellipse_22" rx="3.57206" ry="3.84616" />
          <ellipse cx="118.881" cy="96.1538" fill="#CDA3F6" id="Ellipse_23" rx="3.57206" ry="3.84616" />
          <ellipse cx="147.455" cy="96.1538" fill="#CDA3F6" id="Ellipse_24" rx="3.57206" ry="3.84616" />
        </g>
      </svg>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full overflow-visible">
      <div className="relative h-full w-full max-w-full d1:w-[630px] d2:w-[678px] d3:w-[728px] d4:w-[777px] d5:w-[827px] d1:ml-auto">
        <MediaRegion />
        <Group1 />
        <div className="s1-blue-bar absolute bg-gradient-to-b from-[#2484ff] h-[508px] md:h-[410px] d1:h-[386.1px] d2:h-[416.6px] d3:h-[447px] d4:h-[477.5px] d5:h-[508px] left-[730px] md:left-[467px] d1:left-[554.8px] d2:left-[598.6px] d3:left-[642.4px] d4:left-[686.2px] d5:left-[730px] to-[#a973f9] top-[310px] d1:top-[235.6px] d2:top-[254.2px] d3:top-[272.8px] d4:top-[291.4px] d5:top-[310px] bottom-[550px] d1:bottom-[418px] d2:bottom-[451px] d3:bottom-[484px] d4:bottom-[517px] d5:bottom-[550px] w-[97.517px] md:w-[90px] d1:w-[74.11px] d2:w-[79.96px] d3:w-[85.81px] d4:w-[91.67px] d5:w-[97.52px]" data-name="BlueBarMain" />
      </div>
    </div>
  );
}
