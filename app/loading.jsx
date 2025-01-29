const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6 justify-center items-center bg-[#1f242d]">
      <h1 className="text-white text-center text-xl">
        Bienvenue sur mon portfolio
      </h1>
      <div
        className="relative flex justify-center items-center"
        style={{
          WebkitBoxReflect:
            "below 1px linear-gradient(rgba(0,0,0,0.01), rgba(0,0,0,0.4))",
        }}
      >
        <div className="relative w-[200px] h-[200px] rounded-full bg-[#0d2323] animate-spin">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-[#097976] rounded-l-full" />
          <div className="absolute top-0 left-1/2 w-5 h-5 -translate-x-1/2 rounded-full bg-[#00fff9] z-10 shadow-[0_0_10px_#00fff9,0_0_20px_#00fff9,0_0_30px_#00fff9,0_0_40px_#00fff9,0_0_50px_#00fff9,0_0_60px_#00fff9,0_0_70px_#00fff9,0_0_80px_#00fff9,0_0_90px_#00fff9,0_0_100px_#00fff9]" />
          <div className="absolute top-5 left-5 right-5 bottom-5 bg-[#102626] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
