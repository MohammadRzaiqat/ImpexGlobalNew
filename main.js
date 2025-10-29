// ============================================
//  TRANSLATIONS OBJECT (Same as before)
// ============================================
const translations = {
    "en": {
        "navHome": "Home", "navFeatures": "Features", "navVisionMission": "Vision & Mission", "navProducts": "Products", "navContact": "Contact Us", "navExportsImports": "Exports / Imports",
        "heroTitle": "Building the Future with Automotive and Industrial Solutions", "heroSubtitle": "Your trusted partner in high-quality machine parts and automotive solutions",
        "heroBtnGetStarted": "Get Started", "heroBtnBrowseProducts": "Browse Products", "featuresTitle": "Why Choose Us", "featuresSubtitle": "We deliver excellence through quality, reliability, and global reach",
        "feature1Title": "Global Network", "feature1Desc": "Extensive distribution network covering major industrial hubs, ensuring timely delivery and local support.", "feature2Title": "Quality Assured", "feature2Desc": "Certified quality management system ensuring premium grade products that meet international standards.",
        "feature3Title": "Expert Support", "feature3Desc": "24/7 technical support from experienced individuals in case of any customer inquiry.", "vmTitle": "Vision & Mission", "vmSubtitle": "Driving innovation and excellence in industrial solutions",
        "visionTitle": "Our Vision", "visionDesc": "To be the global leader in providing innovative industrial and automotive solutions, setting new standards for quality and customer satisfaction.", "visionPoint1": "Global Market Leadership", "visionPoint2": "Innovation Excellence", "visionPoint3": "Sustainable Growth",
        "missionTitle": "Our Mission", "missionDesc": "To deliver exceptional value to our customers through high-quality products, innovative solutions, and outstanding service.", "missionPoint1": "Customer Success", "missionPoint2": "Quality Excellence", "missionPoint3": "Continuous Innovation",
        "valuesTitle": "Our Core Values", "valuesSubtitle": "The principles that guide our business", "value1Title": "Integrity", "value1Desc": "We conduct business with the highest ethical standards and transparency.", "value2Title": "Partnership", "value2Desc": "We build long-lasting relationships with our customers and suppliers.",
        "value3Title": "Innovation", "value3Desc": "We constantly seek new ways to improve and deliver better solutions.", "value4Title": "Excellence", "value4Desc": "We strive for excellence in everything we do.", "timelineTitle": "Our Journey", "timelineSubtitle": "Milestones that define our growth",
        "timeline1Title": "Company Founded", "timeline1Desc": "Started operations in Istanbul", "timeline2Title": "Market Expansion", "timeline2Desc": "Entered international markets", "timeline3Title": "Product Innovation", "timeline3Desc": "Launched new product lines",
        "timeline4Title": "Global Recognition", "timeline4Desc": "Achieved industry leadership", "stat1": "Years Experience", "stat2": "Client Trust", "stat3": "Products", "stat4": "Client Satisfaction",
        "productsTitle": "Our Products", "productsSubtitle": "Comprehensive range of industrial and automotive solutions", "productExample": "Some Examples:", "productBtnOrder": "Order Now",
        "product1Title": "Automotive Parts", "product1Point1": "Engine Components", "product1Point2": "Transmission Systems", "product1Point3": "Brake Assemblies", "product1Point4": "Electrical Systems",
        "product2Title": "Maintenance Equipment", "product2Point1": "Diagnostic and Calibration Tools", "product2Point2": "Socket Sets and Ratchets", "product2Point3": "Pliers and Cutting Tools", "product2Point4": "Wrenches, Hammers, Screwdrivers",
        "product3Title": "Industrial Machinery", "product3Point1": "Heavy Equipment Parts", "product3Point2": "Manufacturing Tools", "product3Point3": "Precision Components", "product3Point4": "Automation Systems",
        "contactTitle": "Contact Us", "contactSubtitle": "Get in touch with our team of experts", "contactAddress": "Address", "contactPhone": "Phone", "contactEmail": "Email",
        "formName": "Full Name", "formEmail": "Email Address", "formSubject": "Subject", "formMessage": "Message", "formBtnSend": "Send Message", "toastSuccess": "Message sent successfully!",
        "footerAbout": "About IMPEX GLOBAL", "footerAboutDesc": "Leading provider of industrial and automotive solutions with a global presence and commitment to excellence. We serve customers worldwide with premium quality products and exceptional service.",
        "footerLinks": "Quick Links", "footerProducts": "Products", "footerCustom": "Custom Solutions", "footerContact": "Contact Us", "footerRights": "&copy; 2024 IMPEX GLOBAL. All rights reserved.", "themeToggleLabel": "Theme"
    },
    "tr": {
        "navHome": "Ana Sayfa", "navFeatures": "Özellikler", "navVisionMission": "Vizyon & Misyon", "navProducts": "Ürünler", "navContact": "Bize Ulaşın", "navExportsImports": "İhracat / İthalat",
        "heroTitle": "Otomotiv ve Endüstriyel Çözümlerle Geleceği İnşa Ediyoruz", "heroSubtitle": "Yüksek kaliteli makine parçaları ve otomotiv çözümlerinde güvenilir ortağınız",
        "heroBtnGetStarted": "Başlayın", "heroBtnBrowseProducts": "Ürünlere Göz Atın", "featuresTitle": "Neden Bizi Seçmelisiniz", "featuresSubtitle": "Kalite, güvenilirlik ve küresel erişim ile mükemmelliği sunuyoruz",
        "feature1Title": "Küresel Ağ", "feature1Desc": "Önemli endüstriyel merkezleri kapsayan geniş dağıtım ağı, zamanında teslimat ve yerel destek sağlar.", "feature2Title": "Kalite Güvencesi", "feature2Desc": "Uluslararası standartlara uygun premium kalitede ürünler sağlayan sertifikalı kalite yönetim sistemi.",
        "feature3Title": "Uzman Desteği", "feature3Desc": "Her türlü müşteri sorgusunda deneyimli kişilerden 7/24 teknik destek.", "vmTitle": "Vizyon & Misyon", "vmSubtitle": "Endüstriyel çözümlerde yenilikçiliği ve mükemmelliği teşvik ediyoruz",
        "visionTitle": "Vizyonumuz", "visionDesc": "Yenilikçi endüstriyel ve otomotiv çözümleri sunan, kalite ve müşteri memnuniyeti için yeni standartlar belirleyen küresel lider olmak.", "visionPoint1": "Küresel Pazar Liderliği", "visionPoint2": "Yenilikçilikte Mükemmellik", "visionPoint3": "Sürdürülebilir Büyüme",
        "missionTitle": "Misyonumuz", "missionDesc": "Yüksek kaliteli ürünler, yenilikçi çözümler ve üstün hizmet aracılığıyla müşterilerimize olağanüstü değer sunmak.", "missionPoint1": "Müşteri Başarısı", "missionPoint2": "Kalitede Mükemmellik", "missionPoint3": "Sürekli Yenilik",
        "valuesTitle": "Temel Değerlerimiz", "valuesSubtitle": "İşimize rehberlik eden ilkeler", "value1Title": "Dürüstlük", "value1Desc": "İşimizi en yüksek etik standartlar ve şeffaflıkla yürütürüz.", "value2Title": "Ortaklık", "value2Desc": "Müşterilerimiz ve tedarikçilerimizle uzun süreli ilişkiler kurarız.",
        "value3Title": "Yenilikçilik", "value3Desc": "Daha iyi çözümler sunmak için sürekli yeni yollar ararız.", "value4Title": "Mükemmellik", "value4Desc": "Yaptığımız her şeyde mükemmelliği hedefleriz.", "timelineTitle": "Yolculuğumuz", "timelineSubtitle": "Büyümemizi tanımlayan kilometre taşları",
        "timeline1Title": "Şirket Kuruldu", "timeline1Desc": "İstanbul'da faaliyete başladı", "timeline2Title": "Pazar Genişlemesi", "timeline2Desc": "Uluslararası pazarlara girildi", "timeline3Title": "Ürün İnovasyonu", "timeline3Desc": "Yeni ürün hatları piyasaya sürüldü",
        "timeline4Title": "Küresel Tanınma", "timeline4Desc": "Sektör liderliğine ulaşıldı", "stat1": "Yıl Deneyim", "stat2": "Müşteri Güveni", "stat3": "Ürün", "stat4": "Müşteri Memnuniyeti",
        "productsTitle": "Ürünlerimiz", "productsSubtitle": "Kapsamlı endüstriyel ve otomotiv çözümleri yelpazesi", "productExample": "Bazı Örnekler:", "productBtnOrder": "Şimdi Sipariş Ver",
        "product1Title": "Otomotiv Parçaları", "product1Point1": "Motor Bileşenleri", "product1Point2": "Şanzıman Sistemleri", "product1Point3": "Fren Tertibatları", "product1Point4": "Elektrik Sistemleri",
        "product2Title": "Bakım Ekipmanları", "product2Point1": "Teşhis ve Kalibrasyon Araçları", "product2Point2": "Lokma Takımları ve Cırcırlar", "product2Point3": "Pense ve Kesici Aletler", "product2Point4": "Anahtarlar, Çekiçler, Tornavidalar",
        "product3Title": "Endüstriyel Makineler", "product3Point1": "Ağır Ekipman Parçaları", "product3Point2": "Üretim Araçları", "product3Point3": "Hassas Bileşenler", "product3Point4": "Otomasyon Sistemleri",
        "contactTitle": "Bize Ulaşın", "contactSubtitle": "Uzman ekibimizle iletişime geçin", "contactAddress": "Adres", "contactPhone": "Telefon", "contactEmail": "E-posta",
        "formName": "Tam Adınız", "formEmail": "E-posta Adresi", "formSubject": "Konu", "formMessage": "Mesaj", "formBtnSend": "Mesaj Gönder", "toastSuccess": "Mesaj başarıyla gönderildi!",
        "footerAbout": "IMPEX GLOBAL Hakkında", "footerAboutDesc": "Küresel bir varlığa ve mükemmellik taahhüdüne sahip lider endüstriyel ve otomotiv çözümleri sağlayıcısı. Dünya çapındaki müşterilere birinci sınıf kaliteli ürünler ve olağanüstü hizmet sunuyoruz.",
        "footerLinks": "Hızlı Bağlantılar", "footerProducts": "Ürünler", "footerCustom": "Özel Çözümler", "footerContact": "Bize Ulaşın", "footerRights": "&copy; 2024 IMPEX GLOBAL. Tüm hakları saklıdır.", "themeToggleLabel": "Tema"
    },
    "ar": {
        "navHome": "الرئيسية", "navFeatures": "الميزات", "navVisionMission": "الرؤية والرسالة", "navProducts": "المنتجات", "navContact": "اتصل بنا", "navExportsImports": "صادرات / واردات",
        "heroTitle": "بناء المستقبل بحلول السيارات والحلول الصناعية", "heroSubtitle": "شريكك الموثوق به في قطع غيار الآلات عالية الجودة وحلول السيارات",
        "heroBtnGetStarted": "ابدأ الآن", "heroBtnBrowseProducts": "تصفح المنتجات", "featuresTitle": "لماذا تختارنا", "featuresSubtitle": "نحن نقدم التميز من خلال الجودة والموثوقية والانتشار العالمي",
        "feature1Title": "شبكة عالمية", "feature1Desc": "شبكة توزيع واسعة تغطي المراكز الصناعية الرئيسية، مما يضمن التسليم في الوقت المناسب والدعم المحلي.", "feature2Title": "جودة مضمونة", "feature2Desc": "نظام إدارة جودة معتمد يضمن منتجات عالية الجودة تلبي المعايير الدولية.",
        "feature3Title": "دعم الخبراء", "feature3Desc": "دعم فني على مدار الساعة طوال أيام الأسبوع من أفراد ذوي خبرة في حالة أي استفسار للعملاء.", "vmTitle": "الرؤية والرسالة", "vmSubtitle": "قيادة الابتكار والتميز في الحلول الصناعية",
        "visionTitle": "رؤيتنا", "visionDesc": "أن نكون الشركة الرائدة عالميًا في تقديم حلول صناعية وسيارات مبتكرة، ووضع معايير جديدة للجودة ورضا العملاء.", "visionPoint1": "الريادة في السوق العالمية", "visionPoint2": "التميز في الابتكار", "visionPoint3": "النمو المستدام",
        "missionTitle": "رسالتنا", "missionDesc": "تقديم قيمة استثنائية لعملائنا من خلال منتجات عالية الجودة وحلول مبتكرة وخدمة متميزة.", "missionPoint1": "نجاح العميل", "missionPoint2": "التميز في الجودة", "missionPoint3": "الابتكار المستمر",
        "valuesTitle": "قيمنا الأساسية", "valuesSubtitle": "المبادئ التي توجه أعمالنا", "value1Title": "النزاهة", "value1Desc": "نحن ندير أعمالنا بأعلى المعايير الأخلاقية والشفافية.", "value2Title": "الشراكة", "value2Desc": "نبني علاقات طويلة الأمد مع عملائنا وموردينا.",
        "value3Title": "الابتكار", "value3Desc": "نسعى باستمرار لإيجاد طرق جديدة للتحسين وتقديم حلول أفضل.", "value4Title": "التميز", "value4Desc": "نسعى جاهدين للتميز في كل ما نقوم به.", "timelineTitle": "رحلتنا", "timelineSubtitle": "معالم تحدد نمونا",
        "timeline1Title": "تأسيس الشركة", "timeline1Desc": "بدأت العمليات في اسطنبول", "timeline2Title": "توسع السوق", "timeline2Desc": "دخول الأسواق الدولية", "timeline3Title": "ابتكار المنتجات", "timeline3Desc": "إطلاق خطوط إنتاج جديدة",
        "timeline4Title": "اعتراف عالمي", "timeline4Desc": "تحقيق الريادة في الصناعة", "stat1": "سنوات خبرة", "stat2": "ثقة العميل", "stat3": "منتجات", "stat4": "رضا العملاء",
        "productsTitle": "منتجاتنا", "productsSubtitle": "مجموعة شاملة من الحلول الصناعية والسيارات", "productExample": "بعض الأمثلة:", "productBtnOrder": "اطلب الآن",
        "product1Title": "قطع غيار سيارات", "product1Point1": "مكونات المحرك", "product1Point2": "أنظمة نقل الحركة", "product1Point3": "مجموعات الفرامل", "product1Point4": "الأنظمة الكهربائية",
        "product2Title": "معدات الصيانة", "product2Point1": "أدوات التشخيص والمعايرة", "product2Point2": "مجموعات المقابس والمفاتيح", "product2Point3": "الكماشات وأدوات القطع", "product2Point4": "مفاتيح ربط، مطارق، مفكات",
        "product3Title": "الآلات الصناعية", "product3Point1": "قطع غيار المعدات الثقيلة", "product3Point2": "أدوات التصنيع", "product3Point3": "المكونات الدقيقة", "product3Point4": "أنظمة الأتمتة",
        "contactTitle": "اتصل بنا", "contactSubtitle": "تواصل مع فريق الخبراء لدينا", "contactAddress": "العنوان", "contactPhone": "الهاتف", "contactEmail": "البريد الإلكتروني",
        "formName": "الاسم الكامل", "formEmail": "عنوان البريد الإلكتروني", "formSubject": "الموضوع", "formMessage": "الرسالة", "formBtnSend": "إرسال رسالة", "toastSuccess": "تم إرسال الرسالة بنجاح!",
        "footerAbout": "عن IMPEX GLOBAL", "footerAboutDesc": "مزود رائد للحلول الصناعية والسيارات مع وجود عالمي والتزام بالتميز. نحن نخدم العملاء في جميع أنحاء العالم بمنتجات عالية الجودة وخدمة استثنائية.",
        "footerLinks": "روابط سريعة", "footerProducts": "المنتجات", "footerCustom": "حلول مخصصة", "footerContact": "اتصل بنا", "footerRights": "&copy; 2024 IMPEX GLOBAL. جميع الحقوق محفوظة.", "themeToggleLabel": "السمة"
    }
};

// ============================================
//  MAIN APP INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {

    const docElement = document.documentElement;
    const translatableElements = document.querySelectorAll('[data-key]');
    const navbar = document.querySelector('.navbar');
    const utilityContainer = document.getElementById('desktop-utility-container');

    // --- Theme Manager ---
    const themeToggles = document.querySelectorAll('.theme-toggle-input');
    const themeManager = {
        init() {
            const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            this.setTheme(savedTheme, false);
            themeToggles.forEach(toggle => {
                toggle.addEventListener('change', () => this.handleToggle(toggle));
            });
        },
        handleToggle(changedToggle) {
            const newTheme = changedToggle.checked ? 'dark' : 'light';
            this.setTheme(newTheme, true);
        },
        setTheme(theme, save = true) {
            docElement.setAttribute('data-theme', theme);
            themeToggles.forEach(toggle => { toggle.checked = (theme === 'dark'); });
            if (save) { localStorage.setItem('theme', theme); }
        }
    };
    themeManager.init();

    // --- Language Switcher ---
    const langSwitchers = document.querySelectorAll('.lang-switcher');
    const langManager = {
        currentLang: 'en',
        init() {
            langSwitchers.forEach(switcher => {
                const btn = switcher.querySelector('.lang-btn');
                const options = switcher.querySelectorAll('.lang-option');
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    langSwitchers.forEach(s => { if (s !== switcher) { s.classList.remove('active'); s.querySelector('.lang-btn').setAttribute('aria-expanded', 'false'); } });
                    const isActive = switcher.classList.toggle('active');
                    btn.setAttribute('aria-expanded', isActive);
                });
                options.forEach(option => {
                    option.addEventListener('click', (e) => { e.preventDefault(); const selectedLang = e.currentTarget.dataset.lang; this.setLanguage(selectedLang); });
                });
            });
            document.addEventListener('click', () => {
                langSwitchers.forEach(switcher => { switcher.classList.remove('active'); switcher.querySelector('.lang-btn').setAttribute('aria-expanded', 'false'); });
            });
            const savedLanguage = localStorage.getItem('language') || 'en';
            this.setLanguage(savedLanguage);
        },
        setLanguage(lang) {
            if (!translations[lang] || lang === this.currentLang) {
                langSwitchers.forEach(switcher => { switcher.classList.remove('active'); switcher.querySelector('.lang-btn').setAttribute('aria-expanded', 'false'); });
                if (!translations[lang]) console.error(`Language "${lang}" not found.`);
                return;
            }
            this.currentLang = lang;
            docElement.lang = lang; docElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
            translatableElements.forEach(el => {
                const key = el.dataset.key;
                // Use optional chaining for safety in case a key is missing in some language
                if (translations[lang]?.[key]) {
                    el.innerHTML = translations[lang][key];
                } else if (translations['en']?.[key]) { // Fallback to English if key missing
                    el.innerHTML = translations['en'][key];
                    console.warn(`Translation key "${key}" missing for language "${lang}". Falling back to English.`);
                }
            });
            document.querySelectorAll('.current-lang-display').forEach(span => { span.innerText = lang.toUpperCase(); });
            document.querySelectorAll('.lang-option').forEach(option => { option.classList.toggle('active', option.dataset.lang === lang); });
            localStorage.setItem('language', lang);
            langSwitchers.forEach(switcher => { switcher.classList.remove('active'); switcher.querySelector('.lang-btn').setAttribute('aria-expanded', 'false'); });
        }
    };
    langManager.init();

    // --- Mobile Sidebar ---
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const navContainer = document.querySelector('.nav-container');
    const sidebarCloseBtn = document.querySelector('.sidebar-close-btn');
    let mobileMenuBtn = navContainer.querySelector('.mobile-menu-btn');
    const mobileSidebar = {
        init() {
            if (!mobileMenuBtn && window.matchMedia('(max-width: 1024px)').matches) { // Only create if potentially visible
                mobileMenuBtn = document.createElement('button'); mobileMenuBtn.className = 'mobile-menu-btn'; mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                mobileMenuBtn.setAttribute('aria-label', 'Toggle menu'); mobileMenuBtn.setAttribute('aria-expanded', 'false');
                navContainer.querySelector('.nav-actions').appendChild(mobileMenuBtn);
            }
             if(mobileMenuBtn) { // Add listeners only if button exists
                mobileMenuBtn.removeEventListener('click', this.open); mobileMenuBtn.addEventListener('click', this.open.bind(this)); // Bind 'this'
                sidebarCloseBtn.addEventListener('click', this.close.bind(this)); // Bind 'this'
                overlay.addEventListener('click', this.close.bind(this)); // Bind 'this'
                sidebar.querySelectorAll('.nav-link').forEach(link => {
                     link.removeEventListener('click', this.close); link.addEventListener('click', this.close.bind(this)); // Bind 'this'
                });
             }
        },
        open() {
            sidebar.classList.add('active'); overlay.classList.add('active'); document.body.style.overflow = 'hidden';
            if(mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
        },
        close() {
            sidebar.classList.remove('active'); overlay.classList.remove('active'); document.body.style.overflow = '';
            if(mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
            sidebar.querySelectorAll('.lang-switcher.active').forEach(sw => { sw.classList.remove('active'); sw.querySelector('.lang-btn').setAttribute('aria-expanded', 'false'); });
        }
    };
    mobileSidebar.init();


    // --- Navbar Scroll Behavior ---
    let lastScrollTop = 0;
    const delta = 10; // Increased threshold slightly
    let initialNavbarHeight = navbar.offsetHeight; // Get initial height on load

    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;
        const currentNavbarHeight = navbar.offsetHeight; // Get current height

        // Make sure scrolling more than delta
        if (Math.abs(lastScrollTop - currentScroll) <= delta) return;

        // Hide/Show Logic
        if (currentScroll > lastScrollTop && currentScroll > currentNavbarHeight * 1.5){ // Start hiding only after scrolling down a bit more than navbar height
            // Scroll Down
            navbar.classList.add('navbar--hidden');
            if(utilityContainer) utilityContainer.classList.add('hidden');
        } else if (currentScroll < lastScrollTop || currentScroll < 10) { // Show on scrolling up or near the top
            // Scroll Up or near top
            navbar.classList.remove('navbar--hidden');
             if(utilityContainer) utilityContainer.classList.remove('hidden');
        }

        // Scrolled class logic (independent of hide/show)
        navbar.classList.toggle('scrolled', currentScroll > 50);

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, { passive: true });


    // --- Intersection Observer (Animations) ---
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('animate-fade-in'); observer.unobserve(entry.target); } }); }, observerOptions);
    document.querySelectorAll('.feature-card, .product-card, .vm-card, .value-card, .timeline-content, .section-header, .stat-item, .contact-info, .contact-form, .footer-col').forEach(el => observer.observe(el));

    // --- Contact Form (EmailJS) ---
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successToast = document.getElementById('successToast');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            submitBtn.disabled = true;
            const loadingSpinner = submitBtn.querySelector('.loading');
            if (loadingSpinner) loadingSpinner.style.display = 'inline-block';
            const templateParams = { name, email, subject, message };
            try {
                // --- Replace with your actual Service ID and Template ID ---
                const response = await emailjs.send('service_lvsd7yn', 'template_1pnl5rr', templateParams); // YOUR IDS HERE
                // ----------------------------------------------------------

                if (response.status === 200) {
                    contactForm.reset();
                    successToast.classList.add('show'); // Add show class
                    setTimeout(() => { successToast.classList.remove('show'); }, 3000); // Remove after 3s
                } else {
                    throw new Error(`EmailJS Error ${response.status}: ${response.text || 'Failed to send'}`);
                }
            } catch (error) {
                // Log the full error object to the console for detailed debugging
                console.error('EmailJS Error Object:', error);

                const errorMsgKey = 'formError';
                const fallbackError = `Failed to send message. Please try again.`;
                // Show a simpler message to the user, check console for details
                alert(translations[langManager.currentLang]?.[errorMsgKey] || fallbackError);
            } finally {
                submitBtn.disabled = false;
                if (loadingSpinner) loadingSpinner.style.display = 'none';
            }
        });
    }


    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#home') {
                e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' });
                if (sidebar.classList.contains('active')) mobileSidebar.close();
                history.pushState("", document.title, window.location.pathname + window.location.search);
                return;
            }
            const targetEl = document.querySelector(href);
            if (targetEl) {
                e.preventDefault();
                if (sidebar.classList.contains('active')) mobileSidebar.close();

                // Use initial navbar height for calculation to avoid jumps if it changes size
                const currentNavbarHeight = initialNavbarHeight;
                const elementPosition = targetEl.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - currentNavbarHeight - 20;

                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });


    // --- Stats Counter ---
    const statsSection = document.querySelector('.stats');
    let statsAnimated = false;
    const animateStats = () => { if (statsAnimated) return; statsAnimated = true; document.querySelectorAll('.stat-number').forEach(stat => { const targetValueText = stat.textContent || stat.innerText; const suffix = targetValueText.match(/[\+%k]+/) ? targetValueText.match(/[\+%k]+/)[0] : ''; const targetNumber = parseInt(targetValueText.replace(/[\+%k]+/, '')); if (isNaN(targetNumber)) { console.warn("Stat target is not a number:", targetValueText); return; } let current = 0; const duration = 1500; const stepTime = 20; const totalSteps = duration / stepTime; const increment = targetNumber / totalSteps; const timer = setInterval(() => { current += increment; if (current >= targetNumber) { clearInterval(timer); stat.innerText = `${targetNumber}${suffix}`; } else { stat.innerText = `${Math.floor(current)}${suffix}`; } }, stepTime); }); };
    const statsObserver = new IntersectionObserver((entries) => { if (entries[0].isIntersecting) { animateStats(); statsObserver.unobserve(statsSection); } }, { threshold: 0.5 });
    if (statsSection) { statsObserver.observe(statsSection); }
});