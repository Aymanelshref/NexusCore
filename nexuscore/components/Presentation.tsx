"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function Presentation() {
  const totalSlides = 15;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [introHidden, setIntroHidden] = useState(false);
  const [introRemoved, setIntroRemoved] = useState(false);
  const [hintHidden, setHintHidden] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);
  const isSwiping = useRef(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  const startPresentation = useCallback(() => {
    setIntroHidden(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIntroHidden(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (introHidden) {
      const timer = setTimeout(() => setIntroRemoved(true), 800);
      return () => clearTimeout(timer);
    }
  }, [introHidden]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.changedTouches[0].screenX;
      touchStartY.current = e.changedTouches[0].screenY;
      touchStartTime.current = Date.now();
      isSwiping.current = true;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (!isSwiping.current) return;
      isSwiping.current = false;
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchStartX.current - touchEndX;
      const diffY = touchStartY.current - touchEndY;
      const timeDiff = Date.now() - touchStartTime.current;
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40 && timeDiff < 500) {
        if (diffX > 0) nextSlide(); else prevSlide();
      }
    };
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const width = window.innerWidth;
      const x = e.clientX;
      if (x < width * 0.15) prevSlide();
      else if (x > width * 0.85) nextSlide();
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const hideHint = () => setHintHidden(true);
    document.addEventListener('touchstart', hideHint, { once: true });
    document.addEventListener('click', hideHint, { once: true });
    document.addEventListener('keydown', hideHint, { once: true });
    return () => {
      document.removeEventListener('touchstart', hideHint);
      document.removeEventListener('click', hideHint);
      document.removeEventListener('keydown', hideHint);
    };
  }, []);

  const progressWidth = ((currentSlide + 1) / totalSlides) * 100;

  const getSlideClass = (index: number) => {
    if (index === currentSlide) return 'slide active';
    if (index < currentSlide) return 'slide prev';
    return 'slide';
  };

  return (
    <>
      <div className="progress-bar" style={{ width: `${progressWidth}%` }} />
      <div className="slide-dots">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div key={i} className={'slide-dot' + (i === currentSlide ? ' active' : '')} />
        ))}
      </div>

{/* Logo */}
<div className="logo-bar">
  <svg viewBox="0 0 40 40" fill="none">
    <defs><linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3b82f6"/><stop offset="50%" stopColor="#a855f7"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient></defs>
    <circle cx="20" cy="20" r="18" stroke="url(#lg)" strokeWidth="2.5" fill="none"/>
    <path d="M14 12 L20 8 L20 20 L26 16 L26 28 L20 32 L20 20 L14 24 Z" fill="url(#lg)"/>
  </svg>
  <span>NexusCore</span>
</div>
{/* Dev Credit */}
<div className="dev-bar">Development by <strong>ENG Ayman Al-Qurashi</strong></div>
{/* Swipe Zones */}
<div className="swipe-zone swipe-zone-left" onClick={prevSlide}></div>
<div className="swipe-zone swipe-zone-right" onClick={nextSlide}></div>
{/* Swipe Hint */}
{/* Intro Screen */}
{/* ========== SLIDE DECK ========== */}
<div className="slide-deck" id="slideDeck">
{/* SLIDE 1: Title */}
<div className={getSlideClass(0)} data-slide="0">
  <div className="bg-orb orb-1"></div><div className="bg-orb orb-2"></div><div className="grid-pattern"></div>
  <div className="text-center">
    <div className="animate-in animate-in-1 badge">🔥 Ecosystem Platform 2026</div>
    <h1 className="animate-in animate-in-2 text-gradient">NexusCore</h1>
    <p className="animate-in animate-in-3" style={{ fontSize: '1.1rem', marginBottom: '8px' }}>شركة متكاملة — برمجة • تصميم • ذكاء اصطناعي</p>
    <p className="animate-in animate-in-3" style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Core System + OS Products + AI Engine</p>
    <div className="animate-in animate-in-4" style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
      <div className="text-center"><div style={{ fontSize: '2rem', fontWeight: 900, background: 'linear-gradient(135deg,#3b82f6,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>3</div><div style={{ color: '#64748b', fontSize: '0.8rem' }}>أنظمة تشغيل</div></div>
      <div className="text-center"><div style={{ fontSize: '2rem', fontWeight: 900, background: 'linear-gradient(135deg,#a855f7,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>∞</div><div style={{ color: '#64748b', fontSize: '0.8rem' }}>Modules</div></div>
      <div className="text-center"><div style={{ fontSize: '2rem', fontWeight: 900, background: 'linear-gradient(135deg,#06b6d4,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</div><div style={{ color: '#64748b', fontSize: '0.8rem' }}>محرك ذكي</div></div>
    </div>
  </div>
</div>
{/* SLIDE 2: Who We Are */}
<div className={getSlideClass(1)} data-slide="1">
  <div className="bg-orb orb-1" style={{ opacity: 0.1 }}></div><div className="grid-pattern"></div>
  <div className="slide-header animate-in animate-in-1"><div className="line"></div><h2>من نحن؟</h2></div>
  <p className="animate-in animate-in-2" style={{ marginBottom: '16px' }}>NexusCore <span className="text-gradient">شركة تقنية متكاملة</span> بتبني حلول للأعمال والتعليم والأسرة.</p>
  <div className="card-grid animate-in animate-in-3">
    <div className="card card-blue" style={{ textAlign: 'center' }}><div className="card-icon icon-blue" style={{ margin: '0 auto 10px' }}>💻</div><h3>تطوير البرمجيات</h3><p style={{ fontSize: '0.8rem' }}>Web Apps • Mobile Apps • SaaS Platforms</p></div>
    <div className="card card-purple" style={{ textAlign: 'center' }}><div className="card-icon icon-purple" style={{ margin: '0 auto 10px' }}>🎨</div><h3>تصميم المواقع</h3><p style={{ fontSize: '0.8rem' }}>UI/UX • Landing Pages • Branding</p></div>
    <div className="card card-amber" style={{ textAlign: 'center' }}><div className="card-icon icon-amber" style={{ margin: '0 auto 10px' }}>🤖</div><h3>الذكاء الاصطناعي</h3><p style={{ fontSize: '0.8rem' }}>AI Integration • Analytics • Chatbots</p></div>
  </div>
  <div className="animate-in animate-in-4" style={{ marginTop: '16px', padding: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '14px', textAlign: 'center' }}>
    <p style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>🎯 <strong>رسالتنا:</strong> نبني حلول تقنية متكاملة — الكل في منظومة واحدة.</p>
  </div>
</div>
{/* SLIDE 3: Architecture */}
<div className={getSlideClass(2)} data-slide="2">
  <div className="bg-orb orb-2" style={{ opacity: 0.1 }}></div><div className="grid-pattern"></div>
  <div className="slide-header animate-in animate-in-1"><div className="line" style={{ background: 'linear-gradient(to bottom,#3b82f6,#06b6d4)' }}></div><h2>الهيكل المعماري</h2></div>
  <p className="animate-in animate-in-2" style={{ marginBottom: '16px', fontSize: '0.9rem' }}>النظام = 3 طبقات. العميل يختار اللي يحتاجه، والنظام <span className="text-gradient-gold">يركب نفسه</span>.</p>
  <div className="card-grid animate-in animate-in-3">
    <div className="card card-blue" style={{ textAlign: 'center' }}><div className="card-icon icon-blue" style={{ margin: '0 auto 8px' }}>🔧</div><h3>Layer 1: Core</h3><p style={{ fontSize: '0.78rem' }}>Login • Clients • AI Engine • Data Routing</p><span className="tag tag-blue">العقل المركزي</span></div>
    <div className="card card-purple" style={{ textAlign: 'center' }}><div className="card-icon icon-purple" style={{ margin: '0 auto 8px' }}>🖥️</div><h3>Layer 2: OS</h3><p style={{ fontSize: '0.78rem' }}>Business • Family • EDU</p><span className="tag tag-purple">أنظمة التشغيل</span></div>
    <div className="card card-amber" style={{ textAlign: 'center' }}><div className="card-icon icon-amber" style={{ margin: '0 auto 8px' }}>🧩</div><h3>Layer 3: Modules</h3><p style={{ fontSize: '0.78rem' }}>POS • Tables • Gaming • Billing • AI</p><span className="tag tag-amber">الوحدات</span></div>
  </div>
</div>
{/* SLIDE 4: The Difference */}
<div className={getSlideClass(3)} data-slide="3">
  <div className="bg-orb orb-1" style={{ opacity: 0.1 }}></div><div className="grid-pattern"></div>
  <div className="slide-header animate-in animate-in-1"><div className="line" style={{ background: 'linear-gradient(to bottom,#f59e0b,#ef4444)' }}></div><h2>الفرق بيننا وبين أي نظام</h2></div>
  <p className="animate-in animate-in-2" style={{ marginBottom: '12px', fontSize: '0.85rem', color: 'var(--muted)' }}>ليه تختار NexusCore؟</p>
  <div className="animate-in animate-in-3">
    <div className="compare-row highlight"><div className="compare-check">✓</div><div><strong>Architecture:</strong> Core + OS + Modules <span style={{ color: '#64748b', fontSize: '0.8rem' }}>(الأنظمة التقليدية: نظام واحد ثابت)</span></div></div>
    <div className="compare-row"><div className="compare-check">✓</div><div><strong>AI:</strong> AI Core مدمج في كل شيء <span style={{ color: '#64748b', fontSize: '0.8rem' }}>(الأنظمة التقليدية: لا يوجد)</span></div></div>
    <div className="compare-row highlight"><div className="compare-check">✓</div><div><strong>Modularity:</strong> اختار Modules اللي تحتاجها <span style={{ color: '#64748b', fontSize: '0.8rem' }}>(الأنظمة التقليدية: مميزات جاهزة لا تتغير)</span></div></div>
    <div className="compare-row"><div className="compare-check">✓</div><div><strong>Multi-OS:</strong> Business + Family + EDU <span style={{ color: '#64748b', fontSize: '0.8rem' }}>(الأنظمة التقليدية: منتج واحد لكل عميل)</span></div></div>
    <div className="compare-row highlight"><div className="compare-check">✓</div><div><strong>Auto-Setup:</strong> النظام يركب نفسه تلقائياً <span style={{ color: '#64748b', fontSize: '0.8rem' }}>(الأنظمة التقليدية: تثبيت وإعداد يدوي)</span></div></div>
  </div>
</div>
{/* SLIDE 5: Business OS */}
<div className={getSlideClass(4)} data-slide="4">
  <div className="bg-orb orb-2" style={{ opacity: 0.12 }}></div><div className="grid-pattern"></div>
  <div className="slide-header animate-in animate-in-1"><div className="line" style={{ background: 'linear-gradient(to bottom,#3b82f6,#10b981)' }}></div><h2>Business OS</h2></div>
  <p className="animate-in animate-in-2" style={{ marginBottom: '16px', fontSize: '0.9rem' }}>نظام متكامل لـ <span className="text-gradient">أي نشاط تجاري</span> — مش بس كافيهات.</p>
  <div className="card-grid card-grid-2 animate-in animate-in-3">
    <div className="card card-amber" style={{ textAlign: 'center' }}><div className="card-icon icon-amber" style={{ margin: '0 auto 8px' }}>☕</div><h3>CafeOS</h3><p style={{ fontSize: '0.8rem' }}>كافيهات ومحلات القهوة</p><span className="status-live"><span className="dot"></span> Live</span></div>
    <div className="card card-emerald" style={{ textAlign: 'center' }}><div className="card-icon icon-emerald" style={{ margin: '0 auto 8px' }}>🍽️</div><h3>RestaurantOS</h3><p style={{ fontSize: '0.8rem' }}>المطاعم والمطابخ</p><span className="status-live"><span className="dot"></span> Live</span></div>
    <div className="card card-rose" style={{ textAlign: 'center' }}><div className="card-icon icon-rose" style={{ margin: '0 auto 8px' }}>💇</div><h3>SalonOS</h3><p style={{ fontSize: '0.8rem' }}>صالونات التجميل</p><span className="status-live"><span className="dot"></span> Live</span></div>
    <div className="card card-purple" style={{ textAlign: 'center' }}><div className="card-icon icon-purple" style={{ margin: '0 auto 8px' }}>🎮</div><h3>GamingOS</h3><p style={{ fontSize: '0.8rem' }}>أماكن الألعاب</p><span className="status-live"><span className="dot"></span> Live</span></div>
  </div>
  <div className="animate-in animate-in-4" style={{ marginTop: '16px', padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '12px', textAlign: 'center' }}>
    <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>✅ كل نظام بيستخدم نفس الـ Core + AI Engine، بس Modules مختلفة.</p>
  </div>
</div>
{/* SLIDE 6: CafeOS Dashboard */}
<div className={getSlideClass(5)} data-slide="5">
  <div className="bg-orb orb-1" style={{ opacity: 0.1 }}></div><div className="grid-pattern"></div>
  <div className="slide-header animate-in animate-in-1"><div className="line" style={{ background: 'linear-gradient(to bottom,#f59e0b,#fbbf24)' }}></div><h2>CafeOS — Dashboard & POS</h2></div>
  <p className="animate-in animate-in-2" style={{ marginBottom: '12px', fontSize: '0.85rem' }}>أول ما المدير يفتح النظام يشوف كل حاجة في نظرة واحدة.</p>
  <div className="card-grid animate-in animate-in-3">
    <div className="card card-blue"><div className="card-icon icon-blue">📊</div><h3>Dashboard ذكية</h3><p>مبيعات اليوم • عدد الأوردرات • أكثر المنتجات بيعاً • المنتجات الناقصة • الموظفين • الأجهزة المشغلة • الإشعارات</p></div>
    <div className="card card-purple"><div className="card-icon icon-purple">🖥️</div><h3>KDS — Kitchen Display</h3><p>شاشة للمطبخ • الطلبات الجديدة • وقت التجهيز • حالة الطلب (جديد / قيد التجهيز / جاهز)</p></div>
    <div className="card card-amber"><div className="card-icon icon-amber">💳</div><h3>POS System</h3><p>إضافة منتجات • خصومات • طباعة فاتورة • تقسيم الفاتورة • QR Payment • تعليق الأوردر</p></div>
    <div className="card card-emerald"><div className="card-icon icon-emerald">🪑</div><h3>Table Management</h3><p>فتح ترابيزات • دمج ترابيزات • نقل العملاء • حالة الترابيزة • مدة الجلوس</p></div>
  </div>
</div>
{/* SLIDE 7: Orders & Inventory */}
<div className={getSlideClass(6)} data-slide="6">
  <div className="bg-orb orb-2" style={{ opacity: 0.1 }}></div><div className="grid-pattern"></div>
  <div className="slide-header animate-in animate-in-1"><div className="line" style={{ background: 'linear-gradient(to bottom,#10b981,#06b6d4)' }}></div><h2>Orders & Inventory</h2></div>
  <div className="card-grid animate-in animate-in-2">
    <div className="card card-cyan"><div className="card-icon icon-cyan">📋</div><h3>Orders Management</h3><p>أوردرات الصالة • التيك أواي • الدليفري • الطلبات الإلكترونية • حالة الطلب</p></div>
    <div className="card card-blue"><div className="card-icon icon-blue">📦</div><h3>Inventory System</h3><p>المخزون • خصم تلقائي للمكونات • تنبيهات النواقص • حد أدنى للمخزون</p></div>
    <div className="card card-purple"><div className="card-icon icon-purple">📖</div><h3>Recipe Management</h3><p>لكل منتج: المكونات + الكميات + تكلفة المنتج + الربح. كل بيعة تخصم تلقائياً.</p><span className="tag tag-purple">مثال: لاتيه = إسبريسو + لبن + كوب</span></div>
    <div className="card card-amber"><div className="card-icon icon-amber">👨‍💼</div><h3>Staff Management</h3><p>الموظفين • الرواتب • الحضور والانصراف • الصلاحيات • الشيفتات</p></div>
  </div>
</div>
{/* SLIDE 8: Gaming & Timer */}
<div className={getSlideClass(7)} data-slide="7">
  <div className="bg-orb orb-1" style={{ opacity: 0.15 }}></div><div className="grid-pattern"></div>
  <div className="slide-header animate-in animate-in-1"><div className="line" style={{ background: 'linear-gradient(to bottom,#a855f7,#f43f5e)' }}></div><h2>Gaming & Timer</h2></div>
  <p className="animate-in animate-in-2" style={{ marginBottom: '12px', fontSize: '0.85rem' }}>أكتر حاجتين بيميزوا CafeOS عن 90% من الأنظمة.</p>
  <div className="card-grid animate-in animate-in-3">
    <div className="card card-purple"><div className="card-icon icon-purple">🎮</div><h3>Gaming Module</h3><p>تشغيل التايمر • إيقاف الجلسة • حساب الوقت • أسعار مختلفة • حجز الأجهزة • عدد اللاعبين</p></div>
    <div className="card card-cyan"><div className="card-icon icon-cyan">⏱️</div><h3>Professional Timer</h3><p>Countdown • Stopwatch • تنبيهات صوتية • حساب الجلسات • تقارير الاستخدام</p></div>
  </div>
  <div className="animate-in animate-in-4" style={{ marginTop: '16px', padding: '14px', background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.15)', borderRadius: '14px', textAlign: 'center' }}>
    <p style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>💡 <span className="text-gradient">نادر جداً</span> تلاقي Gaming + Timer متنفذين مع بعض في واجهة محترمة.</p>
  </div>
</div>
{/* SLIDE 9: Chat & AI */}
<div className={getSlideClass(8)} data-slide="8">
  <div className="bg-orb orb-2" style={{ opacity: 0.1 }}></div><div className="grid-pattern"></div>
  <div className="slide-header animate-in animate-in-1"><div className="line" style={{ background: 'linear-gradient(to bottom,#3b82f6,#a855f7)' }}></div><h2>Chat & AI</h2></div>
  <div className="card-grid animate-in animate-in-2">
    <div className="card card-blue"><div className="card-icon icon-blue">💬</div><h3>Internal Chat</h3><p>الويتر يرسل للمطبخ • الحلاق يرسل للكاشير • الموظف يرسل للمدير. رسائل فورية بين كل الأقسام.</p></div>
    <div className="card card-purple"><div className="card-icon icon-purple">🧠</div><h3>AI Assistant</h3><p>اقتراح المنتجات الأكثر ربحاً • توقع النواقص • تحليل المبيعات • اقتراح عروض و combos</p></div>
    <div className="card card-amber"><div className="card-icon icon-amber">📈</div><h3>Reports</h3><p>يومي • أسبوعي • شهري • سنوي. تقارير: المنتجات • الموظفين • الأرباح • الألعاب • الطاولات</p></div>
    <div className="card card-emerald"><div className="card-icon icon-emerald">🎁</div><h3>Loyalty System</h3><p>نقاط للعملاء • كوبونات • عروض • خصومات تلقائية</p></div>
  </div>
</div>
{/* SLIDE 10: Security & Online */}
<div className={getSlideClass(9)} data-slide="9">
  <div className="bg-orb orb-1" style={{ opacity: 0.12 }}></div><div className="grid-pattern"></div>
  <div className="slide-header animate-in animate-in-1"><div className="line" style={{ background: 'linear-gradient(to bottom,#10b981,#3b82f6)' }}></div><h2>Security & Online</h2></div>
  <div className="card-grid animate-in animate-in-2">
    <div className="card card-rose"><div className="card-icon icon-rose">🔐</div><h3>Security</h3><p>صلاحيات متعددة • سجل العمليات (من حذف ماذا / من عدل ماذا) • حماية كاملة للبيانات</p></div>
    <div className="card card-cyan"><div className="card-icon icon-cyan">🌐</div><h3>Online Features</h3><p>حجز ترابيزة • منيو أونلاين • QR Menu • طلب من الهاتف</p></div>
    <div className="card card-blue"><div className="card-icon icon-blue">📱</div><h3>Mobile Companion</h3><p>المدير يشوف المبيعات والأرباح والإشعارات والموظفين — كل حاجة من الهاتف.</p></div>
    <div className="card card-purple"><div className="card-icon icon-purple">🧾</div><h3>Accounting</h3><p>الإيرادات • المصروفات • الأرباح • الخزنة • السحب والإيداع</p></div>
  </div>
  <div className="animate-in animate-in-3" style={{ marginTop: '12px', padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '12px' }}>
    <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>🔥 <strong>الحاجات اللي هتميزك:</strong> Gaming Timer + Recipe System + Internal Chat + AI Assistant</p>
  </div>
</div>
{/* SLIDE 11: Waiter App */}
<div className={getSlideClass(10)} data-slide="10">
  <div className="bg-orb orb-2" style={{ opacity: 0.1 }}></div><div className="grid-pattern"></div>
  <div className="slide-header animate-in animate-in-1"><div className="line" style={{ background: 'linear-gradient(to bottom,#f59e0b,#ec4899)' }}></div><h2>تطبيق الـ Waiter</h2></div>
  <p className="animate-in animate-in-2" style={{ marginBottom: '16px', fontSize: '0.9rem' }}>النادل مش بس ياخد الأوردر — ده <span className="text-gradient">يتحكم في كل حاجة</span>.</p>
  <div className="feature-list animate-in animate-in-3">
    <div className="feature-item"><div className="icon-box">📱</div><div><h4>يأخذ الأوردر</h4><p style={{ fontSize: '0.82rem' }}>النادل ياخد طلب العميل بالموبايل ويرسله للمطبخ مباشرة</p></div></div>
    <div className="feature-item"><div className="icon-box" style={{ background: 'rgba(168,85,247,0.15)' }}>🎮</div><div><h4>يفتح PlayStation</h4><p style={{ fontSize: '0.82rem' }}>يفتح جهاز الألعاب ويشغل التايمر من نفس التطبيق</p></div></div>
    <div className="feature-item"><div className="icon-box" style={{ background: 'rgba(245,158,11,0.15)' }}>🧾</div><div><h4>يصدر الفاتورة</h4><p style={{ fontSize: '0.82rem' }}>يطبع أو يرسل الفاتورة للعميل على الواتساب</p></div></div>
    <div className="feature-item"><div className="icon-box" style={{ background: 'rgba(16,185,129,0.15)' }}>💬</div><div><h4>يتكلم مع المطبخ</h4><p style={{ fontSize: '0.82rem' }}>يقول: "الشاي متأخر" أو "الأوردر جاهز"</p></div></div>
  </div>
</div>
{/* SLIDE 12: KDS */}
<div className={getSlideClass(11)} data-slide="11">
  <div className="bg-orb orb-1" style={{ opacity: 0.1 }}></div><div className="grid-pattern"></div>
  <div className="slide-header animate-in animate-in-1"><div className="line" style={{ background: 'linear-gradient(to bottom,#ec4899,#8b5cf6)' }}></div><h2>شاشة المطبخ KDS</h2></div>
  <p className="animate-in animate-in-2" style={{ marginBottom: '16px', fontSize: '0.9rem' }}>بدل الورق — <span className="text-gradient">شاشة ذكية</span> في المطبخ.</p>
  <div className="feature-list animate-in animate-in-3">
    <div className="feature-item"><div className="icon-box">📋</div><div><h4>الطلبات الجديدة</h4><p style={{ fontSize: '0.82rem' }}>تظهر فوراً لما النادل يبعتها من التطبيق</p></div></div>
    <div className="feature-item"><div className="icon-box" style={{ background: 'rgba(245,158,11,0.15)' }}>⏱️</div><div><h4>وقت التجهيز</h4><p style={{ fontSize: '0.82rem' }}>كل طلب له مؤقت يحسب وقت التحضير</p></div></div>
    <div className="feature-item"><div className="icon-box" style={{ background: 'rgba(16,185,129,0.15)' }}>✅</div><div><h4>حالة الطلب</h4><p style={{ fontSize: '0.82rem' }}>جديد → قيد التجهيز → جاهز → تم التسليم</p></div></div>
    <div className="feature-item"><div className="icon-box" style={{ background: 'rgba(244,63,94,0.15)' }}>🔔</div><div><h4>تنبيهات</h4><p style={{ fontSize: '0.82rem' }}>صوت ونور لما يجي أوردر جديد أو طلب يتأخر</p></div></div>
  </div>
</div>
{/* SLIDE 13: Family OS */}
<div className={getSlideClass(12)} data-slide="12">
  <div className="bg-orb orb-2" style={{ opacity: 0.12 }}></div><div className="grid-pattern"></div>
  <div className="slide-header animate-in animate-in-1"><div className="line" style={{ background: 'linear-gradient(to bottom,#f43f5e,#f59e0b)' }}></div><h2>Family OS</h2></div>
  <p className="animate-in animate-in-2" style={{ marginBottom: '16px', fontSize: '0.9rem' }}>نظام يقرب العيلة من بعض. <span className="status-soon">🔒 قريباً</span></p>
  <div className="card-grid animate-in animate-in-3">
    <div className="card" style={{ opacity: 0.6 }}><div className="card-icon" style={{ background: 'rgba(244,63,94,0.1)', opacity: 0.7 }}>📅</div><h3 style={{ opacity: 0.7 }}>تذكيرات ذكية</h3><p style={{ fontSize: '0.8rem' }}>الدروس • النوادي • المواعيد • الأعياد • صلوات</p></div>
    <div className="card" style={{ opacity: 0.6 }}><div className="card-icon" style={{ background: 'rgba(245,158,11,0.1)', opacity: 0.7 }}>🎲</div><h3 style={{ opacity: 0.7 }}>ألعاب جماعية</h3><p style={{ fontSize: '0.8rem' }}>لودو • سلة وتعبان • ألعاب تلعبها العيلة كلها</p></div>
    <div className="card" style={{ opacity: 0.6 }}><div className="card-icon" style={{ background: 'rgba(59,130,246,0.1)', opacity: 0.7 }}>📍</div><h3 style={{ opacity: 0.7 }}>Live Location</h3><p style={{ fontSize: '0.8rem' }}>كل فرد يعرف فين التاني. تحديد أماكن نروحها مع بعض</p></div>
    <div className="card" style={{ opacity: 0.6 }}><div className="card-icon" style={{ background: 'rgba(16,185,129,0.1)', opacity: 0.7 }}>📁</div><h3 style={{ opacity: 0.7 }}>ملفات العائلة</h3><p style={{ fontSize: '0.8rem' }}>صور • أوراق • شهادات ميلاد • فواتير • قسمين: خاص / للعيلة</p></div>
  </div>
</div>
{/* SLIDE 14: EDU OS */}
<div className={getSlideClass(13)} data-slide="13">
  <div className="bg-orb orb-1" style={{ opacity: 0.1 }}></div><div className="grid-pattern"></div>
  <div className="slide-header animate-in animate-in-1"><div className="line" style={{ background: 'linear-gradient(to bottom,#10b981,#06b6d4)' }}></div><h2>EDU OS</h2></div>
  <p className="animate-in animate-in-2" style={{ marginBottom: '16px', fontSize: '0.9rem' }}>منصة تعليمية ذكية — مش بس فيديوهات. <span className="status-soon">🔒 قريباً</span></p>
  <div className="card-grid animate-in animate-in-3">
    <div className="card" style={{ opacity: 0.6 }}><div className="card-icon" style={{ background: 'rgba(16,185,129,0.1)', opacity: 0.7 }}>📚</div><h3 style={{ opacity: 0.7 }}>كورسات تفاعلية</h3><p style={{ fontSize: '0.8rem' }}>فيديوهات من مدرسين ويوتيوبر ومحتوى أجنبي</p></div>
    <div className="card" style={{ opacity: 0.6 }}><div className="card-icon" style={{ background: 'rgba(6,182,212,0.1)', opacity: 0.7 }}>🧪</div><h3 style={{ opacity: 0.7 }}>معامل افتراضية</h3><p style={{ fontSize: '0.8rem' }}>آلات معمل فيزيائي وكيميائي وهندسي. تجارب تفاعلية</p></div>
    <div className="card" style={{ opacity: 0.6 }}><div className="card-icon" style={{ background: 'rgba(59,130,246,0.1)', opacity: 0.7 }}>📝</div><h3 style={{ opacity: 0.7 }}>امتحانات ذكية</h3><p style={{ fontSize: '0.8rem' }}>AI يتابع أداء الطالب ويحلل ضعفه ويقترح خطة مذاكرة</p></div>
    <div className="card" style={{ opacity: 0.6 }}><div className="card-icon" style={{ background: 'rgba(168,85,247,0.1)', opacity: 0.7 }}>🏆</div><h3 style={{ opacity: 0.7 }}>نظام الجوائز</h3><p style={{ fontSize: '0.8rem' }}>XP • Streaks • Badges • لوحة الصدارة. تحفيف مستمر</p></div>
  </div>
</div>
{/* SLIDE 15: Contact */}
<div className={getSlideClass(14)} data-slide="14">
  <div className="bg-orb orb-2" style={{ opacity: 0.15 }}></div><div className="bg-orb orb-1" style={{ opacity: 0.15 }}></div><div className="grid-pattern"></div>
  <div className="text-center animate-in animate-in-1">
    <div className="badge" style={{ borderColor: 'rgba(245,158,11,0.3)', color: '#fbbf24' }}>📞 تواصل معنا</div>
    <h1 className="text-gradient" style={{ fontSize: '2.4rem', marginBottom: '8px' }}>NexusCore</h1>
    <p style={{ fontSize: '1rem', color: 'var(--muted)', marginBottom: '24px' }}>نحن هنا لمساعدتك في بناء مستقبل عملك</p>
  </div>
  <div className="animate-in animate-in-2" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '24px' }}>
    <a href="https://facebook.com/YOUR_LINK" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '14px', color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s' }}>📘 Facebook</a>
    <a href="https://instagram.com/YOUR_LINK" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '14px', color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s' }}>📸 Instagram</a>
    <a href="https://wa.me/YOUR_NUMBER" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '14px', color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s' }}>💬 WhatsApp</a>
    <a href="tel:+20YOUR_NUMBER" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '14px', color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s' }}>📞 Phone</a>
  </div>
  <div className="animate-in animate-in-3 text-center">
    <div style={{ display: 'inline-block', padding: '16px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '16px' }}>
      <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '4px' }}>تطوير</p>
      <p style={{ fontSize: '1.2rem', fontWeight: 800, background: 'linear-gradient(135deg,#3b82f6,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ENG. Ayman Al-Qurashi</p>
      <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px', fontStyle: 'italic' }}>"نبني المستقبل، سطراً سطراً"</p>
    </div>
    <p style={{ color: '#334155', fontSize: '0.75rem', marginTop: '16px' }}>© 2026 NexusCore. All rights reserved.</p>
  </div>
</div>
</div>

      {!hintHidden && (
        <div className="swipe-hint" id="swipeHint">👆 اسحب من طرف الشاشة</div>
      )}
      {!introRemoved && (
        <div className={'intro-screen' + (introHidden ? ' hidden' : '')} id="introScreen">
          <svg className="intro-logo" viewBox="0 0 40 40" fill="none">
            <defs><linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3b82f6"/><stop offset="50%" stopColor="#a855f7"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient></defs>
            <circle cx="20" cy="20" r="18" stroke="url(#lg2)" strokeWidth="2" fill="none"/>
            <path d="M14 12 L20 8 L20 20 L26 16 L26 28 L20 32 L20 20 L14 24 Z" fill="url(#lg2)"/>
            <circle cx="20" cy="20" r="4" fill="url(#lg2)" fillOpacity="0.4"/>
          </svg>
          <div className="intro-text text-gradient">NexusCore</div>
          <div className="intro-sub">اكتشف المزيد</div>
          <button className="intro-btn" onClick={startPresentation}>ابدأ ▶</button>
        </div>
      )}
      <style jsx global>{`

* { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

:root {
  --bg: #030508;
  --surface: rgba(255,255,255,0.04);
  --border: rgba(255,255,255,0.08);
  --text: #fff;
  --muted: #94a3b8;
  --blue: #3b82f6;
  --purple: #a855f7;
  --cyan: #06b6d4;
  --amber: #f59e0b;
  --emerald: #10b981;
  --rose: #f43f5e;
}

body {
  font-family: 'Tajawal', 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  touch-action: pan-y;
}

/* ========== SLIDES ========== */
.slide-deck {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.slide {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 28px 80px;
  opacity: 0;
  pointer-events: none;
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.slide.active {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(0);
}

.slide.prev {
  transform: translateX(-100%);
}

/* Background */
.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.12;
  pointer-events: none;
}
.orb-1 { width: 500px; height: 500px; background: var(--blue); top: -10%; left: -5%; }
.orb-2 { width: 400px; height: 400px; background: var(--purple); bottom: -10%; right: -5%; }
.orb-3 { width: 300px; height: 300px; background: var(--amber); top: 40%; left: 30%; opacity: 0.06; }

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
  pointer-events: none;
}

/* Logo */
.logo-bar {
  position: fixed;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: rgba(3,5,8,0.85);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 50px;
}
.logo-bar svg { width: 26px; height: 26px; }
.logo-bar span {
  font-size: 0.95rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--blue), var(--purple), var(--cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Dev credit */
.dev-bar {
  position: fixed;
  bottom: 72px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  font-size: 0.65rem;
  color: #475569;
  text-align: center;
  padding: 4px 12px;
  background: rgba(3,5,8,0.85);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  border: 1px solid var(--border);
  white-space: nowrap;
}
.dev-bar strong { color: var(--blue); font-weight: 700; }

/* Typography */
.text-gradient {
  background: linear-gradient(135deg, var(--blue), var(--purple), var(--cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.text-gradient-gold {
  background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h1 { font-size: 2.6rem; font-weight: 900; line-height: 1.1; margin-bottom: 12px; }
h2 { font-size: 1.8rem; font-weight: 800; margin-bottom: 10px; }
h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 6px; }
p { font-size: 0.95rem; color: var(--muted); line-height: 1.7; }

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(59,130,246,0.15);
  border: 1px solid rgba(59,130,246,0.3);
  border-radius: 50px;
  font-size: 0.8rem;
  color: #60a5fa;
  margin-bottom: 16px;
}

/* Cards */
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-top: 16px;
}

.card-grid-2 { grid-template-columns: 1fr 1fr; }

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}
.card:hover {
  background: rgba(255,255,255,0.06);
  border-color: rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
.card::before {
  content: '';
  position: absolute;
  top: -50%; right: -50%;
  width: 150px; height: 150px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s;
  filter: blur(40px);
}
.card:hover::before { opacity: 0.12; }
.card-blue::before { background: var(--blue); }
.card-purple::before { background: var(--purple); }
.card-amber::before { background: var(--amber); }
.card-emerald::before { background: var(--emerald); }
.card-rose::before { background: var(--rose); }
.card-cyan::before { background: var(--cyan); }

.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  margin-bottom: 10px;
}
.icon-blue { background: rgba(59,130,246,0.15); }
.icon-purple { background: rgba(168,85,247,0.15); }
.icon-amber { background: rgba(245,158,11,0.15); }
.icon-emerald { background: rgba(16,185,129,0.15); }
.icon-rose { background: rgba(244,63,94,0.15); }
.icon-cyan { background: rgba(6,182,212,0.15); }

.card h3 { font-size: 1rem; }
.card p { font-size: 0.82rem; color: var(--muted); line-height: 1.5; }

/* Feature list */
.feature-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
}
.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
}
.feature-item .icon-box {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(59,130,246,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}

/* Slide header */
.slide-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.slide-header .line {
  width: 4px;
  height: 32px;
  background: linear-gradient(to bottom, var(--blue), var(--purple));
  border-radius: 4px;
  flex-shrink: 0;
}

/* Compare */
.compare-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  margin-bottom: 8px;
}
.compare-row.highlight {
  background: rgba(59,130,246,0.08);
  border-color: rgba(59,130,246,0.2);
}
.compare-check { color: #10b981; font-weight: bold; flex-shrink: 0; }
.compare-cross { color: #ef4444; font-weight: bold; flex-shrink: 0; }

/* Tags */
.tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.75rem;
  margin-top: 8px;
}
.tag-amber { background: rgba(245,158,11,0.1); color: #fbbf24; border: 1px solid rgba(245,158,11,0.2); }
.tag-emerald { background: rgba(16,185,129,0.1); color: #34d399; border: 1px solid rgba(16,185,129,0.2); }
.tag-purple { background: rgba(168,85,247,0.1); color: #c084fc; border: 1px solid rgba(168,85,247,0.2); }
.tag-blue { background: rgba(59,130,246,0.1); color: #60a5fa; border: 1px solid rgba(59,130,246,0.2); }

/* Status */
.status-live {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(16,185,129,0.15);
  color: #34d399;
  border: 1px solid rgba(16,185,129,0.3);
}
.status-live .dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #34d399;
  animation: pulse-dot 2s infinite;
}
.status-soon {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(255,255,255,0.05);
  color: #64748b;
  border: 1px solid rgba(255,255,255,0.1);
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

/* Swipe zones */
.swipe-zone {
  position: fixed;
  top: 60px;
  bottom: 60px;
  width: 60px;
  z-index: 50;
  cursor: pointer;
}
.swipe-zone-left { left: 0; }
.swipe-zone-right { right: 0; }

/* Swipe hint */
.swipe-hint {
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 60;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 50px;
  font-size: 0.75rem;
  color: #64748b;
  animation: fadeHint 3s ease forwards;
  animation-delay: 1s;
  opacity: 0;
}
@keyframes fadeHint {
  0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
  20% { opacity: 1; transform: translateX(-50%) translateY(0); }
  80% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
}

/* Progress bar */
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--blue), var(--purple));
  transition: width 0.4s ease;
  z-index: 100;
}

/* Slide counter dots */
.slide-dots {
  position: fixed;
  top: 52px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 60;
  display: flex;
  gap: 6px;
}
.slide-dot {
  height: 3px;
  border-radius: 3px;
  background: rgba(255,255,255,0.15);
  transition: all 0.3s;
}
.slide-dot.active {
  background: linear-gradient(90deg, var(--blue), var(--purple));
  width: 24px;
}
.slide-dot:not(.active) { width: 12px; }

/* Intro */
.intro-screen {
  position: fixed;
  inset: 0;
  background: var(--bg);
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.8s, visibility 0.8s;
}
.intro-screen.hidden { opacity: 0; visibility: hidden; pointer-events: none; }
.intro-logo {
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
  animation: float 3s ease-in-out infinite;
}
@keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-12px);} }
.intro-text { font-size: 2.2rem; font-weight: 900; text-gradient; margin-bottom: 8px; }
.intro-sub { color: var(--muted); font-size: 0.9rem; margin-bottom: 24px; }
.intro-btn {
  padding: 12px 32px;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  border: none;
  border-radius: 14px;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 0 25px rgba(59,130,246,0.3);
}
.intro-btn:hover { transform: scale(1.05); box-shadow: 0 0 35px rgba(59,130,246,0.5); }

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.slide.active .animate-in { animation: fadeInUp 0.6s ease forwards; }
.slide.active .animate-in-1 { animation-delay: 0.1s; opacity: 0; }
.slide.active .animate-in-2 { animation-delay: 0.2s; opacity: 0; }
.slide.active .animate-in-3 { animation-delay: 0.3s; opacity: 0; }
.slide.active .animate-in-4 { animation-delay: 0.4s; opacity: 0; }
.slide.active .animate-in-5 { animation-delay: 0.5s; opacity: 0; }

/* Responsive */
@media (min-width: 768px) {
  .slide { padding: 60px 60px 80px; }
  h1 { font-size: 3.5rem; }
  h2 { font-size: 2.2rem; }
  .card-grid-2 { grid-template-columns: 1fr 1fr; }
  .card-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 767px) {
  .slide { padding: 60px 20px 80px; justify-content: flex-start; }
  h1 { font-size: 2rem; }
  h2 { font-size: 1.5rem; }
  .card-grid-2 { grid-template-columns: 1fr; }
  .card-grid { grid-template-columns: 1fr; }
  .card { padding: 14px; }
  .feature-item { padding: 10px 12px; }
  .feature-item .icon-box { width: 32px; height: 32px; font-size: 1rem; }
  .swipe-zone { width: 40px; }
}
@media print {
  .swipe-zone, .swipe-hint, .slide-dots, .progress-bar, .logo-bar, .dev-bar, .intro-screen { display: none !important; }
  .slide { position: relative; opacity: 1; transform: none; page-break-after: always; }
}

      `}</style>
    </>
  );
}
