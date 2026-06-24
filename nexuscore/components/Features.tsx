export default function Features() {
  const features = [
    { icon: "🧠", title: "AI ذكي", desc: "تحليلات تنبؤية واقتراحات ذكية لزيادة المبيعات", color: "text-purple-400", bg: "bg-purple-400/10" },
    { icon: "⚡", title: "سريع جداً", desc: "معالجة الطلبات في أقل من ثانيتين", color: "text-amber-400", bg: "bg-amber-400/10" },
    { icon: "🔒", title: "آمن 100%", desc: "تشفير كامل للبيانات ونسخ احتياطي تلقائي", color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { icon: "📱", title: "يعمل على أي جهاز", desc: "Web App يشتغل على الموبايل والتابلت واللابتوب", color: "text-blue-400", bg: "bg-blue-400/10" },
    { icon: "📊", title: "تقارير متقدمة", desc: "رسوم بيانية تفاعلية لمبيعاتك وأرباحك", color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { icon: "🕐", title: "24/7", desc: "نظام يعمل بدون توقف مع دعم فني على مدار الساعة", color: "text-rose-400", bg: "bg-rose-400/10" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ليه NexusCore؟</h2>
          <p className="text-slate-400">مميزات تجعلنا مختلفين عن أي نظام تاني</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
              <div className={`inline-flex p-3 rounded-xl ${feature.bg} ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}