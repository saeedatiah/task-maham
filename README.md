# مشروع Executive KPIs — Next.js + TypeScript

## نظرة عامة

هذا المشروع عبارة عن **لوحة مؤشرات الأداء (KPIs)** باستخدام Next.js (App Router) و TypeScript، ويعرض بيانات مالية وموارد بشرية وعملياتية.  

واجهة 1
![واجهة KPIs](/public/screenshots/allscreen.png)
واجهة 1 مع التفاعل
![واجهة KPIs](/public/screenshots/allscreen2.png)
الواجهة responsive
![with responsive](/public/screenshots/allscreen-responsive.png)



## التقنيات المستخدمة

- **Next.js 14+ (App Router + TypeScript)**
- **Tailwind CSS** للتصميم السريع والاستجابة
- **Recharts** لعرض الرسوم البيانية الخطية
- **React** مع Client Components (`useState`, `useEffect`)
- **RTL + خط Tajawal** لدعم اللغة العربية
- API وهمية (`app/api/kpis/route.ts`) لتوليد بيانات مؤشرات الأداء

## الهيكلية

app/
├─ api/kpis/route.ts # API وهمية ترجع بيانات KPIs
├─ executive/
│ └─ kpis/
│ ├─ page.tsx # صفحة KPIs
components/
├─ kpis/
│ ├─ KPIsClient.tsx # مكون Client لعرض البطاقات والرسوم البيانية
│ └─ KpiCard.tsx # بطاقة KPI فردية
└─ ui/
└─ Card.tsx # بطاقة عامة لإطار الرسوم البيانية
styles/
└─ globals.css # إعدادات الخطوط و RTL



## الهوية البصرية (Brand Identity)

- **Primary Color:** أخضر ملكي `#146C43`  
  - استخدم كلون أساسي مع تدرجاته
- **Secondary Color:** ذهبي `#C4A951`  
  - استخدم كلون ثانوي مع تدرجاته
- **خط الموقع:** Tajawal  
- **RTL (Right-to-Left):** دعم كامل للغة العربية، مع `dir="rtl"` و Tailwind utilities  


## المميزات

1. **صفحة /executive/kpis**
   - 3 بطاقات KPI: Finance, HR, Operations
   - لكل بطاقة:
     - قيمة حالية `current`
     - نسبة التغير `delta`
   - Client Component لتحديث البيانات ديناميكيًا
2. **رسوم بيانية مستقلة لكل KPI**
   - رسم خطي لكل KPI على حدة
   - ألوان متناسقة مع الهوية البصرية
   - Tooltip و Legend لتوضيح البيانات
3. **Layout احترافي**
   - Sidebar + Navbar من ثيم Isomorphic
   - يدعم RTL والتصفح السلس
4. **API وهمية**
   - موجودة في `app/api/kpis/route.ts`
   - تعطي بيانات ديناميكية لتجربة كاملة دون الحاجة لباكند فعلي

## كيفية التشغيل

### 1. تثبيت الحزم

```bash
npm install
npm run dev
