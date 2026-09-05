import { useState, useCallback, useEffect } from "react";
import HeaderNavigation from "./imports/HeaderNavigation";
import ValuePropositionContent from "./imports/ValuePropositionContent-1";
import KantarCardGrid from "./imports/KantarCardGrid";
import IntelligenceSection from "../sections/Intelligence/IntelligenceSection";
import photoStrip from "./imports/image-1.png";
import GlobalReachSection from "./imports/GlobalReachSection";
import image3 from "./imports/image-3.png";
import SignalIntelSection from "./imports/Frame2147236513-1";
import KantarScale from "./imports/KantarInNumbers-1";

// Right-column components — manually prepared, coordinates relative to their container
import Group2 from "./imports/Group2";                    // Slide 1: buildings / date / dot-grid
import { Slide2RightVisual as Slide2Right, Col1BrandGradient } from "./imports/InsightSpotlightSection"; // Slide 2: 78% stat + photo + blocks
import RightColumnContainer from "./imports/RightColumnContainer"; // Slide 3: 85% + referrals
import Group5 from "./imports/Group5";                    // Slide 4: gradient mask + IQ

// ─── Shared atoms ─────────────────────────────────────────────────────────────

function ArrowRightPurple() {
  return (
    <div className="relative shrink-0 size-[24px] d1:size-[18.24px] d2:size-[19.68px] d3:size-[21.12px] d4:size-[22.56px] d5:size-[24px] right-0">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
        <path d="M5 12H19M12 19L19 12L12 5" stroke="#CDA3F6" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function ExploreCTA({ label = "Explore how", className, labelClassName }: { label?: string; className?: string; labelClassName?: string }) {
  return (
    <div className={`content-stretch flex flex-col gap-[14px] items-start relative shrink-0${className ? ` ${className}` : ""}`}>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#1e1e1e] text-[16px] whitespace-nowrap w-[224px]${labelClassName ? ` ${labelClassName}` : ""}`}>{label}</p>
        <ArrowRightPurple />
      </div>
      <div className="h-0 relative shrink-0 w-[200px] d1:w-[152px] d2:w-[164px] d3:w-[176px] d4:w-[188px] d5:w-[200px]">
        <div className="absolute inset-[-1px_0_0_0] d1:inset-[-0.76px_0_0_0] d2:inset-[-0.82px_0_0_0] d3:inset-[-0.88px_0_0_0] d4:inset-[-0.94px_0_0_0] d5:inset-[-1px_0_0_0] w-[244px] d1:w-[185.4px] d2:w-[200.1px] d3:w-[214.7px] d4:w-[229.4px] d5:w-[244px]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 200 1" width="200">
            <line stroke="#C2C2C2" x2="200" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavigationControls({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-center overflow-clip relative shrink-0 left-0 top-[80px] d1:top-[60.8px] d2:top-[65.6px] d3:top-[70.4px] d4:top-[75.2px] d5:top-[80px]">
      <button
        onClick={onPrev}
        className="font-['Inter:Regular',sans-serif] font-normal leading-normal not-italic text-[#1e1e1e] text-[28px] d1:text-[21.28px] d2:text-[22.96px] d3:text-[24.64px] d4:text-[26.32px] d5:text-[28px] whitespace-nowrap hover:text-[#8455b0] transition-colors select-none cursor-pointer"
        aria-label="Previous slide"
      >‹</button>
      <div className="flex h-[0.01px] d1:h-[0.01px] d2:h-[0.01px] d3:h-[0.01px] d4:h-[0.01px] d5:h-[0.01px] items-center justify-center relative shrink-0 w-[20px] d1:w-[15.2px] d2:w-[16.4px] d3:w-[17.6px] d4:w-[18.8px] d5:w-[20px]">
        <div className="flex-none rotate-90">
          <div className="h-[20px] d1:h-[15.2px] d2:h-[16.4px] d3:h-[17.6px] d4:h-[18.8px] d5:h-[20px] relative w-[0.01px] d1:w-[0.01px] d2:w-[0.01px] d3:w-[0.01px] d4:w-[0.01px] d5:w-[0.01px]">
            <div className="absolute bottom-full left-0 right-0 top-[-5%]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 0.01 1" width="0.01">
                <line stroke="#C2C2C2" x2="0.01" y1="0.5" y2="20.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={onNext}
        className="font-['Inter:Regular',sans-serif] font-normal leading-normal not-italic text-[#1e1e1e] text-[28px] d1:text-[21.28px] d2:text-[22.96px] d3:text-[24.64px] d4:text-[26.32px] d5:text-[28px] whitespace-nowrap hover:text-[#8455b0] transition-colors select-none cursor-pointer"
        aria-label="Next slide"
      >›</button>
    </div>
  );
}

// ─── Two-column shell ─────────────────────────────────────────────────────────
// Left col: 736px (176px padding + 560px zone), mirrors original Figma proportions.
// Right col: flex-1, relative+overflow-hidden — imported components position inside it.

function SlideShell({
  leftContent,
  rightKey,
  rightContent,
  leftClassName,
  rightOverflow = "overflow-hidden",
  rightClassName,
}: {
  leftContent: React.ReactNode;
  rightKey: string;
  rightContent: React.ReactNode;
  leftClassName?: string;
  rightOverflow?: string;
  rightClassName?: string;
}) {
  return (
    <div className="w-full bg-[#fafafa] md:pl-[0px] lg:pl-0">
      <div className="max-w-[1660px] mx-auto flex flex-col md:flex-row h-auto md:h-[720px] d1:h-[684px] d2:h-[738px] d3:h-[792px] d4:h-[846px] d5:h-[900px] overflow-hidden">
        {/* Left column */}
        <div className={leftClassName ?? "w-full md:w-[460px] d1:w-[559.4px] d2:w-[603.5px] d3:w-[647.7px] d4:w-[691.8px] d5:w-[736px] shrink-0 flex flex-col gap-[40px] md:gap-[48px] d1:gap-[45.6px] d2:gap-[49.2px] d3:gap-[52.8px] d4:gap-[56.4px] d5:gap-[60px] items-start px-4 md:pl-[40px] md:pr-0 lg:pl-0 lg:pr-0 pt-[48px] md:pt-[80px] d1:pt-[60.8px] d2:pt-[65.6px] d3:pt-[70.4px] d4:pt-[75.2px] d5:pt-[80px] pb-[48px] md:pb-[80px] d1:pb-[60.8px] d2:pb-[65.6px] d3:pb-[70.4px] d4:pb-[75.2px] d5:pb-[80px]"}>
          {leftContent}
        </div>
        {/* Right column — animated on each slide transition */}
        <div key={rightKey} className={`animate-fade-in flex-1 md:flex-none md:w-[538px] lg:flex-1 lg:w-auto relative ${rightOverflow}${rightClassName ? ` ${rightClassName}` : ""}`}>
          {rightContent}
        </div>
      </div>
    </div>
  );
}

// ─── Slide 1 ──────────────────────────────────────────────────────────────────

function Slide1({ k, onPrev, onNext }: { k: number; onPrev: () => void; onNext: () => void }) {
  return (
    <SlideShell
      rightKey={`s1r-${k}`}
      rightOverflow="overflow-visible"
      leftContent={
        <>
          {/* Eyebrow — slides in from left */}
          <div key={`s1e-${k}`} className="animate-slide-left content-stretch flex flex-col gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-start relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] d1:leading-[24.32px] d2:leading-[26.24px] d3:leading-[28.16px] d4:leading-[30.08px] d5:leading-[32px] not-italic relative shrink-0 text-[#8455b0] text-[24px] md:text-[18px] d1:text-[18.24px] d2:text-[19.68px] d3:text-[21.12px] d4:text-[22.56px] d5:text-[24px]">WHAT WE DELIVER</p>
            <div className="h-0 relative shrink-0 w-[36px] d1:w-[27.36px] d2:w-[29.52px] d3:w-[31.68px] d4:w-[33.84px] d5:w-[36px]">
              <div className="absolute inset-[-3px_0_0_0]">
                <svg className="block size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 56 3" width="56">
                  <line stroke="#8455B0" strokeWidth="3" x2="56" y1="1.5" y2="1.5" />
                </svg>
              </div>
            </div>
          </div>
          {/* Headline + body — staggered slide from left */}
          <div key={`s1h-${k}`} className="animate-slide-left-delay content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium items-start leading-[90px] d1:leading-[68.4px] d2:leading-[73.8px] d3:leading-[79.2px] d4:leading-[84.6px] d5:leading-[90px] pb-[32px] d1:pb-[24.32px] d2:pb-[26.24px] d3:pb-[28.16px] d4:pb-[30.08px] d5:pb-[32px] relative shrink-0 text-[72px] d1:text-[54.72px] d2:text-[59.04px] d3:text-[63.36px] d4:text-[67.68px] d5:text-[72px] tracking-[-1.44px] d1:tracking-[-1.09px] d2:tracking-[-1.18px] d3:tracking-[-1.27px] d4:tracking-[-1.35px] d5:tracking-[-1.44px] w-full">
              <p className="relative shrink-0 text-[#1e1e1e] text-[32px] md:text-[34px] d1:text-[41.04px] d2:text-[44.28px] d3:text-[47.52px] d4:text-[50.76px] d5:text-[54px] leading-normal">Modernising</p>
              <p className="relative shrink-0 text-[#1e1e1e] text-[32px] md:text-[34px] d1:text-[41.04px] d2:text-[44.28px] d3:text-[47.52px] d4:text-[50.76px] d5:text-[54px] leading-normal">Energy Efficiency</p>
              <p className="relative shrink-0 text-[#8455b0] text-[32px] md:text-[34px] d1:text-[41.04px] d2:text-[44.28px] d3:text-[47.52px] d4:text-[50.76px] d5:text-[54px] leading-normal">through Digitalisation</p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[30px] md:leading-[26px] d1:leading-[22.8px] d2:leading-[24.6px] d3:leading-[26.4px] d4:leading-[28.2px] d5:leading-[30px] not-italic relative shrink-0 text-[#616161] text-[16px] md:text-[14px] d1:text-[13.68px] d2:text-[14.76px] d3:text-[15.84px] d4:text-[16.92px] d5:text-[18px] w-full md:w-[364px] d1:w-[351.1px] d2:w-[378.8px] d3:w-[406.6px] d4:w-[434.3px] d5:w-[462px]">Energy efficiency is changing, with new digital technologies enabling greater control, optimisation and analytics. New policies and new business models will greatly enhance end-use and systems efficiency.</p>
          </div>
          <ExploreCTA />
        </>
      }
      rightContent={
        // Group2 uses display:contents — its absolute children position relative to this wrapper
        <div className="relative w-full h-full">
          <Group2 />
        </div>
      }
    />
  );
}

// ─── Slide 2 ──────────────────────────────────────────────────────────────────

function Slide2({ k, onPrev, onNext }: { k: number; onPrev: () => void; onNext: () => void }) {
  return (
    <SlideShell
      rightKey={`s2r-${k}`}
      leftClassName="w-full md:w-[480px] d1:w-[430.2px] d2:w-[464.1px] d3:w-[498.1px] d4:w-[532px] d5:w-[566px] shrink-0 relative flex flex-col gap-y-[40px] md:gap-y-[0px] d1:gap-y-[45.6px] d2:gap-y-[49.2px] d3:gap-y-[52.8px] d4:gap-y-[56.4px] d5:gap-y-[60px] items-start pt-[48px] md:pt-[90px] d1:pt-[68.4px] d2:pt-[73.8px] d3:pt-[79.2px] d4:pt-[84.6px] d5:pt-[90px] pr-[16px] md:pr-[43px] d1:pr-[9.88px] d2:pr-[10.66px] d3:pr-[11.44px] d4:pr-[12.22px] d5:pr-[13px] pb-[48px] md:pb-[90px] d1:pb-[68.4px] d2:pb-[73.8px] d3:pb-[79.2px] d4:pb-[84.6px] d5:pb-[90px] pl-[16px] md:pl-[43px] d1:pl-[9.88px] d2:pl-[10.66px] d3:pl-[11.44px] d4:pl-[12.22px] d5:pl-[13px] md:top-[-14px] md:bottom-[0px] lg:top-auto lg:bottom-auto md:h-[100px] lg:h-auto"
      leftContent={
        <>
          {/* Eyebrow — fades in from top */}
          <div key={`s2e-${k}`} className="animate-slide-top content-stretch flex flex-col gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-start relative shrink-0 w-full md:h-[70px] lg:h-auto">
            <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] d1:leading-[24.32px] d2:leading-[26.24px] d3:leading-[28.16px] d4:leading-[30.08px] d5:leading-[32px] not-italic relative shrink-0 text-[#5f9cf8] text-[24px] d1:text-[18.24px] d2:text-[19.68px] d3:text-[21.12px] d4:text-[22.56px] d5:text-[24px]">INSIGHT SPOTLIGHT</p>
            <div className="h-0 relative shrink-0 w-[36px] d1:w-[27.36px] d2:w-[29.52px] d3:w-[31.68px] d4:w-[33.84px] d5:w-[36px]">
              <div className="absolute inset-[-3px_0_0_0] md:inset-auto md:top-[-130px] md:left-[340px] d1:inset-[-2.28px_0_0_0] d2:inset-[-2.46px_0_0_0] d3:inset-[-2.64px_0_0_0] d4:inset-[-2.82px_0_0_0] d5:inset-[-3px_0_0_0]">
                <svg className="block size-full md:w-[641px] md:h-[70px] lg:w-auto lg:h-auto" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 56 3" width="56">
                  <line stroke="#93BBFC" strokeWidth="3" x2="56" y1="1.5" y2="1.5" />
                </svg>
              </div>
            </div>
          </div>
          {/* Heading — staggered fade from top */}
          <div key={`s2h-${k}`} className="animate-slide-top-delay [word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#1e1e1e] w-full md:w-[354px] lg:w-full h-[140px] d1:h-[106.4px] d2:h-[114.8px] d3:h-[123.2px] d4:h-[131.6px] d5:h-[140px]">
            <p className="font-['Inter:Light',sans-serif] font-light leading-normal relative shrink-0 text-[32px] md:text-[40px] d1:text-[42.56px] d2:text-[45.92px] d3:text-[49.28px] d4:text-[52.64px] d5:text-[56px] tracking-[-1.44px] d1:tracking-[-1.09px] d2:tracking-[-1.18px] d3:tracking-[-1.27px] d4:tracking-[-1.35px] d5:tracking-[-1.44px] w-full">Trust drives</p>
            <div className="content-stretch flex gap-[4px] d1:gap-[3.04px] d2:gap-[3.28px] d3:gap-[3.52px] d4:gap-[3.76px] d5:gap-[4px] items-baseline relative shrink-0 w-full whitespace-nowrap h-auto">
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-normal relative shrink-0 text-[32px] md:text-[40px] d1:text-[39.52px] d2:text-[42.64px] d3:text-[45.76px] d4:text-[48.88px] d5:text-[52px] tracking-[-1.44px] d1:tracking-[-1.09px] d2:tracking-[-1.18px] d3:tracking-[-1.27px] d4:tracking-[-1.35px] d5:tracking-[-1.44px]">every choice</p>
              <p className="font-['Kantar_Brown:Bold',sans-serif] leading-normal relative shrink-0 text-[32px] md:text-[40px] d1:text-[45.6px] d2:text-[49.2px] d3:text-[52.8px] d4:text-[56.4px] d5:text-[60px] tracking-[-1.2px] d1:tracking-[-0.91px] d2:tracking-[-0.98px] d3:tracking-[-1.06px] d4:tracking-[-1.13px] d5:tracking-[-1.2px]">.</p>
            </div>
          </div>
          {/* Body — fade in */}
          <p key={`s2b-${k}`} className="animate-fade-in-delay [word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-normal not-italic relative shrink-0 text-[#616161] text-[16px] d1:text-[12.16px] d2:text-[13.12px] d3:text-[14.08px] d4:text-[15.04px] d5:text-[16px] md:text-[18px] w-full md:w-[334px]">Our latest research shows people are more selective, but also more influenced by the voices they trust.</p>
          <Col1BrandGradient />
          <ExploreCTA className="md:top-[30px] md:bottom-0 md:right-[0px] md:left-[0px] lg:top-auto lg:bottom-auto lg:right-auto lg:left-auto" labelClassName="md:h-[24px] lg:h-auto" />
        </>
      }
      rightContent={
        // Frame2147236522: flex items-end size-full — fills the right column
        <Slide2Right />
      }
    />
  );
}

// ─── Slide 3 ──────────────────────────────────────────────────────────────────

function Slide3({ k, onPrev, onNext }: { k: number; onPrev: () => void; onNext: () => void }) {
  return (
    <SlideShell
      rightKey={`s3r-${k}`}
      leftClassName="w-full md:w-[410px] d1:w-[559.4px] d2:w-[603.5px] d3:w-[647.7px] d4:w-[691.8px] d5:w-[736px] shrink-0 flex flex-col gap-[40px] md:gap-[48px] d1:gap-[45.6px] d2:gap-[49.2px] d3:gap-[52.8px] d4:gap-[56.4px] d5:gap-[60px] items-start pl-[16px] md:pl-[44px] d1:pl-[13.68px] d2:pl-[14.76px] d3:pl-[15.84px] d4:pl-[16.92px] d5:pl-[18px] pt-[48px] md:pt-[80px] d1:pt-[60.8px] d2:pt-[65.6px] d3:pt-[70.4px] d4:pt-[75.2px] d5:pt-[80px] pb-[48px] md:pb-[80px] d1:pb-[60.8px] d2:pb-[65.6px] d3:pb-[70.4px] d4:pb-[75.2px] d5:pb-[80px]"
      leftContent={
        <>
          {/* Eyebrow — slides in from left */}
          <div key={`s3e-${k}`} className="animate-slide-left content-stretch flex flex-col gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-start relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] d1:leading-[24.32px] d2:leading-[26.24px] d3:leading-[28.16px] d4:leading-[30.08px] d5:leading-[32px] not-italic relative shrink-0 text-[#8455b0] text-[24px] d1:text-[18.24px] d2:text-[19.68px] d3:text-[21.12px] d4:text-[22.56px] d5:text-[24px]">WHAT WE DELIVER</p>
            <div className="h-0 relative shrink-0 w-[56px] d1:w-[42.56px] d2:w-[45.92px] d3:w-[49.28px] d4:w-[52.64px] d5:w-[56px] right-[791px] d1:right-[601.2px] d2:right-[648.6px] d3:right-[696.1px] d4:right-[743.5px] d5:right-[791px] bottom-[-7px] d1:bottom-[-5.32px] d2:bottom-[-5.74px] d3:bottom-[-6.16px] d4:bottom-[-6.58px] d5:bottom-[-7px] left-[28px] d1:left-[21.28px] d2:left-[22.96px] d3:left-[24.64px] d4:left-[26.32px] d5:left-[28px]">
              <div className="absolute inset-[-3px_0_0_0] d1:inset-[-2.28px_0_0_0] d2:inset-[-2.46px_0_0_0] d3:inset-[-2.64px_0_0_0] d4:inset-[-2.82px_0_0_0] d5:inset-[-3px_0_0_0] right-[20px] d1:right-[15.2px] d2:right-[16.4px] d3:right-[17.6px] d4:right-[18.8px] d5:right-[20px]">
                <svg className="absolute left-[-25px] d1:left-[-19px] d2:left-[-20.5px] d3:left-[-22px] d4:left-[-23.5px] d5:left-[-25px] size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 56 3" width="56">
                  <line stroke="#8455B0" strokeWidth="3" x2="56" y1="1.5" y2="1.5" />
                </svg>
              </div>
            </div>
          </div>
          {/* Headline + body — staggered slide from left */}
          <div key={`s3h-${k}`} className="animate-slide-left-delay [word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 w-full">
            <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium items-start leading-[90px] d1:leading-[68.4px] d2:leading-[73.8px] d3:leading-[79.2px] d4:leading-[84.6px] d5:leading-[90px] pb-[32px] d1:pb-[24.32px] d2:pb-[26.24px] d3:pb-[28.16px] d4:pb-[30.08px] d5:pb-[32px] relative shrink-0 text-[72px] d1:text-[54.72px] d2:text-[59.04px] d3:text-[63.36px] d4:text-[67.68px] d5:text-[72px] tracking-[-1.44px] d1:tracking-[-1.09px] d2:tracking-[-1.18px] d3:tracking-[-1.27px] d4:tracking-[-1.35px] d5:tracking-[-1.44px] w-full">
              <p className="relative shrink-0 text-[#1e1e1e] text-[32px] md:text-[40px] d1:text-[45.6px] d2:text-[49.2px] d3:text-[52.8px] d4:text-[56.4px] d5:text-[60px] leading-[1.2] w-full">Our biggest achievement?</p>
              <p className="relative shrink-0 text-[#079455] text-[32px] md:text-[40px] d1:text-[45.6px] d2:text-[49.2px] d3:text-[52.8px] d4:text-[56.4px] d5:text-[60px] leading-[1.2] w-full">Earning your trust.</p>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] md:leading-[24px] d1:leading-[22.8px] d2:leading-[24.6px] d3:leading-[26.4px] d4:leading-[28.2px] d5:leading-[30px] relative shrink-0 text-[#616161] text-[16px] md:text-[14px] md:font-light d1:text-[15.2px] d2:text-[16.4px] d3:text-[17.6px] d4:text-[18.8px] d5:text-[20px] lg:font-normal w-full md:w-[292px] d1:w-[351.1px] d2:w-[378.8px] d3:w-[406.6px] d4:w-[434.3px] d5:w-[462px] whitespace-pre-line">{`This year, the majority of our students came to us through heartfelt recommendations from family, friends, and alumni.\n\nYour belief in Gradvisors fuels our passion to deliver exceptional results.`}</p>
          </div>
          <ExploreCTA />
        </>
      }
      rightOverflow="overflow-visible"
      rightContent={<RightColumnContainer />}
    />
  );
}

// ─── Slide 4 ──────────────────────────────────────────────────────────────────

function Slide4({ k, onPrev, onNext }: { k: number; onPrev: () => void; onNext: () => void }) {
  return (
    <SlideShell
      rightKey={`s4r-${k}`}
      leftClassName="w-full md:w-[580px] d1:w-[559.4px] d2:w-[603.5px] d3:w-[647.7px] d4:w-[691.8px] d5:w-[736px] shrink-0 flex flex-col gap-[40px] md:gap-[48px] d1:gap-[45.6px] d2:gap-[49.2px] d3:gap-[52.8px] d4:gap-[56.4px] d5:gap-[60px] items-start pl-[16px] md:pl-[48px] d1:pl-[13.68px] d2:pl-[14.76px] d3:pl-[15.84px] d4:pl-[16.92px] d5:pl-[18px] pt-[48px] md:pt-[110px] d1:pt-[83.6px] d2:pt-[90.2px] d3:pt-[96.8px] d4:pt-[103.4px] d5:pt-[110px] pr-[16px] md:pr-[48px] d1:pr-[13.68px] d2:pr-[14.76px] d3:pr-[15.84px] d4:pr-[16.92px] d5:pr-[18px] pb-[48px] md:pb-[80px] d1:pb-[60.8px] d2:pb-[65.6px] d3:pb-[70.4px] d4:pb-[75.2px] d5:pb-[80px]"
      leftContent={
        <>
          {/* Eyebrow — fades in from top */}
          <div key={`s4e-${k}`} className="animate-slide-top content-stretch flex flex-col gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-start relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] d1:leading-[24.32px] d2:leading-[26.24px] d3:leading-[28.16px] d4:leading-[30.08px] d5:leading-[32px] not-italic relative shrink-0 text-[#5f9cf8] text-[24px] md:text-[21px] d1:text-[18.24px] d2:text-[19.68px] d3:text-[21.12px] d4:text-[22.56px] d5:text-[24px]">INTELLIGENCE FOR BRAND GROWTH</p>
            <div className="h-0 relative shrink-0 w-[36px] d1:w-[27.36px] d2:w-[29.52px] d3:w-[31.68px] d4:w-[33.84px] d5:w-[36px]">
              <div className="absolute inset-[-3px_0_0_0]">
                <svg className="block size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 56 3" width="56">
                  <line stroke="#5F9CF8" strokeWidth="3" x2="56" y1="1.5" y2="1.5" />
                </svg>
              </div>
            </div>
          </div>
          {/* Headline + body — staggered fade from top */}
          <div key={`s4h-${k}`} className="animate-slide-top-delay content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start pb-[32px] d1:pb-[24.32px] d2:pb-[26.24px] d3:pb-[28.16px] d4:pb-[30.08px] d5:pb-[32px] relative shrink-0 w-full">
              <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.25] not-italic relative shrink-0 text-[#1e1e1e] text-[32px] md:text-[39px] d1:text-[48.64px] d2:text-[52.48px] d3:text-[56.32px] d4:text-[60.16px] d5:text-[64px] tracking-[-1.44px] d1:tracking-[-1.09px] d2:tracking-[-1.18px] d3:tracking-[-1.27px] d4:tracking-[-1.35px] d5:tracking-[-1.44px] w-full">{"Know what's changing and what's to do next."}</p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[30px] d1:leading-[22.8px] d2:leading-[24.6px] d3:leading-[26.4px] d4:leading-[28.2px] d5:leading-[30px] not-italic relative shrink-0 text-[#616161] text-[20px] d1:text-[15.2px] d2:text-[16.4px] d3:text-[17.6px] d4:text-[18.8px] d5:text-[20px] whitespace-nowrap md:w-full lg:w-auto">Sharper understanding. Smarter decisions. <br></br>Stronger growth</p>
          </div>
          <ExploreCTA label="Discover Our Solutions" />
        </>
      }
      rightClassName="md:top-[80px] md:left-[-300px] md:w-[860px] lg:top-auto lg:left-auto lg:w-auto"
      rightContent={
        // Group5 uses display:contents — wrap in relative so absolute children anchor correctly
        <div className="relative w-full h-full md:w-[853px] md:h-[638px] lg:w-full lg:h-full">
          <Group5 />
        </div>
      }
    />
  );
}

// ─── Bottom navigation cards ──────────────────────────────────────────────────

const allCards = [
  [
    { cat: "EVENT",             catColor: "#ff854f", title: "Modernising Energy Efficiency through Digitalisation", titleColor: "#db4a14", accent: "#FF854F" },
    { cat: "ARTICLE",              catColor: "#8455b0", title: "Billions of insights on how consumers think",     titleColor: "#1e1e1e" },
    { cat: "PERSPECTIVES",      catColor: "#8455b0", title: "Explore the KANTAR point of view",                                      titleColor: "#1e1e1e" },
    { cat: "SOLUTIONS", catColor: "#8455b0", title: "Positioning, Perception and Segmentation Strategy",                 titleColor: "#1e1e1e" },
  ],
  [
    { cat: "EVENT",             catColor: "#8455b0", title: "Modernising Energy Efficiency through Digitalisation", titleColor: "#1e1e1e" },
    { cat: "ARTICLE",              catColor: "#ff854f", title: "Billions of insights on how consumers think",     titleColor: "#db4a14", accent: "#FF854F" },
    { cat: "PERSPECTIVES",      catColor: "#8455b0", title: "Explore the KANTAR point of view",                                      titleColor: "#1e1e1e" },
    { cat: "SOLUTIONS", catColor: "#8455b0", title: "Positioning, Perception and Segmentation Strategy",                 titleColor: "#1e1e1e" },
  ],
  [
    { cat: "EVENT",             catColor: "#8455b0", title: "Modernising Energy Efficiency through Digitalisation", titleColor: "#1e1e1e" },
    { cat: "ARTICLE",              catColor: "#8455b0", title: "Billions of insights on how consumers think",     titleColor: "#1e1e1e" },
    { cat: "PERSPECTIVES",      catColor: "#ff854f", title: "Explore the KANTAR point of view",                                      titleColor: "#db4a14", accent: "#FF854F" },
    { cat: "SOLUTIONS", catColor: "#8455b0", title: "Positioning, Perception and Segmentation Strategy",                 titleColor: "#1e1e1e" },
  ],
  [
    { cat: "EVENT",             catColor: "#8455b0", title: "Modernising Energy Efficiency through Digitalisation", titleColor: "#1e1e1e" },
    { cat: "ARTICLE",              catColor: "#8455b0", title: "Billions of insights on how consumers think",     titleColor: "#1e1e1e" },
    { cat: "PERSPECTIVES",      catColor: "#8455b0", title: "Explore the KANTAR point of view",                                      titleColor: "#1e1e1e" },
    { cat: "SOLUTIONS", catColor: "#ff854f", title: "Positioning, Perception and Segmentation Strategy",                 titleColor: "#db4a14", accent: "#FF854F" },
  ],
];

function GalleryStrip() {
  return (
    <>
      {/* Mobile / tablet */}
      <div className="md:hidden w-full bg-[#c9b3f5] overflow-hidden" style={{ height: "400px" }}>
        <img src={photoStrip} alt="" className="w-full block object-cover h-[220px] d1:h-[167.2px] d2:h-[180.4px] d3:h-[193.6px] d4:h-[206.8px] d5:h-[220px] mt-auto" style={{ marginTop: "180px" }} />
      </div>
      {/* Desktop */}
      <div className="hidden md:block w-full bg-[#c9b3f5] overflow-hidden md:pt-[420px] md:pr-0 md:pb-0 md:pl-0 d1:pt-[456px] d2:pt-[492px] d3:pt-[528px] d4:pt-[564px] d5:pt-[600px]" style={{ height: "fit-content" }}>
        <img src={photoStrip} alt="" className="w-full block object-cover md:h-[233px] md:w-full xl:w-full d1:h-[389.9px] d2:h-[420.7px] d3:h-[451.4px] d4:h-[482.2px] d5:h-[513px] md:top-[0px] md:right-[0px] md:left-[0px] d1:top-[83.6px] d2:top-[90.2px] d3:top-[96.8px] d4:top-[103.4px] d5:top-[110px] xl:right-auto xl:left-auto" style={{ position: "relative", bottom: "0px" }} />
      </div>
    </>
  );
}

interface CardDef { cat: string; catColor: string; title: string; titleColor: string; accent?: string; }

function NewsCard({ cat, catColor, title, titleColor, accent, active, onClick, index }: CardDef & { active: boolean; onClick: () => void; index: number }) {
  return (
    <button
      onClick={onClick}
      className={[
        "content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-full sm:min-w-[240px] overflow-clip pb-[36px] d1:pb-[27.36px] d2:pb-[29.52px] d3:pb-[31.68px] d4:pb-[33.84px] d5:pb-[36px] sm:pb-[48px] pt-[24px] d1:pt-[18.24px] d2:pt-[19.68px] d3:pt-[21.12px] d4:pt-[22.56px] d5:pt-[24px] sm:pt-[32px] px-[24px] sm:px-[36px] md:px-[28px] d1:px-[27.36px] d2:px-[29.52px] d3:px-[31.68px] d4:px-[33.84px] d5:px-[36px] relative self-stretch text-left cursor-pointer transition-colors duration-200 border-b sm:border-b-0 border-[#e0e0e0]",
        active ? "bg-[#fafafa]" : "bg-white hover:bg-[#f5f5f5]",
      ].join(" ")}
    >
      <p style={{ color: catColor }} className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] d1:leading-[18.24px] d2:leading-[19.68px] d3:leading-[21.12px] d4:leading-[22.56px] d5:leading-[24px] not-italic text-[16px] d1:text-[12.16px] d2:text-[13.12px] d3:text-[14.08px] d4:text-[15.04px] d5:text-[16px] whitespace-nowrap">{cat}</p>
      <div className="content-stretch flex gap-[12px] d1:gap-[9.12px] d2:gap-[9.84px] d3:gap-[10.56px] d4:gap-[11.28px] d5:gap-[12px] items-end relative shrink-0 w-full mt-3">
        <p style={{ color: titleColor }} className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] md:leading-[26px] d1:leading-[24.32px] d2:leading-[26.24px] d3:leading-[28.16px] d4:leading-[30.08px] d5:leading-[32px] not-italic min-w-px text-[20px] md:text-[16px] d1:text-[15.2px] d2:text-[16.4px] d3:text-[17.6px] d4:text-[18.8px] d5:text-[20px]">{title}</p>
      </div>
      {accent && (
        <svg className="shrink-0 w-full mt-3" fill="none" height="2" viewBox="0 0 325 2" preserveAspectRatio="none">
          <line stroke={accent} strokeWidth="2" x2="325" y1="1" y2="1" />
        </svg>
      )}
      <div className="absolute bg-[#e0e0e0] bottom-0 right-0 top-0 w-px" />
    </button>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [current, setCurrent] = useState(0);
  const [k, setK] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setK(n => n + 1);
  }, []);

  const prev = useCallback(() => goTo((current + 3) % 4), [current, goTo]);
  const next = useCallback(() => goTo((current + 1) % 4), [current, goTo]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-full">
      {/* Sticky navigation */}
      <header className="sticky top-0 z-50 w-full">
        <HeaderNavigation scrolled={scrolled} />
      </header>
      {/* Hero bar */}
      <div className="w-full shrink-0">
        <ValuePropositionContent />
      </div>
      {/* Card grid section */}
      <div className="w-full shrink-0">
        <KantarCardGrid />
      </div>
      {/* Intelligence section */}
      <div className="w-full shrink-0">
        <IntelligenceSection />
      </div>
      {/* Gallery strip */}
      <div className="w-full shrink-0">
        <GalleryStrip />
      </div>
      {/* Active slide */}
      <div className="w-full shrink-0">
        {current === 0 && <Slide1 k={k} onPrev={prev} onNext={next} />}
        {current === 1 && <Slide2 k={k} onPrev={prev} onNext={next} />}
        {current === 2 && <Slide3 k={k} onPrev={prev} onNext={next} />}
        {current === 3 && <Slide4 k={k} onPrev={prev} onNext={next} />}
      </div>

      {/* Bottom cards — mobile: compact carousel strip; sm+: 4-column row */}
      <div className="w-full bg-white border-t border-[#e0e0e0]">
        {/* Mobile carousel */}
        <div className="sm:hidden flex items-stretch min-h-[160px] d1:min-h-[121.6px] d2:min-h-[131.2px] d3:min-h-[140.8px] d4:min-h-[150.4px] d5:min-h-[160px]">
          <button
            onClick={prev}
            aria-label="Previous"
            className="flex items-center justify-center px-4 shrink-0 text-[28px] d1:text-[21.28px] d2:text-[22.96px] d3:text-[24.64px] d4:text-[26.32px] d5:text-[28px] text-[#8455b0] hover:text-[#63358f] transition-colors select-none cursor-pointer"
          >‹</button>
          <div className="flex-1 flex flex-col justify-between py-5 px-2 overflow-hidden">
            <div className="flex gap-[5px] d1:gap-[3.8px] d2:gap-[4.1px] d3:gap-[4.4px] d4:gap-[4.7px] d5:gap-[5px] mb-3">
              {allCards[current].map((c, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-[3px] flex-1 rounded-full transition-colors duration-200 ${i === current ? "bg-[#8455b0]" : "bg-[#e0e0e0]"}`}
                />
              ))}
            </div>
            <p
              style={{ color: allCards[current][current].catColor }}
              className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] d1:text-[9.12px] d2:text-[9.84px] d3:text-[10.56px] d4:text-[11.28px] d5:text-[12px] tracking-wide uppercase"
            >{allCards[current][current].cat}</p>
            <p
              style={{ color: allCards[current][current].titleColor }}
              className="font-['Inter:Bold',sans-serif] font-bold text-[17px] d1:text-[12.92px] d2:text-[13.94px] d3:text-[14.96px] d4:text-[15.98px] d5:text-[17px] leading-[1.4] mt-1"
            >{allCards[current][current].title}</p>
            {allCards[current][current].accent && (
              <div className="mt-3 h-[2px] d1:h-[1.52px] d2:h-[1.64px] d3:h-[1.76px] d4:h-[1.88px] d5:h-[2px] w-full rounded-full" style={{ backgroundColor: allCards[current][current].accent }} />
            )}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="flex items-center justify-center px-4 shrink-0 text-[28px] d1:text-[21.28px] d2:text-[22.96px] d3:text-[24.64px] d4:text-[26.32px] d5:text-[28px] text-[#8455b0] hover:text-[#63358f] transition-colors select-none cursor-pointer"
          >›</button>
        </div>
        {/* Tablet+ 4-column row */}
        <div className="hidden sm:flex max-w-[1660px] mx-auto h-[200px] d1:h-[152px] d2:h-[164px] d3:h-[176px] d4:h-[188px] d5:h-[200px]">
          {allCards[current].map((card, i) => (
            <NewsCard
              key={i}
              {...card}
              active={i === current}
              onClick={() => goTo(i)}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Section 1: image-3 color strip */}
      <div className="w-full shrink-0 overflow-hidden h-[320px] md:h-[520px] d1:h-[575.3px] d2:h-[620.7px] d3:h-[666.2px] d4:h-[711.6px] d5:h-[757px]">
        <img src={image3} alt="" className="w-full h-full block object-cover" />
      </div>

      {/* Section 3: Signal Intelligence — 1660px centered */}
      <div className="w-full shrink-0 bg-[#f5f5f5] overflow-hidden">
        <div className="max-w-[1660px] mx-auto pt-[40px] md:pt-[32px] d1:pt-[48.64px] d2:pt-[52.48px] d3:pt-[56.32px] d4:pt-[60.16px] d5:pt-[64px] pb-[40px] md:pb-[32px] d1:pb-[48.64px] d2:pb-[52.48px] d3:pb-[56.32px] d4:pb-[60.16px] d5:pb-[64px] md:pr-0 md:pl-0">
          <SignalIntelSection />
        </div>
      </div>

      {/* Section 4: Kantar Scale / In Numbers — 1660px centered */}
      <div className="w-full shrink-0 bg-[#f5f5f5] overflow-hidden">
        <div className="max-w-[1660px] mx-auto pt-[40px] d1:pt-[42.56px] d2:pt-[45.92px] d3:pt-[49.28px] d4:pt-[52.64px] d5:pt-[56px] pb-[64px] d1:pb-[72.96px] d2:pb-[78.72px] d3:pb-[84.48px] d4:pb-[90.24px] d5:pb-[96px]">
          <KantarScale />
        </div>
      </div>
    </div>
  );
}
