import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold text-green-300">🌿 LannaVeg</h1>
        <div className="space-x-6 text-sm">
          <Link href="/classify" className="hover:text-green-300">
            Classify
          </Link>
          <Link href="/map" className="hover:text-green-300">
            Map
          </Link>
          <Link href="/login" className="hover:text-green-300">
            Login
          </Link>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-extrabold mb-6">
          ระบบจำแนกผักพื้นเมืองล้านนา
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-green-200 mb-10">
          อัปโหลดภาพเพื่อให้ AI วิเคราะห์ชนิดของผักพื้นเมืองภาคเหนือ
          พร้อมข้อมูลโภชนาการและแหล่งที่มา
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="/classify"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold shadow-lg transition"
          >
            🔍 เริ่มจำแนกผัก
          </Link>

          <Link
            href="/map"
            className="border border-green-300 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            🗺 ดูแผนที่ผักพื้นเมือง
          </Link>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white text-gray-800 py-20 px-10 rounded-t-3xl">
        <h3 className="text-3xl font-bold text-center mb-16">
          ระบบของเราทำอะไรได้บ้าง
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-4 text-green-600">
              🤖 AI Accuracy
            </h4>
            <p>
              ใช้ Deep Learning วิเคราะห์ภาพผักพื้นเมือง
              พร้อมแสดงความมั่นใจ (Confidence Score)
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-4 text-green-600">
              📍 Google Maps Integration
            </h4>
            <p>
              แสดงตำแหน่งพื้นที่ที่พบผักพื้นเมืองในภาคเหนือ
              พร้อมข้อมูลจังหวัด
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-4 text-green-600">
              🥬 Nutrition Information
            </h4>
            <p>
              แสดงข้อมูลคุณค่าทางโภชนาการ
              และสรรพคุณของผักแต่ละชนิด
            </p>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">
          พร้อมเริ่มใช้งานหรือยัง?
        </h3>

        <Link
          href="/classify"
          className="bg-white text-green-800 px-10 py-4 rounded-xl font-semibold shadow hover:bg-green-200 transition"
        >
          🚀 เริ่มใช้งานตอนนี้
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 bg-green-900 text-green-300 text-sm">
        © 2026 LannaVeg Project | University of Phayao
      </footer>
    </div>
  );
}
