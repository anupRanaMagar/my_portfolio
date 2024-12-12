import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  TailwindcssOriginal,
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  ReactOriginal,
  TypescriptPlain,
  NextjsPlain,
  MysqlOriginalWordmark,
  MongodbOriginalWordmark,
  PostgresqlOriginal,
  ExpressOriginal,
  DjangoPlain,
} from "devicons-react";
import Container from "./Container";
const TechStack = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        <div className="text-xl font-semibold">Teck Stack</div>
        <span className="h-0.5 bg-zinc-400 w-32 lg:h-8 lg:w-0.5 rounded-lg" />
        <div className="flex gap-2 flex-wrap  justify-evenly sm:justify-normal">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Html5Original size={40} />
              </TooltipTrigger>
              <TooltipContent>
                <p>HTML5</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Css3Original size={40} />
              </TooltipTrigger>
              <TooltipContent>
                <p>CSS</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <JavascriptOriginal size={40} />
              </TooltipTrigger>
              <TooltipContent>
                <p>JavaScript</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <TypescriptPlain size={40} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Typescript</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <ReactOriginal size={40} />
              </TooltipTrigger>
              <TooltipContent>
                <p>React</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <NextjsPlain size={40} />
              </TooltipTrigger>
              <TooltipContent>
                <p>NextJs</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <TailwindcssOriginal size={40} />
              </TooltipTrigger>
              <TooltipContent>
                <p>TailwindCSS</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <MysqlOriginalWordmark size={40} />
              </TooltipTrigger>
              <TooltipContent>
                <p>MySQL</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <PostgresqlOriginal size={40} />
              </TooltipTrigger>
              <TooltipContent>
                <p>PostgreSQL</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <MongodbOriginalWordmark size={40} />
              </TooltipTrigger>
              <TooltipContent>
                <p>MongoDB</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <ExpressOriginal size={40} />
              </TooltipTrigger>
              <TooltipContent>
                <p>ExpressJS</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <DjangoPlain size={40} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Django</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </Container>
  );
};

export default TechStack;
