import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="mt-6 lgl:mt-14 w-[1000px] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="INSTALLATION SYSTEME - 20 000 ar"
            des="OS + Pilote et logiciel de base"
          />
          <ResumeCard
            title="RECUPERATION DONNEES à partir de 30 000 ar"
            des="récuperation des maximums possible"
          />
          <ResumeCard
            title="FORFAIT COMBINE - 70 000 ar"
            des="Diagnostic + Récupération données + installation systeme"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
