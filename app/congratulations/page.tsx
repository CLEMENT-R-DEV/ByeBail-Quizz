'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SimpleHeader from '@/components/quiz/SimpleHeader';
import ChoiceCard from '@/components/quiz/ChoiceCard';

export default function CongratulationsPage() {
  const router = useRouter();

  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
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
      className="min-h-screen flex flex-col"
    >
      <SimpleHeader />

      {/* Main content */}
<<<<<<< Updated upstream
      <main className="flex-1 flex flex-col mx-4 lg:mx-0">
        {/* Conteneur 750px sur desktop */}
        <div className="w-full lg:w-[750px] lg:mt-[100px] mt-[20px] mx-auto flex flex-col">
          {/* Carte principale */}
          <div className="rounded-3xl flex flex-col justify-center items-center gap-5 mb-2.5">
          {/* Image avec ellipse */}
          <div className="w-28 h-20 relative flex items-center justify-center">
            {/* Ellipse de fond - parfaitement ronde avec position ajustable */}
            <div
              className="absolute w-10 h-10 lg:w-10 lg:h-10 top-2 left-7 lg:top-2 lg:left-7 rounded-full"
              style={{ backgroundColor: '#D9D9D9' }}
            />
            {/* Image au-dessus */}
            <div className="w-28 h-20 relative z-10">
              <Image
                src="/images/image146.svg"
                alt="Félicitations"
                fill
                className="object-contain"
              />
            </div>
          </div>
=======
      <main className="flex-1 flex flex-col px-4 pt-5 pb-6">
        {/* Carte principale */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
          className="rounded-3xl flex flex-col justify-center items-center gap-5 mb-2.5"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 400, damping: 15 }}
            className="w-28 h-20 relative rounded-lg overflow-hidden"
          >
            <Image
              src="/images/search_2.svg"
              alt="Félicitations"
              fill
              className="object-contain"
            />
          </motion.div>
>>>>>>> Stashed changes
          <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="self-stretch text-center justify-center text-gray-900 text-xl font-semibold font-['Bricolage_Grotesque'] leading-5"
            >
              Name, félicitations !
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="self-stretch text-center justify-center text-gray-900 text-base font-normal font-['Satoshi'] leading-5"
            >
              On t&apos;a trouvé la perle rare à Tours
            </motion.div>
          </div>
        </motion.div>

        {/* Cartes - 3 cartes sur une ligne en desktop, une colonne sur mobile */}
        <div className="mb-8 flex flex-col gap-2">
<<<<<<< Updated upstream
          {/* Mobile: 3 cartes en colonne */}
          <div className="lg:hidden self-stretch flex flex-col gap-2">
            <ChoiceCard
              id="plan"
              label="Le Plan"
              subtitle="Découvre l'agencement de ton futur chez-toi"
              image="/images/icon158.svg"
              selected={false}
              onClick={() => {}}
              compactImage={true}
              fitContent={true}
              labelClassName="text-center text-[#111827] text-[20px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.2px]"
              subtitleClassName="text-center text-[#111827] text-[14px] font-normal font-['Satoshi_Variable'] leading-[110%]"
            />
            <ChoiceCard
              id="situation"
              label="La Situation"
              subtitle="Vois où tu pourrais vivre demain"
              image="/images/icon157.svg"
              selected={false}
              onClick={() => {}}
              compactImage={true}
              fitContent={true}
              labelClassName="text-center text-[#111827] text-[20px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.2px]"
              subtitleClassName="text-center text-[#111827] text-[14px] font-normal font-['Satoshi_Variable'] leading-[110%]"
            />
            <ChoiceCard
              id="prix"
              label="Le Prix"
              subtitle="Combien ça coûte vraiment"
              image="/images/icon156.svg"
              selected={false}
              onClick={() => {}}
              compactImage={true}
              fitContent={true}
              labelClassName="text-center text-[#111827] text-[20px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.2px]"
              subtitleClassName="text-center text-[#111827] text-[14px] font-normal font-['Satoshi_Variable'] leading-[110%]"
            />
          </div>

          {/* Desktop: 3 cartes sur une seule ligne */}
          <div className="hidden lg:flex self-stretch justify-start items-start gap-2">
            <div className="flex-1">
              <ChoiceCard
                id="plan"
                label="Le Plan"
                subtitle="Découvre l'agencement de ton futur chez-toi"
                image="/images/icon158.svg"
                selected={false}
                onClick={() => {}}
                compactImage={true}
                fullSize={true}
                labelClassName="text-center text-[#111827] text-[20px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.2px]"
                subtitleClassName="text-center text-[#111827] text-[14px] font-normal font-['Satoshi_Variable'] leading-[110%]"
              />
            </div>
            <div className="flex-1">
              <ChoiceCard
                id="situation"
                label="La Situation"
                subtitle="Vois où tu pourrais vivre demain"
                image="/images/icon157.svg"
                selected={false}
                onClick={() => {}}
                compactImage={true}
                fullSize={true}
                labelClassName="text-center text-[#111827] text-[20px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.2px]"
                subtitleClassName="text-center text-[#111827] text-[14px] font-normal font-['Satoshi_Variable'] leading-[110%]"
              />
            </div>
            <div className="flex-1">
              <ChoiceCard
                id="prix"
                label="Le Prix"
                subtitle="Combien ça coûte vraiment"
                image="/images/icon156.svg"
                selected={false}
                onClick={() => {}}
                compactImage={true}
                fullSize={true}
                labelClassName="text-center text-[#111827] text-[20px] font-semibold font-['Bricolage_Grotesque'] leading-[100%] tracking-[-0.2px]"
                subtitleClassName="text-center text-[#111827] text-[14px] font-normal font-['Satoshi_Variable'] leading-[110%]"
              />
            </div>
          </div>
        </div>

          {/* Carte Call-to-action */}
          <div className="bg-[#FFF3ED] rounded-[18px] p-6 mb-6 shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/[0.04]">
            <div className="w-[262px] mx-auto mb-2">
              <h3
                className="text-center"
                style={{
                  fontFamily: 'var(--font-bricolage-grotesque), sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '-0.01em',
                }}
              >
                Tu kiffes ? On t&apos;en montre plus en visio.
              </h3>
            </div>
            <div className="w-[222px] mx-auto mb-6">
              <p className="text-center text-sm text-gray-600">
                Réserve un créneau gratuit de 30 min avec nos experts
              </p>
            </div>
            <button
              className="w-full bg-[#FE8253] text-white font-semibold py-4 rounded-full hover:bg-[#FE7043] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              style={{
                fontFamily: 'var(--font-crimson-pro), serif',
                fontSize: '18px',
                lineHeight: '28px',
                fontWeight: 600,
              }}
            >
              Je réserve mon créneau gratuit
              <span className="text-xl">🎯</span>
            </button>
          </div>
        </div>
=======
          {/* Première ligne - 2 cartes */}
          <div className="self-stretch flex justify-start items-start gap-2">
            {/* Carte Le Plan */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={0}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-center items-center gap-2.5 cursor-pointer"
            >
              <div className="self-stretch p-2.5 bg-white rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
                <div className="w-28 h-20 relative bg-indigo-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/plan.svg"
                    alt="Le Plan"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-start items-center gap-0.5">
                  <div className="text-center justify-center text-gray-900 text-base font-medium font-['Satoshi'] leading-4">Le Plan</div>
                </div>
                <div className="self-stretch text-center justify-center text-gray-900 text-sm font-normal font-['Satoshi'] leading-4">Découvre l&apos;agencement de ton futur chez-toi</div>
              </div>
            </motion.div>

            {/* Carte La Situation */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={1}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 self-stretch p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-center items-center gap-2.5 cursor-pointer"
            >
              <div className="self-stretch flex-1 p-2.5 bg-white rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
                <div className="w-28 h-20 relative bg-indigo-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/situation.svg"
                    alt="La Situation"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="self-stretch flex flex-col justify-start items-center gap-0.5">
                  <div className="text-center justify-center text-gray-900 text-base font-medium font-['Satoshi'] leading-4">La Situation</div>
                </div>
                <div className="self-stretch text-center justify-center text-gray-900 text-sm font-normal font-['Satoshi'] leading-4">Vois où tu pourrais vivre demain</div>
              </div>
            </motion.div>
          </div>

          {/* Deuxième ligne - 1 carte à gauche */}
          <div className="self-stretch flex justify-start items-start gap-2">
            {/* Carte Le Prix */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={2}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-[calc(50%-4px)] p-2.5 bg-white rounded-2xl shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/5 flex flex-col justify-center items-center gap-2.5 cursor-pointer"
            >
              <div className="self-stretch p-2.5 bg-white rounded-lg shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.10)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex flex-col justify-center items-center gap-2.5">
                <div className="w-28 h-20 relative bg-indigo-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/prix.svg"
                    alt="Le Prix"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-start items-center gap-0.5">
                  <div className="text-center justify-center text-gray-900 text-base font-medium font-['Satoshi'] leading-4">Le Prix</div>
                </div>
                <div className="self-stretch text-center justify-center text-gray-900 text-sm font-normal font-['Satoshi'] leading-4">Combien ça coûte vraiment</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carte Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-[#FFF3ED] rounded-[18px] p-6 mb-6 shadow-[0px_0px_27.5px_0px_rgba(104,137,228,0.04)] outline outline-[0.80px] outline-offset-[-0.80px] outline-black/[0.04]"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-2"
            style={{
              fontFamily: 'var(--font-bricolage-grotesque), sans-serif',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '-0.01em',
            }}
          >
            Tu kiffes ? On t&apos;en montre plus en visio.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center text-sm text-gray-600 mb-6"
          >
            Réserve un créneau gratuit de 30 min avec nos experts
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 400, damping: 25 }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(254, 130, 83, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#FE8253] text-white font-semibold py-4 rounded-full hover:bg-[#FE7043] transition-colors flex items-center justify-center gap-2"
            style={{
              fontFamily: 'var(--font-crimson-pro), serif',
              fontSize: '18px',
              lineHeight: '28px',
              fontWeight: 600,
            }}
          >
            Je réserve mon créneau gratuit
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
              className="text-xl"
            >
              🎯
            </motion.span>
          </motion.button>
        </motion.div>
>>>>>>> Stashed changes
      </main>
    </motion.div>
  );
}
