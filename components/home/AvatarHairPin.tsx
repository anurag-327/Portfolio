"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Avatar() {
  return (
    <div className="relative order-first shrink p-4 md:order-last md:p-4">
      <Link href="https://www.linkedin.com/in/anuragsr327/ " target="__blank">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="relative z-[5] block size-20 max-h-20 max-w-20 overflow-hidden rounded bg-white shadow-xl ring-1 ring-slate-900/5"
        >
          <Image
            src="/images/avatar.jpg"
            alt="avatar"
            height={80}
            className="grayscale dark:shadow-[inset_-5px_-18px_38px_22px_#000000]"
            width={80}
          />
        </motion.div>
      </Link>
      <div className="z-0">
        <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
          <div className="-mb-px flex h-[2px] w-40 -scale-x-100"></div>
        </div>{" "}
      </div>
    </div>
  );
}
