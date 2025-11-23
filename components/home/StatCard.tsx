interface StatCardProps {
  value: string;
  label: string;
  color: 'orange' | 'blue' | 'emerald';
}

export default function StatCard({ value, label, color }: StatCardProps) {
  const colorClasses = {
    orange: 'text-orange-500',
    blue: 'text-blue-900',
    emerald: 'text-emerald-500',
  };

  return (
    <div className="p-2.5 bg-[#FCFEFF] rounded-[34px] inline-flex flex-col justify-center items-center gap-2.5">
      <div className="w-48 h-48 relative bg-white rounded-3xl shadow-[-5px_4px_15px_0px_rgba(174,185,193,0.10)] shadow-[-22px_17px_27px_0px_rgba(174,185,193,0.09)] shadow-[-49px_38px_37px_0px_rgba(174,185,193,0.05)] shadow-[-87px_67px_44px_0px_rgba(174,185,193,0.01)] shadow-[-135px_104px_48px_0px_rgba(174,185,193,0.00)] inline-flex justify-center items-center overflow-hidden">

        {/* Content */}
        <div className="inline-flex flex-col justify-start items-center gap-1 z-10">
          <div className={`justify-center ${colorClasses[color]} text-6xl font-semibold font-['Bricolage_Grotesque'] leading-[61px]`}>
            {value}
          </div>
          <div className="w-32 text-center justify-center text-gray-600 text-base font-normal font-['Satoshi'] leading-5">
            {label}
          </div>
        </div>

        {/* White veil overlay - positioned above content */}
        <div className="w-[248px] h-[85px] absolute right-[-26px] top-[56px] bg-white/56 rounded-[79px] blur-[41.45px] z-20" />

        {/* Outline blur effect */}
        <div className="w-48 h-48 absolute left-0 top-0 opacity-50 outline outline-[84px] outline-offset-[-42px] outline-white blur-xl" />
      </div>
    </div>
  );
}
