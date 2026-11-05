import {
  Activity, Atom, BarChart3, BatteryCharging, BatteryMedium, BrainCircuit, Briefcase, Bug, CalendarClock,
  Car, Cloud, Code2, Container, CopyX, Cpu, Database, DatabaseZap, Eye, FileBarChart, FileCode2, FlaskConical,
  Flag, FolderGit2, Gauge, GitPullRequest, GraduationCap, Home, Kanban, Layers, LayoutDashboard, LayoutGrid,
  Leaf, LineChart, LocateFixed, Mail, Map, Monitor, MonitorSmartphone, Package, Palette, PenTool, Plug, Radar,
  Receipt, RefreshCw, Rocket, Route, Send, ScanEye, School, Search, Server, Sheet, ShieldCheck, Smartphone, Sprout,
  Table, Tag, Ticket, Tractor, UserRound, Users, Workflow, Zap,
} from 'lucide-react'

import socialApp from '../assets/apps/SocialApp.webp'
import bookingApp from '../assets/apps/BookingApp.webp'
import gst from '../assets/apps/gst.webp'
import employee from '../assets/apps/employee.webp'
import zibber from '../assets/apps/zibberapp.webp'
import recipe from '../assets/apps/recipe.webp'
import bmi from '../assets/apps/bmicalc.webp'

export const profile = {
  name: 'Bhavana K G',
  role: 'Software Developer II',
  company: 'MultiplexEV Pvt Ltd.',
  subtitle: 'Frontend & Full-Stack',
  currently: 'Leading the frontend team at MultiplexEV.',
  email: 'bhavanakgowda812@gmail.com',
  phone: '+91 78990 37812',
  phoneHref: 'tel:+917899037812',
  linkedin: 'https://www.linkedin.com/in/bhavana-gowda-15431b212',
  linkedinHandle: 'bhavana-gowda',
  github: 'https://github.com/Bhavana-K-G',
  githubHandle: 'Bhavana-K-G',
  resume: '/Bhavana-K-G-Resume.pdf',
  location: 'Bengaluru, India',
}

export const nav = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: UserRound },
  { id: 'work', label: 'What I Build', icon: Layers },
  { id: 'experience', label: 'Experience', icon: Briefcase, badge: 5 },
  { id: 'process', label: 'How I Work', icon: Workflow },
  { id: 'projects', label: 'Projects', icon: FolderGit2, badge: 7 },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export const heroChips = [
  { label: 'Frontend', icon: MonitorSmartphone },
  { label: 'Full-Stack', icon: Server },
  { label: 'Electric & Autonomous Vehicles', icon: Car },
  { label: 'Agritech', icon: Sprout },
]

/* Roadmap: pin = stop on the route, card = label box position in the 620×440 viewBox */
export const roadmap = [
  { pin: [70, 80], card: [16, 10], dates: 'Aug 2022 – Sep 2022', company: 'Vovo Technologies', role: 'Data Analytics Intern' },
  { pin: [210, 170], card: [30, 192], dates: 'Jun 2023 – Dec 2023', company: 'Greet Labs', role: 'Full Stack Dev Intern' },
  { pin: [340, 210], card: [368, 180], dates: 'Jun 2024 – Nov 2024', company: 'MultiplexEV', role: 'Software Developer Intern' },
  { pin: [350, 340], card: [170, 362], dates: 'Dec 2024 – Mar 2026', company: 'MultiplexEV', role: 'Software Developer I' },
  { pin: [560, 120], card: [394, 28], dates: 'Apr 2026 – Present', company: 'MultiplexEV', role: 'Software Developer II', now: true },
]
export const routePath = 'M70 80 C150 80 160 160 210 170 S320 140 340 210 S270 330 350 340 S530 330 560 120'

export const now = [
  { label: 'Software Developer II · MultiplexEV', icon: Briefcase },
  { label: 'M.Tech Data Engineering · GM University', icon: GraduationCap },
]

export const stats = [
  { value: '2+', label: 'Years Experience', icon: CalendarClock, tone: 'blue' },
  { value: '5', label: 'Roles Across 3 Companies', icon: Briefcase, tone: 'green' },
  { value: '4', label: 'Platforms Shipped at Work', icon: LayoutGrid, tone: 'amber' },
  { value: '7', label: 'Side Projects', icon: FolderGit2, tone: 'blue' },
]

export const about = [
  'I lead the frontend team at MultiplexEV, owning Sitefleet, our fleet management platform built in Next.js, React and TypeScript.',
  'I’ve also built a Flutter app for live vehicle monitoring, a computer vision pipeline from raw images to deployed models, and FastAPI services with JWT and RBAC. I review code and mentor junior developers on the team.',
]

export const domains = [
  { title: 'Electric & Autonomous Vehicles', text: 'Fleet, missions, dispatch', icon: Car, tone: 'blue' },
  { title: 'Agriculture Tech', text: 'Crop health, farm ops', icon: Sprout, tone: 'green' },
  { title: 'Computer Vision', text: 'Annotation to deployment', icon: ScanEye, tone: 'amber' },
]

export const builds = [
  {
    title: 'Fleet Platform', text: 'Frontend for electric and autonomous vehicle fleets', icon: Map, tone: 'blue',
    feats: [['Live Tracking', Radar], ['Route Mapping', Route], ['Missions', Flag], ['Dispatch', Send], ['Design System', Palette]],
    stack: 'Next.js · React · TypeScript',
  },
  {
    title: 'Vision Data Pipeline', text: 'Raw vehicle images to deployed models', icon: ScanEye, tone: 'amber',
    feats: [['Deduplicate', CopyX], ['Pre-label', Tag], ['Review', Eye], ['Train', BrainCircuit], ['Deploy', Rocket]],
    stack: 'GCP · CVAT · Python',
  },
  {
    title: 'Agri Analytics', text: 'Crop health dashboards from AI models', icon: Sprout, tone: 'green',
    feats: [['Crop Health', Leaf], ['Disease Detection', Bug], ['Farm & Site Ops', Tractor], ['Reports', BarChart3]],
    stack: 'Next.js · FastAPI · Gemini · DINO',
  },
  {
    title: 'Vehicle Monitoring App', text: 'Cross-platform live vehicle status', icon: Smartphone, tone: 'blue',
    feats: [['Live GPS', LocateFixed], ['Battery SoC', BatteryMedium], ['Charging Status', BatteryCharging]],
    stack: 'Flutter · Dart · REST APIs',
  },
]

export const experience = [
  {
    title: 'Software Developer II', org: 'MultiplexEV, Bengaluru', when: 'Apr 2026 – Now', icon: Car, now: true,
    highlights: [['Lead Frontend', LayoutDashboard], ['CV Pipeline on GCP', ScanEye], ['FastAPI, JWT, RBAC', ShieldCheck],
      ['Tests & SonarQube', FlaskConical], ['Grafana', Activity], ['Mentoring & Reviews', GitPullRequest], ['Farm & Site Workflows', Tractor]],
  },
  {
    title: 'Software Developer I', org: 'MultiplexEV, Bengaluru', when: 'Dec 2024 – Mar 2026', icon: Sprout,
    highlights: [['Agri Analytics Platform', Leaf], ['Flutter Monitoring App', Smartphone], ['Frappe Test-Data Pipeline', FileBarChart],
      ['Food Coupon Dashboard', Ticket], ['Docker Deploys', Container], ['Website SEO', Search]],
  },
  {
    title: 'Software Developer Intern', org: 'MultiplexEV, Bengaluru', when: 'Jun – Nov 2024', icon: Code2,
    highlights: [['Vehicle Data Python Package', Package], ['ERPNext Setup', Database], ['Website Performance', Gauge], ['Apps Script Automation', Sheet]],
  },
  {
    title: 'Full Stack Web Developer Intern', org: 'Greet Labs, Bengaluru', when: 'Jun – Dec 2023', icon: Receipt,
    highlights: [['Tax-Track UI', MonitorSmartphone], ['Third-Party APIs', Plug], ['Faster Load Times', Zap]],
  },
  {
    title: 'Data Analytics Intern', org: 'Vovo Technologies, Davanagere', when: 'Aug – Sep 2022', icon: BarChart3,
    highlights: [['Pandas Data Cleaning', Table], ['Seaborn Charts', LineChart], ['Auto-Updating Dashboards', RefreshCw]],
  },
]

export const process = [
  { title: 'Design First', text: 'Start in Figma and build on a shared design system.', icon: PenTool, tone: 'blue' },
  { title: 'Agile Sprints', text: 'Plan and ship in sprints, with PI planning on Jira.', icon: Kanban, tone: 'green' },
  { title: 'Test Everything', text: 'Unit, integration and Playwright E2E tests, plus Postman.', icon: FlaskConical, tone: 'amber' },
  { title: 'Keep It Clean', text: 'Fix SonarQube bugs, smells and vulnerabilities.', icon: ShieldCheck, tone: 'blue' },
  { title: 'Watch Production', text: 'Monitor services with Grafana and GCP after release.', icon: Activity, tone: 'green' },
  { title: 'Lift the Team', text: 'Mentor juniors and review PRs for readability and coverage.', icon: Users, tone: 'amber' },
]

export const projectFilters = [
  { id: 'all', label: 'All', icon: LayoutGrid },
  { id: 'mern', label: 'MERN', icon: Database },
  { id: 'react', label: 'React', icon: Atom },
  { id: 'js', label: 'JavaScript', icon: FileCode2 },
]

export const projects = [
  { title: 'SocioPedia', text: 'Social media app on the MERN stack.', image: socialApp, types: ['mern', 'react'],
    tags: ['MongoDB', 'Express', 'React', 'Node'], code: 'https://github.com/Bhavana-K-G/sociopedia-app' },
  { title: 'StaySphere', text: 'Stay booking app on the MERN stack.', image: bookingApp, types: ['mern', 'react'],
    tags: ['React', 'Node', 'Express', 'MongoDB', 'Bootstrap'], code: 'https://github.com/Bhavana-K-G/StaySphere-App' },
  { title: 'Tax-Track', text: 'MERN CRUD app for tracking tax records.', image: gst, types: ['mern', 'react'],
    tags: ['React', 'Node', 'Express', 'MongoDB'], code: 'https://github.com/Bhavana-K-G/TaxTrack-App' },
  { title: 'StaffTrackr', text: 'MERN CRUD app for managing employees.', image: employee, types: ['mern', 'react'],
    tags: ['React', 'Node', 'Express', 'MongoDB'], code: 'https://github.com/Bhavana-K-G/StaffTrackr-System' },
  { title: 'Zibber App', text: 'Web app built in React and Bootstrap.', image: zibber, types: ['react'],
    tags: ['React', 'JavaScript', 'Bootstrap'], code: 'https://github.com/Bhavana-K-G/Zibber-App', live: 'https://zibber-app.vercel.app/' },
  { title: 'Recipe Book', text: 'Recipe collection site in vanilla JavaScript.', image: recipe, types: ['js'],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], code: 'https://github.com/Bhavana-K-G/recipe-book', live: 'https://recipe-book-zeta.vercel.app/' },
  { title: 'BMI Calculator', text: 'Quick BMI calculator in vanilla JavaScript.', image: bmi, types: ['js'],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], code: 'https://github.com/Bhavana-K-G/BMI-Calculator', live: 'https://bmi-calculator-blond-sigma.vercel.app/' },
]

export const skills = [
  { title: 'Frontend', icon: Monitor, tone: 'blue', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Figma'] },
  { title: 'Mobile', icon: Smartphone, tone: 'green', items: ['Flutter', 'Dart', 'Android'] },
  { title: 'Backend & APIs', icon: Server, tone: 'amber', items: ['FastAPI', 'Node.js', 'Python', 'REST', 'JWT', 'RBAC', 'Swagger', 'Postman'] },
  { title: 'Databases', icon: Database, tone: 'blue', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'ClickHouse'] },
  { title: 'Cloud & DevOps', icon: Cloud, tone: 'green', items: ['GCP', 'Docker', 'CI/CD', 'Git', 'GitHub', 'GitLab', 'Grafana'] },
  { title: 'Testing & Quality', icon: FlaskConical, tone: 'amber', items: ['Unit', 'Integration', 'Playwright E2E', 'SonarQube', 'Code Review'] },
  { title: 'ML & Data', icon: BrainCircuit, tone: 'blue', items: ['CVAT', 'Gemini', 'DINO', 'NumPy', 'Pandas', 'scikit-learn', 'Seaborn'] },
  { title: 'ERP & Process', icon: Kanban, tone: 'green', items: ['Frappe', 'ERPNext', 'Scrum', 'PI Planning', 'Jira', 'Mentoring'] },
]

export const education = [
  { degree: 'M.Tech Data Engineering', place: 'GM University, Davanagere · 2026 – Present', icon: DatabaseZap, tone: 'blue', pursuing: true },
  { degree: 'B.E. Information Science & Engineering', place: 'GM Institute of Technology (VTU), Davanagere · 2019 – 2023', icon: School, tone: 'amber', cgpa: '8.01' },
]
