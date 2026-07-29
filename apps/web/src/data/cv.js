export const cv = {
  identity: {
    name: 'Deepankar Yadav',
    handle: 'd33pankar',
    role: 'Big Data Engineer',
    tagline: 'I build data platforms that stay fast when the data gets big.',
    location: 'Delhi, India',
    timezone: 'Asia/Kolkata',
    available: true,
    availabilityNote: 'Open to data engineering conversations & collaboration.',
    yearsExperience: 5.5,
    avatarInitials: 'DY',
  },

  about: [
    "I'm a Big Data Engineer with 5.5+ years building scalable data platforms across BFSI, Life Sciences, and Retail.",
    'I specialise in PySpark pipeline optimisation, Medallion Architecture, and legacy migration — most recently cutting a pipeline\u2019s runtime by 73% (40 hrs \u2192 10.5 hrs) at American Express.',
    "I'm comfortable across Python, Scala, SQL and PySpark, with hands-on AWS, Databricks, and Airflow experience.",
    'I care about the unglamorous parts that keep data trustworthy: clean models, solid logging and error handling, and pipelines that survive schema change.',
    'Big on mentoring, documentation, and cross-functional delivery in agile teams.',
  ],

  currently: [
    'Pursuing an M.Tech in Cloud Computing at IIT Patna — alongside a full-time role.',
    'Modernising legacy data workloads (MapReduce \u2192 PySpark) at Ernst & Young.',
    'Deepening AWS expertise — actively pursuing AWS certifications.',
  ],

  stats: [
    { label: 'years shipping data', value: '5.5+' },
    { label: 'peak runtime cut', value: '73%' },
    { label: 'banks on FSCS platform', value: '3' },
    { label: 'QA productivity gain', value: '40%' },
  ],

  experience: [
    {
      title: 'Senior Tech Consultant',
      company: 'Ernst & Young',
      companyUrl: 'https://www.ey.com',
      period: '2024 — Present',
      location: 'Gurgaon, India',
      type: 'Full-time',
      client: 'American Express',
      stack: ['PySpark', 'MapReduce', 'Hive', 'PostgreSQL', 'AWS', 'Databricks', 'Airflow'],
      highlights: [
        'Cut pipeline runtime 73% (40 hrs \u2192 10.5 hrs) by migrating MapReduce workloads to PySpark, enabling same-day data availability and eliminating reporting delays.',
        'Automated ML workflows and job execution, removing ~7 hrs/week of manual effort in non-orchestrated environments.',
        'Partnered with Infrastructure teams to optimise resource-intensive workloads, improving cost efficiency across shared compute clusters.',
        'Established production-grade logging and error-handling standards, cutting failure triage time and improving reliability.',
      ],
    },
    {
      title: 'Associate — Projects',
      company: 'Cognizant Technology Solutions',
      companyUrl: 'https://www.cognizant.com',
      period: '2023 — 2024',
      location: 'Gurgaon, India',
      type: 'Full-time',
      stack: ['Apache Spark', 'PySpark', 'PostgreSQL', 'AWS S3', 'Airflow', 'Iceberg', 'GitLab'],
      highlights: [
        'Built Medallion-based MDM pipelines, standardising data layers and improving downstream analytics reliability.',
        'Improved data quality 10% by integrating external sources and redesigning schemas, reducing duplicate and inconsistent records.',
        'Increased pipeline performance 20% via PySpark optimisation and partition tuning, improving SLA adherence.',
        'Migrated the data lake from Parquet to Iceberg, enabling schema evolution and preventing downstream breakages.',
        'Mentored junior developers and independently resolved tickets.',
      ],
    },
    {
      title: 'System Engineer',
      company: 'Tata Consultancy Services',
      companyUrl: 'https://www.tcs.com',
      period: '2020 — 2023',
      location: 'Gurgaon, India',
      type: 'Full-time',
      stack: ['Apache Spark', 'PySpark', 'Python', 'Scala', 'PostgreSQL', 'Hadoop', 'HDFS'],
      highlights: [
        'Delivered the FSCS data platform for cross-bank compensation across 3 major banks, designing scalable distributed pipelines.',
        'Reduced pipeline runtime 33% (6 hrs \u2192 4 hrs) through Spark performance tuning.',
        'Built an automated testing framework, improving QA productivity 40% and ensuring data integrity across pipelines.',
        'Led a team of 5 engineers; owned production stability and resolved data-leakage issues.',
        'Collaborated with the Power BI team for client presentations; mentored new joiners.',
      ],
    },
  ],

  education: [
    {
      degree: 'M.Tech, Cloud Computing',
      university: 'Indian Institute of Technology Patna',
      period: '2025 — Present',
      field: 'Cloud Computing',
      location: 'Bihar, India',
    },
    {
      degree: 'B.Tech, Computer Science & Engineering',
      university: 'Dr. A.P.J. Abdul Kalam Technical University',
      period: '2016 — 2020',
      field: 'Computer Science & Engineering',
      location: 'Uttar Pradesh, India',
      notes: 'Best Project of the Year (CSE dept); organised hackathons.',
    },
  ],

  certifications: [
    { name: 'High-Flyer Award — Ernst & Young', year: '2025' },
    { name: 'SSB Conference Selection (3\u00d7) — Service Selection Board', year: '2024' },
    { name: 'GCP Associate Cloud Engineer — Google Cloud', year: '2022' },
    { name: 'Xcelerate Warrior Award — TCS', year: '2022' },
    { name: 'OnSpot Award (2\u00d7) + Team Award (2\u00d7) — TCS', year: '2021' },
    { name: "NCC 'B' Certificate", year: '2015' },
  ],

  skills: {
    cloudAndBigData: ['AWS (S3, EC2)', 'Databricks', 'Apache Spark', 'PySpark', 'Scala-Spark', 'Hadoop (HDFS)'],
    dataStorageAndModeling: ['PostgreSQL', 'Hive', 'Impala', 'Iceberg', 'SQL', 'Dimensional Modeling'],
    programmingAndScripting: ['Python', 'SQL', 'Scala', 'Bash'],
    orchestrationAndDevOps: ['Airflow', 'Jenkins', 'CI/CD', 'Control-M', 'UC4'],
    tools: ['Git', 'GitLab', 'GitHub Enterprise', 'IntelliJ IDEA', 'PyCharm', 'Jupyter', 'DBeaver', 'Jira'],
    softSkills: ['Mentoring', 'Technical writing', 'Agile delivery', 'Cross-functional collaboration'],
  },

  projects: [
    {
      name: 'American Express',
      tagline: 'Legacy pipeline modernisation — 73% faster.',
      description: 'Migrated heavy MapReduce workloads to PySpark, cutting runtime 73% (40 hrs \u2192 10.5 hrs) and unlocking same-day data availability. Automated ML workflows and hardened production logging across a large financial-services data estate.',
      url: 'https://www.americanexpress.com',
      stack: ['PySpark', 'MapReduce', 'Hive', 'AWS', 'Databricks', 'Airflow'],
      year: 2025,
      status: 'ongoing',
    },
    {
      name: 'eBay',
      tagline: 'Data support & operations automation.',
      description: 'Automated support-data extraction pipelines with the UC4 scheduler for timely analytics, migrated Parquet \u2192 Iceberg as POC, and resolved data-quality and ticketing tasks across cross-functional teams.',
      url: 'https://www.ebay.com',
      stack: ['UC4', 'Iceberg', 'DBeaver', 'WinSCP'],
      year: 2024,
      status: 'completed',
    },
    {
      name: 'Regeneron',
      tagline: 'Customer master data implementation.',
      description: 'Enhanced the healthcare customer-master application with PySpark + AWS S3. Built SCD-2 history handling, data profiling, and Airflow parent-child orchestration, plus a rejection module for records failing quality criteria. Sourced data from Veeva, MedPro, and Sanofi with the MDM team.',
      url: 'https://www.regeneron.com',
      stack: ['PySpark', 'AWS S3', 'Airflow', 'GitLab'],
      year: 2024,
      status: 'completed',
    },
    {
      name: 'Santander Bank',
      tagline: 'Scalable ETL development.',
      description: 'Designed and implemented a scalable on-prem ETL pipeline in an agile setup, improving code reusability and runtime, and supported the client\u2019s Power BI dashboarding.',
      url: 'https://www.santander.com',
      stack: ['Scala-Spark', 'Jenkins', 'Control-M', 'GitHub Enterprise'],
      year: 2023,
      status: 'completed',
    },
    {
      name: 'Lloyds Bank',
      tagline: 'FSCS cross-bank compensation platform.',
      description: 'Built a Big Data back-end implementing the FSCS rule for cross-bank compensation across 3 banks. Cut runtime 6 hrs \u2192 4 hrs, built an automation testing framework (+40% QA efficiency), led a team of 5, and acted as POC for pipeline-leakage fixes.',
      url: 'https://www.lloydsbank.com',
      stack: ['Apache Spark', 'Scala', 'Hadoop', 'HDFS', 'Jenkins'],
      year: 2023,
      status: 'completed',
    },
  ],

  beyond: {
    intro: 'Life outside the pipeline — and how I keep it all running on time.',
    notes: [
      'Chasing an M.Tech in Cloud Computing at IIT Patna while working full-time — a running masterclass in time management.',
      "NCC 'B' Certificate holder and selected in 3\u00d7 SSB Conferences — the discipline and leadership from cadet days still show up in how I work.",
      'A perpetual learner: cleared GCP Associate Cloud Engineer, now chipping away at AWS certifications.',
      'I enjoy mentoring juniors and running internal knowledge sessions — teaching is how I learn twice.',
    ],
    trekking: {
      blurb:
        "I love trekking. When I'm not optimising data pipelines, you'll usually find me somewhere in the mountains — I've explored parts of the lower and middle Himalayas, and recently started mixing in adventure sports.",
      completed: [
        'Nag Tibba (the first one!)',
        'Kheerganga',
        'Tungnath\u2013Chandrashila',
        'Kedarkantha',
        'Raghupur Fort (Shoja)',
        'Triund',
      ],
      milestones: ['First paragliding flight at Bir Billing (April 2026)'],
      bucketList: [
        'Hampta Pass (Kullu \u2192 Spiti crossover)',
        'Buran Ghati (the legendary ice-slide)',
        'Kuari Pass (Nanda Devi up close)',
      ],
      closing:
        'Mountains teach the same lessons as distributed systems: preparation matters, resilience wins, and every summit reveals a bigger challenge ahead.',
    },
  },

  contact: {
    email: 'hello@deepankar.dev',
    phone: '+91 7011709403',
    location: 'Delhi, India',
  },

  social: [
    { label: 'LinkedIn', handle: 'in/d33pankar', url: 'https://linkedin.com/in/d33pankar' },
    { label: 'GitHub', handle: '@d33pankar', url: 'https://github.com/d33pankar' },
  ],

  meta: {
    lastUpdated: '2026-07-29',
    license: 'MIT',
    repo: 'github.com/d33pankar/portfolio',
  },
};

export const FILES = [
  { id: 'about', name: 'about.md', path: 'src/about.md', language: 'markdown', icon: 'md' },
  { id: 'experience', name: 'experience.json', path: 'src/experience.json', language: 'json', icon: 'json' },
  { id: 'education', name: 'education.yml', path: 'src/education.yml', language: 'yaml', icon: 'yml' },
  { id: 'skills', name: 'skills.ts', path: 'src/skills.ts', language: 'typescript', icon: 'ts' },
  { id: 'projects', name: 'projects.tsx', path: 'src/projects.tsx', language: 'tsx', icon: 'tsx' },
  { id: 'beyond', name: 'beyond.md', path: 'src/beyond.md', language: 'markdown', icon: 'md' },
  { id: 'contact', name: 'contact.sh', path: 'src/contact.sh', language: 'shell', icon: 'sh' },
  { id: 'resume', name: 'resume.pdf', path: 'Resume/resume.pdf', language: 'pdf', icon: 'pdf', defaultOpen: false },
];
