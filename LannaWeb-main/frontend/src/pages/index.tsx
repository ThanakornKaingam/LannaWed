import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [dark, setDark] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const loginWithGoogle = () => {
    window.location.href = `${API_URL}/google/login`;
  };
  
  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen transition-all duration-500 
        bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white">

        {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-10 py-6">
  <h1 className="text-2xl font-bold text-green-300">🌿 LannaVeg</h1>

  <div className="space-x-6 text-sm flex items-center">
    <Link href="/classify">Classify</Link>
    <Link href="/map">Map</Link>

    <button
      onClick={loginWithGoogle}
      className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white"
    >
      Login
    </button>

    <button
      onClick={() => setDark(!dark)}
      className="bg-white text-black dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg"
    >
      {dark ? "🌙 Dark" : "☀ Light"}
    </button>
  </div>
</nav>

        {/* ================= HERO ================= */}
        <section className="text-center py-24 px-6">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold mb-6"
          >
            ระบบจำแนกผักพื้นเมืองล้านนา
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg max-w-2xl mx-auto text-green-200 mb-10"
          >
            อัปโหลดภาพเพื่อให้ AI วิเคราะห์ชนิดของผักพื้นเมืองภาคเหนือ
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <Link
              href="/classify"
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold shadow-lg"
            >
              🔍 เริ่มจำแนกผัก
            </Link>

            <Link
              href="/map"
              className="border border-green-300 hover:bg-green-600 px-8 py-4 rounded-xl"
            >
              🗺 ดูแผนที่
            </Link>
          </motion.div>
        </section>

        {/* ================= GALLERY ================= */}
        <section className="py-20 bg-white text-gray-800 dark:bg-gray-900 dark:text-white rounded-t-3xl">
          <h3 className="text-3xl font-bold text-center mb-12">
            🖼 ตัวอย่างผักพื้นเมือง
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
            {[
              "มะแข่น",
              "นางแลว",
              "ผักเผ็ด"
            ].map((name, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
              >
                <div className="h-40 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl mb-4 flex items-center justify-center text-white text-xl font-bold">
                  🌿
                </div>
                <h4 className="text-center font-semibold">{name}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-20 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            พร้อมเริ่มใช้งานหรือยัง?
          </motion.h3>

          <Link
            href="/classify"
            className="bg-white text-green-800 px-10 py-4 rounded-xl font-semibold shadow hover:bg-green-200"
          >
            🚀 เริ่มใช้งานตอนนี้
          </Link>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="text-center py-10 bg-green-900 text-green-300 text-sm">
          © 2026 LannaVeg Project | University of Phayao
        </footer>

      </div>
    </div>
  );
}
