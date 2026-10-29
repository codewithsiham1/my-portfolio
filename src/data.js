// Edit your content here. The page updates automatically.
export const profile = {
  name: "Moudud Ahamed Siham",
  roles: [
    { title: "MERN Stack Developer", icon: "react" },
    { title: "Shopify Developer", icon: "shopify" },
    { title: "Digital Marketing Executive", icon: "ads" },
  ],
  intro:
    "I build websites and Shopify stores, and I bring customers to them with Google Ads, SEO and lead generation. Code and marketing, in one person.",
  location: "Rangpur, Bangladesh",
  email: "sihamislam18@gmail.com",
  phone: "01788917283",
  phoneLink: "+8801788917283",
  cv: "/cv.pdf",
  cvName: "Moudud-Ahamed-Siham-CV.pdf",
  // Free key from https://web3forms.com. Leave empty to send through the visitor's email app.
  formKey: "",
  socials: [
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/md-moudud-siham-b63551346/" },
    { label: "Facebook", icon: "facebook", url: "https://www.facebook.com/md.moudud.ahamed.siham" },
    { label: "Instagram", icon: "instagram", url: "https://www.instagram.com/moudud_ahamed_siham?igsh=NTJtbDB1aTE4cDk2" },
    { label: "GitHub", icon: "github", url: "https://github.com/codewithsiham1" },
  ],
};

export const orbit = ["ads", "analytics", "shopify", "react", "node", "mongodb"];

export const typed = [
  "full stack apps with the MERN stack",
  "Shopify stores that sell",
  "Google Ads campaigns",
  "SEO that brings organic traffic",
  "lead generation and reporting",
  "video editing for social media",
];

export const about = [
  "I am a MERN stack developer, a Shopify developer and a digital marketing executive. I worked as a frontend developer at Betopia for one year and I am currently working at FB International BD.",
  "Because I do both the building and the marketing, I can set up tracking, fix a slow landing page and improve product pages myself. My ads and SEO work launches faster and is easier to measure.",
  "I am studying BSc in Computer Science and Engineering at Dhaka International University.",
];

export const services = [
  { icon: "react", title: "MERN stack development", text: "Full stack web apps with React, Node.js, Express and MongoDB, including login and payments." },
  { icon: "shopify", title: "Shopify development", text: "Store design, Liquid theme customisation and product pages built to convert." },
  { icon: "ads", title: "Google Ads", text: "Search, Display and Shopping campaigns with keyword research, ad copy and conversion tracking." },
  { icon: "seo", title: "SEO", text: "Keyword research, on-page work, technical SEO and Shopify SEO for lasting traffic." },
  { icon: "leads", title: "Lead generation", text: "Landing pages, forms and campaigns that bring in enquiries and track every lead." },
  { icon: "analytics", title: "Analytics and reporting", text: "Google Analytics and Tag Manager setup with clear reports on what is working." },
  { icon: "meta", title: "Meta Ads", text: "Audience building, creative testing and retargeting on Facebook and Instagram." },
  { icon: "social", title: "Social media marketing", text: "Content calendars and campaigns for Facebook, Instagram and LinkedIn." },
  { icon: "email", title: "Email marketing", text: "Newsletters and automated flows for welcome, abandoned cart and win-back." },
  { icon: "video", title: "Video editing", text: "Edited videos, reels and ads for social media, with clean cuts, text and sound." },
  { icon: "illustrator", title: "Graphic design", text: "Social posts, banners and ad creatives that match your brand." },
  { icon: "content", title: "Content writing", text: "Ad copy, product descriptions and blog posts written for search and for people." },
];

export const skills = [
  { group: "MERN stack", icon: "react", items: [
    { n: "React.js", i: "react" }, { n: "Next.js", i: "next" }, { n: "Node.js", i: "node" }, { n: "Express.js", i: "express" },
    { n: "MongoDB", i: "mongodb" }, { n: "JavaScript", i: "js" }, { n: "TypeScript", i: "ts" }, { n: "HTML5", i: "html" },
    { n: "CSS3", i: "css" }, { n: "Tailwind CSS", i: "tailwind" }, { n: "DaisyUI", i: "daisy" }, { n: "TanStack Query", i: "query" },
    { n: "React Router", i: "router" }, { n: "Firebase", i: "firebase" }, { n: "JWT", i: "jwt" }, { n: "Stripe", i: "stripe" } ] },
  { group: "Shopify", icon: "shopify", items: [
    { n: "Shopify", i: "shopify" }, { n: "Liquid", i: "code" }, { n: "Theme customisation", i: "css" },
    { n: "Store design", i: "cart" }, { n: "Shopify SEO", i: "seo" } ] },
  { group: "Digital marketing", icon: "ads", items: [
    { n: "Google Ads", i: "ads" }, { n: "SEO", i: "seo" }, { n: "Google Analytics", i: "analytics" }, { n: "Search Console", i: "gsc" },
    { n: "Tag Manager", i: "gtm" }, { n: "Meta Ads", i: "meta" }, { n: "Lead generation", i: "leads" }, { n: "Email marketing", i: "mail" },
    { n: "Social media", i: "social" }, { n: "Content writing", i: "content" } ] },
  { group: "Video editing", icon: "video", items: [
    { n: "Adobe Premiere Pro", i: "premiere" }, { n: "After Effects", i: "aftereffects" }, { n: "DaVinci Resolve", i: "davinci" },
    { n: "CapCut", i: "capcut" }, { n: "Filmora", i: "filmora" } ] },
  { group: "Design and office", icon: "palette", items: [
    { n: "Adobe Illustrator", i: "illustrator" }, { n: "MS Word", i: "word" }, { n: "MS Excel", i: "excel" } ] },
  { group: "Developer tools", icon: "git", items: [
    { n: "Git", i: "git" }, { n: "GitHub", i: "github" }, { n: "VS Code", i: "vscode" }, { n: "Postman", i: "postman" } ] },
];

// Sample numbers that show how I report. Replace them with your real numbers.
export const dashboard = {
  note: "Sample data, shown to demonstrate how I report. Real client numbers are shared on request.",
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  tabs: [
    {
      id: "ads", label: "Google Ads", icon: "ads",
      kpis: [
        { label: "Impressions", value: 48200 }, { label: "Clicks", value: 3150 },
        { label: "Click through rate", value: 6.5, dec: 1, suffix: "%" }, { label: "Conversions", value: 214 },
        { label: "Cost per conversion", value: 4.8, dec: 1, prefix: "$" }, { label: "Return on ad spend", value: 4.2, dec: 1, suffix: "x" },
      ],
      line: { title: "Clicks and conversions by month", series: [
        { name: "Clicks", data: [320, 410, 480, 560, 680, 700] }, { name: "Conversions", data: [18, 26, 34, 41, 47, 48] } ] },
      bars: { title: "Conversions by campaign type", items: [["Search", 96], ["Shopping", 71], ["Display", 29], ["Retargeting", 18]] },
    },
    {
      id: "seo", label: "SEO", icon: "seo",
      kpis: [
        { label: "Organic sessions", value: 12400 }, { label: "Keywords in top 10", value: 86 },
        { label: "Average position", value: 8.4, dec: 1 }, { label: "Organic click through rate", value: 4.1, dec: 1, suffix: "%" },
        { label: "Indexed pages", value: 420 }, { label: "Core Web Vitals passed", value: 92, suffix: "%" },
      ],
      line: { title: "Organic sessions by month", series: [{ name: "Organic sessions", data: [1400, 1750, 2100, 2400, 2250, 2500] }] },
      bars: { title: "Keyword rankings", items: [["Top 3", 18], ["Top 10", 86], ["Top 20", 142], ["Top 50", 230]] },
    },
    {
      id: "leads", label: "Leads", icon: "leads",
      kpis: [
        { label: "Leads", value: 318 }, { label: "Cost per lead", value: 3.2, dec: 1, prefix: "$" },
        { label: "Visitor to lead rate", value: 7.8, dec: 1, suffix: "%" }, { label: "Qualified leads", value: 41, suffix: "%" },
        { label: "Customers won", value: 64 }, { label: "Lead response time (min)", value: 12 },
      ],
      line: { title: "Leads by month", series: [{ name: "Leads", data: [34, 41, 52, 58, 64, 69] }] },
      donut: { title: "Leads by source", items: [["Google Ads", 38], ["SEO", 31], ["Social media", 21], ["Email", 10]] },
    },
  ],
};

export const adsProcess = {
  title: "Google Ads: how I run a campaign",
  steps: [
    ["Goal and audience", "Define the target (sales, leads or calls), the budget and who the customer is."],
    ["Keyword research", "Find high intent keywords and build negative keyword lists to stop wasted spend."],
    ["Campaign setup", "Structure campaigns and ad groups, write ads, add extensions and set up conversion tracking."],
    ["Landing page", "Match the ad message to the page and fix speed and layout so visitors take action."],
    ["Test and optimise", "Compare ads, bids and audiences weekly, then move budget to what performs."],
    ["Report", "Share clear reports on spend, conversions and what to do next."],
  ],
  tracks: ["Click through rate", "Cost per click", "Conversion rate", "Cost per acquisition", "Return on ad spend", "Quality Score"],
};

export const seoProcess = {
  title: "SEO: how I grow search traffic",
  steps: [
    ["Audit", "Check crawling, indexing, page speed, mobile layout and broken links."],
    ["Keyword strategy", "Group keywords by search intent and map each one to a page."],
    ["On-page work", "Improve titles, meta descriptions, headings, internal links, images and schema."],
    ["Content", "Plan blog posts and product descriptions that answer what people search for."],
    ["Off-page", "Build quality backlinks and local listings."],
    ["Measure", "Track rankings, organic traffic and conversions in Google Analytics and Search Console."],
  ],
  tracks: ["Organic traffic", "Keyword rankings", "Click through rate", "Indexed pages", "Core Web Vitals", "Organic conversions"],
};

// Add real campaign results here. The Results section only shows when this list has items.
// Example: { title: "Store name", metric: "Organic traffic", value: "+120%", note: "in 4 months with SEO" }
export const results = [];

export const marquee = [
  { n: "React", i: "react" }, { n: "Node.js", i: "node" }, { n: "MongoDB", i: "mongodb" }, { n: "Shopify", i: "shopify" },
  { n: "Google Ads", i: "ads" }, { n: "Google Analytics", i: "analytics" }, { n: "SEO", i: "seo" }, { n: "Meta Ads", i: "meta" },
  { n: "Tag Manager", i: "gtm" }, { n: "Express", i: "express" }, { n: "Firebase", i: "firebase" }, { n: "Tailwind CSS", i: "tailwind" },
  { n: "Premiere Pro", i: "premiere" }, { n: "After Effects", i: "aftereffects" }, { n: "DaVinci Resolve", i: "davinci" }, { n: "CapCut", i: "capcut" },
];

export const funnel = [
  { stage: "Awareness", text: "People find you.", channels: "SEO, Google Display, Facebook and Instagram content" },
  { stage: "Consideration", text: "People compare you.", channels: "Blog content, Search ads, retargeting, social proof" },
  { stage: "Conversion", text: "People buy or enquire.", channels: "Landing pages, Google Shopping, Shopify product pages" },
  { stage: "Retention", text: "People come back.", channels: "Email flows, offers, community posts" },
];

export const experience = [
  { role: "Frontend Developer", company: "FB International BD", period: "Current", text: "Building and maintaining web interfaces with React." },
  { role: "Frontend Developer", company: "Betopia", period: "1 year", text: "Developed responsive web interfaces and worked with a development team." },
  { role: "Shopify Developer", company: "Project based", period: "Freelance", text: "Shopify store design and theme customisation using Liquid, HTML, CSS and JavaScript." },
];

export const projects = [
  {
    title: "Bistro Boss", image: "/projects/bistro-boss.png", url: "https://resshop-a427b.web.app",
    text: "A responsive restaurant website where customers browse the menu, log in and order food. Uses TanStack Query for server data.",
    stack: ["react", "query", "node", "express", "mongodb", "firebase"],
  },
  {
    title: "PlantNet", image: "/projects/plantnet.png", url: "https://greenplantproject-cae48.web.app",
    text: "A plant marketplace with listings, Stripe payments, order management and an admin panel for users, statistics and messages.",
    stack: ["react", "node", "express", "mongodb", "stripe", "jwt"],
  },
];

export const education = [
  { title: "BSc in Computer Science and Engineering", place: "Dhaka International University", note: "Ongoing" },
  { title: "Diploma in Engineering, Computer Technology", place: "Rangpur Polytechnic Institute", note: "2025  |  GPA 3.70 out of 4.00" },
  { title: "Secondary School Certificate (Science)", place: "Dinajpur Board", note: "2020  |  GPA 4.83 out of 5.00" },
];

export const languages = "Bangla (native), English (fluent)";

export const why = [
  { title: "I build what I advertise", text: "I am a developer, so landing pages, tracking tags and Shopify pages are fixed by me, not delayed by a ticket." },
  { title: "Everything is measured", text: "Every campaign starts with a goal and a tracking plan, and ends with a clear report." },
  { title: "Search and ads work together", text: "Ads give fast results and SEO builds lasting traffic. I plan both so budget is not wasted." },
  { title: "Clear communication", text: "I speak Bangla and fluent English and keep updates short and simple." },
];

export const faqs = [
  { q: "How long does SEO take to show results?", a: "Technical fixes can show within weeks, but ranking growth usually takes three to six months. It depends on competition and the current state of the website." },
  { q: "Google Ads or SEO: which should I start with?", a: "If you need customers quickly, start with Google Ads. If you want steady traffic over time, invest in SEO. Most businesses do best with both." },
  { q: "Can you set up conversion tracking?", a: "Yes. I set up Google Analytics, Tag Manager and conversion events so you can see which ads and pages bring sales or leads." },
  { q: "Do you build and market Shopify stores?", a: "Yes. I customise Shopify themes with Liquid, improve product pages, apply Shopify SEO and run the ads that bring buyers." },
  { q: "What do I get in a report?", a: "Spend, clicks, conversions, cost per result and the next steps I recommend, in plain language." },
];

/* ---------------- Shopify ---------------- */
export const shopify = {
  intro: "I design and customise Shopify stores with Liquid, HTML, CSS and JavaScript. The goal is simple: a store that loads fast, looks trustworthy and makes it easy to buy.",
  offers: [
    { icon: "paint", title: "Theme customisation", text: "Change layouts, sections, fonts and colours so the store matches your brand, not a template." },
    { icon: "code", title: "Custom Liquid sections", text: "Build new homepage sections, product blocks and banners that you can edit in the theme editor." },
    { icon: "cart", title: "Product and collection pages", text: "Clear galleries, variants, prices, trust points and filters that help visitors decide." },
    { icon: "speed", title: "Speed optimisation", text: "Lazy loading, image sizing and removing unused code for faster page loads." },
    { icon: "seo", title: "Shopify SEO", text: "Titles, meta descriptions, headings, image alt text, URLs and structured data." },
    { icon: "mobile", title: "Mobile first design", text: "Most shoppers use a phone, so every page is designed for small screens first." },
    { icon: "analytics", title: "Tracking setup", text: "Google Analytics and conversion events so you can see which pages and ads bring sales." },
    { icon: "plug", title: "App setup and integrations", text: "Choose and set up apps for reviews, email and upsells without slowing the store." },
  ],
  steps: [
    { icon: "leads", title: "Discover", text: "Understand the products, the customer and the goal." },
    { icon: "paint", title: "Design", text: "Plan the layout, colours and page flow." },
    { icon: "code", title: "Build", text: "Customise the theme and write Liquid sections." },
    { icon: "speed", title: "Optimise", text: "Improve speed, SEO and mobile experience." },
    { icon: "rocket", title: "Launch and track", text: "Go live with tracking and review the numbers." },
  ],
  codeTitle: "sections/product-grid.liquid",
  code: `{% comment %} Product grid section {% endcomment %}
{% for product in collection.products limit: 4 %}
  <article class="product-card">
    <img src="{{ product.featured_image | image_url: width: 600 }}"
         alt="{{ product.title | escape }}" loading="lazy">
    <h3>{{ product.title }}</h3>
    <p>{{ product.price | money }}</p>
    {% if product.available %}
      <button type="submit">Add to cart</button>
    {% else %}
      <span>Sold out</span>
    {% endif %}
  </article>
{% endfor %}`,
  demoProducts: [
    { name: "Classic Tee", price: "$24", hue: 275 },
    { name: "Canvas Bag", price: "$32", hue: 40 },
    { name: "Daily Cap", price: "$18", hue: 150 },
    { name: "Steel Bottle", price: "$21", hue: 200 },
  ],
};

/* ---------------- Full stack ---------------- */
export const fullstack = {
  intro: "I build complete web applications: the screens people use, the API behind them and the database that stores everything. My projects include login, payments and admin dashboards.",
  features: [
    { icon: "react", title: "React front end", text: "Fast, responsive interfaces with React, React Router and Tailwind CSS." },
    { icon: "server", title: "Node and Express APIs", text: "Clean REST APIs with validation, error handling and pagination." },
    { icon: "db", title: "MongoDB database", text: "Collections designed for the app, hosted on MongoDB Atlas." },
    { icon: "lock", title: "Authentication", text: "Firebase Authentication and JWT, with protected routes for users and admins." },
    { icon: "card", title: "Payments", text: "Stripe checkout and order management, as used in PlantNet." },
    { icon: "query", title: "Server state", text: "TanStack Query for caching, loading states and fresh data." },
    { icon: "chart", title: "Admin dashboards", text: "User management, statistics and contact messages in one place." },
    { icon: "git", title: "Clean workflow", text: "Git and GitHub, API testing with Postman, and readable code." },
  ],
  flow: {
    client: { icon: "react", title: "React client", text: "Pages, forms, TanStack Query" },
    api: { icon: "node", title: "Node and Express API", text: "Routes, JWT check, business logic" },
    db: { icon: "mongodb", title: "MongoDB Atlas", text: "Users, products, orders" },
    side: [
      { icon: "firebase", title: "Firebase Auth", text: "Login and sign up" },
      { icon: "stripe", title: "Stripe", text: "Card payments" },
    ],
  },
  tabs: [
    {
      id: "api", label: "Express API", title: "routes/plants.js",
      code: `// Get plants with search and pagination
router.get("/plants", async (req, res) => {
  const { search = "", page = 1 } = req.query;
  const plants = await plantsCollection
    .find({ name: { $regex: search, $options: "i" } })
    .skip((page - 1) * 12)
    .limit(12)
    .toArray();
  res.json(plants);
});

// Only a logged in admin can add a plant
router.post("/plants", verifyJWT, verifyAdmin, async (req, res) => {
  const result = await plantsCollection.insertOne(req.body);
  res.status(201).json(result);
});`,
    },
    {
      id: "react", label: "React hook", title: "hooks/usePlants.js",
      code: `import { useQuery } from "@tanstack/react-query";

// Fetch plants and cache the result
export function usePlants(search) {
  return useQuery({
    queryKey: ["plants", search],
    queryFn: async () => {
      const res = await fetch(\`/api/plants?search=\${search}\`);
      return res.json();
    },
  });
}`,
    },
  ],
};

/* ---------------- Design and video portfolio ---------------- */
export const creative = {
  intro: "I edit videos and design creatives for social media and ads. Open my full design and video portfolio below, or ask me and I will send it.",
  // Paste your real links here. Where url is empty, the button becomes "Request portfolio" (an email to you).
  links: [
    { label: "Video editing portfolio", icon: "video", url: "", hint: "YouTube, Google Drive or Facebook link" },
    { label: "Graphic design portfolio", icon: "illustrator", url: "", hint: "Behance, Google Drive or Canva link" },
  ],
  categories: [
    { icon: "video", title: "Video editing", text: "Reels, ads and promo videos with clean cuts, text, music and colour.", tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut"] },
    { icon: "illustrator", title: "Graphic design", text: "Logos, banners, posters and brand material that look consistent.", tools: ["Adobe Illustrator"] },
    { icon: "social", title: "Social media creatives", text: "Post and ad designs sized for Facebook, Instagram and Google Display.", tools: ["Facebook", "Instagram", "Google Ads"] },
  ],
  // Add your real work here. Put the image in the public/works folder.
  // Example: { title: "Product promo", type: "Video", image: "/works/promo.jpg", url: "https://youtube.com/..." }
  works: [],
};
