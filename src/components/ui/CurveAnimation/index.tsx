"use client";
import React, { useEffect, useState, ReactNode, FC } from "react";
import { motion } from "framer-motion";
import { text, curve, translate } from "./anim";
import { usePathname } from "@/i18n/navigation";
import "./styles.css";

type CurveProps = {
  children: ReactNode;
  backgroundColor?: string;
};

type Dimensions = {
  width: number | null;
  height: number | null;
};

const routes: Record<string, string> = {
  "/": "Home",
  "/portfolio": "Portfolio",
  "/contact": "Contact",
};

const anim = (variants: any) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

const CurvedAnimation: FC<CurveProps> = ({ children, backgroundColor }) => {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="page curve" style={{ backgroundColor }}>
      <div style={{ opacity: dimensions.width == null ? 1 : 0 }} className="background" />
      <motion.p className="route" {...anim(text)}>
        {routes[pathname]}
      </motion.p>
      {dimensions.width != null && <SVG height={dimensions.height!} width={dimensions.width!} />}
      {children}
    </div>
  );
};

type SVGProps = {
  height: number;
  width: number;
};

const SVG = ({ height, width }: SVGProps) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};

export default CurvedAnimation;
