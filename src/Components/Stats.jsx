import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useState, useRef } from "react";

export const Stats = () => {
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Problems Solved", value: 250, suffix: "+" },
    { label: "GFG Challenge", value: 160, suffix: " Days" },
    { label: "Projects", value: 5, suffix: "+" },
  ];

  return (
    <div ref={ref} className="mt-8 flex flex-wrap gap-8">
      {stats.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={start ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.2 }}
        >
          <h3 className="text-2xl font-bold text-purple-400">
            {start && (
              <CountUp
                start={0}
                end={item.value}
                duration={2}
                suffix={item.suffix}
              />
            )}
          </h3>

          <p className="text-xs text-gray-400 mt-1">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
};