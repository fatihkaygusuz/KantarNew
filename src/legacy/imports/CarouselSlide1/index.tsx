function ArrowNarrowRight({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px] d1:size-[18.24px] d2:size-[19.68px] d3:size-[21.12px] d4:size-[22.56px] d5:size-[24px]"} data-name="arrow-narrow-right">
      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
        <div className="absolute inset-[-8.33%_-6.25%]">
          <svg className="block size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 18 14" width="18">
            <path d="M1 7H17M11 13L17 7L11 1" id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function EyebrowBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-start relative shrink-0 w-full" data-name="Eyebrow Block">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] d1:leading-[24.32px] d2:leading-[26.24px] d3:leading-[28.16px] d4:leading-[30.08px] d5:leading-[32px] min-w-full not-italic relative shrink-0 text-[#8455b0] text-[24px] d1:text-[18.24px] d2:text-[19.68px] d3:text-[21.12px] d4:text-[22.56px] d5:text-[24px] w-[min-content]">WHAT WE DELIVER</p>
      <div className="h-0 relative shrink-0 w-[56px] d1:w-[42.56px] d2:w-[45.92px] d3:w-[49.28px] d4:w-[52.64px] d5:w-[56px]" data-name="Line">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 56 3" width="56">
            <line id="Line" stroke="#8455B0" strokeWidth="3" x2="56" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeadlineGroup() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium items-start leading-[90px] d1:leading-[68.4px] d2:leading-[73.8px] d3:leading-[79.2px] d4:leading-[84.6px] d5:leading-[90px] pb-[32px] d1:pb-[24.32px] d2:pb-[26.24px] d3:pb-[28.16px] d4:pb-[30.08px] d5:pb-[32px] relative shrink-0 text-[72px] d1:text-[54.72px] d2:text-[59.04px] d3:text-[63.36px] d4:text-[67.68px] d5:text-[72px] tracking-[-1.44px] d1:tracking-[-1.09px] d2:tracking-[-1.18px] d3:tracking-[-1.27px] d4:tracking-[-1.35px] d5:tracking-[-1.44px] w-full" data-name="HeadlineGroup">
      <p className="relative shrink-0 text-[#1e1e1e] w-[717px] d1:w-[544.9px] d2:w-[587.9px] d3:w-[631px] d4:w-[674px] d5:w-[717px]">Modernising</p>
      <p className="relative shrink-0 text-[#1e1e1e] w-[717px] d1:w-[544.9px] d2:w-[587.9px] d3:w-[631px] d4:w-[674px] d5:w-[717px]">Energy Efficiency</p>
      <p className="relative shrink-0 text-[#8455b0] w-[717px] d1:w-[544.9px] d2:w-[587.9px] d3:w-[631px] d4:w-[674px] d5:w-[717px]">through Digitalisation</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 w-full">
      <HeadlineGroup />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] d1:leading-[22.8px] d2:leading-[24.6px] d3:leading-[26.4px] d4:leading-[28.2px] d5:leading-[30px] relative shrink-0 text-[#616161] text-[20px] d1:text-[15.2px] d2:text-[16.4px] d3:text-[17.6px] d4:text-[18.8px] d5:text-[20px] w-[462px] d1:w-[351.1px] d2:w-[378.8px] d3:w-[406.6px] d4:w-[434.3px] d5:w-[462px]">Energy efficiency is changing, with new digital technologies enabling greater control, optimisation and analytics. New policies and new business models will greatly enhance end-use and systems efficiency.</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px] d1:size-[18.24px] d2:size-[19.68px] d3:size-[21.12px] d4:size-[22.56px] d5:size-[24px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="arrow-right">
          <path d="M5 12H19M12 19L19 12L12 5" id="Vector" stroke="#CDA3F6" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] d1:leading-[18.24px] d2:leading-[19.68px] d3:leading-[21.12px] d4:leading-[22.56px] d5:leading-[24px] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] d1:text-[12.16px] d2:text-[13.12px] d3:text-[14.08px] d4:text-[15.04px] d5:text-[16px] whitespace-nowrap">Explore how</p>
      <ArrowRight />
    </div>
  );
}

function ExploreCta() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] d1:gap-[10.64px] d2:gap-[11.48px] d3:gap-[12.32px] d4:gap-[13.16px] d5:gap-[14px] items-start relative shrink-0" data-name="ExploreCTA">
      <Frame />
      <div className="h-0 relative shrink-0 w-[200px] d1:w-[152px] d2:w-[164px] d3:w-[176px] d4:w-[188px] d5:w-[200px]" data-name="CTARule">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 200 1" width="200">
            <line id="CTARule" stroke="#C2C2C2" x2="200" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavigationControls() {
  return (
    <div className="content-stretch flex gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-center overflow-clip relative shrink-0" data-name="NavigationControls">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[28px] d1:text-[21.28px] d2:text-[22.96px] d3:text-[24.64px] d4:text-[26.32px] d5:text-[28px] whitespace-nowrap">‹</p>
      <div className="flex h-[0.01px] d1:h-[0.01px] d2:h-[0.01px] d3:h-[0.01px] d4:h-[0.01px] d5:h-[0.01px] items-center justify-center relative shrink-0 w-[20px] d1:w-[15.2px] d2:w-[16.4px] d3:w-[17.6px] d4:w-[18.8px] d5:w-[20px]">
        <div className="flex-none rotate-90">
          <div className="h-[20px] d1:h-[15.2px] d2:h-[16.4px] d3:h-[17.6px] d4:h-[18.8px] d5:h-[20px] relative w-[0.01px] d1:w-[0.01px] d2:w-[0.01px] d3:w-[0.01px] d4:w-[0.01px] d5:w-[0.01px]" data-name="NavDivider">
            <div className="absolute bottom-full left-0 right-0 top-[-5%]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 0.01 1" width="0.01">
                <line id="NavDivider" stroke="#C2C2C2" x2="0.01" y1="0.5" y2="20.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[28px] d1:text-[21.28px] d2:text-[22.96px] d3:text-[24.64px] d4:text-[26.32px] d5:text-[28px] whitespace-nowrap">›</p>
    </div>
  );
}

function LeftZone() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[60px] d1:gap-[45.6px] d2:gap-[49.2px] d3:gap-[52.8px] d4:gap-[56.4px] d5:gap-[60px] items-start max-w-[560px] d1:max-w-[425.6px] d2:max-w-[459.2px] d3:max-w-[492.8px] d4:max-w-[526.4px] d5:max-w-[560px] min-w-[400px] d1:min-w-[304px] d2:min-w-[328px] d3:min-w-[352px] d4:min-w-[376px] d5:min-w-[400px] relative" data-name="LeftZone">
      <EyebrowBlock />
      <Frame1 />
      <ExploreCta />
      <NavigationControls />
    </div>
  );
}

function MediaRegion() {
  return (
    <div className="absolute content-stretch flex h-[650px] d1:h-[494px] d2:h-[533px] d3:h-[572px] d4:h-[611px] d5:h-[650px] items-start left-[calc(50%+109.5px)] d1:left-[calc(50%+83.22px)] d2:left-[calc(50%+89.79px)] d3:left-[calc(50%+96.36px)] d4:left-[calc(50%+102.9px)] d5:left-[calc(50%+109.5px)] min-w-[280px] d1:min-w-[212.8px] d2:min-w-[229.6px] d3:min-w-[246.4px] d4:min-w-[263.2px] d5:min-w-[280px] top-[-5px] d1:top-[-3.8px] d2:top-[-4.1px] d3:top-[-4.4px] d4:top-[-4.7px] d5:top-[-5px] w-[280px] d1:w-[212.8px] d2:w-[229.6px] d3:w-[246.4px] d4:w-[263.2px] d5:w-[280px]" data-name="MediaRegion">
      <div className="bg-[#e0e0e0] h-[457px] d1:h-[347.3px] d2:h-[374.7px] d3:h-[402.2px] d4:h-[429.6px] d5:h-[457px] relative shrink-0 w-[88px] d1:w-[66.88px] d2:w-[72.16px] d3:w-[77.44px] d4:w-[82.72px] d5:w-[88px]" data-name="ModernBuildingFacadePlaceholder" />
      <div className="bg-[#e0e0e0] h-[625px] d1:h-[475px] d2:h-[512.5px] d3:h-[550px] d4:h-[587.5px] d5:h-[625px] relative shrink-0 w-[88px] d1:w-[66.88px] d2:w-[72.16px] d3:w-[77.44px] d4:w-[82.72px] d5:w-[88px]" data-name="ModernBuildingFacadePlaceholder" />
      <div className="bg-[#e0e0e0] h-[310px] d1:h-[235.6px] d2:h-[254.2px] d3:h-[272.8px] d4:h-[291.4px] d5:h-[310px] relative shrink-0 w-[88px] d1:w-[66.88px] d2:w-[72.16px] d3:w-[77.44px] d4:w-[82.72px] d5:w-[88px]" data-name="ModernBuildingFacadePlaceholder" />
    </div>
  );
}

function DateCluster() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[32px] d1:gap-[24.32px] d2:gap-[26.24px] d3:gap-[28.16px] d4:gap-[30.08px] d5:gap-[32px] items-start left-[calc(66.67%+92.79px)] d1:left-[calc(66.67%+70.52px)] d2:left-[calc(66.67%+76.09px)] d3:left-[calc(66.67%+81.66px)] d4:left-[calc(66.67%+87.22px)] d5:left-[calc(66.67%+92.79px)] not-italic top-[224px] d1:top-[170.2px] d2:top-[183.7px] d3:top-[197.1px] d4:top-[210.6px] d5:top-[224px] w-[390.068px] d1:w-[296.5px] d2:w-[319.9px] d3:w-[343.3px] d4:w-[366.7px] d5:w-[390.1px]" data-name="DateCluster">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[72px] d1:leading-[54.72px] d2:leading-[59.04px] d3:leading-[63.36px] d4:leading-[67.68px] d5:leading-[72px] relative shrink-0 text-[#1e1e1e] text-[60px] d1:text-[45.6px] d2:text-[49.2px] d3:text-[52.8px] d4:text-[56.4px] d5:text-[60px] tracking-[-1.2px] d1:tracking-[-0.91px] d2:tracking-[-0.98px] d3:tracking-[-1.06px] d4:tracking-[-1.13px] d5:tracking-[-1.2px] whitespace-nowrap">Nov</p>
      <p className="font-['Kantar_Brown:Bold',sans-serif] leading-[260px] d1:leading-[197.6px] d2:leading-[213.2px] d3:leading-[228.8px] d4:leading-[244.4px] d5:leading-[260px] relative shrink-0 text-[#1e1e1e] text-[330px] d1:text-[250.8px] d2:text-[270.6px] d3:text-[290.4px] d4:text-[310.2px] d5:text-[330px] tracking-[-26.4px] d1:tracking-[-20.06px] d2:tracking-[-21.65px] d3:tracking-[-23.23px] d4:tracking-[-24.82px] d5:tracking-[-26.4px] whitespace-nowrap">23</p>
      <p className="font-['Kantar_Brown:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#616161] text-[32px] d1:text-[24.32px] d2:text-[26.24px] d3:text-[28.16px] d4:text-[30.08px] d5:text-[32px] w-[405px] d1:w-[307.8px] d2:w-[332.1px] d3:w-[356.4px] d4:w-[380.7px] d5:w-[405px]">insights shaping smarter energy decisions</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[100px] d1:h-[76px] d2:h-[82px] d3:h-[88px] d4:h-[94px] d5:h-[100px] left-[calc(83.33%+98.51px)] d1:left-[calc(83.33%+74.87px)] d2:left-[calc(83.33%+80.78px)] d3:left-[calc(83.33%+86.69px)] d4:left-[calc(83.33%+92.6px)] d5:left-[calc(83.33%+98.51px)] top-[50px] d1:top-[38px] d2:top-[41px] d3:top-[44px] d4:top-[47px] d5:top-[50px] w-[151.027px] d1:w-[114.8px] d2:w-[123.8px] d3:w-[132.9px] d4:w-[142px] d5:w-[151px]">
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

function Group() {
  return (
    <div className="absolute contents left-[calc(50%+109.5px)] d1:left-[calc(50%+83.22px)] d2:left-[calc(50%+89.79px)] d3:left-[calc(50%+96.36px)] d4:left-[calc(50%+102.9px)] d5:left-[calc(50%+109.5px)] top-[-5px] d1:top-[-3.8px] d2:top-[-4.1px] d3:top-[-4.4px] d4:top-[-4.7px] d5:top-[-5px]">
      <MediaRegion />
      <DateCluster />
      <div className="absolute bg-[#eadbf8] h-[170px] d1:h-[129.2px] d2:h-[139.4px] d3:h-[149.6px] d4:h-[159.8px] d5:h-[170px] left-[calc(66.67%+52.85px)] d1:left-[calc(66.67%+40.17px)] d2:left-[calc(66.67%+43.34px)] d3:left-[calc(66.67%+46.51px)] d4:left-[calc(66.67%+49.68px)] d5:left-[calc(66.67%+52.85px)] top-0 w-[111.448px] d1:w-[84.7px] d2:w-[91.39px] d3:w-[98.07px] d4:w-[104.8px] d5:w-[111.4px]" data-name="VioletDecorativeBlock" />
      <Group1 />
      <div className="absolute bg-gradient-to-b from-[#2484ff] h-[500px] d1:h-[380px] d2:h-[410px] d3:h-[440px] d4:h-[470px] d5:h-[500px] right-0 to-[#a973f9] top-[330px] d1:top-[250.8px] d2:top-[270.6px] d3:top-[290.4px] d4:top-[310.2px] d5:top-[330px] w-[97.517px] d1:w-[74.11px] d2:w-[79.96px] d3:w-[85.81px] d4:w-[91.67px] d5:w-[97.52px]" data-name="BlueBarMain" />
    </div>
  );
}

function ModernisingEnergyEfficiency() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[24px] d1:gap-[18.24px] d2:gap-[19.68px] d3:gap-[21.12px] d4:gap-[22.56px] d5:gap-[24px] h-[900px] d1:h-[684px] d2:h-[738px] d3:h-[792px] d4:h-[846px] d5:h-[900px] items-center overflow-clip px-[176px] d1:px-[133.8px] d2:px-[144.3px] d3:px-[154.9px] d4:px-[165.4px] d5:px-[176px] relative shrink-0 w-full" data-name="modernising-energy-efficiency">
      <LeftZone />
      <Group />
    </div>
  );
}

function Category() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Category">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] d1:leading-[18.24px] d2:leading-[19.68px] d3:leading-[21.12px] d4:leading-[22.56px] d5:leading-[24px] not-italic relative shrink-0 text-[#ff854f] text-[16px] d1:text-[12.16px] d2:text-[13.12px] d3:text-[14.08px] d4:text-[15.04px] d5:text-[16px] whitespace-nowrap">EVENT</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] d1:gap-[9.12px] d2:gap-[9.84px] d3:gap-[10.56px] d4:gap-[11.28px] d5:gap-[12px] items-end min-h-px pb-[49px] d1:pb-[37.24px] d2:pb-[40.18px] d3:pb-[43.12px] d4:pb-[46.06px] d5:pb-[49px] relative w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] d1:leading-[24.32px] d2:leading-[26.24px] d3:leading-[28.16px] d4:leading-[30.08px] d5:leading-[32px] min-w-px not-italic relative text-[#db4a14] text-[24px] d1:text-[18.24px] d2:text-[19.68px] d3:text-[21.12px] d4:text-[22.56px] d5:text-[24px]">Modernising Energy Efficiency through Digitalisation</p>
    </div>
  );
}

function Event() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-[330px] d1:min-w-[250.8px] d2:min-w-[270.6px] d3:min-w-[290.4px] d4:min-w-[310.2px] d5:min-w-[330px] overflow-clip pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px] px-[36px] d1:px-[27.36px] d2:px-[29.52px] d3:px-[31.68px] d4:px-[33.84px] d5:px-[36px] relative self-stretch" data-name="EVENT">
      <Category />
      <Frame4 />
      <div className="absolute bg-[#e0e0e0] bottom-0 right-[0.25px] d1:right-[0.19px] d2:right-[0.2px] d3:right-[0.22px] d4:right-[0.23px] d5:right-[0.25px] top-0 w-px" data-name="Divider" />
      <div className="h-0 relative shrink-0 w-full" data-name="CTARule">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 325.25 2" width="325.25">
            <line id="CTARule" stroke="#FF854F" strokeWidth="2" x2="325.25" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Category1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Category">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] d1:leading-[18.24px] d2:leading-[19.68px] d3:leading-[21.12px] d4:leading-[22.56px] d5:leading-[24px] not-italic relative shrink-0 text-[#8455b0] text-[16px] d1:text-[12.16px] d2:text-[13.12px] d3:text-[14.08px] d4:text-[15.04px] d5:text-[16px] whitespace-nowrap">NEWS</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[60px] d1:gap-[45.6px] d2:gap-[49.2px] d3:gap-[52.8px] d4:gap-[56.4px] d5:gap-[60px] items-end relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] d1:leading-[24.32px] d2:leading-[26.24px] d3:leading-[28.16px] d4:leading-[30.08px] d5:leading-[32px] min-w-px not-italic relative text-[#1e1e1e] text-[24px] d1:text-[18.24px] d2:text-[19.68px] d3:text-[21.12px] d4:text-[22.56px] d5:text-[24px]">Executive Director makes official visit to India</p>
      <ArrowNarrowRight className="overflow-clip relative shrink-0 size-[24px] d1:size-[18.24px] d2:size-[19.68px] d3:size-[21.12px] d4:size-[22.56px] d5:size-[24px]" />
    </div>
  );
}

function News() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-[330px] d1:min-w-[250.8px] d2:min-w-[270.6px] d3:min-w-[290.4px] d4:min-w-[310.2px] d5:min-w-[330px] overflow-clip pb-[48px] d1:pb-[36.48px] d2:pb-[39.36px] d3:pb-[42.24px] d4:pb-[45.12px] d5:pb-[48px] pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px] px-[36px] d1:px-[27.36px] d2:px-[29.52px] d3:px-[31.68px] d4:px-[33.84px] d5:px-[36px] relative self-stretch" data-name="NEWS">
      <Category1 />
      <Frame2 />
      <div className="absolute bg-[#e0e0e0] bottom-0 right-[0.25px] d1:right-[0.19px] d2:right-[0.2px] d3:right-[0.22px] d4:right-[0.23px] d5:right-[0.25px] top-0 w-px" data-name="Divider" />
    </div>
  );
}

function Category2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Category">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] d1:leading-[18.24px] d2:leading-[19.68px] d3:leading-[21.12px] d4:leading-[22.56px] d5:leading-[24px] not-italic relative shrink-0 text-[#8455b0] text-[16px] d1:text-[12.16px] d2:text-[13.12px] d3:text-[14.08px] d4:text-[15.04px] d5:text-[16px] whitespace-nowrap">FINAL REPORT</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] d1:leading-[24.32px] d2:leading-[26.24px] d3:leading-[28.16px] d4:leading-[30.08px] d5:leading-[32px] not-italic relative shrink-0 text-[#1e1e1e] text-[24px] d1:text-[18.24px] d2:text-[19.68px] d3:text-[21.12px] d4:text-[22.56px] d5:text-[24px] whitespace-nowrap">Renewables 2019</p>
      <ArrowNarrowRight className="overflow-clip relative shrink-0 size-[24px] d1:size-[18.24px] d2:size-[19.68px] d3:size-[21.12px] d4:size-[22.56px] d5:size-[24px]" />
    </div>
  );
}

function FinalReport() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-[330px] d1:min-w-[250.8px] d2:min-w-[270.6px] d3:min-w-[290.4px] d4:min-w-[310.2px] d5:min-w-[330px] overflow-clip pb-[48px] d1:pb-[36.48px] d2:pb-[39.36px] d3:pb-[42.24px] d4:pb-[45.12px] d5:pb-[48px] pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px] px-[36px] d1:px-[27.36px] d2:px-[29.52px] d3:px-[31.68px] d4:px-[33.84px] d5:px-[36px] relative self-stretch" data-name="FINAL REPORT">
      <Category2 />
      <Frame3 />
      <div className="absolute bg-[#e0e0e0] bottom-0 right-[0.25px] d1:right-[0.19px] d2:right-[0.2px] d3:right-[0.22px] d4:right-[0.23px] d5:right-[0.25px] top-0 w-px" data-name="Divider" />
    </div>
  );
}

function Category3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Category">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] d1:leading-[18.24px] d2:leading-[19.68px] d3:leading-[21.12px] d4:leading-[22.56px] d5:leading-[24px] not-italic relative shrink-0 text-[#8455b0] text-[16px] d1:text-[12.16px] d2:text-[13.12px] d3:text-[14.08px] d4:text-[15.04px] d5:text-[16px] whitespace-nowrap">TECHNOLOGY REPORT</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] d1:gap-[9.12px] d2:gap-[9.84px] d3:gap-[10.56px] d4:gap-[11.28px] d5:gap-[12px] items-end relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] d1:leading-[24.32px] d2:leading-[26.24px] d3:leading-[28.16px] d4:leading-[30.08px] d5:leading-[32px] min-w-px not-italic relative text-[#1e1e1e] text-[24px] d1:text-[18.24px] d2:text-[19.68px] d3:text-[21.12px] d4:text-[22.56px] d5:text-[24px]">Electric Vehicle City Casebook 2019</p>
      <ArrowNarrowRight className="overflow-clip relative shrink-0 size-[24px] d1:size-[18.24px] d2:size-[19.68px] d3:size-[21.12px] d4:size-[22.56px] d5:size-[24px]" />
    </div>
  );
}

function TechnologyReport() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-[330px] d1:min-w-[250.8px] d2:min-w-[270.6px] d3:min-w-[290.4px] d4:min-w-[310.2px] d5:min-w-[330px] overflow-clip pb-[48px] d1:pb-[36.48px] d2:pb-[39.36px] d3:pb-[42.24px] d4:pb-[45.12px] d5:pb-[48px] pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px] px-[36px] d1:px-[27.36px] d2:px-[29.52px] d3:px-[31.68px] d4:px-[33.84px] d5:px-[36px] relative self-stretch" data-name="TECHNOLOGY REPORT">
      <Category3 />
      <Frame5 />
    </div>
  );
}

function NewsCardsStrip() {
  return (
    <div className="bg-white border-solid border-t border-white content-stretch flex flex-wrap gap-[24px_0px] d1:gap-[18.24px_0px] d2:gap-[19.68px_0px] d3:gap-[21.12px_0px] d4:gap-[22.56px_0px] d5:gap-[24px_0px] h-[305px] d1:h-[231.8px] d2:h-[250.1px] d3:h-[268.4px] d4:h-[286.7px] d5:h-[305px] items-start pb-[24px] d1:pb-[18.24px] d2:pb-[19.68px] d3:pb-[21.12px] d4:pb-[22.56px] d5:pb-[24px] pl-[176px] d1:pl-[133.8px] d2:pl-[144.3px] d3:pl-[154.9px] d4:pl-[165.4px] d5:pl-[176px] pr-[160px] d1:pr-[121.6px] d2:pr-[131.2px] d3:pr-[140.8px] d4:pr-[150.4px] d5:pr-[160px] relative shrink-0 w-full" data-name="News Cards Strip">
      <Event />
      <News />
      <FinalReport />
      <TechnologyReport />
    </div>
  );
}

export default function CarouselSlide() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Carousel - Slide 1">
      <ModernisingEnergyEfficiency />
      <NewsCardsStrip />
    </div>
  );
}