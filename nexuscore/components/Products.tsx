import Link from "next/link";

const products = [
  { icon: "☕", name: "CafeOS", desc: "نظام إدارة الكافيهات المتكامل مع POS وGaming Timer", color: "from-amber-500 to-orange-600" },
  { icon: "🍽️", name: "RestaurantOS", desc: "نظام المطاعم مع إدارة المطبخ والحجوزات", color: "from-emerald-500 to-teal-600" },
  { icon: "💇", name: "SalonOS", desc: "نظام صالونات التجميل مع حجوزات المواعيد", color: "from-pink-500 to-rose-600" },
  { icon: "🎮", name: "GamingOS", desc: "إدارة أماكن الألعاب مع مؤقتات ذكية", color: "from-purple-500 to-violet-600" },
  { icon: "👨‍👩‍👧", name: "FamilyOS", desc: "إدارة العائلة والملفات والمواعيد", color: "from-blue-500 to-cyan-600" },
  { icon: "🎓", name: "EDU OS", desc: "منصة تعليمية ذكية للكورسات والامتحانات", color: "from-emerald-500 to-green-600" },
];

export default function Products() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">منتجاتنا</h2>
          <p className="text-slate-400">اختر النظام المناسب لعملك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.name} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${product.color} mb-4 text-2xl`}>
                {product.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                {product.name}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{product.desc}</p>
              <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                اكتشف المزيد →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}