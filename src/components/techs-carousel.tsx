"use client";

import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const techs = [
  { src: "/images/techs/angular.png", alt: "Angular" },
  { src: "/images/techs/aws.png", alt: "AWS" },
  { src: "/images/techs/azure.png", alt: "Azure" },
  { src: "/images/techs/cplusplus.png", alt: "C++" },
  { src: "/images/techs/docker.png", alt: "Docker" },
  { src: "/images/techs/figma.png", alt: "Figma" },
  { src: "/images/techs/git.png", alt: "Git" },
  { src: "/images/techs/graphQL.png", alt: "GraphQL" },
  { src: "/images/techs/html.png", alt: "HTML" },
  { src: "/images/techs/java.png", alt: "Java" },
  { src: "/images/techs/jenkins.png", alt: "Jenkins" },
  { src: "/images/techs/kubernetes.png", alt: "Kubernetes" },
  { src: "/images/techs/materialui.png", alt: "Material UI" },
  { src: "/images/techs/mongoDB.png", alt: "MongoDB" },
  { src: "/images/techs/mySQL.png", alt: "MySQL" },
  { src: "/images/techs/net.png", alt: ".NET" },
  { src: "/images/techs/nodejs.png", alt: "Node.js" },
  { src: "/images/techs/postgresSQL.png", alt: "PostgreSQL" },
  { src: "/images/techs/python.png", alt: "Python" },
  { src: "/images/techs/react.png", alt: "React" },
  { src: "/images/techs/redux.png", alt: "Redux" },
  { src: "/images/techs/sap.png", alt: "SAP" },
  { src: "/images/techs/tailwind.png", alt: "Tailwind CSS" },
  { src: "/images/techs/vite.png", alt: "Vite" },
  { src: "/images/techs/vue.png", alt: "Vue" },
] as const;

export function TechsCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const firstTrackRef = useRef<HTMLDivElement | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const items = useMemo(() => techs, []);

  const measure = () => {
    if (!firstTrackRef.current) return;
    setTrackWidth(firstTrackRef.current.offsetWidth + 16);
  };

  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (trackWidth > 0) {
      // Start from the middle duplicated track for seamless rightward looping.
      x.set(-trackWidth);
    }
  }, [trackWidth, x]);

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion || trackWidth <= 0 || isPaused) return;
    const pxPerSecond = 64;
    let next = x.get() + (pxPerSecond * delta) / 1000;
    if (next >= 0) next -= trackWidth;
    x.set(next);
  });

  return (
    <div
      className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,black_12%,black_88%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-image:linear-gradient(to_right,transparent_0,black_12%,black_88%,transparent_100%)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]"
    >
      <motion.div className="flex w-max items-center gap-4" style={{ x, willChange: "transform" }}>
        {[0, 1, 2].map((setIndex) => (
          <div
            key={`set-${setIndex}`}
            ref={setIndex === 1 ? firstTrackRef : null}
            className="flex items-center gap-4"
            aria-hidden={setIndex !== 1}
          >
            {items.map((item) => (
              <motion.div
                key={`${item.alt}-${setIndex}`}
                className="relative inline-flex h-14 w-14 items-center justify-center bg-transparent sm:h-16 sm:w-16"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.16 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Image
                  src={item.src}
                  alt={setIndex === 1 ? item.alt : ""}
                  fill
                  sizes="64px"
                  className="object-contain p-2"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
