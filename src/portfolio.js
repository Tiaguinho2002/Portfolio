const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://tiaguinho2002.github.io/Portfolio/',
  title: 'Tiago S.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tiago Santos',
  role: 'Software Engineer',
  picture: 'FOTO-PERFIL.jpg',

  description:
    'I am a Full Stack Developer with a strong foundation in web development, databases, and system integration. I have built real-world projects such as a full-stack e-commerce application and an AI-powered WhatsApp assistant, working with technologies like React, ASP.NET Core, Node.js, SQL, and APIs. I also have experience in customer-facing roles, which helps me communicate clearly, understand user needs, and deliver practical, well-structured solutions.',
  resume:
    'https://drive.google.com/file/d/191FaxeESGjL62lESF5sMbSMYNZISF60b/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/tiago26/',
    github: 'https://github.com/Tiaguinho2002',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Feme-bot',
    description:
      "An automated assistant for WhatsApp that integrates Google Gemini's generative AI with the WhatsApp Web.js framework, enabling intelligent conversations, automatic replies, and real-time message processing.",
    stack: [
      'TypeScript',
      'CSS',
      'React',
      'Node.js',
      'Google Gemini API',
      'WhatsApp Web.js',
    ],
    sourceCode: 'https://github.com/Tiaguinho2002/feme-wpp-bot',
    livePreview:
      'https://www.linkedin.com/feed/update/urn:li:activity:7389447722556260352/',
    image: 'feme-bot1.jpeg',
  },
  {
    name: 'Fitness-Store',
    description:
      'Full stack e-commerce developed to simulate a real online supplement store, featuring product catalog, shopping cart and checkout flow. The project includes a responsive frontend and a robust backend with secure data persistence, focusing on usability, performance and real-world business rules.',
    stack: [
      'TypeScript',
      'React',
      'SASS',
      'C#',
      'ASP.NET Core',
      'SQL',
      'Mercado Pago API',
    ],
    sourceCode: 'https://github.com/Tiaguinho2002/Fitness-Store',
    livePreview: 'https://fitness-store-jade.vercel.app/',
    image: 'fitness.jpg',
  },
  {
    name: 'Portfolio Website',
    description:
      'You are currently viewing my portfolio website, which showcases my projects, skills, and background as a software engineer. Built with React, this site is designed to be responsive and user-friendly, providing an overview of my work and how to contact me.',
    stack: ['React', 'TypeScript', 'HTML', 'Css'],
    sourceCode: 'https://github.com/Tiaguinho2002/Portfolio',
    livePreview: 'https://tiaguinho2002.github.io/Portfolio/',
    image: 'portfolio.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'C#',
  'ASP.NET Core',
  'Node.js',
  'Express.js',
  'GenIA',
  'SQL',
  'NoSQL',
  'RESTful APIs',
  'Docker',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tiago.zidoro18@gmail.com',
}

export { header, about, projects, skills, contact }
