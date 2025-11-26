'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SimpleHeader from '@/components/quiz/SimpleHeader';
import ContinueButton from '@/components/quiz/ContinueButton';

export default function InflationPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/quiz/8');
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.3 + index * 0.1,
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

      <main className="flex-1 flex flex-col mx-4 ">
        {/* Contenu */}
<<<<<<< Updated upstream
        <div className="w-full lg:mt-[100px] lg:mb-[69px] lg:mt-[100px] mt-[20px] lg:w-[746px] mx-auto p-2.5 lg:p-5 bg-white rounded-3xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 inline-flex flex-col justify-start items-start gap-5 lg:gap-[18px] mb-8">
=======
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring' as const, stiffness: 300, damping: 25 }}
          className="w-full max-w-md mx-auto p-2.5 bg-white rounded-3xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 inline-flex flex-col justify-start items-start gap-5 mb-8"
        >
>>>>>>> Stashed changes
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="self-stretch h-20 inline-flex flex-col justify-center items-center gap-1.5"
          >
            <div className="self-stretch text-center justify-center text-gray-900 text-[28px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.28px]">
              Pendant qu&apos;on prépare tes résultats, petit rappel économique...
            </div>
          </motion.div>

          {/* Comparaison Big Mac */}
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            {/* Menu complet 2015 */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={0}
              className="w-[calc(50%-4px)] p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 inline-flex flex-col justify-center items-center gap-2.5"
            >
              <div className="self-stretch p-3 bg-white rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
<<<<<<< Updated upstream
                <div className="relative w-[92px] h-[80.189px]">
=======
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: 'spring' as const, stiffness: 400, damping: 20 }}
                  className="relative w-24 h-24"
                >
>>>>>>> Stashed changes
                  <Image
                    src="/images/menu.svg"
                    alt="Menu complet"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <div className="flex flex-col justify-start items-center gap-0.5">
                  <div className="text-center justify-center text-gray-900/60 text-sm lg:text-[20px] font-medium lg:font-medium font-['Satoshi'] leading-4 lg:leading-[110%]">2015</div>
                  <div className="text-center justify-center" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    <span className="text-gray-900 text-base lg:text-base font-medium lg:font-medium leading-4 lg:leading-[110%]">10</span>
                    <span className="text-gray-900 text-base lg:text-base font-bold lg:font-bold leading-4 lg:leading-[110%]">€</span>
                  </div>
                  <div className="text-center justify-center text-gray-900/60 text-sm font-medium font-['Satoshi'] leading-4">Menu complet</div>
                </div>
              </div>
            </motion.div>

            {/* Big Mac 2025 */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={1}
              className="w-[calc(50%-4px)] p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 inline-flex flex-col justify-center items-center gap-2.5"
            >
              <div className="self-stretch p-3 bg-white rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
<<<<<<< Updated upstream
                <div className="relative w-[92px] h-[80.189px]">
=======
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, type: 'spring' as const, stiffness: 400, damping: 20 }}
                  className="relative w-24 h-24"
                >
>>>>>>> Stashed changes
                  <Image
                    src="/images/burger.svg"
                    alt="Burger"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <div className="flex flex-col justify-start items-center gap-0.5">
                  <div className="text-center justify-center text-gray-900/60 text-sm lg:text-[20px] font-medium lg:font-medium font-['Satoshi'] leading-4 lg:leading-[110%]">2025</div>
                  <div className="text-center justify-center" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    <span className="text-orange-700 lg:text-[#C72400] text-base lg:text-base font-medium lg:font-medium leading-4 lg:leading-[110%]">10</span>
                    <span className="text-orange-700 lg:text-[#C72400] text-base lg:text-base font-bold lg:font-bold leading-4 lg:leading-[110%]">€</span>
                  </div>
                  <div className="text-center justify-center text-gray-900/60 text-sm font-medium font-['Satoshi'] leading-4">Juste le Big Mac</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Texte explicatif */}
<<<<<<< Updated upstream
          <div className="self-stretch text-center justify-center text-gray-900 text-base lg:text-[20px] font-normal lg:font-normal leading-5 lg:leading-[120%] lg:tracking-[-0.2px]" style={{ fontFamily: 'var(--font-satoshi)' }}>
=======
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5"
          >
>>>>>>> Stashed changes
            Même billet. Moins de burger.
          </motion.div>

<<<<<<< Updated upstream
          <div className="self-stretch text-center justify-center" style={{ fontFamily: 'var(--font-satoshi)' }}>
            <span className="text-gray-900 text-base lg:text-[20px] font-normal lg:font-normal leading-5 lg:leading-[120%] lg:tracking-[-0.2px]">C&apos;est ça, </span>
            <span className="text-gray-900 text-base lg:text-[20px] font-bold lg:font-bold leading-5 lg:leading-[120%] lg:tracking-[-0.2px]">l&apos;inflation.</span>
          </div>

          {/* Question */}
          <div className="self-stretch text-center justify-center text-gray-900 text-base lg:text-[20px] font-normal lg:font-normal leading-5 lg:leading-[120%] lg:tracking-[-0.2px]" style={{ fontFamily: 'var(--font-satoshi)' }}>
=======
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="self-stretch text-center justify-center"
          >
            <span className="text-gray-900 text-base font-normal font-['Satoshi'] leading-5">C&apos;est ça, </span>
            <span className="text-gray-900 text-base font-bold font-['Satoshi'] leading-5">l&apos;inflation.</span>
          </motion.div>

          {/* Question */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5"
          >
>>>>>>> Stashed changes
            Mais devine quoi ?
          </motion.div>

          {/* Cartes Locataire vs Propriétaire */}
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            {/* Locataire */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={5}
              whileHover={{ scale: 1.02 }}
              className="w-[calc(50%-4px)] p-1 bg-red-300 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 inline-flex flex-col justify-center items-center gap-2.5"
            >
              <div className="self-stretch p-3 bg-red-50 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
              <div className="w-24 h-24 relative bg-rose-50 rounded-tl-3xl rounded-tr-3xl rounded-bl rounded-br mb-2 flex items-center justify-center">
                <img
                  src="/images/clef3.png"
                  alt="Locataire"
                  className="origin-center"
                  style={{
                    width: '96px',
                    height: 'auto',
                    transform: 'rotate(-5.421deg) scale(1.3)'
                  }}
                />
              </div>
              <div className="text-center justify-center text-gray-900 text-base lg:text-[24px] font-bold lg:font-bold leading-4 lg:leading-[110%]" style={{ fontFamily: 'var(--font-satoshi)' }}>Locataire</div>

              <div className="self-stretch flex flex-col justify-start items-center gap-0.5">
                <div className="w-full p-2 bg-white rounded-lg flex flex-col justify-start items-start gap-0.5">
                  <div className="w-full text-left text-gray-900/60 text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]" style={{ fontFamily: 'var(--font-satoshi)' }}>2015</div>
                  <div className="w-full text-left" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    <span className="text-gray-900 text-sm lg:text-[20px] font-bold lg:font-bold leading-4 lg:leading-[110%]">815€</span>
                    <span className="text-gray-900 text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]">/mois</span>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                  className="w-6 h-6 relative flex items-center justify-center"
                >
                  <Image
                    src="/images/CaretDownOrange.svg"
                    alt="Augmentation"
                    width={24}
                    height={24}
                  />
                </motion.div>
                <div className="w-full p-2 bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-[#FE8253] flex flex-col justify-start items-start gap-0.5">
                  <div className="w-full text-left text-gray-900/60 text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]" style={{ fontFamily: 'var(--font-satoshi)' }}>2025</div>
                  <div className="w-full text-left" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    <span className="text-orange-800 lg:text-[#9C2B00] text-sm lg:text-[20px] font-bold lg:font-bold leading-4 lg:leading-[110%]">915€</span>
                    <span className="text-orange-800 lg:text-[#9C2B00] text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]">/mois</span>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>

            {/* Propriétaire */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={6}
              whileHover={{ scale: 1.02 }}
              className="w-[calc(50%-4px)] p-1 bg-emerald-200 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 inline-flex flex-col justify-center items-center gap-2.5"
            >
              <div className="self-stretch p-3 bg-teal-50 rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
              <div className="w-24 h-24 relative bg-green-100 rounded-tl-3xl rounded-tr-3xl rounded-bl rounded-br mb-2 overflow-visible flex items-center justify-center">
                <img
                  src="/images/clef4.png"
                  alt="Propriétaire"
                  className="origin-center"
                  style={{
                    width: '96px',
                    height: 'auto',
                    transform: 'scale(1.5)'
                  }}
                />
              </div>
              <div className="text-center justify-center text-gray-900 text-base lg:text-[24px] font-bold lg:font-bold leading-4 lg:leading-[110%]" style={{ fontFamily: 'var(--font-satoshi)' }}>Propriétaire</div>

              <div className="self-stretch flex flex-col justify-start items-center gap-0.5">
                <div className="w-full p-2 bg-white rounded-lg flex flex-col justify-start items-start gap-0.5">
                  <div className="w-full text-left text-gray-900/60 text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]" style={{ fontFamily: 'var(--font-satoshi)' }}>2015</div>
                  <div className="w-full text-left" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    <span className="text-gray-900 text-sm lg:text-[20px] font-bold lg:font-bold leading-4 lg:leading-[110%]">815€</span>
                    <span className="text-gray-900 text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]">/mois</span>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                  className="w-6 h-6 relative flex items-center justify-center"
                >
                  <Image
                    src="/images/CaretDownGreen.svg"
                    alt="Stable"
                    width={24}
                    height={24}
                  />
                </motion.div>
                <div className="w-full p-2 bg-white rounded-lg outline outline-2 outline-offset-[-2px] outline-emerald-500 flex flex-col justify-start items-start gap-0.5">
                  <div className="w-full text-left text-gray-900/60 text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]" style={{ fontFamily: 'var(--font-satoshi)' }}>2015</div>
                  <div className="w-full text-left" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    <span className="text-emerald-900 lg:text-[#004E28] text-sm lg:text-[20px] font-bold lg:font-bold leading-4 lg:leading-[110%]">815€</span>
                    <span className="text-emerald-900 lg:text-[#004E28] text-xs lg:text-[16px] font-medium lg:font-medium leading-3 lg:leading-[110%]">/mois</span>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          </div>
<<<<<<< Updated upstream

          {/* Banner bouclier euro - Mobile et Desktop */}
          <div className="flex self-stretch p-3 lg:p-3 bg-[#4ADE80] rounded-2xl flex-col items-center gap-[10px] relative overflow-hidden">
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

            {/* Image bouclier_euro.svg */}
            <div className="flex-shrink-0 relative z-10">
              <Image
                src="/images/bouclier_euro.svg"
                alt="Bouclier Euro"
                width={94.64}
                height={77.88}
                className="object-contain"
              />
            </div>

            {/* Texte */}
            <div className="flex flex-col gap-1 relative z-10" style={{ fontFamily: 'var(--font-satoshi)' }}>
              <div className="text-white text-center text-[16px] lg:text-[20px] font-medium leading-[120%] tracking-[-0.16px] lg:tracking-[-0.2px]">
                Le crédit, c&apos;est le seul prix qui reste fixe pendant 25 ans.
              </div>
              <div className="text-white text-center text-[16px] lg:text-[20px] font-bold leading-[120%] tracking-[-0.16px] lg:tracking-[-0.2px]">
                Pendant que ton loyer augmente, ton crédit ne bouge pas.
              </div>
            </div>
          </div>
        </div>
=======
        </motion.div>
>>>>>>> Stashed changes

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Bouton Continue */}
        <ContinueButton onClick={handleContinue} disabled={false} />
      </main>
    </motion.div>
  );
}
