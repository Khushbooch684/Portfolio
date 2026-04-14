import { useState } from "react";
export const ParticlesBackground =()=> {
  const [particles] = useState(() =>
    [...Array(30)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100
    }))
  );

  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-60 bg-violet-500"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animation : `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`, animationDelay:`${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
}