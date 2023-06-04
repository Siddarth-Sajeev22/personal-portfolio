import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "React,SCSS,Node,Express",
    projects: "Frameworks I have used",
    icon: MdWorkspacesOutline,
    bg: "#286F6C",
  },
  {
    name: "HTML,CSS,JavaScript",
    projects: "",
    icon: MdWorkspacesOutline,
    bg: "#EEC048",
  },
  {
    name: "C++,C,Java,Python,Rust",
    projects: "Programming Languages",
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "Hello, my name is Siddarth Sajeev and I enjoy developing interactive applications on the internet. I found web development at a time where I didn't know where to focus my energy and so far it has been a fulfilling experience"
];

export const workExp = [
  {
    place: "Phorena , USA",
    tenure: "Apr 2021 - Jan 2022",
    role: "Intern",
    detail:
      "Learned and developed a mqtt-sn networking protocol along with dtls for securing in Rust programming language.",
  },
  {
    place: "F13 Technologies",
    tenure: "Sep 2022 - Dec 2022",
    role: "Intern",
    detail:
      "Worked as an Aws intern for F13 technologies learning about cloud computing and gaining certifications in AWS cloud.",
  },
  {
    place: "ICFOSS",
    tenure: "May 2023",
    role: "Web Development Intern",
    detail:
      "Worked offline to gain real-world experience, developing our college project for tracking student progress in the form of a web application",
  },
];



export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
