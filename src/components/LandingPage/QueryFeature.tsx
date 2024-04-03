const QueryFeature = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-8 whitespace-nowrap text-6xl font-extrabold font-poppins">
        DISCOVER ACCURATE CITATIONS WITH
      </h1>
      <h1 className="mt-8 whitespace-nowrap text-6xl text-pinky font-extrabold font-poppins">
        QUERY FEATURE
      </h1>
      <div className="flex mt-8 justify-around flex-row w-full">
        <div className="flex flex-col justify-start items-start">
          <h1 className="mt-8 whitespace-nowrap text-4xl font-extrabold font-poppins">
            Q: WHAT IS GIT
          </h1>
          <h1 className="mt-8 text-4xl font-extrabold font-poppins">
            A: GIT IS A SOFTWARE FOR
          </h1>
          <h1 className="mt-2 text-4xl font-extrabold font-poppins">
            VERSION CONTROL
          </h1>
          <h1 className="mt-8 whitespace-nowrap text-4xl font-extrabold font-poppins">
            SOURCE: GIT AND GITHUB
          </h1>
          <h1 className="mt-8 whitespace-nowrap text-4xl font-extrabold font-poppins">
            LOCATION: LINE 4
          </h1>
        </div>
        <img src="/query.svg" className="h-84" alt="query" />
      </div>
    </div>
  );
};

export default QueryFeature;
