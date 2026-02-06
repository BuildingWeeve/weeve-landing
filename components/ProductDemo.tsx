"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Chrome, Smartphone, ArrowRight, Bell, ChevronDown, X, Folder, List } from "lucide-react";
import Image from "next/image";
import { getImageUrl } from "@/utils";

export default function ProductDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeDemo, setActiveDemo] = useState<"mobile" | "web-app" | "extension">("mobile");

  return (
    <section id="demo" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            See It In Action
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Save anything,
            <br />
            <span className="text-primary">from anywhere</span>
          </h2>
        </motion.div>

        {/* Demo Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveDemo("mobile")}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${
                activeDemo === "mobile" ? "bg-white shadow-md text-gray-900" : "text-gray-600"
              }`}
            >
              <Smartphone className="w-5 h-5" />
              <span>Mobile App</span>
            </button>
            <button
              onClick={() => setActiveDemo("web-app")}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${
                activeDemo === "web-app" ? "bg-white shadow-md text-gray-900" : "text-gray-600"
              }`}
            >
              <Chrome className="w-5 h-5" />
              <span>Web App</span>
            </button>
            <button
              onClick={() => setActiveDemo("extension")}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${
                activeDemo === "extension" ? "bg-white shadow-md text-gray-900" : "text-gray-600"
              }`}
            >
              <Chrome className="w-5 h-5" />
              <span>Extension</span>
            </button>
          </div>
        </div>

        {/* Demo Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Demo Visualization */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {activeDemo === "mobile" ? (
              <MobileDemo />
            ) : activeDemo === "web-app" ? (
              <ExtensionDemo />
            ) : (
              <ExtensionPopupDemo />
            )}
          </motion.div>

          {/* Right: Description */}
          <motion.div
            key={`${activeDemo}-desc`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {activeDemo === "web-app" ? (
              <div>
                <h3 className="text-3xl font-bold mb-6">One click to save anything</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Simple Capture</h4>
                      <p className="text-gray-600">
                        Paste the link of any page to instantly save it to Weeve
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Smart Extraction</h4>
                      <p className="text-gray-600">
                        Weeve automatically pulls prices, images, and key details
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Easy Organization</h4>
                      <p className="text-gray-600">
                        All your saves are easy to organize & revisit in your dashboard
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeDemo === "extension" ? (
              <div>
                <h3 className="text-3xl font-bold mb-6">Save from any website</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">One-Click Save</h4>
                      <p className="text-gray-600">
                        Click the Weeve extension icon to instantly save any page you&apos;re
                        browsing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Straightforward Organization</h4>
                      <p className="text-gray-600">
                        Choose your collection and list right from the extension
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Works Everywhere</h4>
                      <p className="text-gray-600">
                        Save products, articles, real estate listings and more - all with one click
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-3xl font-bold mb-6">Easy Mobile Saving</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Simple &apos;Share-To&apos; Functionality
                      </h4>
                      <p className="text-gray-600">Share any link directly to Weeve from any app</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Organize & View All Your Saves</h4>
                      <p className="text-gray-600">
                        Easily keep track of all your saves through the Weeve mobile app.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">There When You Need It</h4>
                      <p className="text-gray-600">Open any saved link easily from the app</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 shadow-lg"
            >
              <span>Try It Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ExtensionDemo() {
  return (
    <div className="relative">
      {/* Browser Window showing Weeve Web App */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
      >
        {/* Animated Mouse Cursor */}
        <motion.div
          className="absolute z-50 pointer-events-none"
          initial={{
            x: 100,
            y: 200,
            scale: 1,
            opacity: 1,
          }}
          animate={{
            x: [100, 450, 450, 450, 450],
            y: [200, 80, 80, 80, 80],
            scale: [1, 1, 1, 0.85, 1],
            opacity: [1, 1, 1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            times: [0, 0.4, 0.65, 0.8, 1],
            ease: "easeInOut",
          }}
          style={{
            width: "24px",
            height: "24px",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 1200 1200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            <path
              fill="#FFFFFF"
              d="M403.382,617.495l1.978-489.659l63.443-67.409l77.312,21.808l15.864,33.707l7.93,206.178l124.891,7.924
              l11.891,35.685l154.634,15.856l11.89,37.662l63.44,7.939l61.457,57.488l13.877,57.488l-31.715,307.279l-57.496,164.541
              l-21.808,116.971H462.852L322.1,793.936l-71.364-113.001l-29.733-67.405c0,0-31.728-65.417-25.781-65.417
              c5.952,0,37.672-31.725,37.672-31.725s41.622,13.877,47.574,13.877c5.953,0,77.317,37.667,77.317,37.667L403.382,617.495z"
            />
            <polygon
              fill="#1D1D1B"
              points="582.461,289.838 547.948,289.838 547.948,523.456 582.461,523.456 582.461,289.838"
            />
            <polygon
              fill="#1D1D1B"
              points="725.299,350.667 690.781,350.667 690.781,526.1 725.299,526.1 725.299,350.667"
            />
            <polygon
              fill="#1D1D1B"
              points="886.648,402.553 852.135,402.553 852.135,602.807 886.648,602.807 886.648,402.553"
            />
            <polygon
              fill="#1D1D1B"
              points="417.002,504.185 382.484,504.185 382.484,657.576 417.002,657.576 417.002,504.185"
            />
            <path
              fill="#1D1D1B"
              d="M489.782,85c15.984,0,37.318,2.397,48.185,13.815c11.913,12.517,10.767,35.706,10.151,48.164
              c-0.146,2.958-0.273,5.512-0.273,8.013v147.936c0,19.33,15.67,35,35,35h97.7c0.966,0.58,1.884,1.223,2.69,1.89
              c3.595,2.969,4.996,6.122,4.996,11.244c0,19.33,15.67,35,35,35h71.974c0.672,0,1.136-0.008,1.796-0.046
              c0.279-0.012,1.582-0.06,3.624-0.06c14.107,0,28.347,2.067,38.092,5.529c7.085,2.517,9.938,5.015,10.837,5.973
              c0.593,0.633,1.062,1.132,1.062,3.498c0,19.33,15.67,35,35,35h31.318c3.485,0.675,17.449,3.989,31.403,15.482
              c10.603,8.733,19.166,20.455,25.451,34.84c8.695,19.902,13.105,44.919,13.105,74.355c0,243.509-36.101,338.789-65.109,415.348
              c-16.687,44.041-31.487,83.101-36.052,137.964c-32.947-0.707-78.535-1.064-136.213-1.064c-105.826,0-226.233,1.213-278.719,1.806
              c-10.355-35.325-31.034-102.131-59.322-175.347c-53.335-138.045-107.579-231.383-161.381-277.743
              c-5.327-15.5-10.759-30.079-15.65-43.206c-7.972-21.398-14.858-39.877-18.592-54.77c-3.395-13.54-2.834-19.059-2.512-20.634
              c2.012-1.376,12.392-7.006,47.376-7.006c16.667,0,38.736,8.943,62.141,25.181c19.823,13.752,33.768,27.929,34.371,28.546
              c6.72,7.018,15.861,10.755,25.195,10.755c4.388,0,8.819-0.826,13.061-2.527c13.274-5.322,21.927-18.234,21.927-32.536V145.441
              c0-0.147,0.523-15.625,8.924-30.562C437.645,94.774,458.398,85,489.782,85 M489.782,50c-107.377,0-107.369,95.445-107.369,95.445
              v419.954c0,0-62.037-64.42-121.695-64.42c-127.993,0-78.667,66.397-40.563,181.343C344.231,777.763,444.447,1150,444.447,1150
              s164.376-2.121,305.072-2.121c70.342,0,134.774,0.53,169.768,2.121c0-174.252,102.607-176.993,102.607-589.368
              c0-150.326-102.607-159.677-102.607-159.677h-33.669c0-46.536-65.485-50-84.991-50c-3.413,0-5.42,0.106-5.42,0.106h-71.974
              c0-37.766-35.413-48.133-35.413-48.133H582.846c0,0,0-128.847,0-147.936C582.846,135.903,597.159,50,489.782,50L489.782,50z"
            />
          </svg>
        </motion.div>
        {/* Browser Chrome */}
        <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-500 flex items-center">
            <span className="text-gray-400 mr-1">🔒</span>
            weeveit.com
          </div>
        </div>

        {/* Weeve Web Interface */}
        <div className="bg-gray-50">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src={getImageUrl("landing/icons/Weeve_New_Logo_Correct_Orange.png")}
                alt="Weeve"
                width={400}
                height={150}
                className="h-7 w-auto"
              />
              <div className="text-gray-400">|</div>
              <div className="text-lg font-semibold">My Saves</div>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
              <span>+</span>
              <span>Save a link</span>
            </button>
          </div>

          {/* Collections Grid */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">
                Clothing & Shoes <span className="text-gray-400 text-sm ml-2">3 lists</span>
              </h2>
              <button className="text-primary font-medium text-sm">See all</button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* Collection Card 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="relative">
                  <div className="grid grid-cols-2 gap-1 p-1">
                    <img
                      src={getImageUrl("landing/winter%20jackets/vuori%20jacket.webp")}
                      alt="Vuori Jacket"
                      className="h-24 w-full object-cover rounded"
                    />
                    <img
                      src={getImageUrl("landing/winter%20jackets/Womens-Aconcagua-3-Hoodie.avif")}
                      alt="Women's Aconcagua 3 Hoodie"
                      className="h-24 w-full object-cover rounded"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <div className="font-semibold text-sm mb-1">Winter Jackets</div>
                  <div className="text-xs text-gray-500 inline-flex items-baseline">
                    <span
                      className="relative inline-block"
                      style={{ height: "12px", overflow: "visible", verticalAlign: "baseline" }}
                    >
                      {/* Firework Sparkles */}
                      {[...Array(6)].map((_, i) => {
                        const angle = (i * 360) / 6;
                        const distance = 8;
                        const radians = (angle * Math.PI) / 180;
                        const x = Math.cos(radians) * distance;
                        const y = Math.sin(radians) * distance;

                        return (
                          <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-primary"
                            initial={{
                              opacity: 0,
                              scale: 0,
                              x: 0,
                              y: 0,
                            }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1.5, 0],
                              x: x,
                              y: y,
                            }}
                            transition={{
                              delay: 1.8 + i * 0.05,
                              duration: 0.5,
                              ease: "easeOut",
                            }}
                            style={{
                              boxShadow: "0 0 4px rgba(251, 146, 60, 0.8)",
                            }}
                          />
                        );
                      })}

                      <span style={{ height: "12px", overflow: "hidden", display: "block" }}>
                        <motion.span
                          className="block"
                          initial={{ y: 0 }}
                          animate={{ y: [0, -12, -12] }}
                          transition={{
                            delay: 2.0,
                            duration: 0.8,
                            times: [0, 0.4, 1],
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          style={{ lineHeight: "12px" }}
                        >
                          <span className="block" style={{ height: "12px", lineHeight: "12px" }}>
                            4
                          </span>
                          <motion.span
                            className="block"
                            initial={{ color: "#fb923c" }}
                            animate={{ color: ["#fb923c", "#fb923c", "#6b7280"] }}
                            transition={{
                              delay: 2.0,
                              duration: 0.8,
                              times: [0, 0.5, 1],
                            }}
                            style={{ height: "12px", lineHeight: "12px" }}
                          >
                            5
                          </motion.span>
                        </motion.span>
                      </span>
                    </span>
                    <span className="ml-1">items</span>
                  </div>
                </div>
              </motion.div>

              {/* Collection Card 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="relative">
                  <div className="grid grid-cols-2 gap-1 p-1">
                    <img
                      src={getImageUrl("landing/womens%20running%20shoes/brookswomens.avif")}
                      alt="Brooks Women's Running Shoes"
                      className="h-24 w-full object-cover rounded"
                    />
                    <img
                      src={getImageUrl("landing/womens%20running%20shoes/womens%20on.avif")}
                      alt="Women's Running Shoes"
                      className="h-24 w-full object-cover rounded"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <div className="font-semibold text-sm mb-1">Running Shoes</div>
                  <div className="text-xs text-gray-500 inline-flex items-baseline">
                    <span>6</span>
                    <span className="ml-1">items</span>
                  </div>
                </div>
              </motion.div>

              {/* Collection Card 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="relative">
                  <div className="grid grid-cols-2 gap-1 p-1">
                    <img
                      src={getImageUrl("landing/new%20jeans/womens%20jeans%202.webp")}
                      alt="Women's Jeans"
                      className="h-24 w-full object-cover rounded"
                    />
                    <img
                      src={getImageUrl("landing/new%20jeans/womensjeans1.webp")}
                      alt="Women's Jeans"
                      className="h-24 w-full object-cover rounded"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <div className="font-semibold text-sm mb-1">New Jeans</div>
                  <div className="text-xs text-gray-500 inline-flex items-baseline">
                    <span>5</span>
                    <span className="ml-1">items</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Save Notification */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.5, type: "spring" }}
        className="absolute -bottom-4 -right-4 bg-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 border border-primary/20"
      >
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
          >
            ✓
          </motion.div>
        </div>
        <div>
          <div className="font-semibold text-sm">Saved to Winter Jackets!</div>
          <div className="text-xs text-gray-500">AI extracted key details</div>
        </div>
      </motion.div>
    </div>
  );
}

function ExtensionPopupDemo() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="relative">
      {/* Browser Window showing Recipe Website */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
      >
        {/* Browser Chrome */}
        <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 relative">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-500 flex items-center">
            <span className="text-gray-400 mr-1">🔒</span>
            greatrecipe.com
          </div>
          {/* Extension Icon in Toolbar */}
          <div className="absolute right-4 top-3 z-50">
            <div
              className="w-6 h-6 bg-primary rounded flex items-center justify-center cursor-pointer overflow-hidden p-1 hover:bg-primary/90 transition-colors"
              onClick={() => setShowPopup(!showPopup)}
            >
              <Image
                src={getImageUrl("landing/icons/W_Icon_White.png")}
                alt="Weeve Extension"
                width={16}
                height={16}
                className="w-3.5 h-3.5 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Recipe Website Content */}
        <div className="bg-white relative overflow-hidden" style={{ height: "500px" }}>
          {/* Website Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-orange-600">Great Recipe Website</div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>Recipes</span>
                <span>Collections</span>
                <span>Meal Plans</span>
                <span>Sign in</span>
              </div>
            </div>
          </div>

          {/* Recipe Content */}
          <div className="px-6 py-4">
            <div className="flex-1">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg h-64 mb-4 relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                  • Featured Recipe
                </div>
                {/* Recipe image */}
                <img
                  src={getImageUrl("landing/chrome%20extension/carbonara.jpg")}
                  alt="Classic Spaghetti Carbonara"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">Classic Spaghetti Carbonara</div>
                <div className="text-lg text-gray-600">
                  A traditional Italian pasta dish with eggs, cheese, and pancetta
                </div>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>30 min</span>
                  <span>4 servings</span>
                  <span>Difficulty: Medium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Extension Popup - Positioned relative to outer container, connected to icon */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-9 right-4 z-50 w-80"
            style={{ height: "fit-content", position: "absolute" }}
          >
        {/* Connector Triangle - points up to extension icon (aligned with icon center) */}
        <div
          className="absolute -top-1.5 w-3 h-3 bg-white border-l border-t border-gray-200 transform rotate-45 z-10"
          style={{ right: "calc(1rem + 6px)" }}
        />

        {/* Popup Content */}
        <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden relative">
          {/* Orange Top Bar */}
          <div className="bg-primary px-4 py-3 flex items-center justify-between">
            <Image
              src={getImageUrl("landing/icons/Weeve_New_Logo_Correct_Orange.png")}
              alt="Weeve"
              width={400}
              height={150}
              className="h-8 w-auto brightness-0 invert"
            />
            <button className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded text-xs font-medium flex items-center space-x-1 transition-colors">
              <span>Open Dashboard</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Contextual Info */}
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center">
                <span className="text-orange-600 text-xs">🍳</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">
                  Classic Spaghetti Carbonara - Great Recipe Website
                </div>
                <div className="text-xs text-gray-500">greatrecipe.com</div>
              </div>
            </div>
          </div>

          {/* Select Collection Dropdown */}
          <div className="px-4 py-3 border-b border-gray-200">
            <label className="text-xs text-gray-500 mb-1.5 block">Select a collection</label>
            <div className="w-full px-3 py-2.5 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-2">
                <Folder className="w-4 h-4 text-primary" />
                <span className="text-gray-900 text-sm">Recipes</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Select List Dropdown */}
          <div className="px-4 py-3 border-b border-gray-200">
            <label className="text-xs text-gray-500 mb-1.5 block">Select a list</label>
            <div className="w-full px-3 py-2.5 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-2">
                <List className="w-4 h-4 text-primary" />
                <span className="text-gray-900 text-sm">Pasta Dishes</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  src: getImageUrl("landing/chrome%20extension/carbonara.jpg"),
                  alt: "Spaghetti Carbonara",
                },
                { src: getImageUrl("landing/chrome%20extension/carb2.jpeg"), alt: "Carbonara 2" },
                { src: getImageUrl("landing/chrome%20extension/carb3.jpg"), alt: "Carbonara 3" },
              ].map((image, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-100 rounded border border-gray-200 overflow-hidden"
                >
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="px-4 py-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
            >
              Weeve it
            </motion.button>
          </div>
        </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDemo() {
  const [showPopup, setShowPopup] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [showFourthShoe, setShowFourthShoe] = useState(false);

  useEffect(() => {
    if (showPopup) {
      // Auto-press button after 2 seconds
      const timer = setTimeout(() => {
        setButtonPressed(true);
        // Dismiss popup after button animation completes
        setTimeout(() => {
          setShowPopup(false);
          // Show 4th shoe after popup dismisses (with delay for fireworks)
          setTimeout(() => {
            setShowFourthShoe(true);
          }, 500);
        }, 400);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="flex justify-center">
      {/* Phone Frame */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="w-[340px] h-[700px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-11 bg-white z-20 flex items-center justify-between px-6 pt-2">
              <div className="text-sm font-semibold">11:10</div>
              <div className="flex items-center space-x-1">
                <div className="text-xs">●●</div>
                <div className="text-xs">📶</div>
                <div className="text-xs">🔋</div>
              </div>
            </div>

            {/* Weeve Details Popup */}
            <AnimatePresence>
              {showPopup && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="absolute inset-0 bg-black/50 z-40"
                    onClick={() => setShowPopup(false)}
                  />

                  {/* Popup */}
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 200,
                      delay: 0.3,
                    }}
                    className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 shadow-2xl"
                    style={{ height: "70%", maxHeight: "70%" }}
                  >
                    <div className="h-full flex flex-col">
                      {/* Header */}
                      <div className="px-6 py-3 flex items-center justify-between border-b border-gray-200">
                        <h2 className="text-xl font-bold">Weeve Details</h2>
                        <button
                          onClick={() => setShowPopup(false)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                        >
                          <X className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>

                      {/* Scrollable Content */}
                      <div className="flex-1 overflow-hidden px-6 pt-4 pb-2 min-h-0">
                        {/* Title Field */}
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Title
                          </label>
                          <input
                            type="text"
                            defaultValue="Running Shoes"
                            className="w-full px-4 py-2.5 bg-gray-100 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                          />
                        </div>

                        {/* Collection Dropdown */}
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Select a collection
                          </label>
                          <div className="w-full px-4 py-2.5 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Folder className="w-4 h-4 text-primary" />
                              <span className="text-gray-900 text-sm">Shopping</span>
                            </div>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>

                        {/* List Dropdown */}
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Select a list
                          </label>
                          <div className="w-full px-4 py-2.5 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <List className="w-4 h-4 text-primary" />
                              <span className="text-gray-900 text-sm">Shoes</span>
                            </div>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>

                        {/* Image Section */}
                        <div className="mb-2">
                          <div className="w-full rounded-lg bg-gray-100 flex items-center justify-center py-2">
                            <img
                              src={getImageUrl("landing/shoes/Hoka%20Clifton%209.webp")}
                              alt="Hoka Clifton 9"
                              className="max-h-[65px] w-auto object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Footer Button */}
                      <div className="px-6 py-3 border-t border-gray-200">
                        <motion.button
                          animate={{
                            scale: buttonPressed ? [1, 0.95, 1] : 1,
                          }}
                          transition={{
                            duration: 0.3,
                            times: [0, 0.5, 1],
                          }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setShowPopup(false)}
                          className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg shadow-lg"
                        >
                          Weeve it
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* App Content */}
            {!showPopup && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="h-full overflow-y-auto bg-gray-50 pt-11 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {/* Header */}
                <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="text-xl">☰</div>
                    <Image
                      src={getImageUrl("landing/icons/Weeve_New_Logo_Correct_Orange.png")}
                      alt="Weeve"
                      width={400}
                      height={150}
                      className="h-7 w-auto"
                    />
                  </div>
                  <div className="relative">
                    <Bell className="w-6 h-6 text-gray-700" />
                    <div className="absolute -top-1 -right-1 bg-primary text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                      3
                    </div>
                  </div>
                </div>

                {/* Shopping Section */}
                <div className="px-4 py-3">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold">Shopping</h3>
                      <p className="text-sm text-gray-500">12 lists</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-sm text-primary font-medium">See all</button>
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-xl">
                        +
                      </div>
                    </div>
                  </div>

                  {/* Collection Cards */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Shoes Collection */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm"
                    >
                      <div className="relative">
                        <div className="grid grid-cols-2 gap-0.5 p-0.5">
                          <img
                            src={getImageUrl("landing/shoes/adidas%20Supernova%2B.webp")}
                            alt="Adidas Supernova+"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                          <img
                            src={getImageUrl("landing/shoes/Brooks%20Adrenaline%20GTS%2022%20orange.webp")}
                            alt="Brooks Adrenaline GTS 22"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                          <img
                            src={getImageUrl("landing/shoes/HOKA%20Clifton%208.webp")}
                            alt="HOKA Clifton 8"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                          {/* 4th Shoe with Animation */}
                          <div className="relative h-16 w-full rounded-lg bg-gray-100 overflow-hidden">
                            {/* Fireworks */}
                            {showFourthShoe &&
                              [...Array(8)].map((_, i) => {
                                const angle = (i * 360) / 8;
                                const distance = 12;
                                const radians = (angle * Math.PI) / 180;
                                const x = Math.cos(radians) * distance;
                                const y = Math.sin(radians) * distance;

                                return (
                                  <motion.div
                                    key={i}
                                    className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                                    initial={{
                                      opacity: 0,
                                      scale: 0,
                                      x: 0,
                                      y: 0,
                                    }}
                                    animate={{
                                      opacity: [0, 1, 0],
                                      scale: [0, 1.5, 0],
                                      x: x,
                                      y: y,
                                    }}
                                    transition={{
                                      delay: 0.1 + i * 0.05,
                                      duration: 0.6,
                                      ease: "easeOut",
                                    }}
                                    style={{
                                      boxShadow: "0 0 6px rgba(251, 146, 60, 0.9)",
                                    }}
                                  />
                                );
                              })}

                            {/* Blank placeholder or image */}
                            {!showFourthShoe ? (
                              <div className="w-full h-full bg-gray-200 rounded-lg" />
                            ) : (
                              <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  delay: 0.5,
                                  duration: 0.4,
                                  ease: "easeOut",
                                }}
                                src={getImageUrl("landing/shoes/Hoka%20Clifton%209.webp")}
                                alt="Hoka Clifton 9"
                                className="h-16 w-full object-contain rounded-lg bg-gray-100"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="font-semibold text-sm">Shoes</div>
                        <div className="text-xs text-gray-500 inline-flex items-baseline">
                          <span
                            className="relative inline-block"
                            style={{
                              height: "12px",
                              overflow: "hidden",
                              verticalAlign: "baseline",
                            }}
                          >
                            <motion.span
                              className="block"
                              initial={{ y: 0 }}
                              animate={showFourthShoe ? { y: [0, -12, -12] } : { y: 0 }}
                              transition={{
                                delay: 0.6,
                                duration: 0.8,
                                times: [0, 0.4, 1],
                                ease: [0.4, 0, 0.2, 1],
                              }}
                              style={{ lineHeight: "12px" }}
                            >
                              <span
                                className="block"
                                style={{ height: "12px", lineHeight: "12px" }}
                              >
                                3
                              </span>
                              <motion.span
                                className="block"
                                initial={{ color: "#6b7280" }}
                                animate={
                                  showFourthShoe
                                    ? { color: ["#fb923c", "#fb923c", "#6b7280"] }
                                    : { color: "#6b7280" }
                                }
                                transition={{
                                  delay: 0.6,
                                  duration: 0.8,
                                  times: [0, 0.5, 1],
                                }}
                                style={{ height: "12px", lineHeight: "12px" }}
                              >
                                4
                              </motion.span>
                            </motion.span>
                          </span>
                          <span className="ml-1">items</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Headphones Collection */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm"
                    >
                      <div className="relative">
                        <div className="grid grid-cols-2 gap-0.5 p-0.5">
                          <img
                            src={getImageUrl("landing/headphones/81258af8-38fa-4d9e-a4c5-8e25ea454d7b.webp")}
                            alt="Wireless Earbuds"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                          <img
                            src={getImageUrl("landing/headphones/airpods-pro-3-hero-select-202509.jpeg")}
                            alt="AirPods Pro"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                          <img
                            src={getImageUrl("landing/headphones/de2d6c30-fad7-458c-b40f-9b1980571c4f.webp")}
                            alt="Over-ear Headphones"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                          <img
                            src={getImageUrl("landing/headphones/GUEST_87d70695-9ae4-4fd2-9cfa-10666f7ab012.avif")}
                            alt="Over-ear Headphones"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="font-semibold text-sm">Headphones</div>
                        <div className="text-xs text-gray-500 inline-flex items-baseline">
                          <span>5</span>
                          <span className="ml-1">items</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Separator */}
                <div className="px-4 py-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <div className="bg-gray-50 px-3">
                        <div className="flex items-center space-x-1 text-gray-400">
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Things to Read Section */}
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold">Things to Read</h3>
                      <p className="text-sm text-gray-500">8 lists</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-sm text-primary font-medium">See all</button>
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-xl">
                        +
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {/* Fantasy Collection */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm"
                    >
                      <div className="relative">
                        <div className="grid grid-cols-2 gap-0.5 p-0.5">
                          <img
                            src={getImageUrl("landing/fantasy%20books/a%20wise%20mans%20fear.jpg")}
                            alt="A Wise Man's Fear"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                          <img
                            src={getImageUrl("landing/fantasy%20books/fellowship.webp")}
                            alt="Fellowship"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                          <img
                            src={getImageUrl("landing/fantasy%20books/name%20of%20the%20wind.jpg")}
                            alt="Name of the Wind"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                          <img
                            src={getImageUrl("landing/fantasy%20books/the%20two%20towers.jpg")}
                            alt="The Two Towers"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="font-semibold text-sm">Fantasy</div>
                        <div className="text-xs text-gray-500 inline-flex items-baseline">
                          <span>6</span>
                          <span className="ml-1">items</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Entrepreneurship Collection */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm"
                    >
                      <div className="relative">
                        <div className="grid grid-cols-2 gap-0.5 p-0.5">
                          <img
                            src={getImageUrl("landing/entrepreneurship%20books/good%20to%20great.jpeg")}
                            alt="Good to Great"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                          <img
                            src={getImageUrl("landing/entrepreneurship%20books/how%20i%20built%20this.webp")}
                            alt="How I Built This"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                          <img
                            src={getImageUrl("landing/entrepreneurship%20books/lean%20startup.webp")}
                            alt="Lean Startup"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                          <img
                            src={getImageUrl("landing/entrepreneurship%20books/zero%20to%20one.webp")}
                            alt="Zero to One"
                            className="h-16 w-full object-contain rounded-lg bg-gray-100"
                          />
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="font-semibold text-sm">Entrepreneurship</div>
                        <div className="text-xs text-gray-500 inline-flex items-baseline">
                          <span>8</span>
                          <span className="ml-1">items</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
