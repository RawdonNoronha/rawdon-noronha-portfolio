"use client";
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

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="mx-5 md:mx-82">
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
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12 lg:items-start">

          {/* Description */}
          <div className="flex flex-col gap-4 lg:flex-1">
            <div>
              <h1 className="text-[2.65rem] lg:text-7xl font-heading text-white">Rawdon Arvino</h1>
              <h1 className="text-4xl lg:text-6xl text-gray-400">Jobais Noronha</h1>
            </div>
            <div className="flex flex-row gap-2">
              <button className="px-4 py-2 bg-vivid-orange text-black rounded-lg">
                Linked In
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg">
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
                  <Badge key={item.id} variant="secondary">
                    {item.title}
                  </Badge>
                ))}
              </div>
            </div>

          </div>
        </div>

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
            <div className="">
              After graduating from Don Bosco and securing a CGPA of 8.03 i ventured off to finding a job in tech and i stumbled upon a company 13JuneInfotech Pvt Ltd.
            </div>
          </div>
        </section>

        {/* Space */}
        <br></br>
        <br></br>

        {/* Projects Section */}
        <section>
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

        {/* Space */}
        <br></br>
        <br></br>

        {/* Experience Section */}
        <section>
          <div className="flex flex-col gap-4">
            <h1 className='text-4xl'>
              Experience
            </h1>
            <div className="relative pl-8">
              <div className="absolute left-4 top-8 bottom-0 w-px bg-gray-700" />
              <div className="flex flex-col gap-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="flex gap-4">
                    <div className="w-28 text-sm text-gray-400">{exp.date}</div>
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <div className="w-3 h-3 bg-vivid-orange rounded-full border-2 border-gray-900" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{exp.role} <span className="text-sm text-gray-400">— {exp.company}</span></h3>
                          <p className="text-sm text-gray-300">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
