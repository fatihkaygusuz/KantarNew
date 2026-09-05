function StatItem() {
  return (
    <div className="content-stretch flex flex-[1_0_9px] d1:flex-[1_0_6.84px] d2:flex-[1_0_7.38px] d3:flex-[1_0_7.92px] d4:flex-[1_0_8.46px] d5:flex-[1_0_9px] flex-col items-start min-h-px pb-[8px] d1:pb-[6.08px] d2:pb-[6.56px] d3:pb-[7.04px] d4:pb-[7.52px] d5:pb-[8px] relative w-full" data-name="Stat Item 1">
      <div aria-hidden className="absolute border-[#dadee3] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Kantar_Brown:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c61c4] text-[28px] d1:text-[21.28px] d2:text-[22.96px] d3:text-[24.64px] d4:text-[26.32px] d5:text-[28px] whitespace-nowrap">90+</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] d1:leading-[15.2px] d2:leading-[16.4px] d3:leading-[17.6px] d4:leading-[18.8px] d5:leading-[20px] not-italic relative shrink-0 text-[#616161] text-[14px] d1:text-[10.64px] d2:text-[11.48px] d3:text-[12.32px] d4:text-[13.16px] d5:text-[14px] whitespace-nowrap">Markets</p>
    </div>
  );
}

function StatItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_9px] d1:flex-[1_0_6.84px] d2:flex-[1_0_7.38px] d3:flex-[1_0_7.92px] d4:flex-[1_0_8.46px] d5:flex-[1_0_9px] flex-col items-start min-h-px pb-[8px] d1:pb-[6.08px] d2:pb-[6.56px] d3:pb-[7.04px] d4:pb-[7.52px] d5:pb-[8px] relative w-full" data-name="Stat Item 2">
      <div aria-hidden className="absolute border-[#dadee3] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Kantar_Brown:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a87ad4] text-[28px] d1:text-[21.28px] d2:text-[22.96px] d3:text-[24.64px] d4:text-[26.32px] d5:text-[28px] whitespace-nowrap">10k+</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] d1:leading-[15.2px] d2:leading-[16.4px] d3:leading-[17.6px] d4:leading-[18.8px] d5:leading-[20px] not-italic relative shrink-0 text-[#616161] text-[14px] d1:text-[10.64px] d2:text-[11.48px] d3:text-[12.32px] d4:text-[13.16px] d5:text-[14px] whitespace-nowrap">People</p>
    </div>
  );
}

function StatItem2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px not-italic pb-[8px] d1:pb-[6.08px] d2:pb-[6.56px] d3:pb-[7.04px] d4:pb-[7.52px] d5:pb-[8px] relative w-full whitespace-nowrap" data-name="Stat Item 3">
      <p className="font-['Kantar_Brown:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#ff632c] text-[28px] d1:text-[21.28px] d2:text-[22.96px] d3:text-[24.64px] d4:text-[26.32px] d5:text-[28px]">50+</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] d1:leading-[15.2px] d2:leading-[16.4px] d3:leading-[17.6px] d4:leading-[18.8px] d5:leading-[20px] relative shrink-0 text-[#616161] text-[14px] d1:text-[10.64px] d2:text-[11.48px] d3:text-[12.32px] d4:text-[13.16px] d5:text-[14px]">Years of insight</p>
    </div>
  );
}

function StatsList() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] d1:gap-[6.08px] d2:gap-[6.56px] d3:gap-[7.04px] d4:gap-[7.52px] d5:gap-[8px] items-start min-h-px relative w-full" data-name="Stats List">
      <StatItem />
      <StatItem1 />
      <StatItem2 />
    </div>
  );
}

function ContentLeft() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] d1:gap-[9.12px] d2:gap-[9.84px] d3:gap-[10.56px] d4:gap-[11.28px] d5:gap-[12px] h-full items-start relative shrink-0 w-[188px] d1:w-[142.9px] d2:w-[154.2px] d3:w-[165.4px] d4:w-[176.7px] d5:w-[188px]" data-name="Content Left">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] d1:leading-[15.2px] d2:leading-[16.4px] d3:leading-[17.6px] d4:leading-[18.8px] d5:leading-[20px] not-italic relative shrink-0 text-[#1c61c4] text-[14px] d1:text-[10.64px] d2:text-[11.48px] d3:text-[12.32px] d4:text-[13.16px] d5:text-[14px] whitespace-nowrap">BY THE NUMBERS</p>
      <StatsList />
    </div>
  );
}

function Card1ByTheNumbers() {
  return (
    <div className="bg-white flex-[1_0_66px] d1:flex-[1_0_50.16px] d2:flex-[1_0_54.12px] d3:flex-[1_0_58.08px] d4:flex-[1_0_62.04px] d5:flex-[1_0_66px] h-[299px] d1:h-[227.2px] d2:h-[245.2px] d3:h-[263.1px] d4:h-[281.1px] d5:h-[299px] min-w-full sm:min-w-[400px] md:min-w-[50%] d1:min-w-[380px] d2:min-w-[410px] d3:min-w-[440px] d4:min-w-[470px] d5:min-w-[500px] relative" data-name="card-1-by-the-numbers">
      <div className="content-stretch flex gap-[32px] d1:gap-[24.32px] d2:gap-[26.24px] d3:gap-[28.16px] d4:gap-[30.08px] d5:gap-[32px] items-start min-w-[inherit] overflow-clip pb-[16px] d1:pb-[12.16px] d2:pb-[13.12px] d3:pb-[14.08px] d4:pb-[15.04px] d5:pb-[16px] pl-[36px] d1:pl-[27.36px] d2:pl-[29.52px] d3:pl-[31.68px] d4:pl-[33.84px] d5:pl-[36px] pr-[28px] d1:pr-[21.28px] d2:pr-[22.96px] d3:pr-[24.64px] d4:pr-[26.32px] d5:pr-[28px] pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px] relative rounded-[inherit] size-full">
        <ContentLeft />
        <div className="bg-white h-[220px] d1:h-[167.2px] d2:h-[180.4px] d3:h-[193.6px] d4:h-[206.8px] d5:h-[220px] relative shrink-0 w-[126px] d1:w-[95.76px] d2:w-[103.3px] d3:w-[110.9px] d4:w-[118.4px] d5:w-[126px]" data-name="Globe Graphic Placeholder" />
      </div>
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HeaderGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] d1:gap-[18.24px] d2:gap-[19.68px] d3:gap-[21.12px] d4:gap-[22.56px] d5:gap-[24px] items-start relative shrink-0 text-white w-full" data-name="Header Group">
      <p className="leading-[20px] d1:leading-[15.2px] d2:leading-[16.4px] d3:leading-[17.6px] d4:leading-[18.8px] d5:leading-[20px] relative shrink-0 text-[14px] d1:text-[10.64px] d2:text-[11.48px] d3:text-[12.32px] d4:text-[13.16px] d5:text-[14px] whitespace-nowrap">OUR PROMISE</p>
      <p className="leading-[1.3] relative shrink-0 text-[20px] md:text-[24px] d1:text-[22.8px] d2:text-[24.6px] d3:text-[26.4px] d4:text-[28.2px] d5:text-[30px] w-full">Designed to deliver real impact.</p>
    </div>
  );
}

function ContentLeft1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium h-full items-start justify-between not-italic relative shrink-0 w-full d1:w-[196.8px] d2:w-[212.4px] d3:w-[227.9px] d4:w-[243.5px] d5:w-[259px]" data-name="Content Left">
      <HeaderGroup />
      <p className="leading-[20px] d1:leading-[15.2px] d2:leading-[16.4px] d3:leading-[17.6px] d4:leading-[18.8px] d5:leading-[20px] relative shrink-0 text-[#f7f6f7] text-[14px] d1:text-[10.64px] d2:text-[11.48px] d3:text-[12.32px] d4:text-[13.16px] d5:text-[14px] w-full">Our solutions are built to be practical, scalable and always focused on outcomes that matter.</p>
    </div>
  );
}

function Card2OurPromise() {
  return (
    <div className="bg-[#0857fc] content-stretch flex flex-[1_0_0] gap-[32px] d1:gap-[24.32px] d2:gap-[26.24px] d3:gap-[28.16px] d4:gap-[30.08px] d5:gap-[32px] h-[299px] d1:h-[227.2px] d2:h-[245.2px] d3:h-[263.1px] d4:h-[281.1px] d5:h-[299px] items-start min-w-full sm:min-w-[400px] md:min-w-[50%] d1:min-w-[380px] d2:min-w-[410px] d3:min-w-[440px] d4:min-w-[470px] d5:min-w-[500px] overflow-clip pb-[16px] d1:pb-[12.16px] d2:pb-[13.12px] d3:pb-[14.08px] d4:pb-[15.04px] d5:pb-[16px] pl-[36px] d1:pl-[27.36px] d2:pl-[29.52px] d3:pl-[31.68px] d4:pl-[33.84px] d5:pl-[36px] pr-[28px] d1:pr-[21.28px] d2:pr-[22.96px] d3:pr-[24.64px] d4:pr-[26.32px] d5:pr-[28px] pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px] relative" data-name="card-2-our-promise">
      <ContentLeft1 />
      <div className="bg-[#0857fc] h-full relative shrink-0 w-[174px] d1:w-[132.2px] d2:w-[142.7px] d3:w-[153.1px] d4:w-[163.6px] d5:w-[174px]" data-name="Promise Graphic Placeholder" />
    </div>
  );
}

function IconBoxBlue() {
  return <div className="bg-[#1c61c4] relative shrink-0 size-[44px] d1:size-[33.44px] d2:size-[36.08px] d3:size-[38.72px] d4:size-[41.36px] d5:size-[44px]" data-name="Icon Box Blue" />;
}

function RowContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] d1:gap-[1.52px] d2:gap-[1.64px] d3:gap-[1.76px] d4:gap-[1.88px] d5:gap-[2px] items-start min-w-px pb-[14px] d1:pb-[10.64px] d2:pb-[11.48px] d3:pb-[12.32px] d4:pb-[13.16px] d5:pb-[14px] relative" data-name="Row Content">
      <div aria-hidden className="absolute border-[#bcc3cd] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] d1:leading-[18.24px] d2:leading-[19.68px] d3:leading-[21.12px] d4:leading-[22.56px] d5:leading-[24px] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] d1:text-[12.16px] d2:text-[13.12px] d3:text-[14.08px] d4:text-[15.04px] d5:text-[16px] whitespace-nowrap">Discover</p>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] d1:leading-[13.68px] d2:leading-[14.76px] d3:leading-[15.84px] d4:leading-[16.92px] d5:leading-[18px] not-italic relative shrink-0 text-[#616161] text-[12px] d1:text-[9.12px] d2:text-[9.84px] d3:text-[10.56px] d4:text-[11.28px] d5:text-[12px] whitespace-nowrap">Uncover the truth in complexity.</p>
    </div>
  );
}

function ApproachRow() {
  return (
    <div className="content-stretch flex gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-start relative shrink-0 w-full" data-name="Approach Row 1">
      <IconBoxBlue />
      <RowContent />
    </div>
  );
}

function IconBoxLavender() {
  return <div className="bg-[#63358f] relative shrink-0 size-[44px] d1:size-[33.44px] d2:size-[36.08px] d3:size-[38.72px] d4:size-[41.36px] d5:size-[44px]" data-name="Icon Box Lavender" />;
}

function RowContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] d1:gap-[1.52px] d2:gap-[1.64px] d3:gap-[1.76px] d4:gap-[1.88px] d5:gap-[2px] items-start min-w-px pb-[14px] d1:pb-[10.64px] d2:pb-[11.48px] d3:pb-[12.32px] d4:pb-[13.16px] d5:pb-[14px] relative" data-name="Row Content">
      <div aria-hidden className="absolute border-[#bcc3cd] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] d1:leading-[18.24px] d2:leading-[19.68px] d3:leading-[21.12px] d4:leading-[22.56px] d5:leading-[24px] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] d1:text-[12.16px] d2:text-[13.12px] d3:text-[14.08px] d4:text-[15.04px] d5:text-[16px] whitespace-nowrap">Understand</p>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] d1:leading-[13.68px] d2:leading-[14.76px] d3:leading-[15.84px] d4:leading-[16.92px] d5:leading-[18px] not-italic relative shrink-0 text-[#616161] text-[12px] d1:text-[9.12px] d2:text-[9.84px] d3:text-[10.56px] d4:text-[11.28px] d5:text-[12px] whitespace-nowrap">Turn data into human insight.</p>
    </div>
  );
}

function ApproachRow1() {
  return (
    <div className="content-stretch flex gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-start relative shrink-0 w-full" data-name="Approach Row 2">
      <IconBoxLavender />
      <RowContent1 />
    </div>
  );
}

function IconBoxOrange() {
  return <div className="bg-[#ff632c] relative shrink-0 size-[44px] d1:size-[33.44px] d2:size-[36.08px] d3:size-[38.72px] d4:size-[41.36px] d5:size-[44px]" data-name="Icon Box Orange" />;
}

function RowContent2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] d1:gap-[1.52px] d2:gap-[1.64px] d3:gap-[1.76px] d4:gap-[1.88px] d5:gap-[2px] items-start min-w-px not-italic pb-[14px] d1:pb-[10.64px] d2:pb-[11.48px] d3:pb-[12.32px] d4:pb-[13.16px] d5:pb-[14px] relative whitespace-nowrap" data-name="Row Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] d1:leading-[18.24px] d2:leading-[19.68px] d3:leading-[21.12px] d4:leading-[22.56px] d5:leading-[24px] relative shrink-0 text-[#1e1e1e] text-[16px] d1:text-[12.16px] d2:text-[13.12px] d3:text-[14.08px] d4:text-[15.04px] d5:text-[16px]">Act</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] d1:leading-[13.68px] d2:leading-[14.76px] d3:leading-[15.84px] d4:leading-[16.92px] d5:leading-[18px] relative shrink-0 text-[#616161] text-[12px] d1:text-[9.12px] d2:text-[9.84px] d3:text-[10.56px] d4:text-[11.28px] d5:text-[12px]">Activate decisions that drive growth.</p>
    </div>
  );
}

function ApproachRow2() {
  return (
    <div className="content-stretch flex gap-[16px] d1:gap-[12.16px] d2:gap-[13.12px] d3:gap-[14.08px] d4:gap-[15.04px] d5:gap-[16px] items-start relative shrink-0 w-full" data-name="Approach Row 3">
      <IconBoxOrange />
      <RowContent2 />
    </div>
  );
}

function ApproachRows() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] d1:gap-[6.08px] d2:gap-[6.56px] d3:gap-[7.04px] d4:gap-[7.52px] d5:gap-[8px] items-start relative shrink-0 w-full" data-name="Approach Rows">
      <ApproachRow />
      <ApproachRow1 />
      <ApproachRow2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] d1:gap-[24.32px] d2:gap-[26.24px] d3:gap-[28.16px] d4:gap-[30.08px] d5:gap-[32px] items-start relative shrink-0 w-[270px] d1:w-[205.2px] d2:w-[221.4px] d3:w-[237.6px] d4:w-[253.8px] d5:w-[270px]">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] d1:leading-[15.2px] d2:leading-[16.4px] d3:leading-[17.6px] d4:leading-[18.8px] d5:leading-[20px] not-italic relative shrink-0 text-[#ff632c] text-[14px] d1:text-[10.64px] d2:text-[11.48px] d3:text-[12.32px] d4:text-[13.16px] d5:text-[14px] whitespace-nowrap">OUR APPROACH</p>
      <ApproachRows />
    </div>
  );
}

function Card3OurApproach() {
  return (
    <div className="bg-white flex-[1_0_66px] d1:flex-[1_0_50.16px] d2:flex-[1_0_54.12px] d3:flex-[1_0_58.08px] d4:flex-[1_0_62.04px] d5:flex-[1_0_66px] h-[299px] d1:h-[227.2px] d2:h-[245.2px] d3:h-[263.1px] d4:h-[281.1px] d5:h-[299px] min-w-full sm:min-w-[400px] md:min-w-[50%] d1:min-w-[380px] d2:min-w-[410px] d3:min-w-[440px] d4:min-w-[470px] d5:min-w-[500px] relative" data-name="card-3-our-approach">
      <div className="content-stretch flex items-start min-w-[inherit] overflow-clip pb-[16px] d1:pb-[12.16px] d2:pb-[13.12px] d3:pb-[14.08px] d4:pb-[15.04px] d5:pb-[16px] pl-[36px] d1:pl-[27.36px] d2:pl-[29.52px] d3:pl-[31.68px] d4:pl-[33.84px] d5:pl-[36px] pr-[28px] d1:pr-[21.28px] d2:pr-[22.96px] d3:pr-[24.64px] d4:pr-[26.32px] d5:pr-[28px] pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px] relative rounded-[inherit] size-full">
        <Frame />
      </div>
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CtaLink() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="CTA Link">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] d1:leading-[15.2px] d2:leading-[16.4px] d3:leading-[17.6px] d4:leading-[18.8px] d5:leading-[20px] not-italic relative shrink-0 text-[#93bbfc] text-[14px] d1:text-[10.64px] d2:text-[11.48px] d3:text-[12.32px] d4:text-[13.16px] d5:text-[14px] whitespace-pre">{`Explore our thinking  →`}</p>
    </div>
  );
}

function ContentLeft2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 w-full d1:w-[161.1px] d2:w-[173.8px] d3:w-[186.6px] d4:w-[199.3px] d5:w-[212px]" data-name="Content Left">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] d1:leading-[15.2px] d2:leading-[16.4px] d3:leading-[17.6px] d4:leading-[18.8px] d5:leading-[20px] not-italic relative shrink-0 text-[#93bbfc] text-[14px] d1:text-[10.64px] d2:text-[11.48px] d3:text-[12.32px] d4:text-[13.16px] d5:text-[14px] whitespace-nowrap">GLOBAL PERSPECTIVE</p>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[20px] md:text-[24px] d1:text-[22.8px] d2:text-[24.6px] d3:text-[26.4px] d4:text-[28.2px] d5:text-[30px] text-white w-full">One world. Different perspectives.</p>
      <CtaLink />
    </div>
  );
}

function Card4GlobalPerspective() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-[1_0_0] gap-[32px] d1:gap-[24.32px] d2:gap-[26.24px] d3:gap-[28.16px] d4:gap-[30.08px] d5:gap-[32px] h-[299px] d1:h-[227.2px] d2:h-[245.2px] d3:h-[263.1px] d4:h-[281.1px] d5:h-[299px] items-start min-w-full sm:min-w-[400px] md:min-w-[50%] d1:min-w-[380px] d2:min-w-[410px] d3:min-w-[440px] d4:min-w-[470px] d5:min-w-[500px] overflow-clip pb-[28px] d1:pb-[21.28px] d2:pb-[22.96px] d3:pb-[24.64px] d4:pb-[26.32px] d5:pb-[28px] pl-[36px] d1:pl-[27.36px] d2:pl-[29.52px] d3:pl-[31.68px] d4:pl-[33.84px] d5:pl-[36px] pr-[28px] d1:pr-[21.28px] d2:pr-[22.96px] d3:pr-[24.64px] d4:pr-[26.32px] d5:pr-[28px] pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px] relative" data-name="card-4-global-perspective">
      <ContentLeft2 />
      <div className="bg-[#1e1e1e] h-full relative shrink-0 w-[170px] d1:w-[129.2px] d2:w-[139.4px] d3:w-[149.6px] d4:w-[159.8px] d5:w-[170px]" data-name="Global Graphic Placeholder" />
    </div>
  );
}

function CtaLink1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="CTA Link">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] d1:leading-[15.2px] d2:leading-[16.4px] d3:leading-[17.6px] d4:leading-[18.8px] d5:leading-[20px] not-italic relative shrink-0 text-[#a87ad4] text-[14px] d1:text-[10.64px] d2:text-[11.48px] d3:text-[12.32px] d4:text-[13.16px] d5:text-[14px] whitespace-pre">{`Read the report  →`}</p>
    </div>
  );
}

function ContentLeft3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 w-full d1:w-[173.3px] d2:w-[187px] d3:w-[200.6px] d4:w-[214.3px] d5:w-[228px]" data-name="Content Left">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] d1:leading-[15.2px] d2:leading-[16.4px] d3:leading-[17.6px] d4:leading-[18.8px] d5:leading-[20px] not-italic relative shrink-0 text-[#8455b0] text-[14px] d1:text-[10.64px] d2:text-[11.48px] d3:text-[12.32px] d4:text-[13.16px] d5:text-[14px] whitespace-nowrap">INSIGHT SPOTLIGHT</p>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#37404c] text-[20px] md:text-[24px] d1:text-[22.8px] d2:text-[24.6px] d3:text-[26.4px] d4:text-[28.2px] d5:text-[30px] w-full">The future is shaped by the choices we make now.</p>
      <CtaLink1 />
    </div>
  );
}

function Card5InsightSpotlight() {
  return (
    <div className="bg-white flex-[1_0_66px] d1:flex-[1_0_50.16px] d2:flex-[1_0_54.12px] d3:flex-[1_0_58.08px] d4:flex-[1_0_62.04px] d5:flex-[1_0_66px] h-[299px] d1:h-[227.2px] d2:h-[245.2px] d3:h-[263.1px] d4:h-[281.1px] d5:h-[299px] min-w-full sm:min-w-[400px] md:min-w-[50%] d1:min-w-[380px] d2:min-w-[410px] d3:min-w-[440px] d4:min-w-[470px] d5:min-w-[500px] relative" data-name="card-5-insight-spotlight">
      <div className="content-stretch flex gap-[32px] d1:gap-[24.32px] d2:gap-[26.24px] d3:gap-[28.16px] d4:gap-[30.08px] d5:gap-[32px] items-start min-w-[inherit] overflow-clip pb-[28px] d1:pb-[21.28px] d2:pb-[22.96px] d3:pb-[24.64px] d4:pb-[26.32px] d5:pb-[28px] pl-[36px] d1:pl-[27.36px] d2:pl-[29.52px] d3:pl-[31.68px] d4:pl-[33.84px] d5:pl-[36px] pr-[28px] d1:pr-[21.28px] d2:pr-[22.96px] d3:pr-[24.64px] d4:pr-[26.32px] d5:pr-[28px] pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px] relative rounded-[inherit] size-full">
        <ContentLeft3 />
        <div className="bg-white h-full relative shrink-0 w-[174px] d1:w-[132.2px] d2:w-[142.7px] d3:w-[153.1px] d4:w-[163.6px] d5:w-[174px]" data-name="Insight Graphic Placeholder" />
      </div>
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CtaLink2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="CTA Link">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] d1:leading-[15.2px] d2:leading-[16.4px] d3:leading-[17.6px] d4:leading-[18.8px] d5:leading-[20px] not-italic relative shrink-0 text-[#a87ad4] text-[14px] d1:text-[10.64px] d2:text-[11.48px] d3:text-[12.32px] d4:text-[13.16px] d5:text-[14px] whitespace-pre">{`Explore opportunities  →`}</p>
    </div>
  );
}

function ContentLeft4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 w-full d1:w-[187.7px] d2:w-[202.5px] d3:w-[217.4px] d4:w-[232.2px] d5:w-[247px]" data-name="Content Left">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] d1:leading-[15.2px] d2:leading-[16.4px] d3:leading-[17.6px] d4:leading-[18.8px] d5:leading-[20px] not-italic relative shrink-0 text-[#a87ad4] text-[14px] d1:text-[10.64px] d2:text-[11.48px] d3:text-[12.32px] d4:text-[13.16px] d5:text-[14px] whitespace-nowrap">CAREERS</p>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[#37404c] text-[20px] md:text-[24px] d1:text-[22.8px] d2:text-[24.6px] d3:text-[26.4px] d4:text-[28.2px] d5:text-[30px] w-full">Your perspective can change everything.</p>
      <CtaLink2 />
    </div>
  );
}

function CareersChartPlaceholder() {
  return <div className="bg-[#f4edfb] h-full relative shrink-0 w-[154px] d1:w-[117px] d2:w-[126.3px] d3:w-[135.5px] d4:w-[144.8px] d5:w-[154px]" data-name="Careers Chart Placeholder" />;
}

function Card6Careers() {
  return (
    <div className="bg-[#f4edfb] flex-[1_0_66px] d1:flex-[1_0_50.16px] d2:flex-[1_0_54.12px] d3:flex-[1_0_58.08px] d4:flex-[1_0_62.04px] d5:flex-[1_0_66px] h-[299px] d1:h-[227.2px] d2:h-[245.2px] d3:h-[263.1px] d4:h-[281.1px] d5:h-[299px] min-w-full sm:min-w-[400px] md:min-w-[50%] d1:min-w-[380px] d2:min-w-[410px] d3:min-w-[440px] d4:min-w-[470px] d5:min-w-[500px] relative" data-name="card-6-careers">
      <div className="content-stretch flex gap-[32px] d1:gap-[24.32px] d2:gap-[26.24px] d3:gap-[28.16px] d4:gap-[30.08px] d5:gap-[32px] items-start min-w-[inherit] overflow-clip pb-[28px] d1:pb-[21.28px] d2:pb-[22.96px] d3:pb-[24.64px] d4:pb-[26.32px] d5:pb-[28px] pl-[36px] d1:pl-[27.36px] d2:pl-[29.52px] d3:pl-[31.68px] d4:pl-[33.84px] d5:pl-[36px] pr-[28px] d1:pr-[21.28px] d2:pr-[22.96px] d3:pr-[24.64px] d4:pr-[26.32px] d5:pr-[28px] pt-[32px] d1:pt-[24.32px] d2:pt-[26.24px] d3:pt-[28.16px] d4:pt-[30.08px] d5:pt-[32px] relative rounded-[inherit] size-full">
        <ContentLeft4 />
        <CareersChartPlaceholder />
      </div>
      <div aria-hidden className="absolute border border-[#faf7fe] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ShowcaseGridV() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center overflow-clip relative shrink-0 w-full" data-name="showcase-grid-v2">
      <Card1ByTheNumbers />
      <Card2OurPromise />
      <Card3OurApproach />
      <Card4GlobalPerspective />
      <Card5InsightSpotlight />
      <Card6Careers />
    </div>
  );
}

export default function KantarCardGrid() {
  return (
    <div className="bg-[#fafafa] w-full pt-[48px] d1:pt-[36.48px] d2:pt-[39.36px] d3:pt-[42.24px] d4:pt-[45.12px] d5:pt-[48px] md:pt-[94px] pb-[48px] d1:pb-[36.48px] d2:pb-[39.36px] d3:pb-[42.24px] d4:pb-[45.12px] d5:pb-[48px] md:pb-[94px] px-0" data-name="kantar-card-grid">
      <div className="max-w-[1660px] mx-auto pt-0 pb-0 px-4 md:px-0">
        <ShowcaseGridV />
      </div>
    </div>
  );
}