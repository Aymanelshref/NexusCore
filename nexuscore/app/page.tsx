"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Smartphone,
  ChefHat,
  Gamepad2,
  Receipt,
  MessageCircle,
  Package,
  Users,
  Bot
} from "lucide-react";
export default function Home() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  // Particle animation
  useEffect(() => {
    const canvasElement = document.getElementById("particles") as HTMLCanvasElement | null;
    if (!canvasElement) return;
    const canvas = canvasElement;
    const ctx = canvas.getContext("2d")!;

    let animationId: number;

    const resize = () => {
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
    };
    resize();

    const colors = ["#3b82f6", "#a855f7", "#06b6d4", "#f59e0b"];
    
    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
    }

    const particles: Particle[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvasElement.width,
        y: Math.random() * canvasElement.height,
        radius: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }

      // Connect lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "rgba(59,130,246,0.1)";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    }
    
    animate();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const t = {
    ar: {
      badge: "🔥 Ecosystem Platform 2026",
      heroTitle: "نظام تشغيل واحد",
      heroGradient: "لكل أعمالك",
      heroDesc: "منصة NexusCore المتكاملة تربط بين كل أنظمة أعمالك في منصة واحدة ذكية",
      discover: "اكتشف المزيد",
      features: "عرض المميزات",
      ourSystems: "أنظمتنا",
      chooseSystem: "اختر النظام المناسب لعملك",
      businessOS: "Business OS",
      businessDesc: "نظام متكامل لإدارة أي نشاط تجاري: كافيهات، مطاعم، صالونات، أماكن ألعاب، محلات، وكل مكان تجاري",
      familyOS: "Family OS",
      familyDesc: "إدارة العائلة والملفات والمواعيد والتواصل",
      eduOS: "EDU OS",
      eduDesc: "منصة تعليمية ذكية للكورسات والامتحانات والمعامل الافتراضية",
      soon: "قريباً",
      live: "Live",
      businessFeatures: "مميزات Business OS",
      businessFeaturesDesc: "كل ما تحتاجه لإدارة نشاطك التجاري في نظام واحد",
      contact: "تواصل معنا",
      contactDesc: "نحن هنا لمساعدتك في بناء مستقبل عملك",
      dev: "تطوير",
      quote: "نبني المستقبل، سطراً سطراً",
      rights: "© 2026 NexusCore. All rights reserved.",
    },
    en: {
      badge: "🔥 Ecosystem Platform 2026",
      heroTitle: "One Operating System",
      heroGradient: "For All Your Business",
      heroDesc: "NexusCore integrated platform connects all your business systems in one smart platform",
      discover: "Discover More",
      features: "View Features",
      ourSystems: "Our Systems",
      chooseSystem: "Choose the system that fits your business",
      businessOS: "Business OS",
      businessDesc: "Complete system for managing any commercial activity: cafes, restaurants, salons, gaming lounges, shops, and all commercial spaces",
      familyOS: "Family OS",
      familyDesc: "Family management, files, schedules, and communication",
      eduOS: "EDU OS",
      eduDesc: "Smart educational platform for courses, exams, and virtual labs",
      soon: "Soon",
      live: "Live",
      businessFeatures: "Business OS Features",
      businessFeaturesDesc: "Everything you need to manage your business in one system",
      contact: "Contact Us",
      contactDesc: "We are here to help you build your business future",
      dev: "Development",
      quote: "We build the future, line by line",
      rights: "© 2026 NexusCore. All rights reserved.",
    },
  };

  const text = t[lang];

  const features = [
    { icon: "<Smartphone size={28} />", title: "تطبيق الـ Waiter", titleEn: "Waiter App", desc: "النادل يأخذ الأوردر من العميل بالموبايل، يرسله للمطبخ مباشرة، ويفتح PlayStation أو يشغل التايمر", descEn: "Waiter takes orders on mobile, sends to kitchen instantly, opens PlayStation or starts timer", color: "bg-blue-500/10" },
    { icon: "<ChefHat size={28} />", title: "شاشة المطبخ KDS", titleEn: "Kitchen Display KDS", desc: "شاشة داخلية للمطبخ تظهر الأوردرات الجديدة، وقت التجهيز، وحالة كل طلب", descEn: "Internal kitchen screen showing new orders, prep time, and order status", color: "bg-purple-500/10" },
    { icon: " <Gamepad2 size={28} />", title: "نظام التايمر والألعاب", titleEn: "Gaming Timer System", desc: "مؤقت ذكي لأجهزة PlayStation والألعاب. حساب تلقائي للوقت والسعر. حجز الأجهزة مسبقاً", descEn: "Smart timer for PlayStation and gaming devices. Automatic time and price calculation", color: "bg-amber-500/10" },
    { icon: "<Receipt size={28} />", title: "الفواتير الذكية", titleEn: "Smart Invoicing", desc: "إصدار فاتورة فورية لكل طلب. إمكانية إرسال الفاتورة للعميل على الواتساب أو البريد", descEn: "Instant invoice for every order. Send invoice to customer via WhatsApp or email", color: "bg-emerald-500/10" },
    { icon: "<MessageCircle size={28} />", title: "تواصل داخلي", titleEn: "Internal Communication", desc: "شات داخلي بين النادل والمطبخ والكاشير. النادل يقول: 'الشاي متأخر' أو 'الأوردر جاهز'", descEn: "Internal chat between waiter, kitchen, and cashier", color: "bg-rose-500/10" },
    { icon: "<Package size={28} />", title: "إدارة المخزون والوصفات", titleEn: "Inventory & Recipes", desc: "كل منتج له وصفة (مكونات + كميات). الخصم التلقائي من المخزون مع كل بيعة. تنبيه عند النقص", descEn: "Every product has a recipe. Auto inventory deduction per sale. Low stock alerts", color: "bg-cyan-500/10" },
    { icon: "<Users size={28} />", title: "إدارة الموظفين", titleEn: "Staff Management", desc: "حضور وانصراف، صلاحيات مختلفة لكل موظف، شيفتات، ورواتب", descEn: "Attendance, different permissions per employee, shifts, and salaries", color: "bg-blue-500/10" },
    { icon: " <Bot size={28} />", title: "مساعد AI", titleEn: "AI Assistant", desc: "تحليل المبيعات، اقتراح العروض، تنبيه النواقص، وتوقع الأرباح", descEn: "Sales analysis, offer suggestions, shortage alerts, and profit prediction", color: "bg-violet-500/10" },
  ];

  return (
    <main className="min-h-screen bg-[#030508] text-white relative">
      <canvas id="particles" className="fixed inset-0 z-0 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#030508]/70 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="18" stroke="url(#logoGrad)" strokeWidth="2.5" fill="none" />
            <path d="M14 12 L20 8 L20 20 L26 16 L26 28 L20 32 L20 20 L14 24 Z" fill="url(#logoGrad)" />
          </svg>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">NexusCore</span>
        </div>

        {/* Language Toggle - Small Circles */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang("ar")}
            className={`w-8 h-8 rounded-full text-xs font-bold transition ${lang === "ar" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10"}`}
          >
            AR
          </button>
          <button
            onClick={() => setLang("en")}
            className={`w-8 h-8 rounded-full text-xs font-bold transition ${lang === "en" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10"}`}
          >
            EN
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
          {text.badge}
        </div>

        <h1 className="animate-fade-in animate-fade-in-delay-1 text-5xl md:text-7xl font-bold mb-4 leading-tight">
          {text.heroTitle}
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">{text.heroGradient}</span>
        </h1>

        <p className="animate-fade-in animate-fade-in-delay-2 text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          {text.heroDesc}
        </p>

        <div className="animate-fade-in animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4">
          <Link href="/presentation" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:scale-105 transition shadow-lg shadow-blue-500/20 text-center">
            {text.discover}
          </Link>
          <a href="#features" className="px-8 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/5 transition text-center">
            {text.features}
          </a>
        </div>
      </section>

      {/* OS Products */}
      <section className="relative z-10 py-20 px-6" id="products">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{text.ourSystems}</h2>
            <p className="text-slate-400">{text.chooseSystem}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Business OS - ACTIVE */}
            <div className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition" />
              <div className="text-4xl mb-4">🏢</div>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-4 animate-pulse">
                ● {text.live}
              </span>
              <h3 className="text-2xl font-bold mb-3">{text.businessOS}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{text.businessDesc}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs border border-amber-500/20">☕ Cafe</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">🍽️ Restaurant</span>
                <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs border border-pink-500/20">💇 Salon</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20">🎮 Gaming</span>
              </div>
            </div>

            {/* Family OS - SOON */}
            <div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 opacity-60 hover:opacity-80 transition-all">
              <div className="absolute top-4 left-4 text-2xl opacity-30">🔒</div>
              <div className="text-4xl mb-4 opacity-50">👨‍👩‍👧</div>
              <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-500 text-xs font-bold mb-4">
                {text.soon}
              </span>
              <h3 className="text-2xl font-bold mb-3 text-slate-300">{text.familyOS}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{text.familyDesc}</p>
            </div>

            {/* EDU OS - SOON */}
            <div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 opacity-60 hover:opacity-80 transition-all">
              <div className="absolute top-4 left-4 text-2xl opacity-30">🔒</div>
              <div className="text-4xl mb-4 opacity-50">🎓</div>
              <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-500 text-xs font-bold mb-4">
                {text.soon}
              </span>
              <h3 className="text-2xl font-bold mb-3 text-slate-300">{text.eduOS}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{text.eduDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Features */}
      <section className="relative z-10 py-20 px-6" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{text.businessFeatures}</h2>
            <p className="text-slate-400">{text.businessFeaturesDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition`}>
                 <div className="text-cyan-400">
  {f.icon}
</div>
                </div>
                <h4 className="text-lg font-bold mb-2">{lang === "ar" ? f.title : f.titleEn}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{lang === "ar" ? f.desc : f.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 py-20 px-6" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{text.contact}</h2>
          <p className="text-slate-400 mb-10">{text.contactDesc}</p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://facebook.com/YOUR_LINK" target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/30 transition">
              📘 Facebook
            </a>
            <a href="https://instagram.com/YOUR_LINK" target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-pink-500/10 hover:border-pink-500/30 transition">
              📸 Instagram
            </a>
            <a href="https://wa.me/20108020757" target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition">
              💬 WhatsApp
            </a>
            <a href="tel:+20108020757" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/30 transition">
              📞 Phone
            </a>
          </div>

          <div className="inline-block p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <p className="text-slate-500 text-sm mb-2">{text.dev}</p>
            <p className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">ENG. Ayman Al-Qurashi</p>
            <p className="text-slate-500 text-sm mt-2 italic">{text.quote}</p>
          </div>

          <p className="text-slate-700 text-xs mt-8">{text.rights}</p>
        </div>
      </section>
      <div className="h-[1000px] bg-red-500">
  TEST
</div>
    </main>
  );
}