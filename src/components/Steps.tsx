import Link from "next/link";

const StepsSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-[500] text-center text-gray-900 sm:text-4xl">
          College Mastermind Steps
        </h2>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 ">
            <h3 className="text-xl font-bold text-blue-600 text-left">Step 1</h3>
            <p className="mt-4 text-gray-700 text-lg  text-left">Take a Free Diagnostic Test</p>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-block px-5 py-3 border border-transparent text-base font-medium rounded-md bg-primary text-white w-full hover:bg-primary-dark"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-600  text-left">Step 2</h3>
            <p className="mt-4 text-gray-700 text-lg  text-left">Get your results automatically</p>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-block px-5 py-3 border border-transparent text-base font-medium rounded-md bg-primary text-white w-full hover:bg-primary-dark"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-600  text-left">Step 3</h3>
            <p className="mt-4 text-gray-700 text-lg  text-left">Get a Free Score Analysis</p>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-block px-5 w-full py-3 border border-transparent text-base font-medium rounded-md bg-primary text-white hover:bg-primary-dark"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-600  text-left">Step 4</h3>
            <p className="mt-4 text-gray-700  text-left text-lg">Implementation of Custom Plan</p>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-block px-5 py-3 border border-transparent text-base font-medium rounded-md bg-primary w-full text-white hover:bg-primary-dark"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="#"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md bg-primary text-white hover:bg-primary-dark"
          >
            I&apos;M READY TO GET STARTED!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
