export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
          🔥 Ecosystem Platform 2026
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          نظام تشغيل واحد
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            لكل أعمالك
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          منصة NexusCore المتكاملة تربط بين الكافيهات، المطاعم، صالونات التجميل، وأماكن الألعاب في نظام واحد ذكي
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition hover:scale-105">
            ابدأ مجاناً
          </button>
          <button className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/5 text-lg font-semibold transition">
            شاهد العرض التوضيحي
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "+50", label: "عميل نشط", color: "text-blue-400" },
            { value: "+12K", label: "طلب تمت معالجته", color: "text-purple-400" },
            { value: "99.9%", label: "وقت التشغيل", color: "text-cyan-400" },
            { value: "3", label: "أنظمة تشغيل", color: "text-emerald-400" },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}