export default function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHptLTQgMGg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm mb-6">
              🚀 ابدأ رحلتك الآن
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              جاهز تطور عملك؟
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
              انضم لـ +50 عميل نشط واستمتع بنظام POS احترافي يعمل بالذكاء الاصطناعي
            </p>
            
            <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl text-lg font-bold transition-all hover:scale-105 inline-flex items-center gap-3">
              ابدأ مجاناً لمدة 14 يوم
              <span>←</span>
            </button>
            
            <p className="mt-4 text-sm text-blue-200">لا بطاقة ائتمان مطلوبة • إلغاء في أي وقت</p>
          </div>
        </div>
      </div>
    </section>
  );
}