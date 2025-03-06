import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube,
  SiFacebook,
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'dpe.developer001@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/dpe-developer',
      Icon: SiGithub
    },
    {
      name: 'Youtube',
      href: 'https://www.youtube.com/channel/UCZPcEXny17ZS7kw___oRqsw/community?pvf=CAI%253D',
      Icon: SiYoutube
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/david-paul-eligio-73229823b/',
      Icon: SiLinkedin
    },
    /* {
      name: 'X',
      href: 'https://x.com/',
      Icon: SiX
    }, */
    /* {
      name: 'Facebook',
      href: 'https://www.facebook.com/dpeligio',
      Icon: SiFacebook
    } */
  ]
};

export { contact };
