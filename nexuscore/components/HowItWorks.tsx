export default function HowItWorks() {
  const steps = [
    { icon: "👤", title: "سجّل حسابك", desc: "أنشئ حساب مجاني في أقل من دقيقتين. لا بطاقة ائتمان مطلوبة.", color: "from-blue-500 to-cyan-500" },
    { icon: "⚙️", title: "اختر نظامك", desc: "اختار الـ OS المناسب لعملك (CafeOS, RestaurantOS, SalonOS, GamingOS)", color: "from-purple-500 to-pink-500" },
    { icon: "🚀", title: "ابدأ الشغل", desc: "اربط أجهزتك، ضيف منتجاتك، وابدأ استقبال الطلبات فوراً", color: "from-emerald-500 to-teal-500" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">كيف تبدأ؟</h2>
          <p className="text-slate-400">3 خطوات بسيطة وانت شغال</p>
        </div>

        <div className="relative">
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-1 h-[calc(100%-3rem)] bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-emerald-500/30 hidden md:block rounded-full" />
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={step.title} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1 text-center md:text-right">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400 mb-3 border border-white/10">
                    الخطوة {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shadow-lg relative z-10`}>
                    {step.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-50`} />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}