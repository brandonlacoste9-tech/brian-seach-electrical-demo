const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.gallery": "Gallery", "nav.reviews": "Reviews", "nav.faq": "FAQ", "nav.contact": "Contact",
  "nav.call": "027 242 8393",
  "hero.kicker": "Plimmerton, Porirua · Registered electrician since 1997",
  "hero.title": "Plimmerton's trusted<br>local electrician.",
  "hero.sub": "98.9% approval from 31 verified NoCowboys ratings — lighting, repairs, rewires and safety certificates, done right the first time.",
  "hero.cta1": "Call now to book", "hero.cta2": "See services",
  "walkin.w1t": "By appointment", "walkin.w1d": "Call to book — available this week",
  "walkin.w2t": "Registered electrician", "walkin.w2d": "In business since 1997",
  "walkin.w3t": "Local & reliable", "walkin.w3d": "Serving Porirua, Wellington & Kāpiti",
  "stats.ratingNum": "98.9%", "stats.rating": "approval — 31 verified ratings",
  "stats.sinceNum": "1997", "stats.since": "registered electrician since",
  "stats.areaNum": "40+", "stats.area": "suburbs across Wellington & Kāpiti",
  "stats.availNum": "This week", "stats.avail": "availability — call to book",
  "services.kicker": "What I do", "services.title": "Electrical work, done properly",
  "services.s1t": "Lighting & LED", "services.s1d": "LED downlights, wall lights and floodlights — fitted neatly, brightness checked with you on the spot.",
  "services.s2t": "Repairs & fault finding", "services.s2d": "Faulty lights, dead circuits and intermittent faults — found fast and fixed on the spot where possible.",
  "services.s3t": "Sockets & switches", "services.s3d": "Outdoor sockets, new switch points, bathroom extractor-fan switches and security-camera wiring.",
  "services.s4t": "Kitchens & bathrooms", "services.s4d": "Full wiring for kitchen and bathroom renovations — hot water cylinders, heated towel rails and wall heaters.",
  "services.s5t": "Safety certificates", "services.s5d": "Electrical safety certificates and certificates of compliance issued for all work — clear paperwork, no surprises.",
  "services.s6t": "Renovation support", "services.s6d": "Taking the pain out of renovations — I coordinate with your other trades so the electrical side just gets done.",
  "why.kicker": "Why choose me", "why.title": "On time, conscientious, and easy to deal with",
  "why.intro": "I'm a registered electrician and have been in business since 1997. I pride myself on arriving on time, on the day we agree — with a high level of workmanship and conscientiousness.",
  "why.l1t": "Arrives when promised", "why.l1d": "On time, on the day we agree on — the most-mentioned thing in my reviews.",
  "why.l2t": "Clearly explained", "why.l2d": "Options laid out before work starts, with clear invoices afterwards.",
  "why.l3t": "Fair, reasonable charges", "why.l3d": "Competitive pricing with paperwork to match — safety certificates included.",
  "why.l4t": "One call for the whole job", "why.l4d": "I can arrange other trades or put you in contact with them for renovations.",
  "gallery.kicker": "The work in action", "gallery.title": "Neat wiring, tidy finish",
  "gallery.c1": "LED lighting fitted and checked with you on the spot",
  "gallery.c2": "Fault finding with proper test equipment",
  "gallery.c3": "Local call-outs across Plimmerton, Porirua & beyond",
  "reviews.kicker": "Word on the street", "reviews.title": "Trusted by Plimmerton homeowners",
  "reviews.score": "98.9% approval · 31 verified NoCowboys ratings",
  "reviews.more": "See what customers say about me on NoCowboys",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "What are your hours?", "faq.a1": "I work by appointment — call 027 242 8393 to book. Current availability is this week.",
  "faq.q2": "Do you do small jobs?", "faq.a2": "Absolutely — from replacing a light switch or LED light to full kitchen and bathroom rewires.",
  "faq.q3": "Will I get a safety certificate?", "faq.a3": "Yes — I issue electrical safety certificates and certificates of compliance, with a clear invoice.",
  "faq.q4": "Which areas do you service?", "faq.a4": "Based in Plimmerton — I service the Porirua area, the Wellington region and the Kāpiti Coast.",
  "contact.kicker": "Get in touch", "contact.title": "Book your appointment",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "By appointment — call to book<br>Availability: this week",
  "contact.cta": "Call now to book",
  "footer.tag": "Registered electrician · Plimmerton, Porirua, New Zealand"
}};

let lang = "en";

function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[l][key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "Brian Seach Electrical — Electrician in Plimmerton, Porirua | Registered since 1997";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang(lang);
