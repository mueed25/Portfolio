import { Clock, TrendingUp, CheckCircle2, AlertTriangle, Users, Database, Zap } from 'lucide-react';

export const caseStudiesData = {
  "digital-subscription-platform": {
    title: "Digital Subscription Platform: Crisis Recovery Under Pressure",
    client: "National Regulatory Agency (Nigeria)",
    duration: "7 months (active development)",
    role: "Infrastructure & Security Engineer",
    impact: "critical",
    category: "Crisis Response",
    date: "2024",
    
    stats: [
      { label: "Recovery Time", value: "24 hours", icon: "Clock" },
      { label: "Total Downtime", value: "0 minutes", icon: "CheckCircle2" },
      { label: "CPU Reduction", value: "85%", icon: "TrendingUp" },
      { label: "Post-Recovery Uptime", value: "99.9%", icon: "AlertTriangle" }
    ],

    images: [
      { url: "https://placehold.co/1200x800/1e293b/64748b?text=Server+Monitoring", alt: "Server monitoring dashboard" },
      { url: "https://placehold.co/600x400/1e293b/64748b?text=Security+Response", alt: "Security incident response" },
      { url: "https://placehold.co/600x400/1e293b/64748b?text=System+Architecture", alt: "Updated infrastructure" },
      { url: "https://placehold.co/1200x800/1e293b/64748b?text=Performance+Recovery", alt: "Performance metrics post-recovery" },
      { url: "https://placehold.co/1200x800/1e293b/64748b?text=Security+Hardening", alt: "Security implementation" },
    ],

    challenge: "Three months into production testing for a digital subscription platform serving a national regulatory agency, the VMware server was compromised by cryptocurrency miners during a critical phase. The attackers had gained system access and deployed mining scripts that consumed massive CPU resources, rendering the server nearly unusable for normal operations. With a high-stakes presentation scheduled in less than 24 hours—including the Director-General and contracting partners from Abuja—the system was running at critical capacity and couldn't process the testing workload needed for the demonstration. A multi-million naira contract depended on a successful presentation the next day. The system couldn't go offline, there was no time for a full rebuild, and any visible downtime or performance issues during the presentation would signal failure to stakeholders who had no idea a security breach had occurred.",

    solution: [
      {
        title: "Comprehensive System Audit",
        description: "Used process monitoring and log analysis to identify all compromised files, backdoor entry points, and malicious mining processes—reporting findings to our senior engineer for validation at each stage. This systematic approach ensured we caught every infection point without missing hidden threats."
      },
      {
        title: "Systematic Threat Removal",
        description: "Removed exploit files and backdoors while maintaining system integrity, with our senior engineer reviewing each removal step to ensure no critical system components were accidentally affected. This collaborative validation prevented potential mistakes under time pressure."
      },
      {
        title: "Multi-Layered Firewall Implementation",
        description: "Collaborated on firewall strategy then implemented multi-layered rules to block malicious traffic patterns and disabled all unauthorized login attempts to prevent attackers from regaining access. Followed security best practices established by our team."
      },
      {
        title: "Access Control Hardening",
        description: "Blacklisted attacker IP addresses across the network perimeter and hardened SSH access controls with key-based authentication and port modifications, following security best practices to close all attack vectors."
      },
      {
        title: "Enhanced Monitoring & Alerting",
        description: "Deployed enhanced monitoring systems with real-time alerts to detect CPU anomalies, unusual network traffic, and unauthorized access attempts—ensuring our team would catch future threats before they escalated into full compromises."
      },
      {
        title: "Performance Optimization",
        description: "Optimized server performance post-cleanup by removing residual mining processes, clearing system caches, and fine-tuning PM2 configurations to ensure smooth operation for the high-stakes presentation the following morning."
      }
    ],

    technologies: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "VMware VPS",
      "PM2 Process Management",
      "Linux Server Administration",
      "UFW/iptables Firewall",
      "SSH Hardening",
      "System Monitoring",
      "Log Analysis",
      "CI/CD Pipeline"
    ],

    outcomes: [
      {
        title: "24-Hour Team Recovery",
        description: "System fully secured, cleaned, and optimized before the deadline with zero downtime during the recovery process. The collaborative approach between our team ensured nothing was missed."
      },
      {
        title: "Flawless Stakeholder Presentation",
        description: "The Director-General meeting proceeded as scheduled without any performance issues—stakeholders never knew a security breach had occurred just 24 hours prior."
      },
      {
        title: "Immediate Performance Gains",
        description: "Post-recovery system showed 85%+ reduction in CPU usage, faster API response times, and stable resource utilization during peak testing periods."
      },
      {
        title: "Long-Term Security Posture",
        description: "Zero subsequent attacks over the remaining 4 months of development. Enhanced monitoring caught and blocked multiple unauthorized access attempts before they could compromise the system."
      },
      {
        title: "Project Continuity Maintained",
        description: "The national platform launched successfully on schedule, serving its intended regulatory functions without interruption or delays caused by the incident."
      },
      {
        title: "Team Knowledge Transfer",
        description: "The crisis response became a case study within our team for handling production security incidents, improving our overall incident response protocols for future projects."
      }
    ],

    keyTakeaway: {
      title: "Security & Team Coordination Under Pressure",
      description: "Security isn't just about prevention—it's about rapid, methodical response when things go wrong, and having a team structure that enables quick decision-making under pressure. Production systems serving national infrastructure can't afford visible failures or extended downtime. This experience taught me that true infrastructure expertise means solving critical problems systematically while maintaining stakeholder confidence and system availability—but equally important is knowing when to consult senior expertise rather than making critical decisions in isolation. Working under the guidance of experienced engineers during crisis situations reinforced that the best technical decisions come from combining hands-on execution with seasoned oversight: audit first, validate findings, remove threats methodically, secure comprehensively, then optimize. Skip the validation step and you risk making the problem worse. Proper firewall configuration, continuous monitoring, and layered access controls aren't optional features you add later—they're the foundation that determines whether a system survives real-world attacks. But having a team that can coordinate effectively under extreme time pressure is what turns a potential disaster into an invisible success."
    },

    metrics: [
      { label: "CPU Usage Reduction", value: "85%" },
      { label: "Recovery Window", value: "24 hours" },
      { label: "Zero Downtime", value: "100%" },
      { label: "Attack-Free Period", value: "4+ months" }
    ]
  },

  "state-budget-platform": {
    title: "State Government Budget Management Platform",
    client: "State Government (Nigeria)",
    duration: "3 months (ongoing - testing phase)",
    role: "Full-Stack Engineer & Infrastructure Lead",
    impact: "high",
    category: "Government Systems",
    date: "2024 - Present",
    
    stats: [
      { label: "MDAs Served", value: "Statewide", icon: "Users" },
      { label: "System Status", value: "Testing", icon: "TrendingUp" },
      { label: "Workflow Type", value: "Multi-tier", icon: "Database" },
      { label: "Infrastructure", value: "VMware VPS", icon: "Zap" }
    ],

    images: [
      { url: "https://placehold.co/1200x800/1e293b/64748b?text=Budget+Dashboard", alt: "Budget management dashboard" },
      { url: "https://placehold.co/600x400/1e293b/64748b?text=Approval+Workflow", alt: "Multi-tier approval system" },
      { url: "https://placehold.co/600x400/1e293b/64748b?text=Analytics+View", alt: "Real-time budget analytics" },
      { url: "https://placehold.co/1200x800/1e293b/64748b?text=Audit+Trail", alt: "Comprehensive audit logging" },
      { url: "https://placehold.co/1200x800/1e293b/64748b?text=User+Management", alt: "Role-based access control" },
    ],

    challenge: "A Nigerian state government had no centralized electronic system for budget tracking and management across its Ministries, Departments, and Agencies (MDAs). Budget planning, approval workflows, and expenditure tracking were handled through manual, paper-based processes that created bottlenecks, limited transparency, and made real-time financial oversight nearly impossible. The state needed a comprehensive digital platform that could handle the entire budget lifecycle—from initial proposals through multi-level approvals to expenditure tracking and reporting—while serving dozens of MDAs with different roles, permissions, and reporting requirements. This project ran parallel to finalizing the national subscription platform, requiring careful time management while balancing final-year university examinations in Mechatronics Engineering.",

    solution: [
      {
        title: "Multi-Tier Budget Workflow System",
        description: "Designed and implemented a comprehensive workflow supporting proposal creation, hierarchical approval chains, revision tracking, and final authorization across all state MDAs. Each workflow stage includes automated notifications and deadline tracking."
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description: "Built user management system with granular permissions for finance ministry officials, department heads, budget officers, and executive oversight—ensuring each user sees only relevant data for their responsibilities while maintaining security."
      },
      {
        title: "Real-Time Tracking & Analytics",
        description: "Developed monitoring dashboard enabling state officials to track allocations, expenditures, variances, and utilization rates across departments in real-time, providing instant visibility into state financial operations."
      },
      {
        title: "Automated Reporting Engine",
        description: "Created reporting system generating compliance reports, budget performance summaries, and expenditure breakdowns for different stakeholder levels—from detailed financial reports to executive summaries."
      },
      {
        title: "Comprehensive Audit Trail",
        description: "Implemented logging system capturing all budget modifications, approvals, and financial transactions with timestamps and user attribution for complete accountability and regulatory compliance."
      },
      {
        title: "Production Infrastructure Deployment",
        description: "Deployed and managed VMware VPS infrastructure including database optimization, automated backup systems, and security configurations to meet government data protection requirements."
      },
      {
        title: "User-Centered Interface Design",
        description: "Built responsive frontend designed for users with varying technical skill levels, ensuring adoption across different government departments through intuitive navigation and clear workflows."
      }
    ],

    technologies: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "VMware VPS Infrastructure",
      "PM2",
      "Role-Based Access Control (RBAC)",
      "Financial Reporting Systems",
      "Government Compliance Standards"
    ],

    outcomes: [
      {
        title: "Statewide MDA Integration",
        description: "Currently in testing phase with all state MDAs preparing for full deployment. The platform successfully handles multi-department coordination requirements."
      },
      {
        title: "End-to-End Budget Lifecycle",
        description: "Complete budget management from proposal to tracking now possible in a single platform where none existed before, eliminating fragmented manual processes."
      },
      {
        title: "Centralized Workflow Coordination",
        description: "Multi-department collaboration streamlined through digital workflows, eliminating paper-based bottlenecks between ministries and enabling real-time status visibility."
      },
      {
        title: "Transparency Infrastructure",
        description: "Foundation established for government accountability through comprehensive audit trails and real-time reporting capabilities that enable oversight at every administrative level."
      },
      {
        title: "Scalable Production Environment",
        description: "Infrastructure deployed on VMware with capacity to handle statewide budget operations as usage expands from testing to full production deployment."
      },
      {
        title: "First Digital Budget System",
        description: "Platform represents the state's first comprehensive digital budget management system, positioning them for more efficient and transparent financial governance."
      }
    ],

    keyTakeaway: {
      title: "Government Systems Require User-Centered Design",
      description: "Building for government requires understanding that technology is only part of the solution—the real challenge is designing systems that accommodate complex organizational hierarchies, multiple approval levels, and users with vastly different technical capabilities. Government systems must balance accessibility with security, transparency with data protection, and flexibility with compliance. This project also reinforced the importance of parallel workstream management: delivering government-grade infrastructure while managing competing priorities (university finals, other client projects) requires discipline, clear communication with senior oversight, and knowing when to ask for guidance rather than assuming you have all the answers."
    },

    metrics: [
      { label: "MDAs Integrated", value: "All State" },
      { label: "Workflow Tiers", value: "Multi-level" },
      { label: "Development Time", value: "3 months" },
      { label: "Current Status", value: "Testing" }
    ]
  },

  "pilgrimage-platform": {
    title: "National Pilgrimage Platform: Mission-Critical Mobile Rebuild",
    client: "National Hajj Commission (Nigeria)",
    duration: "1 month (deadline-driven)",
    role: "Lead Technical Developer",
    impact: "critical",
    category: "Platform Migration",
    date: "2024",
    
    stats: [
      { label: "Rebuild Timeline", value: "30 days", icon: "Clock" },
      { label: "Deadline Status", value: "Met", icon: "CheckCircle2" },
      { label: "Post-Launch Issues", value: "Zero", icon: "AlertTriangle" },
      { label: "Offline Support", value: "Enabled", icon: "Zap" }
    ],

    images: [
      { url: "https://placehold.co/1200x800/1e293b/64748b?text=Mobile+App", alt: "Mobile application interface" },
      { url: "https://placehold.co/600x400/1e293b/64748b?text=Emergency+Contacts", alt: "Emergency contact directory" },
      { url: "https://placehold.co/600x400/1e293b/64748b?text=Offline+Mode", alt: "Offline-first architecture" },
      { url: "https://placehold.co/1200x800/1e293b/64748b?text=Admin+Panel", alt: "Database management panel" },
      { url: "https://placehold.co/1200x800/1e293b/64748b?text=Data+Sync", alt: "Real-time synchronization" },
    ],

    challenge: "The National Hajj Commission's existing mobile directorate platform had become completely non-functional due to outdated technology. The React Native application and its SQL Server backend were no longer operational, leaving thousands of pilgrims without access to critical emergency contact information during the Hajj season. The platform served as a digital lifeline for pilgrims—providing real-time access to directorate phone numbers, agent contacts, WhatsApp lines, and emergency services. When pilgrims faced emergencies, got separated from their groups, or needed immediate assistance in Saudi Arabia, this directory was their primary resource for reaching the right officials quickly. With Hajj season approaching and a high-stakes demonstration scheduled, the system needed to be completely rebuilt and deployed within one month. The old codebase was beyond repair—this required a full platform rebuild from scratch while maintaining the same essential functionality pilgrims depended on.",

    solution: [
      {
        title: "Complete Mobile Application Rebuild",
        description: "Rebuilt the entire application from scratch using React Native, redesigning the user interface for better accessibility during pressure situations where pilgrims need emergency contacts quickly and intuitively."
      },
      {
        title: "Backend Infrastructure Migration",
        description: "Migrated from non-functional SQL Server to modern PHP hosting environment, restructuring the database architecture for better performance, reliability, and ease of maintenance by commission staff."
      },
      {
        title: "Offline-First Architecture Implementation",
        description: "Implemented caching strategy enabling pilgrims to access contact directories even without internet connectivity—critical for areas with poor network coverage during Hajj operations in Saudi Arabia."
      },
      {
        title: "Dynamic Data Synchronization",
        description: "Built synchronization system that updates pilgrim devices with latest directorate contacts, agent information, and emergency numbers whenever database changes occur, while preserving offline access to previously cached data."
      },
      {
        title: "Self-Service Admin System",
        description: "Designed database access system allowing commission staff to add new agents, update contact information, and manage emergency numbers in real-time without requiring developer intervention or app updates."
      },
      {
        title: "Emergency Contact Organization",
        description: "Developed intuitive categorization organizing directors, agents, emergency services, and support lines for quick navigation during high-stress situations when pilgrims need immediate assistance."
      },
      {
        title: "Production Deployment & Testing",
        description: "Managed complete hosting setup, database configuration, and platform stability testing to ensure reliable nationwide pilgrim access before the critical commission demonstration."
      }
    ],

    technologies: [
      "React Native",
      "PHP",
      "MySQL/SQL",
      "Offline-First Architecture",
      "Data Caching",
      "Real-Time Synchronization",
      "Mobile App Development",
      "Database Migration",
      "Production Hosting Setup"
    ],

    outcomes: [
      {
        title: "30-Day Complete Rebuild",
        description: "Delivered fully functional platform from non-operational legacy system to production-ready mobile app within the one-month deadline, meeting all commission requirements."
      },
      {
        title: "Successful Stakeholder Demonstration",
        description: "Platform performed flawlessly during commission presentation with Director-General, showcasing all emergency contact features and offline capabilities without any technical issues."
      },
      {
        title: "Zero Post-Launch Complaints",
        description: "No revision requests or complaints after deployment—system met all operational requirements immediately and performed reliably during actual Hajj operations."
      },
      {
        title: "Critical Offline Capability",
        description: "Pilgrims can now access emergency contacts even in areas with poor connectivity—a crucial safety improvement over the old system that required constant internet access."
      },
      {
        title: "Self-Service Management",
        description: "Commission staff can independently update contact database without developer intervention, enabling real-time updates during Hajj operations when situations change rapidly."
      },
      {
        title: "Production Stability Achieved",
        description: "Platform currently live and serving pilgrims with reliable access to directorate and emergency contact information during one of the largest annual religious pilgrimages."
      }
    ],

    keyTakeaway: {
      title: "Mission-Critical Systems Require Real-World Context",
      description: "Rebuilding mission-critical systems under tight deadlines requires making smart architectural decisions that prioritize reliability over complexity. The offline-first approach wasn't just a technical feature—it was understanding the real-world context: pilgrims in Saudi Arabia face connectivity issues, and when they're lost or in emergency situations, they can't wait for network access to find help. This project reinforced that effective technical leadership means balancing speed with quality, knowing when to leverage proven technologies (PHP hosting, React Native) rather than experimenting with new stacks under deadline pressure, and building systems that work in the real-world conditions users actually face—not just ideal scenarios. Working with a lean two-person team also taught me the value of clear task division and intensive coordination when timelines are non-negotiable."
    },

    metrics: [
      { label: "Development Time", value: "30 days" },
      { label: "Deadline Compliance", value: "100%" },
      { label: "Post-Launch Issues", value: "0" },
      { label: "Offline Capability", value: "Full" }
    ]
  },

  "nonprofit-platform": {
    title: "International Nonprofit Platform: Ongoing Operations & Support",
    client: "European Humanitarian Organization",
    duration: "Ongoing",
    role: "Direct Contractor (Full-Stack + Infrastructure)",
    impact: "high",
    category: "Maintenance & Support",
    date: "2024 - Present",
    
    stats: [
      { label: "Support Model", value: "24/7", icon: "Clock" },
      { label: "Uptime Target", value: "99.9%", icon: "TrendingUp" },
      { label: "Response Time", value: "< 2 hours", icon: "Zap" },
      { label: "Contract Status", value: "Active", icon: "CheckCircle2" }
    ],

    images: [
      { url: "https://placehold.co/1200x800/1e293b/64748b?text=Platform+Dashboard", alt: "Platform management dashboard" },
      { url: "https://placehold.co/600x400/1e293b/64748b?text=Monitoring+System", alt: "24/7 monitoring infrastructure" },
      { url: "https://placehold.co/600x400/1e293b/64748b?text=Performance+Metrics", alt: "System performance tracking" },
      { url: "https://placehold.co/1200x800/1e293b/64748b?text=Deployment+Pipeline", alt: "CI/CD deployment system" },
      { url: "https://placehold.co/1200x800/1e293b/64748b?text=Backup+Systems", alt: "Automated backup infrastructure" },
    ],

    challenge: "A European-based humanitarian organization serving communities across Europe needed reliable technical infrastructure and continuous operational support for their web platform. As a direct contractor (not subcontracted), the engagement required managing the complete technical stack—from routine maintenance and feature updates to emergency response and performance optimization—while ensuring 24/7 availability for an organization whose mission-critical operations cannot tolerate extended downtime. The challenge included coordinating across time zones, responding to urgent issues outside standard business hours, and maintaining system reliability while implementing ongoing improvements and updates to support the organization's expanding humanitarian services.",

    solution: [
      {
        title: "24/7 Technical Support Infrastructure",
        description: "Established round-the-clock monitoring and response system ensuring platform stability and immediate incident response regardless of time zone or day of week, critical for an international organization serving multiple regions."
      },
      {
        title: "Proactive Monitoring & Maintenance",
        description: "Implemented automated monitoring for uptime, performance metrics, security vulnerabilities, and system health, enabling proactive issue resolution before problems impact end users or organizational operations."
      },
      {
        title: "Continuous Platform Optimization",
        description: "Ongoing performance tuning, database optimization, and infrastructure improvements to maintain fast response times and reliable service as user base and organizational needs grow."
      },
      {
        title: "Feature Development & Updates",
        description: "Regular implementation of new features, functionality updates, and improvements based on organizational requirements and user feedback, keeping the platform aligned with mission objectives."
      },
      {
        title: "Security & Compliance Management",
        description: "Continuous security monitoring, patch management, and compliance maintenance to protect sensitive humanitarian data and maintain organizational security standards."
      },
      {
        title: "Backup & Disaster Recovery",
        description: "Automated backup systems with tested recovery procedures ensuring data protection and business continuity in case of infrastructure failures or security incidents."
      },
      {
        title: "Cross-Timezone Coordination",
        description: "Effective communication and response protocols enabling seamless collaboration despite geographic and time zone differences between Nigeria and European operations."
      }
    ],

    technologies: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "CI/CD Pipeline",
      "Automated Monitoring",
      "Backup Systems",
      "Performance Optimization",
      "Security Management",
      "Infrastructure Maintenance"
    ],

    outcomes: [
      {
        title: "Consistent Platform Availability",
        description: "Maintained target 99.9% uptime throughout the engagement, ensuring reliable access for humanitarian services across European communities without significant service interruptions."
      },
      {
        title: "Rapid Incident Response",
        description: "Average response time under 2 hours for all reported issues, with critical incidents addressed immediately regardless of time of day or timezone differences."
      },
      {
        title: "Zero Data Loss Incidents",
        description: "Comprehensive backup and monitoring systems prevented any data loss events, protecting sensitive humanitarian information and organizational records."
      },
      {
        title: "Continuous Feature Delivery",
        description: "Regular deployment of updates and new features supporting evolving organizational needs while maintaining platform stability and performance standards."
      },
      {
        title: "Proactive Issue Prevention",
        description: "Monitoring infrastructure caught and resolved potential issues before they impacted users, minimizing unplanned downtime and service degradation."
      },
      {
        title: "Ongoing Client Satisfaction",
        description: "Active contract continuation demonstrates organizational confidence in technical capabilities and service reliability for their mission-critical platform."
      }
    ],

    keyTakeaway: {
      title: "Reliability Requires Consistent Operational Excellence",
      description: "Long-term platform maintenance and support is fundamentally different from project-based development—it requires building sustainable operational practices, not just delivering features. True reliability comes from consistent monitoring, proactive maintenance, and rapid response capabilities that function independently of timezone, day of week, or personal schedule. This engagement reinforced that technical excellence isn't just about solving dramatic crises or building impressive features—it's about the unglamorous daily work of keeping systems running smoothly, responding quickly when issues arise, and continuously improving infrastructure before problems become emergencies. For organizations whose missions depend on digital infrastructure, having a technical partner who treats their platform with the same urgency and care during routine maintenance as they would during a crisis is what separates reliable service from eventual failure."
    },

    metrics: [
      { label: "Uptime Maintained", value: "99.9%" },
      { label: "Response Time", value: "< 2 hrs" },
      { label: "Data Loss Events", value: "0" },
      { label: "Contract Duration", value: "Ongoing" }
    ]
  }
};