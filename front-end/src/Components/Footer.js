import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-gray h-10 w-full flex items-center justify-center relative bottom-0">
        <span className="flex items-center text-lg gap-2">
            joshuanelsondev
            <a
            href="https://github.com/joshuanelsondev"
            target="_blank"
            rel="noreferrer"
            >
            <AiFillGithub />
            </a>
        </span>
    </div>
  );
}
