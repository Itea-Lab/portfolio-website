import { useLanguage } from "../language-context";
import { useState } from "react";
import { Send } from "lucide-react";
import community_image from "../assets/square_lab.png";
export default function JoinUs() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "careers",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        interest: "careers",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="joinUs"
      className="py-20 bg-[#74A173] relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute -right-[15rem] -top-[3.5rem] h-160 w-1/2"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1">
            <circle
              cx="250"
              cy="250"
              r="200"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="250"
              cy="250"
              r="150"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="250"
              cy="250"
              r="100"
              stroke="currentColor"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
      <div className="container relative mx-auto px-4 pt-10 z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
            {t("community.title")}
          </h2>
          <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white opacity-90">{t("community.text")}</p>
        </div>
        <div className="max-w-6xl mx-auto bg-mint-50 rounded-xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative w-full">
              <img
                src={community_image}
                alt="Join our community"
                className="object-fill object-center w-full h-full opacity-90"
              />
            </div>

            {/* Form side */}
            <div className="p-8 md:p-12 bg-white via-[#F9FAFB] to-[#E7F3EA]">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-[#004243]" />
                  </div>
                  <h3 className="text-xl text-[#004243] font-bold mb-2">
                    Application Received!
                  </h3>
                  <p className="text-[#004243]">
                    Thank you for your interest in joining our community. We'll
                    get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#004243] mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#004243] mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#004243] mb-1"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent"
                      placeholder="Tell us about yourself and why you're interested"
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-6 py-3 font-bold hover:bg-transparent text-[#44A3A2] hover:text-white transition-colors"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#004243]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <div className="relative">
                          <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div
                              className="relative"
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                            >
                              <div
                                className={`
            block h-12 leading-[3rem] font-bold no-underline 
            text-center uppercase tracking-wide
            border-2 border-solid
            transition-all duration-300
            ${
              isHovered
                ? "w-45 border-[#74A173] bg-transparent text-[#74A173]"
                : "w-56 border-[#74A173] bg-[#74A173] text-white"
            }
          `}
                              >
                                Join Us
                              </div>
                              <div
                                className={`
            w-12 h-12 border-2 border-solid
            absolute transform rotate-45 top-0 -z-10
            transition-all duration-300
            ${isHovered ? "border-[#74A173]" : "border-transparent"}
          `}
                                style={{
                                  right: isHovered ? "-25%" : "0",
                                  transition: "all 0.35s",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 268.832 268.832"
                                  className="
              w-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              transform -rotate-45 fill-[#74A173]
              transition-all duration-300
            "
                                >
                                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
