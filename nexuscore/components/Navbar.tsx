export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#070b14]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <defs>
                <linearGradient id="navLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6"/>
                  <stop offset="50%" stopColor="#a855f7"/>
                  <stop offset="100%" stopColor="#06b6d4"/>
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="18" stroke="url(#navLogo)" strokeWidth="2.5" fill="none"/>
              <path d="M14 12 L20 8 L20 20 L26 16 L26 28 L20 32 L20 20 L14 24 Z" fill="url(#navLogo)"/>
            </svg>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              NexusCore
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-slate-300 hover:text-white transition text-sm">الرئيسية</a>
            <a href="#" className="text-slate-300 hover:text-white transition text-sm">CafeOS</a>
            <a href="#" className="text-slate-300 hover:text-white transition text-sm">المنتجات</a>
            <a href="#" className="text-slate-300 hover:text-white transition text-sm">الأسعار</a>
            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-medium transition">
              ابدأ مجاناً
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}