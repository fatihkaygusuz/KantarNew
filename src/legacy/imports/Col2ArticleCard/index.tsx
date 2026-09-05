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

export default function Col2ArticleCard() {
  return (
    <div className="s2-article-card bg-white content-stretch flex flex-col gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-start px-[40px] d1:px-[30.4px] d2:px-[32.8px] d3:px-[35.2px] d4:px-[37.6px] d5:px-[40px] py-[32px] d1:py-[24.32px] d2:py-[26.24px] d3:py-[28.16px] d4:py-[30.08px] d5:py-[32px] absolute top-[636px] d1:top-[483.4px] d2:top-[521.5px] d3:top-[559.7px] d4:top-[597.8px] d5:top-[636px] left-[411px] d1:left-[312.4px] d2:left-[337px] d3:left-[361.7px] d4:left-[386.3px] d5:left-[411px] h-[276px] d1:h-[209.8px] d2:h-[226.3px] d3:h-[242.9px] d4:h-[259.4px] d5:h-[276px] bottom-[-950px] d1:bottom-[-722px] d2:bottom-[-779px] d3:bottom-[-836px] d4:bottom-[-893px] d5:bottom-[-950px] z-[4] w-[589px] d1:w-[447.6px] d2:w-[483px] d3:w-[518.3px] d4:w-[553.7px] d5:w-[589px]" data-name="Col 2 - Article Card">
      <div aria-hidden className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
      <ArticleKickerGroup />
      <CardBodyRow />
    </div>
  );
}