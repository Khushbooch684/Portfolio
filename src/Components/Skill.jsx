export const Skill = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-purple-500/20 transition">
      <span className="text-lg">{icon}</span>
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  );
};