/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Building2, Hammer, Layers, Cpu, CheckSquare, Eye, Briefcase, Paintbrush,
  Network, Truck, Building, Home, Factory, Award, Users, Target, Clock,
  Heart, ShieldCheck, Phone, MapPin, ExternalLink, Globe, X, ArrowUpRight,
  MessageCircle, Info
} from 'lucide-react';

// Recreated SVG Brand Logo for Al Imtiaz
function AlImtiazLogo({ className = "h-14 w-auto", color = "currentColor", accentColor = "#E5A93C" }) {
  return (
    <svg viewBox="0 0 450 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Decorative center divider */}
      <line x1="165" y1="15" x2="165" y2="105" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      
      {/* Arabic and English Typography Section */}
      <g transform="translate(150, 0)">
        <text x="0" y="42" fill={color} fontSize="26" fontWeight="800" fontFamily="'Cairo', sans-serif" textAnchor="end">
          شركة الامتياز
        </text>
        <text x="0" y="72" fill={accentColor} fontSize="22" fontWeight="800" fontFamily="'Plus Jakarta Sans', sans-serif" letterSpacing="1" textAnchor="end">
          ALIMTIYAZ CO.
        </text>
        <text x="0" y="98" fill={color} fontSize="14" fontWeight="600" fontFamily="'Cairo', sans-serif" opacity="0.8" textAnchor="end">
          للمقاولات العامة والأعمال الهندسية
        </text>
      </g>
      
      {/* Architectural emblem on the right */}
      <g transform="translate(195, -5)">
        {/* Landscape ground curves */}
        <path d="M 5 105 Q 75 90, 145 105 T 235 105" stroke={color} strokeWidth="2.5" fill="none" opacity="0.8" />
        <path d="M 0 114 Q 85 98, 170 118 T 240 108" stroke={accentColor} strokeWidth="1.5" fill="none" />
        
        {/* Left small villa roof */}
        <path d="M 15 90 L 50 62 L 85 90 Z" fill="#0c0c0c" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="50" cy="76" r="4" fill={accentColor} />
        
        {/* Right small villa roof */}
        <path d="M 150 90 L 185 62 L 220 90 Z" fill="#0c0c0c" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="185" cy="76" r="4" fill={accentColor} />

        {/* Central main majestic roof */}
        <path d="M 40 90 L 118 32 L 196 90 Z" fill="#050505" stroke={color} strokeWidth="3.5" strokeLinejoin="round" />
        {/* Arch windows in central structure */}
        <path d="M 103 72 A 15 15 0 0 1 133 72 Z" fill="#0d0d0d" stroke={accentColor} strokeWidth="2.2" />
        <line x1="118" y1="57" x2="118" y2="72" stroke={accentColor} strokeWidth="1.8" />
        <line x1="103" y1="72" x2="133" y2="72" stroke={accentColor} strokeWidth="1.8" />

        {/* Pine trees on the flanks */}
        <path d="M -2 90 L 8 60 L 18 90 Z" fill={accentColor} opacity="0.2" />
        <path d="M 4 90 L 12 68 L 20 90 Z" fill={color} opacity="0.7" />

        <path d="M 218 90 L 228 60 L 238 90 Z" fill={accentColor} opacity="0.2" />
        <path d="M 222 90 L 230 68 L 238 90 Z" fill={color} opacity="0.7" />
      </g>
    </svg>
  );
}

// Data Collections
const services = [
  { id: 1, icon: Building2, titleAr: "المقاولات العامة", titleEn: "General Contracting", descAr: "إدارة وتنفيذ متكاملة للمشاريع الإنشائية من المخطط الأول حتى تسليم المفتاح.", descEn: "Integrated execution of complex structural builds from foundation up to turnkey." },
  { id: 2, icon: Hammer, titleAr: "أعمال التشييد والبناء", titleEn: "Structural Construction", descAr: "بناء الهياكل والكتل الخرسانية للمباني السكنية والتجارية والصناعية بكفاءة.", descEn: "Erecting structural skeletons of residential, commercial, and industrial facilities." },
  { id: 3, icon: Layers, titleAr: "الأعمال الخرسانية المسلحة", titleEn: "Concrete Works", descAr: "صب القواعد والأساسات والأسقف الخرسانية المسلحة بمواصفات معيارية دقيقة.", descEn: "Engineered mass concrete pouring for supreme load-bearing structural integrity." },
  { id: 4, icon: Cpu, titleAr: "الهياكل الحديدية والمعدنية", titleEn: "Steel Works & Trusses", descAr: "تصميم وتصنيع وتركيب الجمالونات والمسقفات الفولاذية للمشاريع الكبرى.", descEn: "Rigid heavy structural steel assemblies and trusses crafted for plants." },
  { id: 5, icon: CheckSquare, titleAr: "تنفيذ المباني المتكاملة", titleEn: "Building Execution", descAr: "الإشراف والتشييد الكامل للأبراج السكنية والمقرات الإدارية بأعلى مستويات الجودة.", descEn: "Turnkey development of corporate office hubs and multi-family high-rises." },
  { id: 6, icon: Eye, titleAr: "الإشراف الهندسي المتخصص", titleEn: "Engineering Supervision", descAr: "متابعة فنية دقيقة لخطوات البناء لضمان الموثوقية التامة والالتزام بالكود الهندسي.", descEn: "Microscopic field audits to safeguard compliance with blueprints and state codes." },
  { id: 7, icon: Briefcase, titleAr: "إدارة المشاريع الاحترافية", titleEn: "Project Management", descAr: "تخطيط ذكي وجدولة صارمة للموارد والميزانيات لتفادي أي زيادة في التكاليف.", descEn: "Sophisticated logistics, procurement, budget control, and risk management." },
  { id: 8, icon: Paintbrush, titleAr: "أعمال التشطيبات والديكور", titleEn: "Finishing & Interior Works", descAr: "تنفيذ أرقى أعمال الديكور والتشطيبات الداخلية والخارجية بلمسات فنية بالغة الفخامة.", descEn: "Signature luxury interior details and elite facade designs of premium taste." },
  { id: 9, icon: Network, titleAr: "مشاريع البنية التحتية", titleEn: "Infrastructure Development", descAr: "تنفيذ شبكات مياه الأمطار والصرف والكهرباء والاتصالات والطرق الحيوية.", descEn: "Heavy civil engineering including drainage systems, road corridors, and utility mains." },
  { id: 10, icon: Truck, titleAr: "تهيئة المواقع والأعمال الترابية", titleEn: "Site Prep & Excavations", descAr: "أعمال الحفر والردم والتسوية واختبارات التربة وتجهيزها لاستقبال كتل التشييد.", descEn: "Large-scale grading, excavation, backfilling, and precise geological preparation." },
  { id: 11, icon: Building, titleAr: "المباني والمراكز التجارية", titleEn: "Commercial Centers", descAr: "تطوير المولات والأسواق والمجمعات التجارية بمساحات ذكية وتصاميم عصرية.", descEn: "Erecting highly attractive commercial shopping centers and administrative towers." },
  { id: 12, icon: Home, titleAr: "المجمعات السكنية والفيلات", titleEn: "Residential Developments", descAr: "تشييد الفيلات الحصرية والمجمعات السكنية بنظم العزل والراحة الحديثة.", descEn: "Bespoke residential estates designed for maximum durability and thermal isolation." },
  { id: 13, icon: Factory, titleAr: "المشاريع الصناعية والمعامل", titleEn: "Industrial Complexes", descAr: "بناء المصانع والمستودعات ومحطات توليد الطاقة والمخازن المبردة العملاقة.", descEn: "Constructing heavy manufacturing plants, distribution depots, and energy stations." }
];

const whyChooseUs = [
  { id: 1, icon: Award, titleAr: "الجودة العالية والمواصفات القياسية", titleEn: "Premium Materials & Quality", descAr: "نعتمد فقط على الخامات الحائزة على شهادات الجودة والمطابقة لأعلى المواصفات الإنشائية.", descEn: "Deploying certified structural steel, concrete grades, and world-class raw materials." },
  { id: 2, icon: Users, titleAr: "الكادر الهندسي المتخصص", titleEn: "Elite Engineering Board", descAr: "نخبة من كبار المهندسين والمشرفين يمتلكون خبرة واسعة في ترويض أعقد التحديات الإنشائية.", descEn: "Our team consists of veteran architects, structural masters, and safety supervisors." },
  { id: 3, icon: Target, titleAr: "الدقة الهندسية المتناهية", titleEn: "Microscopic Precision", descAr: "نحسب كل مليمتر في المخططات وننفذه بحذافيره لنضمن سلامة تدوم لأجيال طويلة.", descEn: "Zero-margin tolerances on levels, alignments, and raw material ratios." },
  { id: 4, icon: Clock, titleAr: "الالتزام التام بالمواعيد", titleEn: "Punctual Delivery Cycles", descAr: "نعتبر الجداول الزمنية عقداً مقدساً ونعمل بفرق نهارية وليلية لضمان التسليم قبل الموعد.", descEn: "Rigid critical-path management ensures your commercial operations launch on time." },
  { id: 5, icon: Heart, titleAr: "رضا العملاء المتميز", titleEn: "Client-Centric Integrity", descAr: "علاقتنا مع العميل تقوم على الصدق والشفافية وعرض التقارير الهندسية المصورة دورياً.", descEn: "Transparent daily schedules, photorealistic logs, and absolute financial honesty." },
  { id: 6, icon: ShieldCheck, titleAr: "معايير السلامة المهنية الصارمة", titleEn: "Rigid Safety Standards", descAr: "بيئة عمل خالية تماماً من الحوادث بفضل المراقبة وتطبيق أكواد السلامة الدولية.", descEn: "Strict adherence to safety gear, perimeter security, and hazardous material protocols." },
  { id: 7, icon: Cpu, titleAr: "الآليات والمعدات الحديثة", titleEn: "State-of-the-Art Fleet", descAr: "نمتلك أسطولاً مستقلاً من الرافعات والبلدوزرات ومحطات صب الخرسانة لتغطية كافة المشاريع.", descEn: "Owning heavy crane assets and specialized civil equipment ensures zero-delay queues." }
];

const projects = [
  {
    id: 1,
    titleAr: "مركز الامتياز التجاري المعاصر",
    titleEn: "Al Imtiaz Sovereign Commercial Hub",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    specsAr: { area: "12,500 م²", duration: "18 شهر", type: "هياكل حديدية مدمجة بالخرسانة", status: "تم التسليم بنجاح" },
    specsEn: { area: "12,500 sqm", duration: "18 Months", type: "Composite Steel & Mass Concrete", status: "Successfully Delivered" },
    descAr: "تشييد مركز تجاري فخم متعدد الطوابق بهيكل فولاذي مسبق الصنع مع واجهات زجاجية مانعة للحرارة.",
    descEn: "Construction of a premium multi-story retail complex featuring a structural steel frame with smart climate-control double glazing."
  },
  {
    id: 2,
    titleAr: "مجمع القصور والفيلات السكنية الفاخرة",
    titleEn: "Imperial Estates & Luxury Villas",
    category: "residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    specsAr: { area: "8,200 م²", duration: "14 شهر", type: "خرسانة مسلحة مقاومة للأملاح مع تشطيب VIP", status: "تم التسليم بنجاح" },
    specsEn: { area: "8,200 sqm", duration: "14 Months", type: "Sulfate-Resistant Concrete & VIP Finishes", status: "Successfully Delivered" },
    descAr: "تصميم وتنفيذ سلسلة من القصور الفارهة بنظام العزل الصوتي والحراري المتطور مع مساحات خضراء متناسقة.",
    descEn: "Engineering and turnkey decoration of bespoke luxury estates with modern acoustic insulation and premium landscape curation."
  },
  {
    id: 3,
    titleAr: "مستودعات الشحن والخدمات اللوجستية العملاقة",
    titleEn: "High-Span Logistics Terminal",
    category: "industrial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    specsAr: { area: "24,000 م²", duration: "12 شهر", type: "هياكل حديدية معزولة بالكامل", status: "مكتمل ومستثمر" },
    specsEn: { area: "24,000 sqm", duration: "12 Months", type: "Fully Insulated High-Span Steel Frames", status: "Completed & Active" },
    descAr: "تنفيذ صالات تخزين ضخمة بارتفاعات شاهقة بدون أعمدة وسطية باستخدام جمالونات حديدية ثقيلة مصممة لمقاومة الرياح والزلازل.",
    descEn: "Erection of massive column-free storage terminals using heavy industrial-grade steel trusses calculated for extreme lateral loads."
  },
  {
    id: 4,
    titleAr: "المقر الرئيسي للمختبرات والأبحاث الهندسية",
    titleEn: "Advanced Engineering Headquarters",
    category: "construction",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    specsAr: { area: "5,400 م²", duration: "16 شهر", type: "هيكل خرساني نيو-كلاسيكي بلمسات معمارية", status: "تم التسليم بنجاح" },
    specsEn: { area: "5,400 sqm", duration: "16 Months", type: "Neo-Classical Concrete Structural Masterpiece", status: "Successfully Delivered" },
    descAr: "مبنى إداري ذو طابع معماري فريد يعتمد على الكتل الخرسانية المصقولة والنوافذ الذكية وممرات التهوية الطبيعية.",
    descEn: "Administrative monument relying on exposed architectural concrete, integrating smart energy-saving utilities and light pathways."
  },
  {
    id: 5,
    titleAr: "تجهيز وتهيئة البنية التحتية لمشروع الغدير",
    titleEn: "Al Ghadeer Infrastructure & Site Prep",
    category: "infrastructure",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    specsAr: { area: "150,000 م²", duration: "6 أشهر", type: "أعمال ترابية وتسوية ديناميكية", status: "مكتمل بنسبة 100%" },
    specsEn: { area: "150,000 sqm", duration: "6 Months", type: "Dynamic Earthwork, Excavation & Utility Networks", status: "100% Completed" },
    descAr: "تهيئة وتسوية مئة وخمسين ألف متر مربع من الأراضي الصخرية، مع تمديد قنوات تصريف السيول وخطوط الخدمات الأساسية بكفاءة استثنائية.",
    descEn: "Excavating and leveling 150,000 sqm of difficult terrain, deploying stormwater retention networks and heavy-service trunk lines."
  },
  {
    id: 6,
    titleAr: "أساسات الأبراج السكنية الكبرى",
    titleEn: "Tower Base Concrete Reinforcement",
    category: "concrete",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80",
    specsAr: { area: "18,500 م³ خرسانة", duration: "8 أشهر", type: "صب خرسانة كتلية مستمرة", status: "مكتمل بنسبة 100%" },
    specsEn: { area: "18,500 cu.m.", duration: "8 Months", type: "Massive Monolithic Foundations Pouring", status: "100% Completed" },
    descAr: "تنفيذ أضخم أساسات خرسانية مسلحة للأبراج، تضمن التسليح الكثيف واختبارات الجهد والمقاومة تحت إشراف هيئات علمية متخصصة.",
    descEn: "Execution of heavy reinforced mass foundations utilizing complex structural rebar configurations and strict continuous concrete pumping."
  }
];

const dict = {
  ar: {
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navProjects: "مشاريعنا",
    navWhyUs: "لماذا الامتياز",
    navLocation: "الموقع الجغرافي",
    navEstimate: "مستشار التخطيط",
    navContact: "تواصل معنا",
    
    heroTitle: "نصنع الحاضر لنبني المستقبل",
    heroSubtitle: "شركة الامتياز للمقاولات العامة - هندسة الإبداع ودقة التنفيذ بأعلى المعايير العالمية الرائدة.",
    heroCTA_call: "اتصل بنا الآن",
    heroCTA_whatsapp: "واتساب مباشر",
    heroCTA_projects: "تصفح المشاريع",
    heroCTA_maps: "الموقع الجغرافي",
    
    introTitle: "ريادة، قوة، ومصداقية هندسية",
    introSubtitle: "صرح هندسي متكامل لبناء وتشييد كبرى المشاريع العمرانية والصناعية المعقدة.",
    introText1: "نحن في شركة الامتياز للمقاولات العامة نؤمن بأن البناء ليس مجرد جدران خرسانية وهياكل معدنية، بل هو تجسيد لرؤى طموحة واستثمارات تستحق الدقة والتميز. على مدار سنوات من العمل الدؤوب والتفوق الهندسي، رسخنا مكانتنا كأحد الشركاء الموثوقين في تنفيذ المشاريع الاستراتيجية والإنشائية.",
    introText2: "بفضل فريقنا المكون من نخبة المهندسين والمشرفين، وأسطولنا المتكامل من المعدات والآليات الحديثة، نقوم بتحويل المخططات الهندسية الأكثر تعقيداً إلى واقع ملموس يتميز بالصلابة والجمال المعماري المتناسق، ملتزمين بجدول زمني صارم وأعلى مواصفات الجودة والأمان المعترف بها دولياً.",
    
    servicesTitle: "الخدمات الهندسية والمقاولات",
    servicesSubtitle: "باقة متكاملة من الخدمات التخصصية المنفذة بأحدث التقنيات الهندسية وأرقى معايير الدقة.",
    
    whyUsTitle: "لماذا يختار النخبة شركة الامتياز؟",
    whyUsSubtitle: "ركائز القوة والتميز التي تجعلنا الشريك الهندسي الأول لتنفيذ كبرى الاستثمارات والمشاريع في العراق.",
    
    projectsTitle: "معرض المشاريع الرائدة",
    projectsSubtitle: "مجموعة من الصروح العمرانية والمشاريع التي تم تنفيذها بأعلى مستويات الجودة والاحترافية والصلابة.",
    projectsFilterAll: "كافة المشاريع",
    projectsFilterConcrete: "أعمال خرسانية",
    projectsFilterSteel: "الهياكل الحديدية",
    projectsFilterFinishes: "تشطيبات وديكور",
    projectsFilterInfra: "بنية تحتية",
    
    statsTitle: "أرقام تتحدث عن ريادتنا مـيدانياً",
    statsSubtitle: "مسيرة حافلة بالإنجازات المتكاملة والالتزام الصارم بمعايير الجودة.",
    statsExp: "أكثر من 15 عاماً",
    statsExpSub: "من الخبرة والريادة الإنشائية",
    statsProj: "250+ مشروع هندسي",
    statsProjSub: "نُفذ بدقة متناهية ومواصفات عالمية",
    statsMach: "40+ آلية ثقيلة ثابـتة",
    statsMachSub: "لتغطية متطلبات مواقع العمل والإنتاج السريع",
    statsSafety: "100% سلامة مهنية",
    statsSafetySub: "بيئة عمل آمنة ومحمية بالكامل وخالية من الحوادث",
    
    instaTitle: "التغطية الميدانية والمواكبة الإعلامية",
    instaSubtitle: "تابعوا التحديثات الدورية وخطوات صب القواعد وتركيب الهياكل لحظة بلحظة عبر حسابنا الرسمي.",
    instaCTA: "تابعوا حسابنا على إنستغرام @65q_aa",
    instaPost1: "أعمال صب الخرسانة المسلحة لأساسات أحد الصروح التجارية الكبرى.",
    instaPost2: "تركيب الهياكل الحديدية والجمالونات لمركز الخدمات اللوجستية.",
    instaPost3: "التشطيبات النهائية الفاخرة لأحد مشاريع الفلل السكنية الاستثنائية.",
    
    locationTitle: "الموقع الجغرافي والمقر الرئيسي",
    locationSubtitle: "نرحب بزيارتكم الكريمة في مقرنا الرئيسي لمناقشة مخططات ودراسات جدوى مشاريعكم القادمة.",
    locationDesc: "يقع المقر الرئيسي لشركة الامتياز للمقاولات العامة في موقع متميز يسهل الوصول إليه، وهو مجهز بالكامل بأحدث التقنيات الهندسية لعرض المخططات ثلاثية الأبعاد ومناقشة تفاصيل التنفيذ مع المستثمرين والعملاء.",
    locationButton: "الاتجاهات والملاحة عبر Google Maps",
    
    estimateTitle: "مستشار التخطيط التقديري الذكي",
    estimateSubtitle: "احصل على قراءة تقديرية أولية دقيقة لمتطلبات مشروعك الإنشائي بناءً على مساحته ومستوى التشطيب المطلوب.",
    estimateType: "نوع المنشأ المطلوب تشييده",
    estimateArea: "مساحة الأرض الإجمالية المتوفرة",
    estimateFinishing: "مستوى جودة التشطيب والتنفيذ",
    estimateResults: "التقديرات الهندسية المبدئية لمشروعك",
    estimateConcrete: "حجم الخرسانة التقريبي المطلوب",
    estimateSteel: "كمية حديد التسليح المقدرة",
    estimateTimeline: "الجدول الزمني الإجمالي المتوقع للتسليم",
    estimateTeam: "العمالة والمعدات المقترحة للتخصيص",
    estimateTimelineVal: "شهر تقريباً",
    estimateTons: "طن",
    estimateCubic: "متر مكعب",
    estimateFinishesList: {
      structural: "هيكل خرساني فقط (عظم ومباني)",
      deluxe: "تشطيب ديلوكس فاخر عالي الجودة",
      luxury: "تشطيب فاخر VIP ومواصفات حصرية",
      signature: "تشطيب الامتياز الملكي Signature Elite"
    },
    estimateCTA: "إرسال المواصفات الفنية للمهندس المختص عبر WhatsApp",
    
    contactTitle: "لنبدأ نقاش مشروعكم اليوم",
    contactSubtitle: "فريق الاستشارات والمبيعات الهندسية في شركة الامتياز جاهز تماماً للرد على استفساراتكم وصياغة العروض الفنية.",
    contactFormName: "اسمك الكريم",
    contactFormPhone: "رقم الهاتف الفعال",
    contactFormService: "الخدمة المطلوبة",
    contactFormMessage: "تفاصيل الموقع أو استفسارك المبدئي",
    contactFormSubmit: "إرسال طلب الاستشارة عبر WhatsApp",
    contactFormSubmitDirect: "تأكيد إرسال الرسالة السريعة",
    contactSuccess: "تم إعداد مسودة الرسالة بنجاح. سيتم توجيهك الآن إلى تطبيق WhatsApp لمتابعة النقاش مع الإدارة الهندسية.",
    
    footerRights: "جميع الحقوق محفوظة لشركة الامتياز للمقاولات العامة ©",
    footerConcept: "الهوية الرقمية الرسمية تم تصميمها وصقلها وفق أعلى المعايير الفنية والجمالية لتعكس حجم وهيبة أعمالنا."
  },
  en: {
    navHome: "Home",
    navServices: "Services",
    navProjects: "Projects",
    navWhyUs: "Why Al Imtiaz",
    navLocation: "Geographical Location",
    navEstimate: "Project Estimator",
    navContact: "Contact Us",
    
    heroTitle: "Shaping the Present, Building the Future",
    heroSubtitle: "Al Imtiaz General Contracting - Creative engineering and pristine execution according to world-class standards.",
    heroCTA_call: "Call Now",
    heroCTA_whatsapp: "Direct WhatsApp",
    heroCTA_projects: "Browse Portfolio",
    heroCTA_maps: "Our Location on Maps",
    
    introTitle: "Pioneering Strength & Architectural Trust",
    introSubtitle: "An integrated engineering enterprise specialized in constructing majestic commercial, residential, and industrial developments.",
    introText1: "At Al Imtiaz General Contracting, we firmly believe that building is not merely concrete pours and steel erection, but rather the concrete manifestation of ambitious dreams and substantial investments that merit the highest degree of precision. Over years of consistent structural excellence, we have established ourselves as the first choice of strategic partners.",
    introText2: "Relying on our seasoned board of specialized engineers, safety supervisors, and our massive, wholly-owned fleet of state-of-the-art construction machinery, we convert the most advanced blueprints into resilient architectural monuments that boast both extreme durability and gorgeous aesthetic value.",
    
    servicesTitle: "Engineering & Construction Services",
    servicesSubtitle: "A premium suite of integrated engineering services executed with advanced technologies and meticulous quality.",
    
    whyUsTitle: "Why Leaders Appoint Al Imtiaz",
    whyUsSubtitle: "The core pillars of structural strength, financial transparency, and punctuality that make us the premium contractor of choice.",
    
    projectsTitle: "Masterpieces of Engineering",
    projectsSubtitle: "A carefully curated gallery representing our structural feats and delivered industrial complexes.",
    projectsFilterAll: "All Masterpieces",
    projectsFilterConcrete: "Concrete works",
    projectsFilterSteel: "Steel Structures",
    projectsFilterFinishes: "VIP Finishes",
    projectsFilterInfra: "Civil Infrastructure",
    
    statsTitle: "Dynamic Field Statistics",
    statsSubtitle: "An active resume of continuous milestones and absolute compliance with safety regulations.",
    statsExp: "15+ Years",
    statsExpSub: "Of structural leadership & continuous growth",
    statsProj: "250+ Executed Projects",
    statsProjSub: "Delivered to absolute technical satisfaction",
    statsMach: "40+ Heavy Equipment Units",
    statsMachSub: "Guaranteeing smooth and un-interrupted site operations",
    statsSafety: "100% On-Site Safety",
    statsSafetySub: "A perfectly enforced zero-accident environment",
    
    instaTitle: "Live Field Coverage",
    instaSubtitle: "Follow our structural daily updates, steel framing setups, and architectural finishing live on Instagram.",
    instaCTA: "Follow @65q_aa on Instagram",
    instaPost1: "Heavy mass-concrete pouring works for major commercial foundations.",
    instaPost2: "Precision lifting of massive steel structural girders for logistics hubs.",
    instaPost3: "Premium finishing details inside our bespoke luxury residential villas.",
    
    locationTitle: "Geographical HQ & Corporate Offices",
    locationSubtitle: "We invite you to our central headquarters to discuss blueprints, spatial designs, and delivery timelines.",
    locationDesc: "The corporate headquarters of Al Imtiaz General Contracting is situated in an easily accessible premium district, equipped with boardrooms and visualization technologies designed to outline project milestones and handle investment inquiries.",
    locationButton: "Open Google Maps Navigation",
    
    estimateTitle: "Smart Project Engineering Estimator",
    estimateSubtitle: "Obtain immediate initial engineering projections regarding material amounts and timeline based on your specific requirements.",
    estimateType: "Proposed Structure Category",
    estimateArea: "Total Project Land Area",
    estimateFinishing: "Execution & Finish Grade",
    estimateResults: "Estimated Engineering Projections",
    estimateConcrete: "Estimated Concrete Volume Needed",
    estimateSteel: "Estimated Rebar Volume Needed",
    estimateTimeline: "Projected Handover Timeline",
    estimateTeam: "Recommended Heavy Asset Allocation",
    estimateTimelineVal: "Approx. Months",
    estimateTons: "Tons",
    estimateCubic: "Cubic Meters",
    estimateFinishesList: {
      structural: "Skeleton Structure Only (عظم ومباني)",
      deluxe: "Deluxe Modern High-End Finish",
      luxury: "Luxury Premium VIP Architecture",
      signature: "Sovereign Signature Al Imtiaz Exclusive"
    },
    estimateCTA: "Send Structural specs to Lead Engineer on WhatsApp",
    
    contactTitle: "Initiate Your Project Discussion Today",
    contactSubtitle: "Our specialized consulting and architectural board is prepared to evaluate your blueprints and furnish detailed proposals.",
    contactFormName: "Your Reputable Name",
    contactFormPhone: "Active Phone Number",
    contactFormService: "Required Department",
    contactFormMessage: "Project Scope or Specific Inquiry",
    contactFormSubmit: "Submit Consultation Request via WhatsApp",
    contactFormSubmitDirect: "Send Direct Quick Message",
    contactSuccess: "Draft message prepared successfully. Redirecting you to WhatsApp to engage directly with our senior management.",
    
    footerRights: "All Rights Reserved for Al Imtiaz General Contracting ©",
    footerConcept: "Official digital identity engineered and curated to elite international design and aesthetic criteria."
  }
};

export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [scrolled, setScrolled] = useState(false);
  
  // Interactive Project Estimator State
  const [projectType, setProjectType] = useState<'residential' | 'commercial' | 'industrial' | 'infrastructure'>('commercial');
  const [area, setArea] = useState<number>(1000);
  const [finishGrade, setFinishGrade] = useState<'structural' | 'deluxe' | 'luxury' | 'signature'>('luxury');
  
  // Quick Contact state
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientMsg, setClientMsg] = useState('');
  const [clientDept, setClientDept] = useState('General Contracting');
  const [feedback, setFeedback] = useState('');

  // Handle scroll events to style navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update HTML document lang & dir dynamically
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Project Estimator Calculations based on physical engineering coefficients
  const calculateEstimates = () => {
    let concreteCoeff = 0.35; // cubic meters per sqm of land
    let steelCoeff = 0.045;   // tons of rebar per sqm of land
    let baseMonths = 8;
    
    if (projectType === 'industrial') {
      concreteCoeff = 0.22;
      steelCoeff = 0.038;
      baseMonths = 6;
    } else if (projectType === 'commercial') {
      concreteCoeff = 0.42;
      steelCoeff = 0.055;
      baseMonths = 12;
    } else if (projectType === 'infrastructure') {
      concreteCoeff = 0.18;
      steelCoeff = 0.015;
      baseMonths = 5;
    }

    // Multiply by finish coefficients
    let finishMultiplier = 1.0;
    if (finishGrade === 'structural') finishMultiplier = 0.7;
    else if (finishGrade === 'luxury') finishMultiplier = 1.25;
    else if (finishGrade === 'signature') finishMultiplier = 1.45;

    const concreteVol = Math.round(area * concreteCoeff * finishMultiplier);
    const steelTons = Math.round(area * steelCoeff * finishMultiplier);
    const months = Math.round(baseMonths * Math.sqrt(area / 1000) * (finishGrade === 'structural' ? 0.8 : 1.1));

    return {
      concrete: concreteVol,
      steel: steelTons,
      duration: months < 4 ? 4 : months,
      assets: projectType === 'industrial' 
        ? (lang === 'ar' ? 'رافعات تلسكوبية، شاحنات نقل ثقيلة، جرافات تسوية' : 'Telescopic Cranes, Heavy Logistics Haulers, Graders')
        : (lang === 'ar' ? 'محطات ضخ خرسانة مستمرة، أجهزة ليزرية للمستويات، مداحل ثقيلة' : 'Continuous Pumping stations, Laser leveling tools, Heavy rollers')
    };
  };

  const estimates = calculateEstimates();

  // Redirect to WhatsApp with pre-filled professional message
  const handleEstimatorSubmit = () => {
    const textAr = `السلام عليكم شركة الامتياز للمقاولات العامة. قمت باستخدام مستشار التخطيط التقديري في موقعكم وأرغب بمناقشة مشروعي:
- نوع المشروع: ${projectType}
- المساحة المقدرة: ${area} متر مربع
- جودة التشطيب: ${dict.ar.estimateFinishesList[finishGrade]}
- التقدير الأولي: الخرسانة (${estimates.concrete} م³)، الحديد (${estimates.steel} طن)، المدة (${estimates.duration} شهر).
الرجاء التواصل معي لترتيب موعد في المقر الرئيسي.`;

    const textEn = `Hello Al Imtiaz General Contracting team, I calculated my project estimates via your digital platform:
- Project Type: ${projectType}
- Est. Area: ${area} sqm
- Finish level: ${dict.en.estimateFinishesList[finishGrade]}
- Estimates: Concrete (${estimates.concrete} m³), Rebar (${estimates.steel} Tons), Duration (${estimates.duration} Months).
Please get in touch with me to schedule a meeting at your headquarters.`;

    const finalMsg = encodeURIComponent(lang === 'ar' ? textAr : textEn);
    window.open(`https://wa.me/9647706506653?text=${finalMsg}`, '_blank');
  };

  // Redirect for Quick Message form
  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      setFeedback(lang === 'ar' ? 'الرجاء إدخال الاسم ورقم الهاتف لمتابعة التواصل' : 'Please provide both name and phone number');
      return;
    }
    const textAr = `مرحباً شركة الامتياز للمقاولات العامة، أنا العميل ${clientName}. 
- رقم هاتفي: ${clientPhone}
- استفساري بخصوص قسم: ${clientDept}
- تفاصيل الرسالة: ${clientMsg || 'لا توجد تفاصيل إضافية، أود اتصالاً هاتفياً'}
أرجو التواصل معي في أقرب وقت ممكن لمناقشة التفاصيل.`;

    const textEn = `Hello Al Imtiaz General Contracting, I am client ${clientName}.
- My Phone: ${clientPhone}
- Inquiry department: ${clientDept}
- Message: ${clientMsg || 'No details provided, I request a direct phone callback'}
Please contact me as soon as possible to proceed.`;

    const finalMsg = encodeURIComponent(lang === 'ar' ? textAr : textEn);
    setFeedback(lang === 'ar' ? dict.ar.contactSuccess : dict.en.contactSuccess);
    
    setTimeout(() => {
      window.open(`https://wa.me/9647870255077?text=${finalMsg}`, '_blank');
      setFeedback('');
    }, 2500);
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const activeDict = dict[lang];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0f121a] text-[#F3F4F6] relative blueprint-grid-fine selection:bg-[#E5A93C] selection:text-black overflow-x-hidden">
      
      {/* Luxurious Technical Layout Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 blueprint-grid-major opacity-30"></div>
      
      {/* Floating crosshair details to simulate premium physical blueprint drawings */}
      <div className="absolute top-24 left-10 text-[10px] font-mono text-[#E5A93C]/25 pointer-events-none select-none hidden md:block tracking-widest">
        [CO_ORD_X: 33.3152° N, 44.3661° E] | ELEV_DET-A
      </div>
      <div className="absolute top-96 right-10 text-[10px] font-mono text-[#E5A93C]/25 pointer-events-none select-none hidden md:block tracking-widest">
        SCALE 1:50 | DRAFT_REF: AL-IMTIAZ-2026
      </div>
      <div className="absolute bottom-[15%] left-12 text-[10px] font-mono text-[#E5A93C]/25 pointer-events-none select-none hidden md:block tracking-widest">
        ENGINEERING CORE: COMPLETED_STAGE_III
      </div>

      {/* Cinematic Studio Light Beams */}
      <div className="absolute top-[5%] left-[-10%] w-[60vw] h-[60vw] rounded-full ambient-glow-yellow pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full ambient-glow-bronze pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[55vw] h-[55vw] rounded-full ambient-glow-yellow opacity-40 pointer-events-none z-0"></div>

      {/* FIXED PREMIUM NAVIGATION BAR */}
      <header id="header" className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#121620]/90 backdrop-blur-xl border-b border-[#E5A93C]/20 shadow-2xl py-3' 
          : 'bg-transparent py-5 border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand Anchor */}
          <a href="#" className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]" id="nav-brand-logo">
            <AlImtiazLogo className="h-10 sm:h-12 md:h-14 w-auto" color="#F3F4F6" accentColor="#E5A93C" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-semibold text-sm tracking-wider">
            <a href="#about" className="hover:text-[#E5A93C] transition-colors duration-300">{activeDict.navHome}</a>
            <a href="#services" className="hover:text-[#E5A93C] transition-colors duration-300">{activeDict.navServices}</a>
            <a href="#estimator" className="hover:text-[#E5A93C] transition-colors duration-300">{activeDict.navEstimate}</a>
            <a href="#projects" className="hover:text-[#E5A93C] transition-colors duration-300">{activeDict.navProjects}</a>
            <a href="#whyus" className="hover:text-[#E5A93C] transition-colors duration-300">{activeDict.navWhyUs}</a>
            <a href="#location" className="hover:text-[#E5A93C] transition-colors duration-300">{activeDict.navLocation}</a>
          </nav>

          {/* Quick Contact & Multi-language Toggles */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Language Selection Badge */}
            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-[#E5A93C] bg-white/5 hover:bg-white/10 transition-all duration-300 text-xs sm:text-sm font-semibold text-[#E5A93C] cursor-pointer"
              aria-label="Toggle language"
              id="lang-toggle-button"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* Direct Instant WhatsApp Callout */}
            <a 
              href="https://wa.me/9647706506653" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md bg-[#E5A93C] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#c99131] shadow-lg shadow-[#E5A93C]/10 transition-all duration-300"
              id="nav-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
            </a>
          </div>
        </div>
      </header>

      {/* BREATHTAKING HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-cover bg-center" id="hero-showcase">
        {/* Layer 1: Cinematic Industrial Construction Backdrop */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center scale-105 filter brightness-50"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80')",
          }}
        ></div>
        
        {/* Layer 2: Luxurious Blueprint & Overlay Grid Mask */}
        <div className="absolute inset-0 z-1 bg-[#0f121a]/85 blueprint-grid mix-blend-overlay"></div>
        <div className="absolute inset-0 z-2 bg-gradient-to-b from-transparent via-[#0f121a]/40 to-[#0f121a]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 md:pt-20">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5A93C]/30 bg-[#E5A93C]/10 text-[#E5A93C] font-semibold text-xs sm:text-sm mb-6 uppercase tracking-wider animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[#E5A93C]"></span>
            {lang === 'ar' ? 'شركة الامتياز للمقاولات العامة والأعمال الهندسية' : 'Al Imtiaz Co. - Premium General Contracting'}
          </div>

          {/* Majestic Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-2xl">
            <span className="block text-white font-black">{activeDict.heroTitle}</span>
            <span className="block mt-2 gold-metallic-text py-2">
              {lang === 'ar' ? 'هندسة الإبداع ودقة التنفيذ' : 'Precision & Creative Engineering'}
            </span>
          </h1>

          {/* Refined Subtitle */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
            {activeDict.heroSubtitle}
          </p>

          {/* Action-Driving Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6">
            
            {/* Primary Action Button: WhatsApp */}
            <a 
              href="https://wa.me/9647706506653"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded btn-gold-metallic text-black font-extrabold tracking-wider transition-all duration-300 text-center cursor-pointer"
              id="hero-whatsapp-btn"
            >
              {activeDict.heroCTA_whatsapp}
            </a>

            {/* Direct Phone Line */}
            <a 
              href="tel:07706506653"
              className="w-full sm:w-auto px-8 py-4 rounded border-2 border-white/30 hover:border-[#E5A93C] text-white hover:text-[#E5A93C] font-bold tracking-wider hover:bg-white/5 backdrop-blur-md active:scale-95 transition-all duration-300 text-center cursor-pointer"
              id="hero-call-btn"
            >
              {activeDict.heroCTA_call}
            </a>

            {/* Browse Portfolio Button */}
            <a 
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded border border-white/10 hover:border-[#E5A93C]/40 bg-white/5 hover:bg-[#E5A93C]/10 text-gray-200 hover:text-[#E5A93C] font-semibold tracking-wider backdrop-blur-md transition-all duration-300 text-center cursor-pointer"
              id="hero-projects-btn"
            >
              {activeDict.heroCTA_projects}
            </a>

            {/* Open Location Direct Maps Link */}
            <a 
              href="https://maps.app.goo.gl/oTe9etVKHGQnR3SR8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded border border-[#E5A93C]/20 bg-[#E5A93C]/5 hover:bg-[#E5A93C]/15 text-[#E5A93C] font-semibold tracking-wider transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer"
              id="hero-map-btn"
            >
              <MapPin className="w-4 h-4 text-[#E5A93C]" />
              <span>{activeDict.heroCTA_maps}</span>
            </a>
          </div>

          {/* Quick Core Real Numbers Strip - Luxury Technical Glass */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16 p-6 rounded glass-gold-card relative blueprint-bracket">
            <div className="text-center">
              <a href="tel:07706506653" className="block group/phone hover:scale-105 transition-all duration-300">
                <p className="text-3xl sm:text-4xl font-extrabold gold-metallic-text hover:underline">07706506653</p>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold group-hover/phone:text-[#E5A93C] transition-colors">{lang === 'ar' ? 'الخط الساخن الأول' : 'Primary Hotline'}</p>
              </a>
            </div>
            <div className="text-center border-r md:border-r border-[#E5A93C]/10">
              <a href="tel:07870255077" className="block group/phone hover:scale-105 transition-all duration-300">
                <p className="text-3xl sm:text-4xl font-extrabold gold-metallic-text hover:underline">07870255077</p>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold group-hover/phone:text-[#E5A93C] transition-colors">{lang === 'ar' ? 'الخط الهاتفي الثاني' : 'Secondary Line'}</p>
              </a>
            </div>
            <div className="text-center border-r border-[#E5A93C]/10">
              <a href="https://instagram.com/65q_aa" target="_blank" rel="noopener noreferrer" className="block group/insta hover:scale-105 transition-all duration-300">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#E5A93C] hover:underline">@65q_aa</p>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold group-hover/insta:text-white transition-colors">{lang === 'ar' ? 'حساب إنستغرام الرسمي' : 'Official Instagram'}</p>
              </a>
            </div>
            <div className="text-center border-r border-[#E5A93C]/10">
              <p className="text-3xl sm:text-4xl font-extrabold text-white">العراق</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold">{lang === 'ar' ? 'المقر المعتمد' : 'Registered Office'}</p>
            </div>
          </div>

        </div>
      </section>

      {/* REASSURING CORPORATE BRAND STORY */}
      <section id="about" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#0f121a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Official circular logo matching the Instagram profile */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
              <div className="relative group p-4 rounded-full bg-gradient-to-tr from-[#E5A93C] to-transparent shadow-2xl">
                {/* Real-World Instagram profile badge representation in pristine high fidelity */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-white flex flex-col items-center justify-center p-3 shadow-inner transform group-hover:scale-[1.03] transition-transform duration-500 relative overflow-hidden">
                  
                  {/* Styled Architectural Logo Silhouette representing the client profile image */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-[#111111]">
                    
                    {/* The pine trees and hill details exactly like the profile badge */}
                    <div className="flex items-end justify-center mb-1">
                      <svg viewBox="0 0 160 70" className="w-40 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Sun/Hill background circle */}
                        <circle cx="80" cy="55" r="32" fill="#e5e5e5" opacity="0.6" />
                        
                        {/* Soft landscape curve */}
                        <path d="M 0 55 Q 80 40, 160 55" stroke="#777777" strokeWidth="2.5" />
                        
                        {/* Left Side Cabin Roofs */}
                        <path d="M 15 50 L 35 32 L 55 50" stroke="#111111" strokeWidth="3" fill="#ffffff" strokeLinejoin="round" />
                        <rect x="31" y="41" width="8" height="8" stroke="#111111" strokeWidth="1.5" fill="#ffffff" />
                        
                        {/* Central High-end Villa Structure */}
                        <path d="M 45 50 L 85 18 L 125 50" stroke="#111111" strokeWidth="4" fill="#ffffff" strokeLinejoin="round" />
                        <path d="M 77 38 A 8 8 0 0 1 93 38" stroke="#111111" strokeWidth="2" fill="#ffffff" />
                        <line x1="85" y1="30" x2="85" y2="38" stroke="#111111" strokeWidth="2" />

                        {/* Right side support roof */}
                        <path d="M 115 50 L 135 32 L 155 50" stroke="#111111" strokeWidth="3" fill="#ffffff" strokeLinejoin="round" />

                        {/* Evergreens */}
                        <polygon points="5,50 12,25 19,50" fill="#2d5a27" />
                        <polygon points="140,50 147,25 154,50" fill="#2d5a27" />
                      </svg>
                    </div>

                    {/* Logo typography in rich high contrast */}
                    <p className="text-lg font-black tracking-tight font-sans text-center mt-1 text-black leading-none">شركة الامتياز</p>
                    <p className="text-sm font-extrabold tracking-widest text-gray-800 uppercase leading-none mt-0.5">ALIMTIYAZ CO.</p>
                    <p className="text-[9px] font-bold text-gray-600 mt-1 border-t border-gray-300 pt-0.5 tracking-tight">للمقاولات العــــامـة</p>
                  </div>
                  
                  {/* Ambient glare overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest font-semibold font-mono">
                {lang === 'ar' ? 'شعار الثقة والأمان الإنشائي المعتمد' : 'Our Official Seal of Structural Excellence'}
              </p>
            </div>

            {/* Right Column: Dynamic corporate values and copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[#E5A93C] uppercase text-xs sm:text-sm font-extrabold tracking-widest block">
                  {lang === 'ar' ? 'تاريخ صلب ومستقبل واعد' : 'FOUNDATION OF TRUST'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {activeDict.introTitle}
                </h2>
                <p className="text-[#E5A93C] font-semibold text-sm sm:text-base">
                  {activeDict.introSubtitle}
                </p>
              </div>

              <div className="space-y-4 text-gray-300 font-light leading-relaxed text-sm sm:text-base">
                <p>{activeDict.introText1}</p>
                <p>{activeDict.introText2}</p>
              </div>

              {/* Fast interactive contact anchors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded glass-gold-card relative blueprint-bracket border border-[#E5A93C]/10 flex items-center gap-3 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded bg-[#E5A93C]/10 flex items-center justify-center text-[#E5A93C]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-400">{lang === 'ar' ? 'المهندس الإداري العام' : 'Chief Engineer Hotline'}</p>
                    <a href="tel:07706506653" className="text-sm font-bold text-white hover:text-[#E5A93C] transition-colors font-mono">07706506653</a>
                  </div>
                </div>

                <div className="p-4 rounded glass-gold-card relative blueprint-bracket border border-[#E5A93C]/10 flex items-center gap-3 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded bg-[#E5A93C]/10 flex items-center justify-center text-[#E5A93C]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-400">{lang === 'ar' ? 'الاستشارات والمبيعات' : 'Direct Inquiries'}</p>
                    <a href="tel:07870255077" className="text-sm font-bold text-white hover:text-[#E5A93C] transition-colors font-mono">07870255077</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SPECIALIZED SERVICES SECTION */}
      <section id="services" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#0f121a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header block */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#E5A93C] uppercase text-xs sm:text-sm font-extrabold tracking-widest block">
              {lang === 'ar' ? 'حلول هندسية متكاملة' : 'SPECIALIZED DEPARTMENTS'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              {activeDict.servicesTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent mx-auto my-3"></div>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              {activeDict.servicesSubtitle}
            </p>
          </div>

          {/* Premium Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid-box">
            {services.map((service) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={service.id} 
                  className="group relative p-6 rounded glass-gold-card blueprint-bracket hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative glowing background node */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#E5A93C]/5 blur-xl group-hover:bg-[#E5A93C]/15 transition-colors duration-500"></div>
                  
                  {/* Luxury Layout icon */}
                  <div className="w-12 h-12 rounded bg-gradient-to-br from-[#111] to-[#222] border border-[#E5A93C]/20 flex items-center justify-center text-[#E5A93C] mb-6 group-hover:scale-110 group-hover:from-[#E5A93C] group-hover:to-[#ffda85] group-hover:text-black transition-all duration-500 shadow-lg">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#E5A93C] transition-colors duration-300">
                    {lang === 'ar' ? service.titleAr : service.titleEn}
                  </h3>

                  {/* Short Description */}
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
                    {lang === 'ar' ? service.descAr : service.descEn}
                  </p>

                  {/* Aesthetic technical tag line */}
                  <div className="tech-dashed-line my-3"></div>
                  <div className="text-[10px] font-mono text-gray-500 flex justify-between">
                    <span>AL-IMTIAZ SPEC: #{service.id * 12 + 104}</span>
                    <span>SCALE: AUTHENTIC</span>
                  </div>

                  {/* Clean CTA Line inside card */}
                  <div className="flex items-center gap-1.5 text-xs text-[#E5A93C] font-semibold opacity-60 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                    <span>{lang === 'ar' ? 'استفسر الآن' : 'Inquire Details'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>

                  {/* Direct Overlay Click handler */}
                  <a 
                    href={`https://wa.me/9647706506653?text=${encodeURIComponent(
                      lang === 'ar' 
                        ? `مرحباً شركة الامتياز. أود الاستفسار عن تفاصيل الخدمة: ${service.titleAr}` 
                        : `Hello Al Imtiaz. I would like to inquire about details for: ${service.titleEn}`
                    )}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 cursor-pointer"
                    aria-label={`Inquire about ${service.titleEn}`}
                  ></a>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* INTERACTIVE ESTIMATOR & PLANNING TOOL */}
      <section id="estimator" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#0f121a] blueprint-grid-fine">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#E5A93C] uppercase text-xs sm:text-sm font-extrabold tracking-widest block">
              {lang === 'ar' ? 'أداة تقديرية تفاعلية' : 'PROJECT CONFIGURATOR'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {activeDict.estimateTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent mx-auto my-3"></div>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              {activeDict.estimateSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Form Inputs (Left) */}
            <div className="lg:col-span-7 glass-gold-card relative blueprint-bracket p-6 sm:p-8 rounded border border-white/5 space-y-8 flex flex-col justify-between">
              
              {/* Step 1: Select structure category */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-[#E5A93C] tracking-wider block uppercase">
                  {activeDict.estimateType}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'commercial', titleAr: 'مبنى تجاري', titleEn: 'Commercial Hub' },
                    { id: 'residential', titleAr: 'مجمع سكني / فيلا', titleEn: 'Residential estate' },
                    { id: 'industrial', titleAr: 'منشأة صناعية', titleEn: 'Industrial depot' },
                    { id: 'infrastructure', titleAr: 'بنية تحتية', titleEn: 'Infrastructure development' }
                  ].map((t) => (
                    <button
                       key={t.id}
                       onClick={() => setProjectType(t.id as any)}
                       className={`p-4 rounded border text-left font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                        projectType === t.id 
                          ? 'border-[#E5A93C] bg-[#E5A93C]/20 text-[#E5A93C] shadow-lg shadow-[#E5A93C]/5' 
                          : 'border-white/5 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="block">{lang === 'ar' ? t.titleAr : t.titleEn}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Set estimated land area */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-semibold tracking-wider uppercase">
                  <span className="text-[#E5A93C]">{activeDict.estimateArea}</span>
                  <span className="text-[#E5A93C] text-lg font-bold">{area.toLocaleString()} {lang === 'ar' ? 'متر مربع' : 'sqm'}</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="15000" 
                  step="100"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  className="w-full accent-[#E5A93C] bg-white/10 h-2 rounded-lg cursor-pointer"
                  id="area-range-slider"
                />
                <div className="flex justify-between text-xs text-gray-500 font-mono">
                  <span>100 {lang === 'ar' ? 'م²' : 'sqm'}</span>
                  <span>5,000 {lang === 'ar' ? 'م²' : 'sqm'}</span>
                  <span>10,000 {lang === 'ar' ? 'م²' : 'sqm'}</span>
                  <span>15,000 {lang === 'ar' ? 'م²' : 'sqm'}</span>
                </div>
              </div>

              {/* Step 3: Select finish tier */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-[#E5A93C] tracking-wider block uppercase">
                  {activeDict.estimateFinishing}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'structural', label: activeDict.estimateFinishesList.structural },
                    { id: 'deluxe', label: activeDict.estimateFinishesList.deluxe },
                    { id: 'luxury', label: activeDict.estimateFinishesList.luxury },
                    { id: 'signature', label: activeDict.estimateFinishesList.signature }
                  ].map((grade) => (
                    <button
                      key={grade.id}
                      onClick={() => setFinishGrade(grade.id as any)}
                      className={`p-3.5 rounded border text-left text-xs font-semibold transition-all duration-300 cursor-pointer ${
                        finishGrade === grade.id 
                          ? 'border-[#E5A93C] bg-[#E5A93C]/20 text-[#E5A93C] shadow-lg' 
                          : 'border-white/5 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {grade.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Calculations Result Outputs (Right) */}
            <div className="lg:col-span-5 glass-gold-card p-6 sm:p-8 rounded border-2 border-[#E5A93C]/20 flex flex-col justify-between shadow-2xl relative overflow-hidden blueprint-bracket">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#E5A93C]/5 blur-3xl"></div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                  <Info className="w-5 h-5 text-[#E5A93C]" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    {activeDict.estimateResults}
                  </h3>
                </div>

                {/* Concrete volume */}
                <div className="p-4 rounded bg-[#070709] border border-[#E5A93C]/10 hover:border-[#E5A93C]/30 transition-all duration-300">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-mono">{activeDict.estimateConcrete}</p>
                  <p className="text-2xl sm:text-3xl font-black text-[#E5A93C]">
                    ~ {estimates.concrete.toLocaleString()} <span className="text-xs sm:text-sm font-semibold text-white">{activeDict.estimateCubic}</span>
                  </p>
                </div>

                {/* Steel rebar volume */}
                <div className="p-4 rounded bg-[#070709] border border-[#E5A93C]/10 hover:border-[#E5A93C]/30 transition-all duration-300">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-mono">{activeDict.estimateSteel}</p>
                  <p className="text-2xl sm:text-3xl font-black text-[#E5A93C]">
                    ~ {estimates.steel.toLocaleString()} <span className="text-xs sm:text-sm font-semibold text-white">{activeDict.estimateTons}</span>
                  </p>
                </div>

                {/* Estimated duration */}
                <div className="p-4 rounded bg-[#070709] border border-white/5">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-mono">{activeDict.estimateTimeline}</p>
                  <p className="text-2xl sm:text-3xl font-black text-white">
                    ~ {estimates.duration} <span className="text-xs sm:text-sm font-semibold text-gray-400">{lang === 'ar' ? 'أشهر تقريباً' : 'Months (est.)'}</span>
                  </p>
                </div>

                {/* Equipment recommendations */}
                <div className="p-4 rounded bg-[#070709] border border-white/5">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-mono">{activeDict.estimateTeam}</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-300 leading-relaxed">
                    {estimates.assets}
                  </p>
                </div>
              </div>

              {/* CTA call to direct action */}
              <button
                onClick={handleEstimatorSubmit}
                className="w-full mt-8 px-6 py-4 rounded btn-gold-metallic text-black font-extrabold tracking-wider transition-all duration-300 text-xs sm:text-sm uppercase flex items-center justify-center gap-2 cursor-pointer"
                id="estimator-whatsapp-submit"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{activeDict.estimateCTA}</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* AWARD-WINNING PORTFOLIO GALLERY */}
      <section id="projects" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#0f121a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#E5A93C] uppercase text-xs sm:text-sm font-extrabold tracking-widest block">
              {lang === 'ar' ? 'صروحنا الهندسية المعمرة' : 'ARCHITECTURAL PORTFOLIO'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              {activeDict.projectsTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent mx-auto my-3"></div>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              {activeDict.projectsSubtitle}
            </p>
          </div>

          {/* Filtering buttons - Modern gold tab pill selectors */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {[
              { id: 'all', title: activeDict.projectsFilterAll },
              { id: 'concrete', title: activeDict.projectsFilterConcrete },
              { id: 'steel', title: activeDict.projectsFilterSteel },
              { id: 'finishes', title: activeDict.projectsFilterFinishes },
              { id: 'infra', title: activeDict.projectsFilterInfra }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 rounded font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  filter === tab.id 
                    ? 'btn-gold-metallic text-black shadow-lg shadow-[#E5A93C]/20 scale-105' 
                    : 'bg-[#181d2a] border border-white/5 hover:border-[#E5A93C]/40 text-gray-300 hover:text-[#E5A93C] hover:bg-[#E5A93C]/5'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Gallery masonry layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-masonry-box">
            {filteredProjects.map((project) => {
              const specs = lang === 'ar' ? project.specsAr : project.specsEn;
              return (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group relative rounded overflow-hidden glass-gold-card blueprint-bracket card-spotlight cursor-pointer transform hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Photo with hover scale zoom */}
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-black/50 border-b border-white/5">
                      <img 
                        src={project.image} 
                        alt={lang === 'ar' ? project.titleAr : project.titleEn}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                        loading="lazy"
                      />
                      {/* Dark gradient fade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030304] via-[#030304]/30 to-transparent opacity-80"></div>
                      
                      {/* Category Overlay Tag */}
                      <span className="absolute top-4 left-4 px-3 py-1 bg-black/85 backdrop-blur-md text-[#E5A93C] border border-[#E5A93C]/30 text-[10px] font-bold uppercase tracking-widest rounded-full font-mono">
                        {project.category}
                      </span>
                    </div>

                    {/* Caption Details */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-[#E5A93C] transition-colors duration-300 line-clamp-1">
                        {lang === 'ar' ? project.titleAr : project.titleEn}
                      </h3>
                      
                      {/* Quick Specifications list */}
                      <div className="grid grid-cols-2 gap-3 text-xs border-t border-white/10 pt-4 font-sans">
                        <div>
                          <span className="text-gray-500 block uppercase tracking-wider text-[9px] font-mono">{lang === 'ar' ? 'المساحة' : 'Scale'}</span>
                          <span className="text-[#E5A93C] font-semibold">{specs.area}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block uppercase tracking-wider text-[9px] font-mono">{lang === 'ar' ? 'المدة الزمنية' : 'Duration'}</span>
                          <span className="text-gray-200 font-semibold">{specs.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <div className="tech-dashed-line mb-3"></div>
                    <div className="flex items-center justify-between text-[11px] text-[#E5A93C] font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                      <span>{lang === 'ar' ? 'تصفح الخصائص الهندسية' : 'View Specifications'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SINGLE PROJECT SPECIFICATION POPUP MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f121a]/95 backdrop-blur-xl animate-fade-in" id="project-details-modal">
          <div className="relative w-full max-w-4xl bg-[#0f121a] rounded border-2 border-[#E5A93C]/30 shadow-[#E5A93C]/15 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col blueprint-bracket">
            
            {/* Close trigger */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 hover:bg-[#E5A93C] text-white hover:text-black transition-colors border border-white/10 cursor-pointer"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Flow */}
            <div className="overflow-y-auto">
              
              {/* Massive Image top showcase */}
              <div className="relative h-64 sm:h-96 w-full bg-black">
                <img 
                  src={selectedProject.image} 
                  alt={lang === 'ar' ? selectedProject.titleAr : selectedProject.titleEn} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030304] via-[#030304]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-[#E5A93C] text-black text-[10px] font-black uppercase tracking-wider rounded-full mb-3 inline-block font-mono">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                    {lang === 'ar' ? selectedProject.titleAr : selectedProject.titleEn}
                  </h3>
                </div>
              </div>

              {/* Description & Technical Specification Table */}
              <div className="p-6 sm:p-8 space-y-6">
                
                <div className="space-y-2">
                  <h4 className="text-[#E5A93C] font-semibold text-sm uppercase tracking-wider font-mono">
                    {lang === 'ar' ? 'نبذة هندسية عن المشروع' : 'Engineering Description'}
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                    {lang === 'ar' ? selectedProject.descAr : selectedProject.descEn}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-mono">
                    {lang === 'ar' ? 'البيانات الفنية والتشغيلية' : 'Technical Specifications Logs'}
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold font-mono">
                    <div className="p-4 rounded bg-black/60 border border-[#E5A93C]/10 flex justify-between items-center">
                      <span className="text-gray-400 text-xs">{lang === 'ar' ? 'مساحة المسطح الكلي' : 'Total Surface Area'}</span>
                      <span className="text-[#E5A93C] font-bold text-xs sm:text-sm">{lang === 'ar' ? selectedProject.specsAr.area : selectedProject.specsEn.area}</span>
                    </div>
                    <div className="p-4 rounded bg-black/60 border border-[#E5A93C]/10 flex justify-between items-center">
                      <span className="text-gray-400 text-xs">{lang === 'ar' ? 'فترة التشييد والتسليم' : 'Construction Period'}</span>
                      <span className="text-[#E5A93C] font-bold text-xs sm:text-sm">{lang === 'ar' ? selectedProject.specsAr.duration : selectedProject.specsEn.duration}</span>
                    </div>
                    <div className="p-4 rounded bg-black/60 border border-[#E5A93C]/10 flex justify-between items-center">
                      <span className="text-gray-400 text-xs">{lang === 'ar' ? 'صيغة ونوع الهيكل المعتمد' : 'Structural Model'}</span>
                      <span className="text-white font-bold text-[10px] sm:text-xs text-right leading-tight max-w-[150px]">{lang === 'ar' ? selectedProject.specsAr.type : selectedProject.specsEn.type}</span>
                    </div>
                    <div className="p-4 rounded bg-black/60 border border-[#E5A93C]/10 flex justify-between items-center">
                      <span className="text-gray-400 text-xs">{lang === 'ar' ? 'حالة الاعتماد النهائي' : 'Verification Status'}</span>
                      <span className="text-green-400 font-bold text-xs sm:text-sm flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse"></span>
                        {lang === 'ar' ? selectedProject.specsAr.status : selectedProject.specsEn.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Enquiry for this specific project */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded bg-[#E5A93C]/5 border border-[#E5A93C]/20 pt-6">
                  <div className="text-xs sm:text-sm text-gray-300 font-light">
                    {lang === 'ar' 
                      ? 'هل لديكم رغبة بتنفيذ منشأ يحمل خصائص ومساحة مشابهة لهذا المشروع؟' 
                      : 'Interested in constructing a similar development or custom steel layout?'}
                  </div>
                  <a 
                    href={`https://wa.me/9647706506653?text=${encodeURIComponent(
                      lang === 'ar' 
                        ? `السلام عليكم شركة الامتياز. أود الاستفسار عن تفاصيل مشروعكم: ${selectedProject.titleAr} وبناء منشأ مشابه.` 
                        : `Hello Al Imtiaz. I am inquiring about details for: ${selectedProject.titleEn} and construction options.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded btn-gold-metallic text-black font-extrabold text-xs tracking-wider uppercase text-center cursor-pointer"
                  >
                    {lang === 'ar' ? 'استشر بخصوص هذا النموذج' : 'Enquire About This Model'}
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* WHY CHOOSE US (BENTO GRID OF STRUCTURAL STRENGTH) */}
      <section id="whyus" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#0f121a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#E5A93C] uppercase text-xs sm:text-sm font-extrabold tracking-widest block">
              {lang === 'ar' ? 'معايير الامتياز والتفوق' : 'THE FOUNDATIONS OF STRENGTH'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              {activeDict.whyUsTitle}
            </h2>
            <div className="w-20 h-1 bg-[#E5A93C] mx-auto my-3"></div>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              {activeDict.whyUsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="whyus-bento-box">
            {whyChooseUs.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={pillar.id}
                  className="group relative p-6 sm:p-8 rounded glass-gold-card blueprint-bracket card-spotlight transition-all duration-500 overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Golden icon decoration */}
                    <div className="w-10 h-10 rounded-full bg-[#E5A93C]/10 flex items-center justify-center text-[#E5A93C] group-hover:scale-110 group-hover:bg-[#E5A93C] group-hover:text-black transition-all duration-500">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#E5A93C] transition-colors duration-300">
                      {lang === 'ar' ? pillar.titleAr : pillar.titleEn}
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                      {lang === 'ar' ? pillar.descAr : pillar.descEn}
                    </p>
                  </div>

                  {/* Corner aesthetic details */}
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#E5A93C] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              );
            })}
          </div>

          {/* Core corporate achievements counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="p-6 rounded glass-gold-card relative blueprint-bracket text-center space-y-2 hover:-translate-y-1 transition-all duration-300">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black gold-metallic-text">15+</p>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">{activeDict.statsExp}</h4>
              <p className="text-xs text-gray-500">{activeDict.statsExpSub}</p>
            </div>
            
            <div className="p-6 rounded glass-gold-card relative blueprint-bracket text-center space-y-2 hover:-translate-y-1 transition-all duration-300">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black gold-metallic-text">250+</p>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">{activeDict.statsProj}</h4>
              <p className="text-xs text-gray-500">{activeDict.statsProjSub}</p>
            </div>

            <div className="p-6 rounded glass-gold-card relative blueprint-bracket text-center space-y-2 hover:-translate-y-1 transition-all duration-300">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black gold-metallic-text">40+</p>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">{activeDict.statsMach}</h4>
              <p className="text-xs text-gray-500">{activeDict.statsMachSub}</p>
            </div>

            <div className="p-6 rounded glass-gold-card relative blueprint-bracket text-center space-y-2 hover:-translate-y-1 transition-all duration-300">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black gold-metallic-text">100%</p>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">{activeDict.statsSafety}</h4>
              <p className="text-xs text-gray-500">{activeDict.statsSafetySub}</p>
            </div>
          </div>

        </div>
      </section>

      {/* DYNAMIC INSTAGRAM PULSE SHIELD (NO FOLLOWERS AS MANDATED) */}
      <section className="py-20 bg-black/90 relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: instagram identity and description */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#E5A93C] uppercase text-xs sm:text-sm font-extrabold tracking-widest block">
                {lang === 'ar' ? 'التغطية الإعلامية الميدانية' : 'SOCIAL PULSE'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                {activeDict.instaTitle}
              </h2>
              <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
                {activeDict.instaSubtitle}
              </p>

              {/* Secure Link button directly opening instagram */}
              <div className="pt-4">
                <a 
                  href="https://instagram.com/65q_aa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded bg-gradient-to-r from-[#d9317a] via-[#f15c41] to-[#f58d38] text-white font-bold text-sm hover:shadow-xl shadow-inner transition-all duration-300 cursor-pointer"
                  id="instagram-pulse-cta"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{activeDict.instaCTA}</span>
                </a>
              </div>
            </div>

            {/* Right side: curated luxury media previews representing official publications */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 1, text: activeDict.instaPost1, img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=500&q=80" },
                  { id: 2, text: activeDict.instaPost2, img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80" },
                  { id: 3, text: activeDict.instaPost3, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80" }
                ].map((post) => (
                  <div key={post.id} className="group relative rounded overflow-hidden aspect-square bg-[#0d0d0d] border border-white/5">
                    <img 
                      src={post.img} 
                      alt="Field Post" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-xs text-[#E5A93C] font-bold tracking-widest mb-1">@65q_aa</p>
                      <p className="text-xs text-white font-light line-clamp-3 leading-normal">{post.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GEOGRAPHICAL HQ & INTERACTIVE MAP */}
      <section id="location" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#0f121a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#E5A93C] uppercase text-xs sm:text-sm font-extrabold tracking-widest block">
              {lang === 'ar' ? 'الوجود الجغرافي والمقر الرئيسي' : 'OUR CENTRAL HQ'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              {activeDict.locationTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent mx-auto my-3"></div>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              {activeDict.locationSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Interactive map or detailed descriptive card */}
            <div className="lg:col-span-5 glass-gold-card blueprint-bracket p-6 sm:p-8 rounded border border-white/5 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded border border-white/10 text-[#E5A93C] text-xs font-bold uppercase tracking-wider font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'الفرع الإداري الرئيسي' : 'ADMINISTRATIVE BRANCH'}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {lang === 'ar' ? 'شركة الامتياز للمقاولات العامة - بغداد، العراق' : 'Al Imtiaz General Contracting - Baghdad, Iraq'}
                </h3>
                
                <p className="text-gray-300 font-light text-xs sm:text-sm leading-relaxed">
                  {activeDict.locationDesc}
                </p>

                <div className="space-y-3 font-semibold text-xs sm:text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></span>
                    <a href="tel:07706506653" className="hover:text-[#E5A93C] hover:underline transition-colors">
                      {lang === 'ar' ? 'هاتف الإدارة: 07706506653' : 'Admin: +9647706506653'}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></span>
                    <a href="tel:07870255077" className="hover:text-[#E5A93C] hover:underline transition-colors">
                      {lang === 'ar' ? 'الاستشارات والمبيعات: 07870255077' : 'Sales: +9647870255077'}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></span>
                    <a href="https://instagram.com/65q_aa" target="_blank" rel="noopener noreferrer" className="hover:text-[#E5A93C] hover:underline transition-colors">
                      {lang === 'ar' ? 'إنستغرام المتابعة الميدانية: 65q_aa' : 'Instagram: @65q_aa'}
                    </a>
                  </p>
                </div>
              </div>

              {/* Direct call to action linking maps link */}
              <div className="pt-8">
                <a 
                  href="https://maps.app.goo.gl/oTe9etVKHGQnR3SR8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 rounded btn-gold-metallic text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
                  id="google-maps-direct-btn"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{activeDict.locationButton}</span>
                </a>
              </div>
            </div>

            {/* Premium styled map preview */}
            <div className="lg:col-span-7 glass-gold-card blueprint-bracket rounded border border-white/5 relative overflow-hidden h-96 lg:h-auto min-h-[350px]">
              {/* Fallback structured map visualization with dark futuristic blueprint coordinate design */}
              <div className="absolute inset-0 blueprint-grid flex flex-col items-center justify-center text-center p-6 bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80')",
                }}
              >
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-[#030304]/90"></div>
                <div className="absolute inset-0 blueprint-grid-fine mix-blend-overlay opacity-30"></div>

                <div className="relative z-10 space-y-6 max-w-md">
                  <div className="w-16 h-16 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/30 flex items-center justify-center text-[#E5A93C] mx-auto animate-bounce shadow-xl">
                    <MapPin className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-white font-extrabold text-base sm:text-lg">
                      {lang === 'ar' ? 'مقر شركة الامتياز للمقاولات' : 'Al Imtiaz General Contracting Headquarters'}
                    </p>
                    <p className="text-xs text-gray-400 font-mono">
                      https://maps.app.goo.gl/oTe9etVKHGQnR3SR8
                    </p>
                  </div>

                  <a 
                    href="https://maps.app.goo.gl/oTe9etVKHGQnR3SR8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded btn-gold-metallic text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
                  >
                    <span>{lang === 'ar' ? 'افتح الاتجاهات الآن' : 'Launch Navigation Direct'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED CONSULTATION & ENQUIRY CONTACT HUB */}
      <section id="contact" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#0f121a] blueprint-grid-fine">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Information panel (Left) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[#E5A93C] uppercase text-xs sm:text-sm font-extrabold tracking-widest block">
                  {lang === 'ar' ? 'قنوات الاتصال المباشرة' : 'CONSULTATION DESK'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {activeDict.contactTitle}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#E5A93C] to-transparent"></div>
                <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
                  {activeDict.contactSubtitle}
                </p>
              </div>

              {/* Direct quick lines card */}
              <div className="p-6 rounded glass-gold-card relative blueprint-bracket border border-white/5 space-y-4 hover:border-[#E5A93C]/20 transition-all duration-300">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold font-mono">{lang === 'ar' ? 'الاتصال السريع ومبيعات الخدمات' : 'HOTLINES & OFFICE CHANNELS'}</p>
                
                <div className="space-y-3 font-semibold text-[#E5A93C] font-mono">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></span>
                    <a href="tel:07706506653" className="hover:underline">07706506653</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></span>
                    <a href="tel:07870255077" className="hover:underline">07870255077</a>
                  </p>
                  <p className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm font-light mt-4 pt-4 border-t border-white/5 font-sans">
                    {lang === 'ar' 
                      ? 'ساعات الاستشارة: السبت إلى الخميس، من 8 صباحاً حتى 6 مساءً.' 
                      : 'Office hours: Sat - Thu, 8:00 AM to 6:00 PM.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form panel (Right) */}
            <div className="lg:col-span-7 glass-gold-card relative blueprint-bracket p-6 sm:p-8 rounded border border-white/10 shadow-2xl">
              <form onSubmit={handleQuickContact} className="space-y-5">
                
                {/* Client Name Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#E5A93C] uppercase tracking-wider block">
                    {activeDict.contactFormName} *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder={lang === 'ar' ? 'الاسم الثلاثي أو اسم الشركة' : 'Full Name or Enterprise Name'}
                    className="w-full px-4 py-3 rounded bg-black/60 border border-white/10 hover:border-white/20 focus:border-[#E5A93C] text-white focus:outline-none focus:ring-1 focus:ring-[#E5A93C]/40 transition-all text-xs sm:text-sm font-medium"
                  />
                </div>

                {/* Client Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#E5A93C] uppercase tracking-wider block">
                    {activeDict.contactFormPhone} *
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="07XXXXXXXXX"
                    className="w-full px-4 py-3 rounded bg-black/60 border border-white/10 hover:border-white/20 focus:border-[#E5A93C] text-white focus:outline-none focus:ring-1 focus:ring-[#E5A93C]/40 transition-all text-xs sm:text-sm font-mono"
                  />
                </div>

                {/* Service type drop-down selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#E5A93C] uppercase tracking-wider block">
                    {activeDict.contactFormService}
                  </label>
                  <select 
                    value={clientDept}
                    onChange={(e) => setClientDept(e.target.value)}
                    className="w-full px-4 py-3 rounded bg-black/60 border border-white/10 focus:border-[#E5A93C] text-white focus:outline-none focus:ring-1 focus:ring-[#E5A93C]/40 transition-all text-xs sm:text-sm font-semibold"
                  >
                    <option value="General Contracting">{lang === 'ar' ? 'المقاولات العامة والإنشاءات' : 'General Contracting & Construction'}</option>
                    <option value="Steel Works">{lang === 'ar' ? 'الهياكل الحديدية والمسقفات' : 'Steel Works & Trusses'}</option>
                    <option value="Concrete Works">{lang === 'ar' ? 'الأعمال الخرسانية المسلحة' : 'Concrete Structures'}</option>
                    <option value="Finishing Works">{lang === 'ar' ? 'التشطيبات الفاخرة والديكور' : 'VIP Interior & Facades'}</option>
                    <option value="Site Preparation">{lang === 'ar' ? 'الأعمال الترابية والتهيئة' : 'Site Grading & Preparation'}</option>
                  </select>
                </div>

                {/* Project Message Scope details */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#E5A93C] uppercase tracking-wider block">
                    {activeDict.contactFormMessage}
                  </label>
                  <textarea 
                    rows={4}
                    value={clientMsg}
                    onChange={(e) => setClientMsg(e.target.value)}
                    placeholder={lang === 'ar' ? 'أدخل مساحة الأرض، المدينة، ونوع المنشأ المطلوب تشييده بالتفصيل...' : 'Describe scale of project, geographic zone, materials requested, and timeline expectations...'}
                    className="w-full px-4 py-3 rounded bg-black/60 border border-white/10 hover:border-white/20 focus:border-[#E5A93C] text-white focus:outline-none focus:ring-1 focus:ring-[#E5A93C]/40 transition-all text-xs sm:text-sm font-medium"
                  ></textarea>
                </div>

                {/* Alert panel for feedbacks */}
                {feedback && (
                  <div className="p-4 rounded bg-[#E5A93C]/10 border border-[#E5A93C]/30 text-xs sm:text-sm font-bold text-[#E5A93C] animate-pulse font-mono">
                    {feedback}
                  </div>
                )}

                {/* Submit trigger button */}
                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full px-6 py-4 rounded btn-gold-metallic text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    id="contact-whatsapp-submit-btn"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{activeDict.contactFormSubmit}</span>
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* LUXURIOUS MULTI-COLUMN CORPORATE FOOTER */}
      <footer className="mt-auto bg-[#121620] border-t border-white/10 text-gray-400 text-sm py-16 relative overflow-hidden">
        
        {/* Subtle decorative bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E5A93C] via-transparent to-[#E5A93C]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Column 1: Brand name and official description */}
            <div className="md:col-span-5 space-y-6">
              <AlImtiazLogo className="h-12 w-auto" color="#fff" accentColor="#E5A93C" />
              <p className="text-xs sm:text-sm font-light leading-relaxed text-gray-400">
                {lang === 'ar' 
                  ? 'صرح هندسي معتمد لتنفيذ كبرى المشاريع العمرانية والصناعية بأعلى مستويات الجودة والالتزام الصارم بجدول التنفيذ وكود الأمان العالمي.' 
                  : 'An established structural reference executing complex construction models with certified safety metrics and premium standards.'}
              </p>
              
              {/* Direct phone and Instagram anchors */}
              <div className="flex items-center gap-3">
                <a 
                  href="https://instagram.com/65q_aa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-[#E5A93C] hover:text-[#E5A93C] flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram Page"
                  id="footer-instagram-link"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a 
                  href="tel:07706506653"
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-[#E5A93C] hover:text-[#E5A93C] flex items-center justify-center transition-all duration-300"
                  aria-label="Phone Hotline"
                  id="footer-phone-link-1"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick navigation links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">
                {lang === 'ar' ? 'روابط التنقل السريع' : 'DIRECT NAVIGATION'}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
                <li><a href="#about" className="hover:text-[#E5A93C] transition-colors">{activeDict.navHome}</a></li>
                <li><a href="#services" className="hover:text-[#E5A93C] transition-colors">{activeDict.navServices}</a></li>
                <li><a href="#estimator" className="hover:text-[#E5A93C] transition-colors">{activeDict.navEstimate}</a></li>
                <li><a href="#projects" className="hover:text-[#E5A93C] transition-colors">{activeDict.navProjects}</a></li>
                <li><a href="#whyus" className="hover:text-[#E5A93C] transition-colors">{activeDict.navWhyUs}</a></li>
                <li><a href="#location" className="hover:text-[#E5A93C] transition-colors">{activeDict.navLocation}</a></li>
              </ul>
            </div>

            {/* Column 3: Contact details and office coordinates */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">
                {lang === 'ar' ? 'المكتب المركزي والمعلومات' : 'HQ CONTACT REGISTRY'}
              </h4>
              <div className="space-y-3 font-medium text-xs sm:text-sm">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                  <a href="https://maps.app.goo.gl/oTe9etVKHGQnR3SR8" target="_blank" rel="noopener noreferrer" className="hover:text-[#E5A93C]">
                    {lang === 'ar' 
                      ? 'العراق، الفرع الرئيسي المعتمد لشركة الامتياز' 
                      : 'Iraq, Al Imtiaz Principal Headquarters Office'}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#E5A93C]" />
                  <a href="tel:07706506653" className="hover:text-white">07706506653</a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#E5A93C]" />
                  <a href="tel:07870255077" className="hover:text-white">07870255077</a>
                </p>
                <p className="flex items-center gap-2.5 text-gray-500 text-xs">
                  <span>{lang === 'ar' ? 'العنوان المعتمد على الخريطة:' : 'Google Maps reference:'}</span>
                  <a href="https://maps.app.goo.gl/oTe9etVKHGQnR3SR8" target="_blank" rel="noopener noreferrer" className="text-[#E5A93C] hover:underline">goo.gl/oTe9etVKHGQnR3SR8</a>
                </p>
              </div>
            </div>

          </div>

          {/* Legal copyrights strip */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="text-gray-500 font-semibold text-center sm:text-left">
              {activeDict.footerRights}
            </p>
            <p className="text-gray-600 font-medium text-center sm:text-right max-w-md">
              {activeDict.footerConcept}
            </p>
          </div>

        </div>
      </footer>

      {/* PERSISTENT FLOATING DIRECT CONTACT UTILITIES (MOBILE FRIENDLY) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3" id="floating-utilities-box">
        
        {/* Floating Quick Call Button */}
        <a 
          href="tel:07706506653"
          className="w-12 h-12 rounded-full bg-white text-black hover:bg-[#E5A93C] hover:text-black flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer border border-white/20"
          title="Direct Call Hotline"
          id="floating-call-utility"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating Direct WhatsApp Button */}
        <a 
          href="https://wa.me/9647706506653"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#E5A93C] text-black hover:bg-[#c99131] flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
          title="Direct WhatsApp Communication"
          id="floating-whatsapp-utility"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>

    </div>
  );
}
