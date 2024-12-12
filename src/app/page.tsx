import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";

import Image from "next/image";
import { Project } from "@/lib/project";
import ProjectCart from "@/components/PCard";
import ProjectCard from "@/components/PCard";
import TechStack from "@/components/TechStack";
// import ProjectCart from "@/components/ProjectCart";

const words = [
  {
    text: "Full",
  },
  {
    text: "Stack",
  },
  {
    text: "Developer",
  },
];

export default function Home() {
  return (
    <div>
      <Container id="home" className="py-16   flex justify-center">
        <div className=" flex flex-col-reverse md:flex-row justify-center items-center gap-6">
          <div className=" lg:w-1/2 flex flex-col items-center justify-center md:items-start md:justify-start ">
            <TypewriterEffect
              words={words}
              className="text-start font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
            />

            <p className="text-2xl py-4">
              Hi, I&apos;m Anup Rana Magar.A full stack develop based on
              Kathmandu,Nepal.
            </p>
            <div className="flex gap-4 ">
              <Link href={"https://github.com/anupRanaMagar"}>
                <Github className="transition-transform duration-300 hover:scale-110" />
              </Link>

              <Link href={"https://www.linkedin.com/in/anupranamagar/"}>
                <Linkedin className="transition-transform duration-300 hover:scale-110" />
              </Link>
            </div>
            <Link href="#aboutMe">
              <Button className="my-8 ">
                More About Me
                <ArrowRight className="h-4 w-4 " />
              </Button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className=" h-56 w-52 md:h-64 md:w-56 lg:h-80 lg:w-72 relative">
              <Image
                className="hero_img absolute"
                src={`/profile.jpeg`}
                fill
                alt="profile"
              ></Image>
            </div>
          </div>
        </div>
      </Container>
      <TechStack />
      <Container
        id="aboutMe"
        className="flex flex-col justify-center items-center py-24 gap-10"
      >
        <h1 className="font-semibold text-3xl">About Me</h1>
        <h2 className="text-2xl">
          Full Stack Developer based in Kathmandu, Nepal
        </h2>
        <p>
          Hi, I&apos;m Anup Rana Magar, a passionate Full Stack Developer
          committed to building exceptional web applications that provide
          seamless and engaging user experiences. My core technology stack
          includes React, Next.js, Tailwind CSS, Postgresql and TypeScript,
          enabling me to create modern, efficient, and user-friendly solutions.
        </p>
      </Container>
      <Container
        id="project"
        className="flex flex-col justify-center items-center gap-4 mb-8 mt-6"
      >
        <h1 className="font-semibold text-3xl mb-8">Projects</h1>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
        "
        >
          {Project.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              thumbnail={project.imgSrc}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </Container>
      <Container>
        <footer className="w-full pt-20 pb-10" id="contact">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold lg:max-w-[45vw] text-center">
              Let&apos;s build something extraordinary{" "}
              <span className="text-green-400">together</span>
            </h1>
            <p className="text-gray-400 md:mt-10 my-5 text-center">
              As a full-stack developer with a passion for innovative solutions,
              I’m here to help you turn ideas into reality. Reach out, and let’s
              bring your vision to life with robust, scalable, and efficient
              code.
            </p>
            <Link href="mailto:anupranamagar20@gmail.com">
              <Button>
                Start a Conversation <Mail className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </footer>
      </Container>
    </div>
  );
}
