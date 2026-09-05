import imgScreenshot20260830At1458361 from "./42963bccc3e81d6f0c6b6be993da51d2e5b93565.png";

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

export default function Frame() {
  return (
    <div className="content-stretch flex items-end relative size-full">
      <Col2StatBlock />
      <Col3PhotoPlaceholder />
      <Col4SplitBlocks />
    </div>
  );
}