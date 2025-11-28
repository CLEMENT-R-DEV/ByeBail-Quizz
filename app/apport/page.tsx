'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SimpleHeader from '@/components/quiz/SimpleHeader';
import ContinueButton from '@/components/quiz/ContinueButton';
import QuizBackgroundShapes from '@/components/quiz/QuizBackgroundShapes';

export default function ApportPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/quiz/4');
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.4 + index * 0.1,
        type: 'spring' as const,
        stiffness: 300,
        damping: 25,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col relative overflow-hidden"
    >
      {/* Background shapes */}
      <QuizBackgroundShapes />

      <SimpleHeader />

      <main className="flex-1 flex flex-col mx-4 lg:mx-0 relative z-10">
        {/* Carte principale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring' as const, stiffness: 300, damping: 25 }}
          className="w-full lg:w-[750px] lg:mt-[100px] mt-[20px] mx-auto p-5 bg-white rounded-[28px] shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-start items-center gap-5 mb-8"
        >
          {/* Section titre */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="self-stretch flex flex-col justify-start items-center gap-1.5"
          >
            <div className="self-stretch text-center justify-center text-gray-900 text-[28px] font-semibold font-['Bricolage_Grotesque'] leading-[120%] tracking-[-0.28px]">
              L&apos;apport, c&apos;est quoi ?
            </div>
            <div className="self-stretch text-center justify-center text-gray-900 text-base lg:text-[20px] font-normal font-['Satoshi'] leading-[120%] tracking-[-0.16px] lg:tracking-[-0.2px]">
              <span>Byebail trouve des biens avec </span>
              <span className="font-bold">0 € d&apos;apport</span>
              <span> dans la plupart des cas.</span>
            </div>
          </motion.div>

          {/* Carte intérieure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' as const, stiffness: 300, damping: 25 }}
            className="self-stretch p-5 bg-[#fdfeff] rounded-[18px] border border-black/5 flex flex-col justify-start items-center gap-5"
          >
            {/* Titre de la section */}
            <div className="self-stretch text-center justify-center text-gray-900 text-[20px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.2px]">
              Et quand il en faut un, cela représente:
            </div>

            {/* Cartes 1 loyer / 2 loyers */}
            <div className="self-stretch inline-flex justify-start items-start gap-2">
              {/* Carte 1 loyer */}
              <motion.div
                variants={cardVariants}
                initial="initial"
                animate="animate"
                custom={0}
                className="w-[calc(50%-4px)] p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 inline-flex flex-col justify-center items-center gap-2.5"
              >
                <div className="self-stretch p-3 bg-white rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
                  <div className="w-[59px] h-[59px] bg-[#e4ebfe] rounded-tl-[28px] rounded-tr-[28px] rounded-bl-[4px] rounded-br-[4px] overflow-hidden flex items-center justify-center">
                    <Image
                      src="/images/image110.png"
                      alt="1 loyer"
                      width={77}
                      height={79}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center text-gray-900 text-base font-medium font-['Satoshi'] leading-[110%]">
                    1 loyer
                  </div>
                </div>
              </motion.div>

              {/* Carte 2 loyers */}
              <motion.div
                variants={cardVariants}
                initial="initial"
                animate="animate"
                custom={1}
                className="w-[calc(50%-4px)] p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 inline-flex flex-col justify-center items-center gap-2.5"
              >
                <div className="self-stretch p-3 bg-white rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
                  <div className="w-[59px] h-[59px] bg-[#e4ebfe] rounded-tl-[28px] rounded-tr-[28px] rounded-bl-[4px] rounded-br-[4px] overflow-hidden flex items-center justify-center">
                    <Image
                      src="/images/2loyers.png"
                      alt="2 loyers"
                      width={77}
                      height={79}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center text-gray-900 text-base font-medium font-['Satoshi'] leading-[110%]">
                    2 loyers
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Texte vert */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-[#12c66f] text-sm font-normal font-['Satoshi'] leading-[120%] tracking-[-0.14px]"
            >
              (et tu peux payer en 24 mois)
            </motion.div>
          </motion.div>

          {/* Banner vert */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: 'spring' as const, stiffness: 300, damping: 25 }}
            className="flex self-stretch p-3 lg:p-3 bg-[#4ADE80] rounded-2xl flex-col items-center gap-[10px] relative overflow-hidden"
          >
            {/* Images de fond polygones */}
            <Image
              src="/images/Polygon3.svg"
              alt=""
              width={100}
              height={100}
              className="absolute top-[20px] left-[90px] lg:top-[10px] lg:left-[295px] w-[130px] h-[130px] lg:w-[100px] lg:h-[100px]"
            />
            <Image
              src="/images/Polygon4.svg"
              alt=""
              width={100}
              height={100}
              className="absolute bottom-[0px] right-[-60px] lg:bottom-[0px] lg:right-[160px] w-[130px] h-[130px] lg:w-[100px] lg:h-[100px]"
            />
            <Image
              src="/images/Polygon5.svg"
              alt=""
              width={90}
              height={90}
              className="absolute top-[0px] left-[220px] lg:top-[0px] lg:left-[400px] w-[100px] h-[100px] lg:w-[90px] lg:h-[90px]"
            />
            <Image
              src="/images/Polygon7.svg"
              alt=""
              width={130}
              height={130}
              className="absolute bottom-[0px] left-[0px] lg:bottom-[0px] lg:left-[170px] w-[150px] h-[150px] lg:w-[130px] lg:h-[130px]"
            />

            {/* Icône plante */}
            <div className="flex-shrink-0 relative z-10">
              <Image
                src="/images/image161.png"
                alt="Plante argent"
                width={72}
                height={98}
                className="object-contain"
              />
            </div>

            {/* Texte */}
            <div className="flex flex-col gap-1 relative z-10" style={{ fontFamily: 'var(--font-satoshi)' }}>
              <div className="text-white text-center text-[16px] lg:text-[20px] font-medium leading-[120%] tracking-[-0.16px] lg:tracking-[-0.2px]">
                Si tu payes déjà un loyer.
              </div>
              <div className="text-white text-center text-[16px] lg:text-[20px] font-bold leading-[120%] tracking-[-0.16px] lg:tracking-[-0.2px]">
                Donc l&apos;apport, Tu peux le faire. Tranquille.
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Spacer pour le bouton fixe mobile */}
        <div className="h-20 lg:hidden" />

        {/* Bouton Continue */}
        <ContinueButton onClick={handleContinue} disabled={false} />
      </main>
    </motion.div>
  );
}
