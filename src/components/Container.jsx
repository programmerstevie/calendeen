import { twMerge } from "tailwind-merge";

export default function Container({ children, className }) {
  return (
    <div className={twMerge("container mx-auto px-12", className)}>
      {children}
    </div>
  );
}
