interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="p-[2px] bg-gradient-to-b from-white/20 to-white/5 rounded-[32px]">
      <div className="w-52 h-52 relative bg-white/10 backdrop-blur-xl rounded-[30px] border border-white/10 inline-flex justify-center items-center overflow-hidden">
        {/* Content */}
        <div className="inline-flex flex-col justify-start items-center gap-2 z-10 px-4">
          <div className="text-indigo-400 text-2xl font-bold leading-7" style={{ fontFamily: 'var(--font-inter-display)', letterSpacing: '-0.06em' }}>
            {value}
          </div>
          <div className="w-40 text-center text-slate-300 text-sm font-normal leading-5" style={{ fontFamily: 'var(--font-inter-tight)', letterSpacing: '-0.02em' }}>
            {label}
          </div>
        </div>

        {/* Subtle glow */}
        <div className="w-32 h-32 absolute -top-10 -left-10 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
