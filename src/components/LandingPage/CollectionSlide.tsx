const CollectionSlide = () => {
  return (
    <div id="collections" className="flex justify-between flex-row">
      {" "}
      <div className="flex items-center flex-col font-poppins">
        <h1 className="mt-8 whitespace-nowrap text-6xl font-extrabold font-poppins">
          CREATE COLLECTIONS
        </h1>
        <h1 className="mt-8 whitespace-nowrap text-6xl font-extrabold font-poppins text-pinky relative">
          SEAMLESSLY
        </h1>
        <div className="flex flex-col items-start">
          <h2 className="mt-8 whitespace-nowrap text-4xl font-extrabold font-poppins text-purple relative">
            &#8226; CHOOSE A NAME
          </h2>
          <h2 className="mt-8 whitespace-nowrap text-4xl font-extrabold font-poppins text-purple relative">
            &#8226; ADD A PROMPT
          </h2>
          <h2 className="mt-8 whitespace-nowrap text-4xl font-extrabold font-poppins text-purple relative">
            &#8226; ADD PDFs
          </h2>
          <h2 className="mt-8 whitespace-nowrap text-4xl font-extrabold font-poppins text-purple relative">
            &#8226; START CHATTING!
          </h2>
        </div>
      </div>
      <img src="/collection.svg" className="h-96 mt-16" alt="collection" />
    </div>
  );
};

export default CollectionSlide;
