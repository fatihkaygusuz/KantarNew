import { useState, useEffect } from "react";
import imgScreenshot20260830At1458361 from "./42963bccc3e81d6f0c6b6be993da51d2e5b93565.png";
import Col4SplitBlocks from "../Col4SplitBlocks";
import Col2ArticleCard from "../Col2ArticleCard";

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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[30px] d1:leading-[22.8px] d2:leading-[24.6px] d3:leading-[26.4px] d4:leading-[28.2px] d5:leading-[30px] not-italic relative shrink-0 text-[#616161] text-[20px] d1:text-[15.2px] d2:text-[16.4px] d3:text-[17.6px] d4:text-[18.8px] d5:text-[20px] w-[474px] d1:w-[360.2px] d2:w-[388.7px] d3:w-[417.1px] d4:w-[445.6px] d5:w-[474px]">Our latest research shows people are more selective, but also more influenced by the voices they trust.</p>
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
  const [count, setCount] = useState(0);
  useEffect(() => {
    const target = 78;
    const duration = 900;
    const start = performance.now();
    const raf = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Kantar_Brown:Bold',sans-serif] gap-[2px] d1:gap-[1.52px] d2:gap-[1.64px] d3:gap-[1.76px] d4:gap-[1.88px] d5:gap-[2px] items-baseline not-italic relative shrink-0 text-white whitespace-nowrap" data-name="Stat Visual">
      <p className="leading-[normal] relative shrink-0 text-[194px] md:text-[170px] d1:text-[147.4px] d2:text-[159.1px] d3:text-[170.7px] d4:text-[182.4px] d5:text-[194px] tracking-[-4.44px] d1:tracking-[-3.37px] d2:tracking-[-3.64px] d3:tracking-[-3.91px] d4:tracking-[-4.17px] d5:tracking-[-4.44px]">{count}</p>
      <p className="leading-[60px] d1:leading-[45.6px] d2:leading-[49.2px] d3:leading-[52.8px] d4:leading-[56.4px] d5:leading-[60px] relative shrink-0 text-[54px] md:text-[38px] d1:text-[41.04px] d2:text-[44.28px] d3:text-[47.52px] d4:text-[50.76px] d5:text-[54px] tracking-[-1.96px] d1:tracking-[-1.49px] d2:tracking-[-1.61px] d3:tracking-[-1.72px] d4:tracking-[-1.84px] d5:tracking-[-1.96px]">%</p>
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal not-italic opacity-90 relative shrink-0 text-[14px] d1:text-[10.64px] d2:text-[11.48px] d3:text-[12.32px] d4:text-[13.16px] d5:text-[14px] text-white w-[318px] md:w-full md:pr-0 d1:w-[241.7px] d2:w-[260.8px] d3:w-[279.8px] d4:w-[298.9px] d5:w-[318px] d1:pr-[53.2px] d2:pr-[57.4px] d3:pr-[61.6px] d4:pr-[65.8px] d5:pr-[70px]">say recommendations from people they trust influence their decisions.</p>
    </div>
  );
}

function Col2StatBlock() {
  return (
    <div className="s2-stat-block bg-[#194ea0] content-stretch flex flex-col h-[576px] md:h-[600px] d1:h-[437.8px] d2:h-[472.3px] d3:h-[506.9px] d4:h-[541.4px] d5:h-[576px] items-start justify-center pt-[20px] d1:pt-[15.2px] d2:pt-[16.4px] d3:pt-[17.6px] d4:pt-[18.8px] d5:pt-[20px] pr-[40px] md:pr-[26px] d1:pr-[30.4px] d2:pr-[32.8px] d3:pr-[35.2px] d4:pr-[37.6px] d5:pr-[40px] pb-[40px] d1:pb-[30.4px] d2:pb-[32.8px] d3:pb-[35.2px] d4:pb-[37.6px] d5:pb-[40px] pl-[40px] md:pl-[26px] d1:pl-[30.4px] d2:pl-[32.8px] d3:pl-[35.2px] d4:pl-[37.6px] d5:pl-[40px] absolute top-[149px] md:top-[60px] d1:top-[113.2px] d2:top-[122.2px] d3:top-[131.1px] d4:top-[140.1px] d5:top-[149px] right-0 bottom-0 left-0 w-[408px] md:w-[280px] d1:w-[310.1px] d2:w-[334.6px] d3:w-[359px] d4:w-[383.5px] d5:w-[408px] md:z-[100] lg:z-auto" data-name="Col 2 - Stat Block">
      <StatVisual />
      <StatSupportingContent />
    </div>
  );
}

function Col3PhotoPlaceholder() {
  return (
    <div className="s2-photo bg-[#2378e5] content-stretch flex flex-col h-[486px] md:h-[400px] d1:h-[369.4px] d2:h-[398.5px] d3:h-[427.7px] d4:h-[456.8px] d5:h-[486px] items-center overflow-clip absolute top-[150px] md:top-[222px] d1:top-[114px] d2:top-[123px] d3:top-[132px] d4:top-[141px] d5:top-[150px] left-[408px] md:left-[278px] d1:left-[310.1px] d2:left-[334.6px] d3:left-[359px] d4:left-[383.5px] d5:left-[408px] w-[596px] md:w-[396px] d1:w-[453px] d2:w-[488.7px] d3:w-[524.5px] d4:w-[560.2px] d5:w-[596px] md:bottom-[-600px] lg:bottom-auto" data-name="Col 3 - Photo Placeholder">
      <div className="h-[489px] top-[1px] relative shrink-0 w-[457px] left-[-8px] mr-[139px] md:absolute md:right-[-528px] md:bottom-[-40px] md:left-[2px] md:w-[327px] md:h-[419px] md:mr-[59px] d1:h-[371.6px] d2:h-[401px] d3:h-[430.3px] d4:h-[459.7px] d5:h-[489px] d1:top-[0.76px] d2:top-[0.82px] d3:top-[0.88px] d4:top-[0.94px] d5:top-[1px] lg:relative d1:w-[347.3px] d2:w-[374.7px] d3:w-[402.2px] d4:w-[429.6px] d5:w-[457px] d1:left-[-6.08px] d2:left-[-6.56px] d3:left-[-7.04px] d4:left-[-7.52px] d5:left-[-8px] d1:mr-[105.6px] d2:mr-[114px] d3:mr-[122.3px] d4:mr-[130.7px] d5:mr-[139px]" data-name="Screenshot 2026-08-30 at 14.58.36 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full md:inset-auto md:top-[0px] md:right-[0px] md:bottom-[0px] md:w-[327px] md:left-[-80px] lg:inset-0 lg:w-full" src={imgScreenshot20260830At1458361} />
      </div>
    </div>
  );
}


function Frame5() {
  return (
    <div className="content-stretch flex h-[877px] md:h-0 d1:h-[666.5px] d2:h-[719.1px] d3:h-[771.8px] d4:h-[824.4px] d5:h-[877px] items-end relative shrink-0 w-[405px] d1:w-[307.8px] d2:w-[332.1px] d3:w-[356.4px] d4:w-[380.7px] d5:w-[405px]">
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
      <Frame5 />
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
    <div className="absolute content-stretch flex flex-col gap-[32px] d1:gap-[24.32px] d2:gap-[26.24px] d3:gap-[28.16px] d4:gap-[30.08px] d5:gap-[32px] items-start top-[34px] d1:top-[25.84px] d2:top-[27.88px] d3:top-[29.92px] d4:top-[31.96px] d5:top-[34px] bottom-[-7px] d1:bottom-[-5.32px] d2:bottom-[-5.74px] d3:bottom-[-6.16px] d4:bottom-[-6.58px] d5:bottom-[-7px] left-[28px] d1:left-[21.28px] d2:left-[22.96px] d3:left-[24.64px] d4:left-[26.32px] d5:left-[28px] md:w-[114px] lg:w-auto" data-name="Dot Grid">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export function Col1BrandGradient() {
  return (
    <div className="bg-gradient-to-l content-stretch flex flex-col from-[#ff852d] h-[180px] md:h-[100px] d1:h-[136.8px] d2:h-[147.6px] d3:h-[158.4px] d4:h-[169.2px] d5:h-[180px] items-start justify-end pb-[8px] d1:pb-[6.08px] d2:pb-[6.56px] d3:pb-[7.04px] d4:pb-[7.52px] d5:pb-[8px] pt-[48px] d1:pt-[36.48px] d2:pt-[39.36px] d3:pt-[42.24px] d4:pt-[45.12px] d5:pt-[48px] px-[48px] d1:px-[36.48px] d2:px-[39.36px] d3:px-[42.24px] d4:px-[45.12px] d5:px-[48px] absolute to-[#a973f9] w-[963px] md:w-[1023px] d1:w-[731.9px] d2:w-[789.7px] d3:w-[847.4px] d4:w-[905.2px] d5:w-[963px] top-[725px] md:top-[634px] d1:top-[551px] d2:top-[594.5px] d3:top-[638px] d4:top-[681.5px] d5:top-[725px] right-[615px] d1:right-[467.4px] d2:right-[504.3px] d3:right-[541.2px] d4:right-[578.1px] d5:right-[615px] bottom-[1250px] d1:bottom-[950px] d2:bottom-[1025px] d3:bottom-[1100px] d4:bottom-[1175px] d5:bottom-[1250px] left-[11px] md:left-[1px] d1:left-[8.36px] d2:left-[9.02px] d3:left-[9.68px] d4:left-[10.34px] d5:left-[11px] md:z-[4] lg:z-auto" data-name="Col 1 - Brand Gradient">
      <DotGrid />
    </div>
  );
}


function Row1() {
  return (
    <div className="absolute w-[458px] d1:w-[348.1px] d2:w-[375.6px] d3:w-[403px] d4:w-[430.5px] d5:w-[458px] md:hidden lg:block" data-name="Row 2">
      <Col2ArticleCard />
    </div>
  );
}

export function Slide2RightVisual() {
  return (
    <div className="relative h-full w-full d1:w-[763px] d2:w-[823.3px] d3:w-[883.5px] d4:w-[943.8px] d5:w-[1004px] d1:ml-auto flex flex-col items-start overflow-visible">
      <div className="flex items-end shrink-0">
        <Frame5 />
      </div>
      <Row1 />
    </div>
  );
}

export default function InsightSpotlightSection() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start relative size-full" data-name="insight-spotlight-section">
      <Row />
      <Row1 />
    </div>
  );
}