'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SimpleHeader from '@/components/quiz/SimpleHeader';
import ContinueButton from '@/components/quiz/ContinueButton';

export default function ChangeAvisPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/quiz/11');
  };

  const cardVariants = {
    initial: { opacity: 0, x: -20, scale: 0.95 },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.4 + index * 0.12,
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
      className="min-h-screen flex flex-col"
    >
      <SimpleHeader />

      {/* Main content */}
      <main className="flex-1 flex flex-col mx-4 lg:mx-0">
        {/* Carte principale blanche */}
<<<<<<< Updated upstream
        <div className="w-full lg:w-[750px] lg:mt-[100px] mt-[20px] lg:mb-[29px] mx-auto p-5 bg-white rounded-3xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-center items-center gap-5">
          {/* Titre et image */}
          <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
            <div className="self-stretch text-center justify-center text-gray-900 lg:text-[#111827] text-xl lg:text-[24px] font-semibold lg:font-semibold font-['Bricolage_Grotesque'] leading-5 lg:leading-[100%] lg:tracking-[-0.24px]">
              <span className="lg:hidden">&quot;Mais... et si je change d&apos;avis et que je souhaite bouger ?&quot;</span>
              <span className="hidden lg:inline">&quot;Mais... et si je change d&apos;avis ?&quot;</span>
            </div>
=======
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring' as const, stiffness: 300, damping: 25 }}
          className="p-5 bg-white rounded-3xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-center items-center gap-5"
        >
          {/* Titre et image */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="self-stretch flex flex-col justify-start items-center gap-2.5"
          >
            <div className="self-stretch text-center justify-center text-gray-900 text-xl font-semibold font-['Bricolage_Grotesque'] leading-5">&quot;Mais... et si je change d&apos;avis ?&quot;</div>
>>>>>>> Stashed changes

            {/* Image jeu */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.4, type: 'spring' as const, stiffness: 400, damping: 20 }}
              className="w-28 h-28 relative overflow-hidden"
            >
              <Image
                src="/images/jeu.svg"
                alt="Jeu vidéo"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Texte explicatif */}
<<<<<<< Updated upstream
            <div className="self-stretch text-center justify-center text-gray-900 lg:text-[#111827] text-base lg:text-[20px] font-normal lg:font-normal font-['Satoshi'] leading-5 lg:leading-[120%] lg:tracking-[-0.2px]">Dans un jeu, tu sauvegardes ta partie pour pas tout perdre.</div>
            <div className="self-stretch text-center justify-center text-gray-900 lg:text-[#111827] text-base lg:text-[20px] font-normal lg:font-normal font-['Satoshi'] leading-5 lg:leading-[120%] lg:tracking-[-0.2px]">Dans la vraie vie, c&apos;est pareil.</div>
          </div>
=======
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5"
            >
              Dans un jeu, tu sauvegardes ta partie pour pas tout perdre.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5"
            >
              Dans la vraie vie, c&apos;est pareil.
            </motion.div>
          </motion.div>
>>>>>>> Stashed changes

          {/* Section cartes comparatives */}
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            {/* Carte rouge - Locataire */}
<<<<<<< Updated upstream
            <div className="self-stretch p-4 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-4 outline-offset-[-4px] outline-[#FF9191] flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch flex justify-start items-start lg:items-center gap-2.5">
                <div className="w-[60px] h-[60px] lg:w-[84px] lg:h-[84px] relative rounded-lg overflow-hidden flex items-center justify-center">
=======
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={0}
              whileHover={{ scale: 1.02, x: 5 }}
              className="self-stretch p-4 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-4 outline-offset-[-4px] outline-[#FF9191] flex flex-col justify-start items-start gap-2.5"
            >
              <div className="self-stretch flex justify-start items-start gap-2.5">
                <div className="w-14 h-14 relative rounded-lg overflow-hidden">
>>>>>>> Stashed changes
                  <Image
                    src="/images/Simplification1.svg"
                    alt="Valise"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] flex flex-col justify-center items-center gap-2.5">
                  <div className="self-stretch justify-center text-gray-900 lg:text-[#111827] text-base lg:text-[20px] font-semibold lg:font-semibold font-['Bricolage_Grotesque'] leading-[100%] lg:leading-[100%] tracking-[-0.16px] lg:tracking-[-0.2px]">Quand tu es locataire et que tu déménages</div>
                  <div className="self-stretch justify-center">
                    <span className="text-gray-900 lg:text-[#111827] text-sm lg:text-[20px] font-normal lg:font-normal font-['Satoshi'] leading-[120%] lg:leading-[120%] tracking-[-0.14px] lg:tracking-[-0.2px]">→ Tu perds </span>
                    <span className="text-[#E43030] text-sm lg:text-[20px] font-bold lg:font-bold font-['Satoshi_Variable'] leading-[120%] lg:leading-[120%] tracking-[-0.14px] lg:tracking-[-0.2px]">tout ce que tu as payé.</span>
                  </div>
                  <div className="self-stretch justify-center text-gray-900/60 lg:text-[rgba(17,24,39,0.60)] text-sm lg:text-[18px] font-normal lg:font-normal font-['Satoshi'] leading-4 lg:leading-[110%]">Game over, tu recommences de zéro.</div>
                </div>
              </div>
            </motion.div>

            {/* Carte verte - Propriétaire */}
<<<<<<< Updated upstream
            <div className="self-stretch p-4 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-4 outline-offset-[-4px] outline-[#AAFFC3] flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch flex justify-start items-start lg:items-center gap-2.5">
                <div className="w-[60px] h-[60px] lg:w-[84px] lg:h-[84px] relative bg-indigo-100 rounded-lg overflow-hidden flex items-center justify-center">
=======
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={1}
              whileHover={{ scale: 1.02, x: 5 }}
              className="self-stretch p-4 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-4 outline-offset-[-4px] outline-[#AAFFC3] flex flex-col justify-start items-start gap-2.5"
            >
              <div className="self-stretch flex justify-start items-start gap-2.5">
                <div className="w-14 h-14 relative bg-indigo-100 rounded-lg overflow-hidden">
>>>>>>> Stashed changes
                  <Image
                    src="/images/image131.svg"
                    alt="Carton"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] flex flex-col justify-center items-center gap-2.5">
                  <div className="self-stretch justify-center text-gray-900 lg:text-[#111827] text-base lg:text-[20px] font-semibold lg:font-semibold font-['Bricolage_Grotesque'] leading-[100%] lg:leading-[100%] tracking-[-0.16px] lg:tracking-[-0.2px]">Quand tu es proprio et que tu revends</div>
                  <div className="self-stretch justify-center">
                    <span className="text-gray-900 lg:text-[#111827] text-sm lg:text-[20px] font-normal lg:font-normal font-['Satoshi'] leading-[120%] lg:leading-[120%] tracking-[-0.14px] lg:tracking-[-0.2px]">→ Tu récupères </span>
                    <span className="text-[#16A34A] text-sm lg:text-[20px] font-bold lg:font-bold font-['Satoshi_Variable'] leading-[120%] lg:leading-[120%] tracking-[-0.14px] lg:tracking-[-0.2px]">ce que tu as déjà remboursé.</span>
                  </div>
                  <div className="self-stretch justify-center text-gray-900/60 lg:text-[rgba(17,24,39,0.60)] text-sm lg:text-[18px] font-normal lg:font-normal font-['Satoshi'] leading-4 lg:leading-[110%]">Ta progression est sauvegardée.</div>
                </div>
              </div>
            </motion.div>

            {/* Carte violette - Crédit */}
<<<<<<< Updated upstream
            <div className="self-stretch p-4 relative bg-violet-500 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
              {/* Polygones en arrière-plan */}
              {/* Polygon 6 */}
              <div className="absolute top-[20px] left-[10px] w-[110px] h-[110px] lg:top-[-40px] lg:left-[246px] lg:w-[139.047px] lg:h-[139.047px] z-[1]">
                <Image
                  src="/images/Polygon6vdesktop.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              {/* Polygon 7 */}
              <div className="absolute top-[15px] left-[-40px] w-[130px] h-[130px] lg:bottom-[-94.873px] lg:left-[97.457px] lg:w-[164.544px] lg:h-[164.544px] z-[1]">
                <Image
                  src="/images/Polygon7vdesktop.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              {/* Polygon 3 */}
              <div className="absolute bottom-[20px] right-[20px] w-[100px] h-[100px] lg:bottom-[-48.762px] lg:right-[235.108px] lg:w-[139.047px] lg:h-[139.047px] z-[1]">
                <Image
                  src="/images/Polygon3vdesktop.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              {/* Polygon 5 */}
              <div className="absolute top-[-10px] right-[50px] w-[110px] h-[110px] lg:top-[-58px] lg:right-[164.907px] lg:w-[139.047px] lg:h-[139.047px] z-[1]">
                <Image
                  src="/images/Polygon5vdesktop.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              {/* Polygon 4 */}
              <div className="absolute bottom-[10px] right-[-30px] w-[120px] h-[120px] lg:top-[49.471px] lg:right-[97.528px] lg:w-[139.047px] lg:h-[139.047px] z-[1]">
                <Image
                  src="/images/Polygon4vdesktop.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* Contenu au premier plan */}
              <img className="w-20 h-16 relative z-10" src="/images/image135.svg" alt="Crédit" />
              <div className="self-stretch text-center justify-center text-white text-base lg:text-[20px] font-medium font-['Satoshi_Variable'] leading-[120%] tracking-[-0.16px] lg:tracking-[-0.2px] relative z-10">Le crédit, c&apos;est la seule partie que tu peux quitter en gardant tes points.</div>
            </div>

            {/* Carte jaune - Bonus */}
            <div className="self-stretch p-4 bg-yellow-50 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-2 outline-offset-[-2px] outline-[#FFDC4F] flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch flex justify-start items-start lg:items-center gap-2.5">
                <div className="w-[60px] h-[60px] lg:w-[84px] lg:h-[84px] relative rounded-lg overflow-hidden flex items-center justify-center">
=======
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={2}
              whileHover={{ scale: 1.02 }}
              className="self-stretch relative rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/credit.svg"
                alt="Le crédit, c'est la seule partie que tu peux quitter en gardant tes points"
                width={400}
                height={200}
                className="object-contain w-full"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute inset-0 flex items-end justify-center pb-4 px-4"
              >
                <div className="text-center justify-center text-white text-base font-medium font-['Satoshi'] leading-5">
                  Le crédit, c&apos;est la seule partie que tu peux quitter en gardant tes points.
                </div>
              </motion.div>
            </motion.div>

            {/* Carte jaune - Bonus */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={3}
              whileHover={{ scale: 1.02, x: 5 }}
              className="self-stretch p-4 bg-yellow-50 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-2 outline-offset-[-2px] outline-[#FFDC4F] flex flex-col justify-start items-start gap-2.5"
            >
              <div className="self-stretch flex justify-start items-start gap-2.5">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                  className="w-14 h-14 relative rounded-lg overflow-hidden"
                >
>>>>>>> Stashed changes
                  <Image
                    src="/images/image136.svg"
                    alt="Pièce"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <div className="flex-1 rounded-lg flex flex-col justify-center items-center gap-2.5">
                  <div className="self-stretch justify-center text-gray-900 lg:text-[#111827] text-base lg:text-[20px] font-semibold lg:font-semibold font-['Bricolage_Grotesque'] leading-4 lg:leading-[100%] lg:tracking-[-0.2px]">Bonus</div>
                  <div className="self-stretch justify-center">
                    <span className="text-gray-900 lg:text-[#111827] text-sm lg:text-[18px] font-normal lg:font-normal font-['Satoshi'] leading-4 lg:leading-[120%] lg:tracking-[-0.18px]">Et nous, on a même une </span>
                    <span className="text-gray-900 lg:text-[#111827] text-sm lg:text-[18px] font-bold lg:font-bold font-['Satoshi_Variable'] leading-4 lg:leading-[120%] lg:tracking-[-0.18px]">garantie revente jusqu&apos;à 10 ans.</span>
                    <span className="text-gray-900 lg:text-[#111827] text-sm lg:text-[18px] font-normal lg:font-normal font-['Satoshi'] leading-4 lg:leading-[120%] lg:tracking-[-0.18px]"> Si le marché baisse (spoiler : c&apos;est rare), on compense.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Bouton Continue */}
        <ContinueButton onClick={handleContinue} disabled={false} />
      </main>
    </motion.div>
  );
}
