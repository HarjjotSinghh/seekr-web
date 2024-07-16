"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="mx-auto max-w-7xl overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left md:w-[70%] lg:w-1/2"
          >
            <h2 className="relative mb-6 text-3xl font-bold text-foreground dark:text-foreground xl:text-hero">
              Join Us Today &{" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-1 before:w-full before:bg-titlebg dark:before:bg-accent/50 lg:before:h-1.5">
                Start Your Journey
              </span>
            </h2>
            <p className="mb-4 text-foreground/80">
              Get AI-powered career insights now. Your next professional move
              starts here.
            </p>
            <Link href={"/auth/signup"}>
              <Button
                className="h-12 rounded-full border-2 border-accent/50 px-8 py-6 text-lg font-bold tracking-tight transition-all duration-300 ease-in-out hover:border-accent hover:bg-transparent"
                variant={"outline"}
                size={"lg"}
              >
                Start Using Seekr
              </Button>
            </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right lg:w-[45%]"
          >
            <div className="flex items-center md:justify-center">
              <Image
                width={350}
                height={350}
                src="/images/shape/shape-06.png"
                alt="Saly"
                className="hidden md:block"
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
