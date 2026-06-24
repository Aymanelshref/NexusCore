export default function Stats() {
  const stats = [
    { icon: "☕", label: "CafeOS", value: "الكافيهات", desc: "نظام نقاط البيع المتكامل", color: "text-amber-400", bg: "bg-amber-400/10" },
    { icon: "📈", label: "النمو", value: "340%", desc: "معدل نمو سنوي", color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { icon: "👥", label: "المستخدمين", value: "8500+", desc: "موظف يستخدم المنصة", color: "text-blue-400", bg: "bg-blue-400/10" },
    { icon: "🛡️", label: "الأمان", value: "100%", desc: "حماية البيانات", color: "text-purple-400", bg: "bg-purple-400/10" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">أرقام تتكلم</h2>
          <p className="text-slate-400">نمو مستمر وثقة متزايدة من عملائنا</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-center">
              <div className={`inline-flex p-3 rounded-xl ${stat.bg} ${stat.color} mb-4`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <h3 className="text-lg font-bold mb-1">{stat.label}</h3>
              <p className="text-slate-400 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}