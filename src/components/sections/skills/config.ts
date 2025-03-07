import { Skill } from '@/types/skill';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Web Development',
    // todo: use proper thumbnail pics
    thumbnail: '/images/skills/web-development.png',
    description: `Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.`
  },
  {
    name: 'UI/UX Design',
    thumbnail: '/images/skills/ui-ux-design.png',
    description: `UI/UX Design focuses on creating delightful user experiences through visually appealing and highly functional designs. This skill includes a variety of technologies, frameworks, and best practices to enhance user satisfaction and usability.`
  },
  {
    name: 'Database Management',
    thumbnail: '/images/skills/database-management.png',
    description: `Database Management involves efficiently storing and organizing data. This skill covers a range of technologies, frameworks, and best practices to ensure data integrity, security, and performance.`
  },
  {
    name: 'Internet of Things (IoT)',
    thumbnail: '/images/skills/iot.png',
    description: `The Internet of Things (IoT) is a transformative technology that connects physical devices, sensors, and systems to the internet, enabling them to collect, exchange, and analyze data in real-time.`
  }
];

export { trimLen, skills };
