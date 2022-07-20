const Notify = ({ countUnComplete }) => {
  return (
    <div className="absolute top-1 -right-1 w-4 h-4 bg-red-600 rounded-[50%] flex items-center justify-center">
      <span className="text-[10px] text-zinc-200">{countUnComplete}</span>
    </div>
  );
};

export default Notify;
