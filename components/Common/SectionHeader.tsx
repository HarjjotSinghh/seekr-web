"use client";
import { motion } from "framer-motion";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto text-center"
      >
        <div className="dark:bg-backgroundsection mb-4 inline-block rounded-full bg-accent/5 px-4.5 py-1.5 dark:border dark:border-strokedark">
          <span className="text-sectiontitle font-medium text-foreground dark:text-foreground">
            {title}
          </span>
        </div>
        <h2 className="mx-auto mb-1 text-3xl font-bold text-foreground dark:text-foreground xl:text-sectiontitle3">
          {subtitle}
        </h2>
        <p className="mx-auto text-foreground/80 md:w-4/5 lg:w-3/5 xl:w-[46%]">
          {description}
        </p>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
