import icon from '../assets/icon_transparent.png'
function Hero() {
  return (
    // <div className="hero min-h-screen bg-base-600">
    //   <div className="hero-content text-center flex col justify-center items-center">
    //     <div className="max-w-md">
    //       <h1 className="text-5xl font-bold">Welcome to our website!</h1>
    //       <p className="py-6">
    //         We are glad to have you here. Explore our features and enjoy your
    //         stay!
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="h-[35rem] bg-[#e2f1e7] relative overflow-hidden">
      <div className="mt-[7rem]">
        <div className="flex flex-col">
          <div className="flex mx-[7rem] items-center">
            <div className="flex justify-center items-center h-full">
              <div className="pb-7">
                <h1 className="text-[11rem] text-[#004243] text-start">
                  &#123;
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full mx-7 text-[#004243]">
              <h1 className="text-3xl font-bold text-start pt-3 ">
                Data Science
              </h1>
              <h1 className="text-3xl font-bold text-start pt-3">
                Internet of Things
              </h1>
              <h1 className="text-3xl font-bold text-start pt-3">
                Artificial Intelligence
              </h1>
              <h1 className="text-3xl font-bold text-start pt-3">
                Software Development
              </h1>
            </div>

            <div className="absolute bottom-[-7rem] right-[-20rem]">
              <img src={icon} alt="lab icon" className="opacity-70 h-svh" />
            </div>
          </div>
          <div className="flex justify-start mx-[12rem]">
            <button className="btn btn-blue text-2xl font-bold bg-[#a8cd89] text-white p-3 rounded">
              Discover more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;