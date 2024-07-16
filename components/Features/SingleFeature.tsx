import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top bg-background dark:bg-backgroundsection border-border z-40 rounded-lg border p-7.5 transition-all dark:border-strokedark xl:p-10"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-primary">
          {icon}
        </div>
        <h3 className="text-foreground dark:text-foreground mb-5 mt-7.5 text-xl font-semibold xl:text-itemtitle">
          {title}
        </h3>
        <p>{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
