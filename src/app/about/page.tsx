'use client';
import TextReveal from '@/components/motion/text-reveal';

import React, { useRef } from 'react';
import { ArrowUpRightIcon, ChevronDown, MailIcon } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';

import SkillCard from '@/app/about/_components/skill-card';
import { skills } from '@/components/sections/skills/config';
import { Footer } from '@/components/sections';
import ContactForm from '@/components/sections/contact/cozy/contact-form';
import { contact } from '@/components/sections/contact/config';

import Link from '@/components/motion/link';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { motion, useScroll, useTransform } from 'motion/react';
import { experiences } from '@/components/sections/experience/config';
import ExperienceCard from '@/components/sections/experience/cozy/experience-card';
import TechnologyCard from '@/components/sections/technologies/modern/technology-card';
import { technologies } from '@/components/sections/technologies/config';
import ImageTrail from '@/components/motion/motion-trail';
import { exampleImages } from '@/lib/example-images';

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroRef = useRef<HTMLDivElement>(null)
  const technologiesRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
      <section className="flex h-[calc(100svh-(--spacing(14)))] justify-center items-center pb-12 relative overflow-hidden -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 2xl:-mx-24">
        <div className="absolute top-0 left-0 z-0" ref={heroRef}>
          <ImageTrail containerRef={heroRef}>
            {exampleImages.map((image, index) => (
              <div
                key={`image_trail_${index}`}
                className="flex relative overflow-hidden w-24 h-24 "
              >
                <img
                  src={image}
                  alt={'Image ' + index.toString()}
                  loading="lazy"
                  className="object-cover absolute inset-0"
                />
              </div>
            ))}
          </ImageTrail>
        </div>
        <div className="container relative mx-auto flex flex-col items-center px-4">
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            {/* Innovator */}
            Software
          </TextReveal>
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            {/* Designer */}
            Engineer
          </TextReveal>
          <motion.div
            className="mt-8"
            style={{ opacity }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">About</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="space-y-8">
              <TextReveal
                as="h3"
                className="font-serif text-3xl  sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
              >
                Hi, I&apos;m David Paul
              </TextReveal>
              <TextReveal
                as="p"
                className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-lg lg:text-xl xl:text-2xl"
              >
                a passionate and detail-oriented Software/Web Developer
                with a love for building innovative and user-friendly
                digital solutions. With 5 years of experience in the tech
                industry, I specialize in full-stack development, and I&apos;m
                always eager to learn and adapt to new technologies. I hold
                a degree in Bachelor of Science in Computer Science from
                the University of the Cordilleras, and I&apos;ve worked on a
                variety of projects ranging from responsive websites,
                RESTful APIs, and machine learning applications.
              </TextReveal>
              <TextReveal
                as="p"
                className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-lg lg:text-xl xl:text-2xl"
              >
                My journey into creativity began with a spark of curiosity about
                how ideas could come to life on a screen. Fascinated by the
                interplay of design and technology, I started exploring web
                development, IoT, and interface design through
                self-driven projects. With every experiment, my skills grew, and
                what began as a hobby soon became a passion for crafting
                meaningful digital experiences. As I honed my abilities, I
                sought opportunities to apply them in real-world settings,
                turning concepts into polished outcomes. Today, my approach
                combines creativity, problem-solving, and technical expertise to
                create work that is both functional and impactful.
              </TextReveal>
              <Button asChild variant={'outline'} className="rounded-full px-6">
                <a href="resume.pdf" target="_blank">
                  View Resume <ArrowUpRightIcon className="ml-2 size-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Skills</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 md:gap-6 xl:grid-cols-2">
              {skills.map((skill, index) => (
                <SkillCard
                  key={`skills_${index}`}
                  index={index + 1}
                  name={skill.name}
                  description={skill.description}
                  thumbnail={skill.thumbnail}
                  className="flex rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Technologies</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div
              className="relative h-full w-full cursor-pointer items-center justify-center overflow-hidden"
              // ref={technologiesRef}
            >
              <div className="flex h-full w-full flex-wrap items-center justify-start gap-4">
                {technologies.map((technology, index) => (
                  <>
                    <TechnologyCard
                      key={`technologies_${index}`}
                      name={technology.name}
                      containerRef={technologiesRef}
                    />

                    {index < technologies.length - 1 && (
                      <TechnologyCard
                        key={`technologies_sep_asdasd${index}`}
                        name={','}
                        containerRef={technologiesRef}
                      />
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Experience</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 md:gap-6 xl:grid-cols-2">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experiences_${index}`}
                  name={experience.name}
                  description={experience.description}
                  company={experience.company}
                  duration={experience.duration}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Contact</h2>
            <div className="mt-2 flex flex-col gap-1">
              <Link
                className={cn(
                  buttonVariants({ variant: 'link' }),
                  'h-min w-min p-0 text-sm font-normal sm:text-base md:text-lg'
                )}
                href={`mailto:${contact.email}`}
              >
                <MailIcon className="h-4 w-4" />
                {contact.email}
              </Link>
              {contact.socials.map(({ Icon, name, href }, index) => (
                <Link
                  target="_blank"
                  href={href}
                  className={cn(
                    buttonVariants({ variant: 'link' }),
                    'h-min w-min gap-1 p-0 text-sm sm:text-base md:text-lg'
                  )}
                  key={`contacts_social_${index}`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
