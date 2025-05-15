const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button
      className={`${containerClass} flex gap-4 items-center justify-center cursor-pointer p-3 rounded-md bg-black-300 transition-all active:scale-95 text-white mx-auto`}
    >
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
