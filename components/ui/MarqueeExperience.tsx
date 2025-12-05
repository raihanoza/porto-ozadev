import { cn } from "@/lib/utils";
import Marquee from "./Marquee";
import Image from "next/image";

const reviews = [
  {
    title: "Fullstack (Javascript) Developer",
    name: "PT.Transporindo Agung Sejahtera",
    username: "Sept 2024 - Now",
    job: "(Fulltime)",
    body: "Fullstack (Javascript) Developer at PT.Transporindo Agung Sejahtera",
    img: "/image/tas.png",
  },
  {
    title: "Frontend Developer",
    name: "Dinas Sosial Kota Medan",
    username: "Aug 2023 - Dec 2023 · 5 mos",
    job: "(Internship)",
    body: "Frontend Developer at Dinas Sosial Kota Medan",
    img: "/image/pemko.png",
  },
  {
    title: "Fullstack Developer",
    name: "Dinas Kominfo Kota Medan",
    username: "Aug 2022 - Dec 2022 · 5 mos  ",
    job: "(Internship)",
    body: "Fullstack Developer at Dinas Kominfo Kota Medan",
    img: "/image/pemko.png",
  },
  {
    title: "Fullstack Web & Mobile Developer",
    name: "PT. Metromatika Teknologi Rekayasa",
    username: "Jan 2023 - Aug 2023 · 8 mos",
    job: "(Freelance)",
    body: "Fullstack Web & Mobile Developer at PT. Metromatika Teknologi Rekayasa",
    img: "https://avatar.vercel.sh/jane",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  title,
  job,
  body,
}: {
  title: string;
  img: string;
  name: string;
  job: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-fit max-w-[450px] cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {title}
          </figcaption>
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <div className="flex flex-row gap-2">
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
            <p className="text-xs font-medium dark:text-white/40">{job}</p>
          </div>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-primary text-opacity-15">
        {body}
      </blockquote>
    </figure>
  );
};

const MarqueeExperience = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r dark:from-background"></div>
    </div>
  );
};

export default MarqueeExperience;
