'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SimpleHeader from '@/components/quiz/SimpleHeader';
import ContinueButton from '@/components/quiz/ContinueButton';

export default function VideoPausePage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/change-avis');
  };

  return (
    <div
      className="min-h-screen flex flex-col"
    >
      <SimpleHeader />

      {/* Main content */}
      <main className="flex-1 flex flex-col lg:pt-[100px] lg:pb-[206px] mx-4 lg:mx-0 pt-5 pb-24 lg:pb-10">
        {/* Carte principale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring' as const, stiffness: 300, damping: 25 }}
          className="w-full lg:w-[750px] mx-auto px-2.5 py-5 bg-white rounded-3xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-start items-start gap-6 mb-8"
        >
          {/* Titre et sous-titre */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="self-stretch flex flex-col justify-start items-center gap-2.5"
          >
            <div className="self-stretch text-center justify-center text-gray-900 lg:text-[#111827] text-xl lg:text-[24px] font-semibold lg:font-semibold leading-5 lg:leading-[100%] lg:tracking-[-0.24px]" style={{ fontFamily: 'var(--font-inter-tight)' }}>Petite pause.</div>
            <div className="text-center justify-center text-gray-900 lg:text-[#111827] text-base lg:text-[20px] font-normal lg:font-normal leading-5 lg:leading-[120%] lg:tracking-[-0.2px]" style={{ fontFamily: 'var(--font-inter-tight)' }}>David, le fondateur, veut te dire un truc important.</div>
          </motion.div>

          {/* Carte vidéo violette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' as const, stiffness: 300, damping: 25 }}
            whileHover={{ scale: 1.02 }}
            className="self-stretch h-[326px] px-[19px] py-5 lg:p-5 relative bg-[#875AEF] rounded-[20px] overflow-hidden flex flex-col justify-center items-center gap-2.5 cursor-pointer"
          >
            {/* SVG Background Elements - Polygones en absolute */}
            <div className="absolute top-[100px] right-[-50px] w-[130px] h-[130px] lg:top-[120px] lg:right-[150px] lg:w-[100px] lg:h-[100px] z-[1]">
              <Image
                src="/images/Polygon4vdesktop.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute top-[-10px] right-[30px] w-[130px] h-[130px] lg:top-[-10px] lg:right-[190px] lg:w-[130px] lg:h-[130px] z-[1]">
              <Image
                src="/images/Polygon5vdesktop.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute top-[100px] left-[-50px] w-[167px] h-[167px] lg:top-[120px] lg:left-[160px] lg:w-[130px] lg:h-[130px] z-[1]">
              <Image
                src="/images/Polygon7vdesktop.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-[-20px] right-[20px] w-[139px] h-[139px] lg:bottom-[0px] lg:right-[190px] lg:w-[120px] lg:h-[120px] z-[1]">
              <Image
                src="/images/Polygon8vdesktop.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute top-[-10px] left-[0px] w-[130px] h-[130px] lg:top-[-10px] lg:left-[180px] lg:w-[130px] lg:h-[130px] z-[1]">
              <Image
                src="/images/Polygon9vdesktop.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-[110px] right-[90px] w-[130px] h-[130px] lg:bottom-[100px] lg:right-[270px] lg:w-[130px] lg:h-[130px] z-[1]">
              <Image
                src="/images/Polygon3vdesktop.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Contenu dans le flux - Illustration */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring' as const, stiffness: 400, damping: 20 }}
              className="w-32 h-32 lg:w-[131px] lg:h-[124px] relative z-10 flex justify-center items-center flex-shrink-0 lg:px-[10px] lg:py-[6px]"
            >
              <Image
                src="/images/Illustration.svg"
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Contenu dans le flux - Texte */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="self-stretch flex flex-col justify-start items-center gap-2.5 z-10"
            >
              <div className="text-center justify-center text-white text-lg lg:text-[24px] font-semibold lg:font-semibold leading-4 lg:leading-[100%] lg:tracking-[-0.24px]" style={{ fontFamily: 'var(--font-inter-tight)' }}>Vidéo de David Brauman</div>
              <div className="w-full text-center justify-center text-white text-base lg:text-[20px] font-normal lg:font-normal leading-5 lg:leading-[120%] lg:tracking-[-0.2px]" style={{ fontFamily: 'var(--font-inter-tight)' }}>«À Tours, on a XX logements à partir de XXX€/mois. Oui, c&apos;est possible de devenir proprio.»</div>
            </motion.div>
          </motion.div>

          {/* Boutons */}
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            {/* Bouton principal orange */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, type: 'spring' as const, stiffness: 300, damping: 25 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(254, 130, 83, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              onClick={handleContinue}
              className="w-full h-14 rounded-[105px] bg-[#FE8253] hover:bg-[#e67349] active:scale-98 text-white font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer"
              style={{
                fontFamily: 'var(--font-crimson-pro), serif',
                fontSize: '18px',
                lineHeight: '1',
                padding: '0 18px',
                boxShadow: 'inset 0 2px 4px #EC48095E, 0 4px 8px #EC480947',
              }}
            >
              J&apos;ai vu la vidéo, on continue
            </motion.button>

            {/* Bouton Skip blanc */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: 'spring' as const, stiffness: 300, damping: 25 }}
              whileHover={{ scale: 1.02, backgroundColor: '#f9fafb' }}
              whileTap={{ scale: 0.98 }}
              onClick={handleContinue}
              className="w-full h-14 rounded-[105px] bg-white hover:bg-gray-50 active:scale-98 text-gray-900 font-semibold transition-all duration-200 flex items-center justify-center border-2 border-gray-200 cursor-pointer"
              style={{
                fontFamily: 'var(--font-crimson-pro), serif',
                fontSize: '18px',
                lineHeight: '1',
                padding: '0 18px',
              }}
            >
              Pas le temps ? Skip →
            </motion.button>
          </div>
        </motion.div>

        {/* Spacer pour pousser le bouton Continue vers le bas */}
        <div className="flex-1 lg:hidden"></div>

        {/* Bouton Continue */}
        <div className="lg:hidden">
          <ContinueButton onClick={handleContinue} disabled={false} />
        </div>
      </main>
    </div>
  );
}
