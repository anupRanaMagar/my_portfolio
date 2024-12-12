"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";
import { gsap } from "gsap";

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  thumbnail,
  githubUrl,
  liveUrl,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = (e: React.MouseEvent) => {
    const cardRect = cardRef.current.getBoundingClientRect();

    gsap.set(modalRef.current, {
      position: "fixed",
      top: cardRect.top,
      left: cardRect.left,

      width: cardRect.width,
      height: cardRect.height,
      scale: 0.9,
      opacity: 1,
    });

    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    );
    gsap.to(modalRef.current, {
      top: "50%",
      left: "50%",
      width: "min(90vw, 800px)",
      height: "auto",
      transform: "translate(-50%, -50%)",
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    if (modalRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();

      gsap.to(modalRef.current, {
        top: cardRect.top,
        left: cardRect.left,
        width: cardRect.width,
        height: cardRect.height,
        scale: 0.9,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        ease: "power2.in",
        duration: 0.3,
        onComplete: () => {
          setModalOpen(false);
        },
      });
    }
  };

  return (
    <>
      {/* Project Card */}
      <Card
        ref={cardRef}
        className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
        onClick={handleOpenModal}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={thumbnail}
            alt={`${title} thumbnail`}
            fill
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-sm text-gray-700">{description}</p>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="w-full transition-colors hover:bg-gray-100"
            onClick={(e) => {
              e.stopPropagation();
              window.open(githubUrl, "_blank");
            }}
          >
            <GithubIcon className="mr-2 h-4 w-4" />
            Code
          </Button>
          <Button
            className="w-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              window.open(liveUrl, "_blank");
            }}
          >
            <ExternalLinkIcon className="mr-2 h-4 w-4" />
            Visit
          </Button>
        </CardFooter>
      </Card>

      {/* Modal */}
      {isModalOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full relative"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
              onClick={handleCloseModal}
            >
              ✕
            </Button>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-gray-600 mt-2">{description}</p>
            </div>
            <Image
              src={thumbnail}
              alt={`${title} thumbnail`}
              width={600}
              height={300}
              className="rounded-md"
            />
            <div className="flex gap-4 mt-6">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open(githubUrl, "_blank")}
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                View Code
              </Button>
              <Button
                className="w-full"
                onClick={() => window.open(liveUrl, "_blank")}
              >
                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                Visit Live
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
