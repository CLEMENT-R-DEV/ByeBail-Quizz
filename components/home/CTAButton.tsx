import Link from 'next/link';

export default function CTAButton() {
  return (
    <div className="w-full lg:w-[573px] flex flex-col justify-start items-center gap-7">
      {/* Texte au-dessus du bouton */}
      <div className="self-stretch text-center justify-center">
        <span className="text-zinc-500 text-base font-medium font-['Satoshi'] leading-5">
          À{' '}
        </span>
        <span className="text-zinc-500 text-base font-bold font-['Satoshi_Variable'] leading-5">
          Tours
        </span>
        <span className="text-zinc-500 text-base font-medium font-['Satoshi'] leading-5">
          {' '}
          {/* Desktop: ajouter "et Bourg-en-Bresse" */}
        </span>
        <span className="hidden lg:inline text-zinc-500 text-base font-medium font-['Satoshi'] leading-5">
          et{' '}
        </span>
        <span className="hidden lg:inline text-zinc-500 text-base font-bold font-['Satoshi_Variable'] leading-5">
          Bourg-en-Bresse
        </span>
        <span className="text-zinc-500 text-base font-medium font-['Satoshi'] leading-5">
          , on a trouvé les meilleurs plans
        </span>
        <br className="hidden lg:inline" />
        <span className="text-zinc-500 text-base font-medium font-['Satoshi'] leading-5">
          pour que ton loyer devienne ton appartement.
        </span>
      </div>

      {/* Bouton CTA */}
      <Link
        href="/quiz/1"
        className="self-stretch lg:w-72 lg:mx-auto p-4 rounded-[67px] inline-flex justify-center items-center gap-2.5"
        style={{
          background: 'linear-gradient(180deg, #F5923D 0%, #F7603A 324.04%), linear-gradient(180deg, #FF7E29 0%, #F7603A 320.19%)',
          boxShadow: '0 55px 16px 0 rgba(0, 0, 0, 0.00), 0 35px 14px 0 rgba(0, 0, 0, 0.01), 0 20px 12px 0 rgba(0, 0, 0, 0.05), 0 9px 9px 0 rgba(0, 0, 0, 0.09), 0 2px 5px 0 rgba(0, 0, 0, 0.10), 0 0 2.8px 0 #DEE3E7 inset, 0 -3px 15.5px 0 #E65728 inset, 0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}
      >
        <div className="text-center justify-center text-white text-sm font-bold font-['Optima'] leading-5">
          Je dis Bye à mon Bail
        </div>
      </Link>
    </div>
  );
}
