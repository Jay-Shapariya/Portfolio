import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Project = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="project" className="bg-[#F9F9F9] py-24 h-auto">
      <div className="container my-12 mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          className="text-center"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-[#147efb] text-[1.5rem] md:text-[1.75rem] font-bold mb-4 uppercase">
            Project
          </h3>
          <h4 className="text-[#2d2e32] text-2xl md:text-3xl font-semibold mb-8">
            These are the recent projects to showcase my skills
          </h4>
        </motion.div>
        <div
          id="container"
          className="mx-auto my-0 max-w-[120rem] px-4 md:px-8 lg:px-16 py-0"
        >
          <div className="flex flex-wrap lg:gap-20 md:gap-0 gap-10 justify-center items-center -mx-1 lg:-mx-4">
            {/* Eat at Home */}
            <motion.div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  alt="Eat at Home App"
                  className="block h-auto w-full"
                  src="/image/eat.png"
                />
                <header className="flex flex-col leading-tight p-3 md:p-4">
                  <h1 className="text-lg mb-3">
                    <a
                      className="no-underline hover:underline text-[#2d2e32] text-xl md:text-2xl font-bold"
                      href=""
                    >
                      Eat at Home
                    </a>
                  </h1>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base font-bold">
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Flutter
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Firebase
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      RestAPIs
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      GetX
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Provider
                    </span>
                  </div>
                </header>
                <p className="text-[#767676] font-semibold text-center text-base md:text-xl p-3 md:p-4">
                  A comprehensive food delivery application that allows users to
                  order delicious meals from local restaurants. Features include
                  scheduled ordering for tomorrow, real-time tracking, multiple
                  payment options, and personalized meal recommendations.
                </p>
                <footer className="flex items-center justify-center gap-5 leading-none p-3 md:p-4">
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://play.google.com/store/apps/details?id=com.eatathomeuser&pcampaignid=web_share"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Play Store</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="mt-1"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </motion.a>
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://apps.apple.com/in/app/eat-at-home-daily-delights/id6523418467"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">App Store</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="mt-1"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </motion.a>
                </footer>
              </article>
            </motion.div>

            {/* Eat at Home Kitchen App */}
            <motion.div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  alt="Eat at Home Kitchen App"
                  className="block h-auto w-full"
                  src="/image/eat-host.png"
                />
                <header className="flex flex-col leading-tight p-3 md:p-4">
                  <h1 className="text-lg mb-3">
                    <a
                      className="no-underline hover:underline text-[#2d2e32] text-xl md:text-2xl font-bold"
                      href=""
                    >
                      Eat at Home Kitchen App
                    </a>
                  </h1>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base font-bold">
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Flutter
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Firebase
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      RestAPIs
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      GetX
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Provider
                    </span>
                  </div>
                </header>
                <p className="text-[#767676] font-semibold text-center text-base md:text-xl p-3 md:p-4">
                  Kitchen-side companion app for restaurant partners to manage
                  incoming orders from the Eat at Home platform. Features order
                  management, kitchen workflow optimization, real-time
                  notifications, and inventory tracking.
                </p>
                <footer className="flex items-center justify-center gap-5 leading-none p-3 md:p-4">
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://play.google.com/store/apps/details?id=com.eatathomehost&pcampaignid=web_share"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Play Store</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="mt-1"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </motion.a>
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://apps.apple.com/in/app/eat-at-home-host/id6535681828"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">App Store</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="mt-1"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </motion.a>
                </footer>
              </article>
            </motion.div>

            {/* Hudlr */}
            <motion.div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  alt="Hudlr App"
                  className="block h-auto w-full"
                  src="/image/hudlr.jpeg"
                />
                <header className="flex flex-col leading-tight p-3 md:p-4">
                  <h1 className="text-lg mb-3">
                    <a
                      className="no-underline hover:underline text-[#2d2e32] text-xl md:text-2xl font-bold"
                      href=""
                    >
                      Hudlr
                    </a>
                  </h1>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base font-bold">
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Kotlin
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Android Studio
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Firebase
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      RestAPIs
                    </span>
                  </div>
                </header>
                <p className="text-[#767676] font-semibold text-center text-base md:text-xl p-3 md:p-4">
                  A comprehensive fitness social platform where users can
                  connect, share workouts, join live classes and training
                  sessions, participate in fitness challenges, and engage with a
                  community of fitness enthusiasts.
                </p>
                <footer className="flex items-center justify-center gap-5 leading-none p-3 md:p-4">
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Live Demo</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="mt-1"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </motion.a>
                </footer>
              </article>
            </motion.div>

            {/* UnApp */}
            <motion.div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  alt="UnApp"
                  className="block h-auto w-full"
                  src="/image/unapp.png"
                />
                <header className="flex flex-col leading-tight p-3 md:p-4">
                  <h1 className="text-lg mb-3">
                    <a
                      className="no-underline hover:underline text-[#2d2e32] text-xl md:text-2xl font-bold"
                      href=""
                    >
                      UnApp
                    </a>
                  </h1>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base font-bold">
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Java
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Android Studio
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      TelecomManager
                    </span>
                  </div>
                </header>
                <p className="text-[#767676] font-semibold text-center text-base md:text-xl p-3 md:p-4">
                  Revolutionary auto-pickup calling solution that intelligently
                  handles incoming calls without disturbing users. Features
                  AI-powered responses, call screening, smart notifications, and
                  seamless call management using advanced telecom services.
                </p>
                <footer className="flex items-center justify-center gap-5 leading-none p-3 md:p-4">
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Live Demo</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="mt-1"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </motion.a>
                </footer>
              </article>
            </motion.div>

            {/* Infix - School Management System App */}
            <motion.div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="/image/infix.png"
                />
                <header className="flex flex-col leading-tight p-3 md:p-4">
                  <h1 className="text-lg mb-3">
                    <a
                      className="no-underline hover:underline text-[#2d2e32] text-xl md:text-2xl font-bold"
                      href=""
                    >
                      Infix - School Management System App
                    </a>
                  </h1>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base font-bold">
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Flutter
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Firebase
                    </span>
                  </div>
                </header>
                <p className="text-[#767676] font-semibold text-center text-base md:text-xl p-3 md:p-4">
                  This School Management System app is a comprehensive solution
                  built with Flutter and Firebase, designed to streamline the
                  administration and management of school operations. The app
                  provides features for administrators, teachers, students, and
                  parents to interact and manage various school activities
                  efficiently.
                </p>
                <footer className="flex items-center justify-center gap-5 leading-none p-3 md:p-4">
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://drive.google.com/file/d/1I2UroLQ36dF2nqGd-iOtcCzzxKd_fGAK/view?usp=sharing"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Live Demo</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="mt-1"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </motion.a>
                </footer>
              </article>
            </motion.div>

            {/* Inga app */}
            <motion.div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  alt="Inga App"
                  className="block h-auto w-full"
                  src="/image/inga.png"
                />
                <header className="flex flex-col leading-tight p-3 md:p-4">
                  <h1 className="text-lg mb-3">
                    <a
                      className="no-underline hover:underline text-[#2d2e32] text-xl md:text-2xl font-bold"
                      href=""
                    >
                      Inga app
                    </a>
                  </h1>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base font-bold">
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Flutter
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Firebase
                    </span>
                  </div>
                </header>
                <p className="text-[#767676] font-semibold text-center text-base md:text-xl p-3 md:p-4">
                  This Taxi Booking App is a mobile application built with
                  Flutter and Firebase, offering a seamless platform for users
                  to book rides efficiently. It allows passengers to connect
                  with drivers, track rides in real-time, and ensure a smooth,
                  user-friendly experience.
                </p>
                <footer className="flex items-center justify-center gap-5 leading-none p-3 md:p-4">
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://drive.google.com/file/d/1I8sizOreSDrMGjii4wbXcr0E6plc_ill/view?usp=sharing"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Live Demo</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="mt-1"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </motion.a>
                </footer>
              </article>
            </motion.div>
            {/* Yoga App */}
            <motion.div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  alt="Yoga App"
                  className="block h-auto w-full"
                  src="/image/yoga.jpeg"
                />
                <header className="flex flex-col leading-tight p-3 md:p-4">
                  <h1 className="text-lg mb-3">
                    <a
                      className="no-underline hover:underline text-[#2d2e32] text-xl md:text-2xl font-bold"
                      href=""
                    >
                      Yoga App
                    </a>
                  </h1>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base font-bold">
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Flutter
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      SQLite
                    </span>
                  </div>
                </header>
                <p className="text-[#767676] font-semibold text-center text-base md:text-xl p-3 md:p-4">
                  This Yoga App is built using Flutter, SQLite for local data
                  storage, and the Provider package for state management. It
                  offers a comprehensive platform for users to follow guided
                  yoga workouts, track their progress, and customize their yoga
                  routines. This app is designed to offer an intuitive and
                  flexible yoga experience.
                </p>
                <footer className="flex items-center justify-center gap-3 leading-none p-3 md:p-4">
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://github.com/Jay-Shapariya/yoga_app.git"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Code</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </motion.a>
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href=""
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Live Demo</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="mt-1"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </motion.a>
                </footer>
              </article>
            </motion.div>
            {/* E-Commerce App */}
            <motion.div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  alt="E-Commerce App"
                  className="block h-auto w-full"
                  src="/image/ecommerce.png"
                />
                <header className="flex flex-col leading-tight p-3 md:p-4">
                  <h1 className="text-lg mb-3">
                    <a
                      className="no-underline hover:underline text-[#2d2e32] text-xl md:text-2xl font-bold"
                      href=""
                    >
                      E-Commerce App
                    </a>
                  </h1>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base font-bold">
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Flutter
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Firebase
                    </span>
                  </div>
                </header>
                <p className="text-[#767676] font-semibold text-center text-base md:text-xl p-3 md:p-4">
                  This Flutter E-Commerce App is a basic implementation of an
                  online shopping application. It allows users to browse
                  products, add them to the cart, and make purchases using
                  Firebase as the backend for authentication and data storage.
                  The Get library for state management, making it easy to manage
                  the app&apos;s state.
                </p>
                <footer className="flex items-center justify-center gap-5 leading-none p-3 md:p-4">
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://github.com/Jay-Shapariya/Flutter_E-Commerce_APP.git"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Code</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </motion.a>
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://drive.google.com/file/d/1Wp65FsYejnv4XAYvrfHyGd_x8jTN4P-Z/view?usp=sharing"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Screenshots</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="mt-1"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </motion.a>
                </footer>
              </article>
            </motion.div>
            {/* E-Commerce Seller App */}
            <motion.div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  alt="E-Commerce Seller App"
                  className="block h-auto w-full"
                  src="/image/seller.jpeg"
                />
                <header className="flex flex-col leading-tight p-3 md:p-4">
                  <h1 className="text-lg mb-3">
                    <a
                      className="no-underline hover:underline text-[#2d2e32] text-xl md:text-2xl font-bold"
                      href=""
                    >
                      E-Commerce Seller App
                    </a>
                  </h1>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base font-bold">
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Flutter
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Firebase
                    </span>
                  </div>
                </header>
                <p className="text-[#767676] font-semibold text-center text-base md:text-xl p-3 md:p-4">
                  The Seller Dashboard is an integral part of the Flutter
                  E-Commerce App, providing sellers with tools to manage their
                  products, view orders, and keep track of their store&apos;s
                  performance. It offers an intuitive interface powered by the
                  Get library for state management.
                </p>
                <footer className="flex items-center justify-center gap-5 leading-none p-3 md:p-4">
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://github.com/Jay-Shapariya/Flutter_E-Mart_Seller_App.git"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Code</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </motion.a>
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://drive.google.com/file/d/13VWX1ZKtRAPhkjGA_5_qwjwX-TMUyqqS/view?usp=sharing"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Screenshots</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="mt-1"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </motion.a>
                </footer>
              </article>
            </motion.div>
            {/* To Do App */}
            <motion.div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  alt="To Do App"
                  className="block h-auto w-full"
                  src="/image/to do.jpeg"
                />
                <header className="flex flex-col leading-tight p-3 md:p-4">
                  <h1 className="text-lg mb-3">
                    <a
                      className="no-underline hover:underline text-[#2d2e32] text-xl md:text-2xl font-bold"
                      href=""
                    >
                      To Do App
                    </a>
                  </h1>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base font-bold">
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Flutter
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Provider
                    </span>
                  </div>
                </header>
                <p className="text-[#767676] font-semibold text-center text-base md:text-xl p-3 md:p-4">
                  This Flutter ToDo app is built from scratch with a clean UI,
                  using the Provider package for state management. Each
                  component is explained for easy learning and efficient task
                  management.
                </p>
                <footer className="flex items-center justify-center gap-5 leading-none p-3 md:p-4">
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://github.com/Jay-Shapariya/todo-app-using-provider.git"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Code</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </motion.a>
                </footer>
              </article>
            </motion.div>
            {/* HealthoHolic */}
            <motion.div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  alt="HealthoHolic"
                  className="block h-auto w-full"
                  src="/image/healthoholic figma.jpeg"
                />
                <header className="flex flex-col leading-tight p-3 md:p-4">
                  <h1 className="text-lg mb-3">
                    <a
                      className="no-underline hover:underline text-[#2d2e32] text-xl md:text-2xl font-bold"
                      href=""
                    >
                      HealthoHolic
                    </a>
                  </h1>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base font-bold">
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Figma
                    </span>
                  </div>
                </header>
                <p className="text-[#767676] font-semibold text-center text-base md:text-xl p-3 md:p-4">
                  The goal of this project is to develop the user interface (UI)
                  of a health and fitness app. The project&apos;s ultimate goal
                  is to produce an app that is visually appealing, intuitive,
                  and useful in assisting users in reaching their fitness goals.
                </p>
                <footer className="flex items-center justify-center gap-5 leading-none p-3 md:p-4">
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://www.figma.com/file/PNuoPtI7JYX1rKamMCSOeZ/HCI_Project_HealthoHolic?type=design&node-id=0%3A1&mode=design&t=DAwOqoYZhwAF3o1L-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Figma Link</p>
                    <svg
                      viewBox="0 0 15 15"
                      fill="none"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.00005 2.04999H5.52505C4.71043 2.04999 4.05005 2.71037 4.05005 3.52499C4.05005 4.33961 4.71043 4.99999 5.52505 4.99999H7.00005V2.04999ZM7.00005 1.04999H8.00005H9.47505C10.842 1.04999 11.95 2.15808 11.95 3.52499C11.95 4.33163 11.5642 5.04815 10.9669 5.49999C11.5642 5.95184 11.95 6.66836 11.95 7.475C11.95 8.8419 10.842 9.95 9.47505 9.95C8.92236 9.95 8.41198 9.76884 8.00005 9.46266V9.95L8.00005 11.425C8.00005 12.7919 6.89195 13.9 5.52505 13.9C4.15814 13.9 3.05005 12.7919 3.05005 11.425C3.05005 10.6183 3.43593 9.90184 4.03317 9.44999C3.43593 8.99814 3.05005 8.28163 3.05005 7.475C3.05005 6.66836 3.43594 5.95184 4.03319 5.5C3.43594 5.04815 3.05005 4.33163 3.05005 3.52499C3.05005 2.15808 4.15814 1.04999 5.52505 1.04999H7.00005ZM8.00005 2.04999V4.99999H9.47505C10.2897 4.99999 10.95 4.33961 10.95 3.52499C10.95 2.71037 10.2897 2.04999 9.47505 2.04999H8.00005ZM5.52505 8.94998H7.00005L7.00005 7.4788L7.00005 7.475L7.00005 7.4712V6H5.52505C4.71043 6 4.05005 6.66038 4.05005 7.475C4.05005 8.28767 4.70727 8.94684 5.5192 8.94999L5.52505 8.94998ZM4.05005 11.425C4.05005 10.6123 4.70727 9.95315 5.5192 9.94999L5.52505 9.95H7.00005L7.00005 11.425C7.00005 12.2396 6.33967 12.9 5.52505 12.9C4.71043 12.9 4.05005 12.2396 4.05005 11.425ZM8.00005 7.47206C8.00164 6.65879 8.66141 6 9.47505 6C10.2897 6 10.95 6.66038 10.95 7.475C10.95 8.28962 10.2897 8.95 9.47505 8.95C8.66141 8.95 8.00164 8.29121 8.00005 7.47794V7.47206Z"
                          fill="#000000"
                        ></path>{" "}
                      </g>
                    </svg>
                  </motion.a>
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://drive.google.com/file/d/1GBFJBevrFkjtBX72FMtEZNCbOh8K-eph/view?usp=sharing"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Live Demo</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="mt-1"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </motion.a>
                </footer>
              </article>
            </motion.div>
            {/* HealthoHolic Flutter App */}
            <motion.div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  alt="HealthoHolic Flutter App"
                  className="block h-auto w-full"
                  src="/image/health.jpeg"
                />
                <header className="flex flex-col leading-tight p-3 md:p-4">
                  <h1 className="text-lg mb-3">
                    <a
                      className="no-underline hover:underline text-[#2d2e32] text-xl md:text-2xl font-bold"
                      href=""
                    >
                      HealthoHolic Flutter App
                    </a>
                  </h1>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base font-bold">
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Flutter
                    </span>
                    <span className="hover:underline cursor-pointer bg-gray-100 px-2 py-1 rounded">
                      Provider
                    </span>
                  </div>
                </header>
                <p className="text-[#767676] font-semibold text-center text-base md:text-xl p-3 md:p-4">
                  The goal of this project is to develop the user interface (UI)
                  of a health and fitness app. The application is designed to
                  provide users with a smooth and intuitive experience,
                  incorporating principles of HCI. Our aim is to create a
                  visually appealing and useful app that helps users achieve
                  their fitness goals.
                </p>
                <footer className="flex items-center justify-center gap-5 leading-none p-3 md:p-4">
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://github.com/Jay-Shapariya/healthoholic-flutter-app.git"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Code</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </motion.a>
                  <motion.a
                    className="flex items-center no-underline hover:underline text-black"
                    href="https://drive.google.com/file/d/1GBFJBevrFkjtBX72FMtEZNCbOh8K-eph/view?usp=sharing"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="ml-1 mr-1 text-lg md:text-2xl">Live Demo</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="mt-1"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </motion.a>
                </footer>
              </article>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
