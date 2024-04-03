const Pdf = () => {
  return (
    <div
      id="features"
      className="flex items-center justify-center flex-col mt-8"
    >
      <div className="flex flex-row">
        <h1 className="mt-8 whitespace-nowrap text-6xl font-extrabold font-poppins">
          ADD <span className="text-pinky">MULTIPLE</span> PDFs
        </h1>
      </div>
      <img src="/pdfs.svg" className="mt-8 h-100" alt="logo" />
    </div>
  );
};

export default Pdf;
