import Button from './Button';

const CallToActionBanner = () => {
  return (
    <div
      className="relative max-w-[1250px]  rounded-xl bg-cover bg-center py-16 mx-4 md:mx-auto"
      style={{ backgroundImage: "url('/images/StrategyBg.png')" }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-[500] text-white sm:text-4xl">
          GET INSTANT ACCESS TO OUR FREE TRAINING:
        </h2>
        <p className="mt-4 text-xl text-white">Why You Need a High Score and How to Get It.</p>
        <div className="mt-8">
          <Button title='CLICK HERE TO WATCH HOW'/>
        </div>
      </div>
    </div>
  );
};

export default CallToActionBanner;
