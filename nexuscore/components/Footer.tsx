export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070b14] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <defs>
              <linearGradient id="footLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6"/>
                <stop offset="50%" stopColor="#a855f7"/>
                <stop offset="100%" stopColor="#06b6d4"/>
              </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="18" stroke="url(#footLogo)" strokeWidth="2" fill="none"/>
            <path d="M14 12 L20 8 L20 20 L26 16 L26 28 L20 32 L20 20 L14 24 Z" fill="url(#footLogo)"/>
          </svg>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            NexusCore
          </span>
        </div>
        <p className="text-slate-500 text-sm mb-4">
          شركة متكاملة للبرمجة والتصميم والذكاء الاصطناعي
        </p>
        <p className="text-slate-600 text-sm">
          Development by <span className="text-blue-400 font-semibold">ENG Ayman Al-Qurashi</span>
        </p>
        <p className="text-slate-700 text-xs mt-4">
          © 2026 NexusCore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}