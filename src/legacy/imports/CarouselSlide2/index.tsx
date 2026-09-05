import imgScreenshot20260830At1458361 from "./42963bccc3e81d6f0c6b6be993da51d2e5b93565.png";

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
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] d1:leading-[24.32px] d2:leading-[26.24px] d3:leading-[28.16px] d4:leading-[30.08px] d5:leading-[32px] min-w-full not-italic relative shrink-0 text-[#5f9cf8] text-[24px] d1:text-[18.24px] d2:text-[19.68px] d3:text-[21.12px] d4:text-[22.56px] d5:text-[24px] w-[min-content]">INSIGHT SPOTLIGHT</p>
      <div className="h-0 relative shrink-0 w-[56px] d1:w-[42.56px] d2:w-[45.92px] d3:w-[49.28px] d4:w-[52.64px] d5:w-[56px]" data-name="Line">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 56 3" width="56">
            <line id="Line" stroke="#93BBFC" strokeWidth="3" x2="56" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BoldLine() {
  return (
    <div className="content-stretch flex gap-[4px] d1:gap-[3.04px] d2:gap-[3.28px] d3:gap-[3.52px] d4:gap-[3.76px] d5:gap-[4px] items-baseline relative shrink-0 w-full whitespace-nowrap" data-name="bold-line">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[90px] d1:leading-[68.4px] d2:leading-[73.8px] d3:leading-[79.2px] d4:leading-[84.6px] d5:leading-[90px] relative shrink-0 text-[72px] d1:text-[54.72px] d2:text-[59.04px] d3:text-[63.36px] d4:text-[67.68px] d5:text-[72px] tracking-[-1.44px] d1:tracking-[-1.09px] d2:tracking-[-1.18px] d3:tracking-[-1.27px] d4:tracking-[-1.35px] d5:tracking-[-1.44px]">every choice</p>
      <p className="font-['Kantar_Brown:Bold',sans-serif] leading-[72px] d1:leading-[54.72px] d2:leading-[59.04px] d3:leading-[63.36px] d4:leading-[67.68px] d5:leading-[72px] relative shrink-0 text-[60px] d1:text-[45.6px] d2:text-[49.2px] d3:text-[52.8px] d4:text-[56.4px] d5:text-[60px] tracking-[-1.2px] d1:tracking-[-0.91px] d2:tracking-[-0.98px] d3:tracking-[-1.06px] d4:tracking-[-1.13px] d5:tracking-[-1.2px]">.</p>
    </div>
  );
}

function HeadingContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#1e1e1e] w-full" data-name="Heading Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[90px] d1:leading-[68.4px] d2:leading-[73.8px] d3:leading-[79.2px] d4:leading-[84.6px] d5:leading-[90px] relative shrink-0 text-[72px] d1:text-[54.72px] d2:text-[59.04px] d3:text-[63.36px] d4:text-[67.68px] d5:text-[72px] tracking-[-1.44px] d1:tracking-[-1.09px] d2:tracking-[-1.18px] d3:tracking-[-1.27px] d4:tracking-[-1.35px] d5:tracking-[-1.44px] w-full">Trust drives</p>
      <BoldLine />
    </div>
  );
}

function HeaderGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-start relative shrink-0 w-full" data-name="Header Group">
      <EyebrowBlock />
      <HeadingContainer />
    </div>
  );
}

function BodyActionGroup() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body & Action Group">
      <p className="[word-break:break-word] font-['Kantar_Brown:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#616161] text-[24px] d1:text-[18.24px] d2:text-[19.68px] d3:text-[21.12px] d4:text-[22.56px] d5:text-[24px] w-[474px] d1:w-[360.2px] d2:w-[388.7px] d3:w-[417.1px] d4:w-[445.6px] d5:w-[474px]">Our latest research shows people are more selective, but also more influenced by the voices they trust.</p>
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

function Col1Content() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px pb-[40px] d1:pb-[30.4px] d2:pb-[32.8px] d3:pb-[35.2px] d4:pb-[37.6px] d5:pb-[40px] pl-[176px] d1:pl-[133.8px] d2:pl-[144.3px] d3:pl-[154.9px] d4:pl-[165.4px] d5:pl-[176px] pr-[40px] d1:pr-[30.4px] d2:pr-[32.8px] d3:pr-[35.2px] d4:pr-[37.6px] d5:pr-[40px] pt-[80px] d1:pt-[60.8px] d2:pt-[65.6px] d3:pt-[70.4px] d4:pt-[75.2px] d5:pt-[80px] relative" data-name="Col 1 - Content">
      <HeaderGroup />
      <BodyActionGroup />
      <ExploreCta />
      <NavigationControls />
    </div>
  );
}

function StatVisual() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Kantar_Brown:Bold',sans-serif] gap-[2px] d1:gap-[1.52px] d2:gap-[1.64px] d3:gap-[1.76px] d4:gap-[1.88px] d5:gap-[2px] items-baseline not-italic relative shrink-0 text-white whitespace-nowrap" data-name="Stat Visual">
      <p className="leading-[normal] relative shrink-0 text-[222px] d1:text-[168.7px] d2:text-[182px] d3:text-[195.4px] d4:text-[208.7px] d5:text-[222px] tracking-[-4.44px] d1:tracking-[-3.37px] d2:tracking-[-3.64px] d3:tracking-[-3.91px] d4:tracking-[-4.17px] d5:tracking-[-4.44px]">78</p>
      <p className="leading-[60px] d1:leading-[45.6px] d2:leading-[49.2px] d3:leading-[52.8px] d4:leading-[56.4px] d5:leading-[60px] relative shrink-0 text-[98px] d1:text-[74.48px] d2:text-[80.36px] d3:text-[86.24px] d4:text-[92.12px] d5:text-[98px] tracking-[-1.96px] d1:tracking-[-1.49px] d2:tracking-[-1.61px] d3:tracking-[-1.72px] d4:tracking-[-1.84px] d5:tracking-[-1.96px]">%</p>
    </div>
  );
}

function StatSupportingContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] d1:gap-[18.24px] d2:gap-[19.68px] d3:gap-[21.12px] d4:gap-[22.56px] d5:gap-[24px] items-start relative shrink-0 w-full" data-name="Stat Supporting Content">
      <div className="h-0 relative shrink-0 w-[32px] d1:w-[24.32px] d2:w-[26.24px] d3:w-[28.16px] d4:w-[30.08px] d5:w-[32px]" data-name="Line">
        <div className="absolute inset-[-1.5px_0_0_0]">
          <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 32 1.5" width="32">
            <line id="Line" opacity="0.6" stroke="white" strokeWidth="1.5" x2="32" y1="0.75" y2="0.75" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[28px] d1:leading-[21.28px] d2:leading-[22.96px] d3:leading-[24.64px] d4:leading-[26.32px] d5:leading-[28px] min-w-full not-italic opacity-90 relative shrink-0 text-[18px] d1:text-[13.68px] d2:text-[14.76px] d3:text-[15.84px] d4:text-[16.92px] d5:text-[18px] text-white w-[min-content]">say recommendations from people they trust influence their decisions.</p>
    </div>
  );
}

function Col2StatBlock() {
  return (
    <div className="bg-[#194ea0] content-stretch flex flex-col h-[714px] d1:h-[542.6px] d2:h-[585.5px] d3:h-[628.3px] d4:h-[671.2px] d5:h-[714px] items-start justify-center p-[40px] d1:p-[30.4px] d2:p-[32.8px] d3:p-[35.2px] d4:p-[37.6px] d5:p-[40px] relative shrink-0 w-[458px] d1:w-[348.1px] d2:w-[375.6px] d3:w-[403px] d4:w-[430.5px] d5:w-[458px]" data-name="Col 2 - Stat Block">
      <StatVisual />
      <StatSupportingContent />
    </div>
  );
}

function Col3PhotoPlaceholder() {
  return (
    <div className="bg-[#e0e0e0] content-stretch flex flex-col h-[714px] d1:h-[542.6px] d2:h-[585.5px] d3:h-[628.3px] d4:h-[671.2px] d5:h-[714px] items-center overflow-clip relative shrink-0 w-[463px] d1:w-[351.9px] d2:w-[379.7px] d3:w-[407.4px] d4:w-[435.2px] d5:w-[463px]" data-name="Col 3 - Photo Placeholder">
      <div className="h-[590px] d1:h-[448.4px] d2:h-[483.8px] d3:h-[519.2px] d4:h-[554.6px] d5:h-[590px] relative shrink-0 w-[462px] d1:w-[351.1px] d2:w-[378.8px] d3:w-[406.6px] d4:w-[434.3px] d5:w-[462px]" data-name="Screenshot 2026-08-30 at 14.58.36 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260830At1458361} />
      </div>
    </div>
  );
}

function Col4SplitBlocks() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-end relative shrink-0 w-[210px] d1:w-[159.6px] d2:w-[172.2px] d3:w-[184.8px] d4:w-[197.4px] d5:w-[210px]" data-name="Col 4 - Split Blocks">
      <div className="bg-[#a87ad4] h-[293px] d1:h-[222.7px] d2:h-[240.3px] d3:h-[257.8px] d4:h-[275.4px] d5:h-[293px] relative shrink-0 w-full" data-name="Lavender Block" />
      <div className="bg-[#2378e5] h-[421px] d1:h-[320px] d2:h-[345.2px] d3:h-[370.5px] d4:h-[395.7px] d5:h-[421px] relative shrink-0 w-full" data-name="Blue Block Bottom" />
      <div className="absolute bg-[#fafafa] h-[180px] d1:h-[136.8px] d2:h-[147.6px] d3:h-[158.4px] d4:h-[169.2px] d5:h-[180px] right-0 top-[90px] d1:top-[68.4px] d2:top-[73.8px] d3:top-[79.2px] d4:top-[84.6px] d5:top-[90px] w-[93px] d1:w-[70.68px] d2:w-[76.26px] d3:w-[81.84px] d4:w-[87.42px] d5:w-[93px]" data-name="Lavender Block" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex h-[819px] d1:h-[622.4px] d2:h-[671.6px] d3:h-[720.7px] d4:h-[769.9px] d5:h-[819px] items-end relative shrink-0">
      <Col2StatBlock />
      <Col3PhotoPlaceholder />
      <Col4SplitBlocks />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-name="Row 1">
      <Col1Content />
      <Frame9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] d1:gap-[18.24px] d2:gap-[19.68px] d3:gap-[21.12px] d4:gap-[22.56px] d5:gap-[24px] items-start relative shrink-0" data-name="Frame">
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] d1:gap-[18.24px] d2:gap-[19.68px] d3:gap-[21.12px] d4:gap-[22.56px] d5:gap-[24px] items-start relative shrink-0" data-name="Frame">
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] d1:gap-[18.24px] d2:gap-[19.68px] d3:gap-[21.12px] d4:gap-[22.56px] d5:gap-[24px] items-start relative shrink-0" data-name="Frame">
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[24px] d1:gap-[18.24px] d2:gap-[19.68px] d3:gap-[21.12px] d4:gap-[22.56px] d5:gap-[24px] items-start relative shrink-0" data-name="Frame">
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
      <div className="bg-white opacity-50 relative shrink-0 size-[4px] d1:size-[3.04px] d2:size-[3.28px] d3:size-[3.52px] d4:size-[3.76px] d5:size-[4px]" data-name="Rectangle" />
    </div>
  );
}

function DotGrid() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] d1:gap-[24.32px] d2:gap-[26.24px] d3:gap-[28.16px] d4:gap-[30.08px] d5:gap-[32px] items-start left-[48px] d1:left-[36.48px] d2:left-[39.36px] d3:left-[42.24px] d4:left-[45.12px] d5:left-[48px] top-[41px] d1:top-[31.16px] d2:top-[33.62px] d3:top-[36.08px] d4:top-[38.54px] d5:top-[41px]" data-name="Dot Grid">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Col1BrandGradient() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#9d3fe8] h-[196px] d1:h-[149px] d2:h-[160.7px] d3:h-[172.5px] d4:h-[184.2px] d5:h-[196px] items-start justify-end pb-[8px] d1:pb-[6.08px] d2:pb-[6.56px] d3:pb-[7.04px] d4:pb-[7.52px] d5:pb-[8px] pt-[48px] d1:pt-[36.48px] d2:pt-[39.36px] d3:pt-[42.24px] d4:pt-[45.12px] d5:pt-[48px] px-[48px] d1:px-[36.48px] d2:px-[39.36px] d3:px-[42.24px] d4:px-[45.12px] d5:px-[48px] relative shrink-0 to-[#f5a623] via-[#f26419] via-[60%] w-[1250px] d1:w-[950px] d2:w-[1025px] d3:w-[1100px] d4:w-[1175px] d5:w-[1250px]" data-name="Col 1 - Brand Gradient">
      <DotGrid />
    </div>
  );
}

function ArticleKickerGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] d1:gap-[6.08px] d2:gap-[6.56px] d3:gap-[7.04px] d4:gap-[7.52px] d5:gap-[8px] items-start relative shrink-0 w-full" data-name="article-kicker-group">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] d1:leading-[18.24px] d2:leading-[19.68px] d3:leading-[21.12px] d4:leading-[22.56px] d5:leading-[24px] not-italic relative shrink-0 text-[#2378e5] text-[16px] d1:text-[12.16px] d2:text-[13.12px] d3:text-[14.08px] d4:text-[15.04px] d5:text-[16px] whitespace-nowrap">ARTICLE</p>
      <div className="h-0 relative shrink-0 w-[24px] d1:w-[18.24px] d2:w-[19.68px] d3:w-[21.12px] d4:w-[22.56px] d5:w-[24px]" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 24 2" width="24">
            <line id="Line" stroke="#2378E5" strokeWidth="2" x2="24" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TitleBody() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] d1:gap-[6.08px] d2:gap-[6.56px] d3:gap-[7.04px] d4:gap-[7.52px] d5:gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Title & Body">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] d1:leading-[22.8px] d2:leading-[24.6px] d3:leading-[26.4px] d4:leading-[28.2px] d5:leading-[30px] min-w-full relative shrink-0 text-[#1e1e1e] text-[20px] d1:text-[15.2px] d2:text-[16.4px] d3:text-[17.6px] d4:text-[18.8px] d5:text-[20px] w-[min-content]">The new rules of influence</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] d1:leading-[13.68px] d2:leading-[14.76px] d3:leading-[15.84px] d4:leading-[16.92px] d5:leading-[18px] relative shrink-0 text-[#616161] text-[12px] d1:text-[9.12px] d2:text-[9.84px] d3:text-[10.56px] d4:text-[11.28px] d5:text-[12px] w-[227px] d1:w-[172.5px] d2:w-[186.1px] d3:w-[199.8px] d4:w-[213.4px] d5:w-[227px]">Why relevance, authenticity and trust matter more than ever.</p>
    </div>
  );
}

function TextGroup() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[320px] d1:w-[243.2px] d2:w-[262.4px] d3:w-[281.6px] d4:w-[300.8px] d5:w-[320px]" data-name="Text Group">
      <TitleBody />
    </div>
  );
}

function CardBodyRow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px relative w-[461px] d1:w-[350.4px] d2:w-[378px] d3:w-[405.7px] d4:w-[433.3px] d5:w-[461px]" data-name="card-body-row">
      <TextGroup />
      <ArrowNarrowRight className="overflow-clip relative shrink-0 size-[24px] d1:size-[18.24px] d2:size-[19.68px] d3:size-[21.12px] d4:size-[22.56px] d5:size-[24px]" />
    </div>
  );
}

function Col2ArticleCard() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_80px] d1:flex-[1_0_60.8px] d2:flex-[1_0_65.6px] d3:flex-[1_0_70.4px] d4:flex-[1_0_75.2px] d5:flex-[1_0_80px] flex-col gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] h-[260px] d1:h-[197.6px] d2:h-[213.2px] d3:h-[228.8px] d4:h-[244.4px] d5:h-[260px] items-start min-w-px px-[40px] d1:px-[30.4px] d2:px-[32.8px] d3:px-[35.2px] d4:px-[37.6px] d5:px-[40px] py-[32px] d1:py-[24.32px] d2:py-[26.24px] d3:py-[28.16px] d4:py-[30.08px] d5:py-[32px] relative" data-name="Col 2 - Article Card">
      <div aria-hidden className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
      <ArticleKickerGroup />
      <CardBodyRow />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-end flex flex-wrap gap-0 items-end relative shrink-0 w-full" data-name="Row 2">
      <Col1BrandGradient />
      <Col2ArticleCard />
    </div>
  );
}

function InsightSpotlightSection() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col h-[900px] d1:h-[684px] d2:h-[738px] d3:h-[792px] d4:h-[846px] d5:h-[900px] items-start overflow-clip relative shrink-0 w-full" data-name="insight-spotlight-section">
      <Row />
      <Row1 />
    </div>
  );
}

function Category() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Category">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] d1:leading-[18.24px] d2:leading-[19.68px] d3:leading-[21.12px] d4:leading-[22.56px] d5:leading-[24px] not-italic relative shrink-0 text-[#8455b0] text-[16px] d1:text-[12.16px] d2:text-[13.12px] d3:text-[14.08px] d4:text-[15.04px] d5:text-[16px] whitespace-nowrap">EVENT</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[60px] d1:gap-[45.6px] d2:gap-[49.2px] d3:gap-[52.8px] d4:gap-[56.4px] d5:gap-[60px] items-end relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] d1:leading-[24.32px] d2:leading-[26.24px] d3:leading-[28.16px] d4:leading-[30.08px] d5:leading-[32px] min-w-px not-italic relative text-[#1e1e1e] text-[24px] d1:text-[18.24px] d2:text-[19.68px] d3:text-[21.12px] d4:text-[22.56px] d5:text-[24px]">Modernising Energy Efficiency through Digitalisation</p>
      <ArrowNarrowRight className="overflow-clip relative shrink-0 size-[24px] d1:size-[18.24px] d2:size-[19.68px] d3:size-[21.12px] d4:size-[22.56px] d5:size-[24px]" />
    </div>
  );
}

function News() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-[330px] d1:min-w-[250.8px] d2:min-w-[270.6px] d3:min-w-[290.4px] d4:min-w-[310.2px] d5:min-w-[330px] overflow-clip pb-[48px] d1:pb-[36.48px] d2:pb-[39.36px] d3:pb-[42.24px] d4:pb-[45.12px] d5:pb-[48px] pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px] px-[36px] d1:px-[27.36px] d2:px-[29.52px] d3:px-[31.68px] d4:px-[33.84px] d5:px-[36px] relative self-stretch" data-name="NEWS">
      <Category />
      <Frame5 />
      <div className="absolute bg-[#e0e0e0] bottom-0 right-[0.25px] d1:right-[0.19px] d2:right-[0.2px] d3:right-[0.22px] d4:right-[0.23px] d5:right-[0.25px] top-0 w-px" data-name="Divider" />
    </div>
  );
}

function Category1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Category">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] d1:leading-[18.24px] d2:leading-[19.68px] d3:leading-[21.12px] d4:leading-[22.56px] d5:leading-[24px] not-italic relative shrink-0 text-[#ff854f] text-[16px] d1:text-[12.16px] d2:text-[13.12px] d3:text-[14.08px] d4:text-[15.04px] d5:text-[16px] whitespace-nowrap">NEWS</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] d1:gap-[9.12px] d2:gap-[9.84px] d3:gap-[10.56px] d4:gap-[11.28px] d5:gap-[12px] items-end min-h-px py-[50px] d1:py-[38px] d2:py-[41px] d3:py-[44px] d4:py-[47px] d5:py-[50px] relative w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] d1:leading-[24.32px] d2:leading-[26.24px] d3:leading-[28.16px] d4:leading-[30.08px] d5:leading-[32px] min-w-px not-italic relative text-[#db4a14] text-[24px] d1:text-[18.24px] d2:text-[19.68px] d3:text-[21.12px] d4:text-[22.56px] d5:text-[24px]">Executive Director makes official visit to India</p>
    </div>
  );
}

function Event() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-[330px] d1:min-w-[250.8px] d2:min-w-[270.6px] d3:min-w-[290.4px] d4:min-w-[310.2px] d5:min-w-[330px] overflow-clip pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px] px-[36px] d1:px-[27.36px] d2:px-[29.52px] d3:px-[31.68px] d4:px-[33.84px] d5:px-[36px] relative self-stretch" data-name="EVENT">
      <Category1 />
      <Frame7 />
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

function Category2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Category">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] d1:leading-[18.24px] d2:leading-[19.68px] d3:leading-[21.12px] d4:leading-[22.56px] d5:leading-[24px] not-italic relative shrink-0 text-[#8455b0] text-[16px] d1:text-[12.16px] d2:text-[13.12px] d3:text-[14.08px] d4:text-[15.04px] d5:text-[16px] whitespace-nowrap">FINAL REPORT</p>
    </div>
  );
}

function Frame6() {
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
      <Frame6 />
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

function Frame8() {
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
      <Frame8 />
    </div>
  );
}

function NewsCardsStrip() {
  return (
    <div className="bg-white border-solid border-t border-white content-stretch flex flex-wrap gap-[24px_0px] d1:gap-[18.24px_0px] d2:gap-[19.68px_0px] d3:gap-[21.12px_0px] d4:gap-[22.56px_0px] d5:gap-[24px_0px] h-[305px] d1:h-[231.8px] d2:h-[250.1px] d3:h-[268.4px] d4:h-[286.7px] d5:h-[305px] items-start pb-[24px] d1:pb-[18.24px] d2:pb-[19.68px] d3:pb-[21.12px] d4:pb-[22.56px] d5:pb-[24px] pl-[176px] d1:pl-[133.8px] d2:pl-[144.3px] d3:pl-[154.9px] d4:pl-[165.4px] d5:pl-[176px] pr-[160px] d1:pr-[121.6px] d2:pr-[131.2px] d3:pr-[140.8px] d4:pr-[150.4px] d5:pr-[160px] relative shrink-0 w-full" data-name="News Cards Strip">
      <News />
      <Event />
      <FinalReport />
      <TechnologyReport />
    </div>
  );
}

export default function CarouselSlide() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Carousel - Slide 2">
      <InsightSpotlightSection />
      <NewsCardsStrip />
    </div>
  );
}