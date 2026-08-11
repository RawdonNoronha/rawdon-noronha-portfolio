"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { badges, projects, experiences } from "./constants/constants";
import CustomLink from "./assests/CustomLink";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BrevoClient } from "@getbrevo/brevo";
import { Button } from "@/components/ui/button";
// import EmailPopUp from "./components/EmailPopUp/EmailPopUp";

export default function Home() {
  const [open, setOpen] = useState(false);
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  };

  const sendEmail = async () => {
    // const client = new BrevoClient({
    //   apiKey: PROCESS.ENV.BREVO_API_KEY || "",
    // });

    // await client.transactionalEmails.sendTransacEmail({
    //   htmlContent: "<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Brevo.</p></body></html>",
    //   sender: {
    //     email: "hello@brevo.com",
    //     name: "Alex from Brevo",
    //   },
    //   subject: "Hello from Brevo!",
    //   to: [
    //     {
    //       email: "johndoe@example.com",
    //       name: "John Doe",
    //     },
    //   ],
    // });
  }

  return (
    <>
      <div className="mx-5 md:mx-80">
        <section id="intro">
          {/* Space */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {/* <br></br> */}
          {/* <br></br> */}
          {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        > */}

          {/* Intro Section */}
          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12 lg:items-start">

            {/* Description */}
            <div className="flex flex-col gap-4 lg:flex-1">
              <div>
                <h1 className="text-[2.65rem] lg:text-7xl font-heading text-white">Rawdon Arvino</h1>
                <h1 className="text-4xl lg:text-6xl text-gray-400">Jobais Noronha</h1>
              </div>
              <div className="flex flex-row gap-2">
                <a
                  href="https://www.linkedin.com/in/rawdon-noronha-43a7ba173?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  className="inline-flex items-center justify-center px-4 py-2 bg-vivid-orange text-black rounded-lg cursor-pointer"
                >
                  Linked In
                </a>
                <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer" onClick={() => setOpen(true)}>
                  Email
                </button>
              </div>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-7 lg:w-1/3">
              <div className="flex flex-col gap-2">
                <p className="font-mono text-sm text-gray-400">CURRENTLY</p>
                <p className="font-mono">
                  Full Stack Web Developer{" "}
                  <span className="inline-flex items-center gap-1 underline underline-offset-4 cursor-pointer">
                    @13thJune Infotech <CustomLink />
                  </span>
                </p>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-col gap-2">
                <p className="font-mono text-sm text-gray-400">SKILLS</p>
                <div className="flex flex-wrap gap-2">
                  {badges.map((item) => (
                    <Badge key={item.id} variant={item.variant}>
                      {item.title}
                    </Badge>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* </motion.div> */}

        {/* Space */}
        <br></br>
        <br></br>

        {/* About Section */}
        <section>
          <div className="flex flex-col gap-4">
            <h1 className='text-4xl'>
              About Me
            </h1>
            <p className="text-lg text-gray-300">
              I&apos;m a Computer Engineering graduate and software developer who enjoys turning ideas into engaging, practical digital experiences. My work spans frontend development, backend systems, and machine learning, with hands-on experience building applications using React, Next.js, ASP.NET, JavaScript, SQL, and Python.
            </p>
            <p className="text-lg text-gray-300">
              I enjoy understanding how things work, solving challenging problems, and constantly experimenting with new technologies. Whether I&apos;m building a polished web experience, developing an API, or exploring computer vision, I&apos;m always looking for ways to make my work smarter, cleaner, and more impactful.
            </p>
            <h1 className="text-3xl italic text-gray-400 font-mono">
              <span className="text-vivid-orange">&quot;</span>Always learning. Always building. Always looking for the next challenge.<span className="text-vivid-orange">&quot;</span>
            </h1>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          {/* Space */}
          <br></br>
          <br></br>
          <div className="flex flex-col gap-4">
            <h1 className='text-4xl'>
              Projects
            </h1>
            <div className="flex flex-col gap-4">
              {
                projects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader>
                      <CardTitle>{project.projectTitle}</CardTitle>
                      <CardDescription>{project.titleDescription}</CardDescription>
                      {project.url && project.projectAction ? (
                        <CardAction>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 hover:underline"
                          >
                            {project.projectAction}
                            <CustomLink />
                          </a>
                        </CardAction>
                      ) : null}
                    </CardHeader>
                    <CardContent>
                      <p>{project.projectContent}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex flex-wrap gap-2">
                        {project.projectBadges.map((badgeId) => {
                          const badge = badges.find((b) => b.id === badgeId);
                          return badge ? (
                            <Badge key={badge.id} variant="ghost">
                              {badge.title}
                            </Badge>
                          ) : null;
                        })}
                      </div>
                    </CardFooter>
                  </Card>
                ))
              }
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          {/* Space */}
          <br></br>
          <br></br>
          <div className="flex flex-col gap-4">
            <h1 className='text-4xl'>
              Experience
            </h1>
            <div className="flex flex-col gap-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="flex gap-2 sm:gap-4">
                  {/* Date */}
                  <div className="w-20 shrink-0 text-right text-xs text-gray-400 sm:w-28 sm:text-sm">
                    {exp.date}
                  </div>

                  {/* Timeline */}
                  <div className="relative flex w-6 shrink-0 justify-center sm:w-10">
                    {/* Vertical line */}
                    <div className="absolute top-0 bottom-0 w-px bg-gray-700" />

                    {/* Dot */}
                    <div className="relative z-10 mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-gray-900 bg-vivid-orange" />
                  </div>

                  {/* Experience content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold">
                      {exp.role}{" "}
                      <span className="text-sm text-gray-400">
                        — {exp.company}
                      </span>
                    </h3>

                    <p className="text-sm text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Space */}
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}
