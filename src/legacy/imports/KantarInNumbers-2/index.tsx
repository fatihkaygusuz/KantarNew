function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] d1:gap-[9.12px] d2:gap-[9.84px] d3:gap-[10.56px] d4:gap-[11.28px] d5:gap-[12px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] d1:leading-[22.8px] d2:leading-[24.6px] d3:leading-[26.4px] d4:leading-[28.2px] d5:leading-[30px] not-italic relative shrink-0 text-[#1e1e1e] text-[20px] d1:text-[15.2px] d2:text-[16.4px] d3:text-[17.6px] d4:text-[18.8px] d5:text-[20px] whitespace-nowrap">EVALUATION SYSTEM</p>
      <div className="bg-[#1e1e1e] h-[3px] d1:h-[2.28px] d2:h-[2.46px] d3:h-[2.64px] d4:h-[2.82px] d5:h-[3px] relative shrink-0 w-[36px] d1:w-[27.36px] d2:w-[29.52px] d3:w-[31.68px] d4:w-[33.84px] d5:w-[36px]" data-name="Title Rule" />
    </div>
  );
}

function Score() {
  return (
    <div className="content-stretch flex gap-[4px] d1:gap-[3.04px] d2:gap-[3.28px] d3:gap-[3.52px] d4:gap-[3.76px] d5:gap-[4px] items-baseline overflow-clip relative shrink-0" data-name="Score">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[90px] d1:leading-[68.4px] d2:leading-[73.8px] d3:leading-[79.2px] d4:leading-[84.6px] d5:leading-[90px] relative shrink-0 text-[#1e1e1e] text-[72px] d1:text-[54.72px] d2:text-[59.04px] d3:text-[63.36px] d4:text-[67.68px] d5:text-[72px] tracking-[-1.44px] d1:tracking-[-1.09px] d2:tracking-[-1.18px] d3:tracking-[-1.27px] d4:tracking-[-1.35px] d5:tracking-[-1.44px]">→ 7.37</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[38px] d1:leading-[28.88px] d2:leading-[31.16px] d3:leading-[33.44px] d4:leading-[35.72px] d5:leading-[38px] relative shrink-0 text-[#616161] text-[30px] d1:text-[22.8px] d2:text-[24.6px] d3:text-[26.4px] d4:text-[28.2px] d5:text-[30px]">/ 10</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] d1:gap-[9.12px] d2:gap-[9.84px] d3:gap-[10.56px] d4:gap-[11.28px] d5:gap-[12px] items-start not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[90px] d1:leading-[68.4px] d2:leading-[73.8px] d3:leading-[79.2px] d4:leading-[84.6px] d5:leading-[90px] relative shrink-0 text-[#1e1e1e] text-[72px] d1:text-[54.72px] d2:text-[59.04px] d3:text-[63.36px] d4:text-[67.68px] d5:text-[72px] tracking-[-1.44px] d1:tracking-[-1.09px] d2:tracking-[-1.18px] d3:tracking-[-1.27px] d4:tracking-[-1.35px] d5:tracking-[-1.44px]">SOTD / SCORE</p>
      <Score />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] d1:gap-[48.64px] d2:gap-[52.48px] d3:gap-[56.32px] d4:gap-[60.16px] d5:gap-[64px] items-start justify-center overflow-clip pr-[32px] d1:pr-[24.32px] d2:pr-[26.24px] d3:pr-[28.16px] d4:pr-[30.08px] d5:pr-[32px] relative shrink-0 w-[620px] d1:w-[471.2px] d2:w-[508.4px] d3:w-[545.6px] d4:w-[582.8px] d5:w-[620px]" data-name="Content">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function PhotoPlaceholder() {
  return <div className="absolute bg-[#090809] h-[181px] d1:h-[137.6px] d2:h-[148.4px] d3:h-[159.3px] d4:h-[170.1px] d5:h-[181px] left-[62px] d1:left-[47.12px] d2:left-[50.84px] d3:left-[54.56px] d4:left-[58.28px] d5:left-[62px] top-[55px] d1:top-[41.8px] d2:top-[45.1px] d3:top-[48.4px] d4:top-[51.7px] d5:top-[55px] w-[296px] d1:w-[225px] d2:w-[242.7px] d3:w-[260.5px] d4:w-[278.2px] d5:w-[296px]" data-name="Photo Placeholder" />;
}

function ImageCompositionArea() {
  return (
    <div className="content-stretch flex flex-col h-[225px] d1:h-[171px] d2:h-[184.5px] d3:h-[198px] d4:h-[211.5px] d5:h-[225px] items-start relative shrink-0 w-[413px] d1:w-[313.9px] d2:w-[338.7px] d3:w-[363.4px] d4:w-[388.2px] d5:w-[413px]" data-name="Image Composition Area">
      <div className="absolute bg-[#8b5cf6] h-[282px] d1:h-[214.3px] d2:h-[231.2px] d3:h-[248.2px] d4:h-[265.1px] d5:h-[282px] left-0 top-[-54px] d1:top-[-41.04px] d2:top-[-44.28px] d3:top-[-47.52px] d4:top-[-50.76px] d5:top-[-54px] w-[192px] d1:w-[145.9px] d2:w-[157.4px] d3:w-[169px] d4:w-[180.5px] d5:w-[192px]" data-name="Purple Block" />
      <div className="absolute bg-[#ff632c] h-[93px] d1:h-[70.68px] d2:h-[76.26px] d3:h-[81.84px] d4:h-[87.42px] d5:h-[93px] left-[304px] d1:left-[231px] d2:left-[249.3px] d3:left-[267.5px] d4:left-[285.8px] d5:left-[304px] top-[179px] d1:top-[136px] d2:top-[146.8px] d3:top-[157.5px] d4:top-[168.3px] d5:top-[179px] w-[87px] d1:w-[66.12px] d2:w-[71.34px] d3:w-[76.56px] d4:w-[81.78px] d5:w-[87px]" data-name="Orange Accent Block" />
      <PhotoPlaceholder />
    </div>
  );
}

function CardContent() {
  return (
    <div className="content-stretch flex flex-col items-start py-[20px] d1:py-[15.2px] d2:py-[16.4px] d3:py-[17.6px] d4:py-[18.8px] d5:py-[20px] relative shrink-0 w-[413px] d1:w-[313.9px] d2:w-[338.7px] d3:w-[363.4px] d4:w-[388.2px] d5:w-[413px]" data-name="Card Content">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[28px] d1:leading-[21.28px] d2:leading-[22.96px] d3:leading-[24.64px] d4:leading-[26.32px] d5:leading-[28px] not-italic relative shrink-0 text-[#1e1e1e] text-[18px] d1:text-[13.68px] d2:text-[14.76px] d3:text-[15.84px] d4:text-[16.92px] d5:text-[18px] w-[304px] d1:w-[231px] d2:w-[249.3px] d3:w-[267.5px] d4:w-[285.8px] d5:w-[304px]">We want the environment on our side. All our signage and equipment are produced using strictly ecological and durable materials. And everything we design is meant to complement its surroundings.</p>
    </div>
  );
}

function EnvironmentCard() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] d1:gap-[38px] d2:gap-[41px] d3:gap-[44px] d4:gap-[47px] d5:gap-[50px] items-start pl-[56px] d1:pl-[42.56px] d2:pl-[45.92px] d3:pl-[49.28px] d4:pl-[52.64px] d5:pl-[56px] relative self-stretch shrink-0" data-name="environment-card">
      <div aria-hidden className="absolute border-[#c2c2c2] border-l border-solid inset-0 pointer-events-none" />
      <ImageCompositionArea />
      <CardContent />
    </div>
  );
}

function EvaluationSystem() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-start justify-between overflow-clip pt-[48px] d1:pt-[36.48px] d2:pt-[39.36px] d3:pt-[42.24px] d4:pt-[45.12px] d5:pt-[48px] relative shrink-0 w-full" data-name="Evaluation System">
      <Content />
      <EnvironmentCard />
    </div>
  );
}

function Header() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] d1:gap-[3.04px] d2:gap-[3.28px] d3:gap-[3.52px] d4:gap-[3.76px] d5:gap-[4px] items-start not-italic overflow-clip pl-[20px] d1:pl-[15.2px] d2:pl-[16.4px] d3:pl-[17.6px] d4:pl-[18.8px] d5:pl-[20px] relative shrink-0 w-full whitespace-nowrap" data-name="Header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] d1:leading-[22.8px] d2:leading-[24.6px] d3:leading-[26.4px] d4:leading-[28.2px] d5:leading-[30px] relative shrink-0 text-[#616161] text-[20px] d1:text-[15.2px] d2:text-[16.4px] d3:text-[17.6px] d4:text-[18.8px] d5:text-[20px]">Design</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[38px] d1:leading-[28.88px] d2:leading-[31.16px] d3:leading-[33.44px] d4:leading-[35.72px] d5:leading-[38px] relative shrink-0 text-[#1e1e1e] text-[30px] d1:text-[22.8px] d2:text-[24.6px] d3:text-[26.4px] d4:text-[28.2px] d5:text-[30px]">40%</p>
    </div>
  );
}

function BarTrack() {
  return (
    <div className="bg-[#f5f5f5] border-[#c2c2c2] border-b border-solid border-t content-stretch flex h-[48px] d1:h-[36.48px] d2:h-[39.36px] d3:h-[42.24px] d4:h-[45.12px] d5:h-[48px] items-start overflow-clip pr-[193px] d1:pr-[146.7px] d2:pr-[158.3px] d3:pr-[169.8px] d4:pr-[181.4px] d5:pr-[193px] relative shrink-0 w-full" data-name="Bar Track">
      <div className="bg-[#2378e5] flex-[1_0_0] h-full min-w-px relative" data-name="Progress" />
    </div>
  );
}

function Frame() {
  return (
    <div className="border-[#c2c2c2] border-dashed border-l content-stretch flex flex-col gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-start relative shrink-0 w-full">
      <Header />
      <BarTrack />
    </div>
  );
}

function Score1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px overflow-clip relative w-full" data-name="Score">
      <Frame />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] d1:leading-[13.68px] d2:leading-[14.76px] d3:leading-[15.84px] d4:leading-[16.92px] d5:leading-[18px] not-italic relative shrink-0 text-[#616161] text-[12px] d1:text-[9.12px] d2:text-[9.84px] d3:text-[10.56px] d4:text-[11.28px] d5:text-[12px] whitespace-nowrap">7.31 / 10</p>
    </div>
  );
}

function Design() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_60%_0_0] items-start overflow-clip pb-[56px] d1:pb-[42.56px] d2:pb-[45.92px] d3:pb-[49.28px] d4:pb-[52.64px] d5:pb-[56px] pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px]" data-name="Design">
      <Score1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] d1:gap-[3.04px] d2:gap-[3.28px] d3:gap-[3.52px] d4:gap-[3.76px] d5:gap-[4px] items-start not-italic overflow-clip pl-[20px] d1:pl-[15.2px] d2:pl-[16.4px] d3:pl-[17.6px] d4:pl-[18.8px] d5:pl-[20px] relative shrink-0 w-full whitespace-nowrap" data-name="Header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] d1:leading-[22.8px] d2:leading-[24.6px] d3:leading-[26.4px] d4:leading-[28.2px] d5:leading-[30px] relative shrink-0 text-[#616161] text-[20px] d1:text-[15.2px] d2:text-[16.4px] d3:text-[17.6px] d4:text-[18.8px] d5:text-[20px]">Usability</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[38px] d1:leading-[28.88px] d2:leading-[31.16px] d3:leading-[33.44px] d4:leading-[35.72px] d5:leading-[38px] relative shrink-0 text-[#1e1e1e] text-[30px] d1:text-[22.8px] d2:text-[24.6px] d3:text-[26.4px] d4:text-[28.2px] d5:text-[30px]">30%</p>
    </div>
  );
}

function BarTrack1() {
  return (
    <div className="bg-[#f5f5f5] border-[#c2c2c2] border-b border-solid border-t content-stretch flex h-[48px] d1:h-[36.48px] d2:h-[39.36px] d3:h-[42.24px] d4:h-[45.12px] d5:h-[48px] items-start overflow-clip pr-[145px] d1:pr-[110.2px] d2:pr-[118.9px] d3:pr-[127.6px] d4:pr-[136.3px] d5:pr-[145px] relative shrink-0 w-full" data-name="Bar Track">
      <div className="bg-[#8455b0] flex-[1_0_0] h-full min-w-px relative" data-name="Progress" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="border-[#c2c2c2] border-dashed border-l content-stretch flex flex-col gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-start relative shrink-0 w-full">
      <Header1 />
      <BarTrack1 />
    </div>
  );
}

function Score2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px overflow-clip relative w-full" data-name="Score">
      <Frame2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] d1:leading-[13.68px] d2:leading-[14.76px] d3:leading-[15.84px] d4:leading-[16.92px] d5:leading-[18px] not-italic relative shrink-0 text-[#616161] text-[12px] d1:text-[9.12px] d2:text-[9.84px] d3:text-[10.56px] d4:text-[11.28px] d5:text-[12px] whitespace-nowrap">7.31 / 10</p>
    </div>
  );
}

function Usability() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_30%_0_40%] items-start overflow-clip pb-[56px] d1:pb-[42.56px] d2:pb-[45.92px] d3:pb-[49.28px] d4:pb-[52.64px] d5:pb-[56px] pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px]" data-name="Usability">
      <Score2 />
    </div>
  );
}

function Header2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] d1:gap-[3.04px] d2:gap-[3.28px] d3:gap-[3.52px] d4:gap-[3.76px] d5:gap-[4px] items-start not-italic overflow-clip pl-[20px] d1:pl-[15.2px] d2:pl-[16.4px] d3:pl-[17.6px] d4:pl-[18.8px] d5:pl-[20px] relative shrink-0 w-full whitespace-nowrap" data-name="Header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] d1:leading-[22.8px] d2:leading-[24.6px] d3:leading-[26.4px] d4:leading-[28.2px] d5:leading-[30px] relative shrink-0 text-[#616161] text-[20px] d1:text-[15.2px] d2:text-[16.4px] d3:text-[17.6px] d4:text-[18.8px] d5:text-[20px]">Creativity</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[38px] d1:leading-[28.88px] d2:leading-[31.16px] d3:leading-[33.44px] d4:leading-[35.72px] d5:leading-[38px] relative shrink-0 text-[#1e1e1e] text-[30px] d1:text-[22.8px] d2:text-[24.6px] d3:text-[26.4px] d4:text-[28.2px] d5:text-[30px]">20%</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative">
      <div className="bg-[#ff632c] flex-[1_0_0] h-full min-w-px relative" data-name="Segment" />
    </div>
  );
}

function BarTrack2() {
  return (
    <div className="bg-[#f5f5f5] border-[#c2c2c2] border-b border-r border-solid border-t content-stretch flex h-[48px] d1:h-[36.48px] d2:h-[39.36px] d3:h-[42.24px] d4:h-[45.12px] d5:h-[48px] items-start overflow-clip pr-[94px] d1:pr-[71.44px] d2:pr-[77.08px] d3:pr-[82.72px] d4:pr-[88.36px] d5:pr-[94px] relative shrink-0 w-full" data-name="Bar Track">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="border-[#c2c2c2] border-dashed border-l content-stretch flex flex-col gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-start relative shrink-0 w-full">
      <Header2 />
      <BarTrack2 />
    </div>
  );
}

function Score3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px overflow-clip relative w-full" data-name="Score">
      <Frame3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] d1:leading-[13.68px] d2:leading-[14.76px] d3:leading-[15.84px] d4:leading-[16.92px] d5:leading-[18px] not-italic relative shrink-0 text-[#616161] text-[12px] d1:text-[9.12px] d2:text-[9.84px] d3:text-[10.56px] d4:text-[11.28px] d5:text-[12px] whitespace-nowrap">7.38 / 10</p>
    </div>
  );
}

function Creativity() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_10%_0_70%] items-start overflow-clip pb-[56px] d1:pb-[42.56px] d2:pb-[45.92px] d3:pb-[49.28px] d4:pb-[52.64px] d5:pb-[56px] pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px]" data-name="Creativity">
      <Score3 />
    </div>
  );
}

function Header3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] d1:gap-[3.04px] d2:gap-[3.28px] d3:gap-[3.52px] d4:gap-[3.76px] d5:gap-[4px] items-start not-italic overflow-clip pl-[20px] d1:pl-[15.2px] d2:pl-[16.4px] d3:pl-[17.6px] d4:pl-[18.8px] d5:pl-[20px] relative shrink-0 w-full whitespace-nowrap" data-name="Header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] d1:leading-[22.8px] d2:leading-[24.6px] d3:leading-[26.4px] d4:leading-[28.2px] d5:leading-[30px] relative shrink-0 text-[#616161] text-[20px] d1:text-[15.2px] d2:text-[16.4px] d3:text-[17.6px] d4:text-[18.8px] d5:text-[20px]">Content</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[38px] d1:leading-[28.88px] d2:leading-[31.16px] d3:leading-[33.44px] d4:leading-[35.72px] d5:leading-[38px] relative shrink-0 text-[#1e1e1e] text-[30px] d1:text-[22.8px] d2:text-[24.6px] d3:text-[26.4px] d4:text-[28.2px] d5:text-[30px]">10%</p>
    </div>
  );
}

function BarTrack3() {
  return (
    <div className="bg-[#f5f5f5] border-[#c2c2c2] border-b border-r border-solid border-t content-stretch flex h-[48px] d1:h-[36.48px] d2:h-[39.36px] d3:h-[42.24px] d4:h-[45.12px] d5:h-[48px] items-start overflow-clip pr-[41px] d1:pr-[31.16px] d2:pr-[33.62px] d3:pr-[36.08px] d4:pr-[38.54px] d5:pr-[41px] relative shrink-0 w-full" data-name="Bar Track">
      <div className="bg-[#1e1e1e] flex-[1_0_0] h-full min-w-px relative" data-name="Progress" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="border-[#c2c2c2] border-dashed border-l content-stretch flex flex-col gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-start relative shrink-0 w-full">
      <Header3 />
      <BarTrack3 />
    </div>
  );
}

function Score4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px overflow-clip relative w-full" data-name="Score">
      <Frame4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] d1:leading-[13.68px] d2:leading-[14.76px] d3:leading-[15.84px] d4:leading-[16.92px] d5:leading-[18px] not-italic relative shrink-0 text-[#616161] text-[12px] d1:text-[9.12px] d2:text-[9.84px] d3:text-[10.56px] d4:text-[11.28px] d5:text-[12px] whitespace-nowrap">7.72 / 10</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_90%] items-start overflow-clip pb-[56px] d1:pb-[42.56px] d2:pb-[45.92px] d3:pb-[49.28px] d4:pb-[52.64px] d5:pb-[56px] pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px]" data-name="Content">
      <Score4 />
    </div>
  );
}

function MetricsStrip() {
  return (
    <div className="bg-[#fafafa] h-[311px] d1:h-[236.4px] d2:h-[255px] d3:h-[273.7px] d4:h-[292.3px] d5:h-[311px] overflow-clip relative shrink-0 w-full" data-name="Metrics Strip">
      <Design />
      <Usability />
      <Creativity />
      <Content1 />
    </div>
  );
}

export default function KantarInNumbers() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[48px] d1:gap-[36.48px] d2:gap-[39.36px] d3:gap-[42.24px] d4:gap-[45.12px] d5:gap-[48px] items-start pb-[96px] d1:pb-[72.96px] d2:pb-[78.72px] d3:pb-[84.48px] d4:pb-[90.24px] d5:pb-[96px] pt-[56px] d1:pt-[42.56px] d2:pt-[45.92px] d3:pt-[49.28px] d4:pt-[52.64px] d5:pt-[56px] px-[224px] d1:px-[170.2px] d2:px-[183.7px] d3:px-[197.1px] d4:px-[210.6px] d5:px-[224px] relative size-full" data-name="kantar-in-numbers">
      <EvaluationSystem />
      <MetricsStrip />
    </div>
  );
}