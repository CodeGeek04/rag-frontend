const Share = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-8 whitespace-nowrap text-6xl font-extrabold font-poppins">
        <span className="text-pinky">SHARE</span> YOUR{" "}
        <span className="text-pinky">COLLECTION</span>
      </h1>
      <h1 className="mt-8 whitespace-nowrap text-4xl font-extrabold font-poppins">
        COLLECTION: COMPUTER SCIENCE
      </h1>
      <img src="/share.svg" className="mt-8 h-98" alt="logo" />
    </div>
  );
};

export default Share;
