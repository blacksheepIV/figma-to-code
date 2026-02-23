export default function heroSection() { 
  return (<section className="bg-white">
    <div className="max-w-[860px] mx-auto px-6 pt-16 pb-16 md:pt-24 md:pb-20 text-center">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal text-foreground leading-[1.15] tracking-tight mb-4">
        Order Your{" "}
        <span className="font-extrabold">Best Videos.</span>
      </h1>

      <p className="text-sm sm:text-base text-[#6B7280] font-medium mb-8">
        In a few words, tell us what you need.
      </p>

      {/* Search bar */}
      <div className="flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 py-2 shadow-sm max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="A 30-sec promo video for a skincare brand..."
          className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-[#9CA3AF] font-medium py-1.5 px-2 min-w-0"
        />
        <button className="flex-shrink-0 bg-primary text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors duration-200 whitespace-nowrap">
          Order Video
        </button>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5">
        {[
          { label: "Industry", value: "Marketing" },
          { label: "Budget", value: "$100-500" },
          { label: "Video Duration", value: "30s" },
          { label: "Delivery Time", value: " 1 Day" },
        ].map((filter) => (
          <button
            key={filter.label}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#E5E7EB] bg-white text-sm text-[#374151] hover:border-primary/40 hover:bg-[#FAFBFF] transition-colors duration-200"
          >
            <span className="text-[#6B7280]">{filter.label}:</span>
            <span className="font-bold">{filter.value}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#6B7280] ml-0.5">
              <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  </section>)
}