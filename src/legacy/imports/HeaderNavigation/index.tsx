import svgPaths from "./svg-m6not2oz9v";

type S = { scrolled: boolean };

function Logo({ scrolled }: S) {
  return (
    <div className="h-[24px] relative shrink-0 w-[127.135px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 127.135 24" width="127.135">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2865ce00} fill={scrolled ? "black" : "#1e1e1e"} fillRule="evenodd" id="Combined-Shape" />
          <path clipRule="evenodd" d={svgPaths.p37e4f000} fill="#D6B346" fillRule="evenodd" id="Fill-11" />
        </g>
      </svg>
    </div>
  );
}

const navItems: { label: string; chevron: boolean }[] = [
  { label: "Solutions",    chevron: true  },
  { label: "Perspectives", chevron: true  },
  { label: "BrandZ",       chevron: false },
  { label: "Resources",    chevron: true  },
  { label: "Marketplace",  chevron: false },
];

function Navigation({ scrolled: _ }: S) {
  return (
    <div className="flex gap-[18px] items-center shrink-0">
      {navItems.map(({ label, chevron }) => (
        <div key={label} className="flex gap-[3px] items-center px-[9px] py-[6px] cursor-pointer">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#282e38] text-[16px] whitespace-nowrap">{label}</p>
          {chevron && (
            <svg fill="none" height="5.75" viewBox="0 0 9.75 5.75" width="9.75">
              <path d={svgPaths.p46b2ba0} stroke="#818EA1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function Actions({ scrolled: _ }: S) {
  return (
    <div className="flex gap-[12px] items-center shrink-0">
      <button className="rounded-[8px] border border-solid border-[#c2c2c2] px-[24px] py-[11px] bg-transparent hover:bg-gray-50 transition-colors">
        <span className="font-['Inter:Medium',sans-serif] font-medium text-[#1e1e1e] text-[16px] whitespace-nowrap">Log in</span>
      </button>
      <button className="bg-[#194ea0] rounded-[8px] px-[24px] py-[11px] hover:bg-[#1a3f8a] transition-colors">
        <span className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-white whitespace-nowrap">Sign up</span>
      </button>
    </div>
  );
}

export default function HeaderNavigation({ scrolled = false }: { scrolled?: boolean }) {
  return (
    <div
      className={[
        "relative flex items-center justify-center px-[16px] md:px-[40px] w-full transition-colors duration-300",
        scrolled ? "bg-white" : "bg-[#fafafa]",
      ].join(" ")}
    >
      {/* bottom border — only when scrolled */}
      <div
        aria-hidden
        className={[
          "absolute inset-x-0 bottom-0 border-b border-[#e0e0e0] pointer-events-none transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />
      <div className="flex items-center justify-between w-full max-w-[1660px] py-[14px] md:py-[18px]">
        <div className="flex items-center gap-[50px]">
          <Logo scrolled={scrolled} />
          <div className="hidden lg:block">
            <Navigation scrolled={scrolled} />
          </div>
        </div>
        <div className="hidden sm:block">
          <Actions scrolled={scrolled} />
        </div>
        {/* Mobile: just a compact sign-up button */}
        <div className="flex sm:hidden">
          <button className="bg-[#194ea0] rounded-[8px] px-[16px] py-[8px]">
            <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white whitespace-nowrap">Sign up</span>
          </button>
        </div>
      </div>
    </div>
  );
}
