import StatCard from './StatCard';

export default function StatCardsContainer() {
  return (
    <>
      {/* Mobile: 3 petites cartes flottantes avec rotations */}
      <div className="lg:hidden w-full h-64 relative z-20">
        {/* Carte 1 - Orange - 2000+ */}
        <div className="z-30 p-1 bg-[#FCFEFF] absolute left-[214px] top-[80px] origin-top-left rotate-[-16.64deg] rounded-[34px] shadow-[-5px_4px_15px_0px_rgba(174,185,193,0.10)]">
          <div className="w-26 p-2.5 relative bg-white rounded-3xl shadow-[-5px_4px_15px_0px_rgba(174,185,193,0.10)] shadow-[-22px_17px_27px_0px_rgba(174,185,193,0.09)] shadow-[-49px_38px_37px_0px_rgba(174,185,193,0.05)] shadow-[-87px_67px_44px_0px_rgba(174,185,193,0.01)] shadow-[-135px_104px_48px_0px_rgba(174,185,193,0.00)] inline-flex justify-center items-start overflow-hidden">
            <div className="w-64 h-40 absolute left-[-72.92px] top-[-19.18px] bg-white/60 rounded-[79px] blur-2xl" />
            <div className="self-stretch inline-flex flex-col justify-start items-center gap-0.5 z-10">
              <div className="justify-center text-orange-500 text-3xl font-semibold font-['Bricolage_Grotesque'] leading-7">
                2000+
              </div>
              <div className="w-[85px] text-center justify-center text-gray-600 text-xs font-normal font-['Satoshi'] leading-[14.4px]">
                clients devenus propriétaires
              </div>
            </div>
            <div className="w-60 h-60 absolute left-[-65px] top-[-65.67px] opacity-50 outline outline-[84px] outline-offset-[-42px] outline-white blur-xl" />
          </div>
        </div>

        {/* Carte 2 - Blue - 0€ */}
        <div className="z-30 p-1 bg-[#FCFEFF] absolute left-[234px] top-[164px] origin-top-left rotate-[14.27deg] rounded-[34px] shadow-[-5px_4px_15px_0px_rgba(174,185,193,0.10)]">
          <div className="w-26 p-2.5 relative bg-white rounded-3xl shadow-[-5px_4px_15px_0px_rgba(174,185,193,0.10)] shadow-[-22px_17px_27px_0px_rgba(174,185,193,0.09)] shadow-[-49px_38px_37px_0px_rgba(174,185,193,0.05)] shadow-[-87px_67px_44px_0px_rgba(174,185,193,0.01)] shadow-[-135px_104px_48px_0px_rgba(174,185,193,0.00)] inline-flex justify-center items-start overflow-hidden">
            <div className="w-64 h-36 absolute left-[-73.64px] top-[-16.07px] bg-white/60 rounded-[79px] blur-2xl" />
            <div className="self-stretch inline-flex flex-col justify-start items-center gap-0.5 z-10">
              <div className="justify-center text-blue-900 text-3xl font-semibold font-['Bricolage_Grotesque'] leading-7">
                0€
              </div>
              <div className="w-[85px] text-center justify-center text-gray-600 text-xs font-normal font-['Satoshi'] leading-[14.4px]">
                d&apos;apport minimum requis
              </div>
            </div>
            <div className="w-60 h-60 absolute left-[-63.21px] top-[-64.18px] opacity-50 outline outline-[84px] outline-offset-[-42px] outline-white blur-xl" />
          </div>
        </div>

        {/* Carte 3 - Emerald - 100% */}
        <div className="z-30 p-1 bg-[#FCFEFF] absolute left-[13px] top-[184px] origin-top-left rotate-[-7.12deg] rounded-[34px] shadow-[-5px_4px_15px_0px_rgba(174,185,193,0.10)]">
          <div className="w-26 p-2.5 relative bg-white rounded-3xl shadow-[-5px_4px_15px_0px_rgba(174,185,193,0.10)] shadow-[-22px_17px_27px_0px_rgba(174,185,193,0.09)] shadow-[-49px_38px_37px_0px_rgba(174,185,193,0.05)] shadow-[-87px_67px_44px_0px_rgba(174,185,193,0.01)] shadow-[-135px_104px_48px_0px_rgba(174,185,193,0.00)] inline-flex justify-center items-start overflow-hidden">
            <div className="w-64 h-28 absolute left-[-76.04px] top-[-6.56px] bg-white/60 rounded-[79px] blur-2xl" />
            <div className="self-stretch inline-flex flex-col justify-start items-center gap-0.5 z-10">
              <div className="justify-center text-emerald-500 text-3xl font-semibold font-['Bricolage_Grotesque'] leading-7">
                100%
              </div>
              <div className="w-[85px] text-center justify-center text-gray-600 text-xs font-normal font-['Satoshi'] leading-[14.4px]">
                accompagnement personnalisé
              </div>
            </div>
            <div className="w-56 h-56 absolute left-[-58.17px] top-[-59.03px] opacity-50 outline outline-[84px] outline-offset-[-42px] outline-white blur-xl" />
          </div>
        </div>
      </div>

      {/* Desktop: 3 grandes cartes côte à côte SANS rotation */}
      <div className="hidden lg:flex self-stretch h-48 justify-center items-center gap-3.5">
        <StatCard value="2000+" label="clients devenus propriétaires" color="orange" />
        <StatCard value="0€" label="d'apport minimum requis" color="blue" />
        <StatCard value="100%" label="accompagnement personnalisé" color="emerald" />
      </div>
    </>
  );
}
