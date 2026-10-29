import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript, SiHtml5, SiTailwindcss,
  SiNextdotjs, SiFirebase, SiGit, SiGithub, SiPostman, SiShopify, SiGoogleads, SiGoogleanalytics,
  SiGoogletagmanager, SiGooglesearchconsole, SiMeta, SiStripe, SiReactquery, SiJsonwebtokens, SiCss,
  SiDaisyui, SiReactrouter, SiMailchimp, SiDavinciresolve, SiWondersharefilmora } from "react-icons/si";
import { FaFileWord, FaFileExcel, FaSearch, FaBullhorn, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope,
  FaChartLine, FaUsers, FaPenNib, FaHashtag, FaCss3Alt, FaCode, FaShoppingCart,
  FaPaintBrush, FaTachometerAlt, FaMobileAlt, FaPlug, FaDatabase, FaLock, FaServer, FaCreditCard, FaCogs, FaRocket, FaCheck, FaDesktop, FaVideo, FaFilm, FaCut, FaMagic, FaPalette } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbBrandAdobe } from "react-icons/tb";

const map = {
  react: SiReact, node: SiNodedotjs, mongodb: SiMongodb, express: SiExpress, js: SiJavascript, ts: SiTypescript,
  html: SiHtml5, css: FaCss3Alt, tailwind: SiTailwindcss, next: SiNextdotjs, firebase: SiFirebase, git: SiGit,
  github: SiGithub, postman: SiPostman, shopify: SiShopify, ads: SiGoogleads, analytics: SiGoogleanalytics,
  gtm: SiGoogletagmanager, gsc: SiGooglesearchconsole, meta: SiMeta, stripe: SiStripe, query: SiReactquery,
  jwt: SiJsonwebtokens, daisy: SiDaisyui, router: SiReactrouter, mail: SiMailchimp, vscode: VscVscode,
  word: FaFileWord, excel: FaFileExcel, illustrator: TbBrandAdobe, seo: FaSearch, promo: FaBullhorn,
  facebook: FaFacebook, instagram: FaInstagram, linkedin: FaLinkedin, email: FaEnvelope, chart: FaChartLine,
  leads: FaUsers, content: FaPenNib, social: FaHashtag, code: FaCode, cart: FaShoppingCart, css3: SiCss, video: FaVideo, premiere: FaFilm, aftereffects: FaMagic, capcut: FaCut, davinci: SiDavinciresolve,
  filmora: SiWondersharefilmora, palette: FaPalette, paint: FaPaintBrush, speed: FaTachometerAlt, mobile: FaMobileAlt, plug: FaPlug, db: FaDatabase,
  lock: FaLock, server: FaServer, card: FaCreditCard, cogs: FaCogs, rocket: FaRocket, check: FaCheck, desktop: FaDesktop,
};

export default function Icon({ k, className }) {
  const C = map[k];
  return C ? <C className={className} aria-hidden="true" /> : null;
}
