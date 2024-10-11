import { useSession } from "next-auth/react";
import { Sriracha, Roboto, Lora, Gelasio } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";

// https://fonts.google.com/
// const font = Sriracha({ subsets: ["latin"], weight: ["400"] });
// const font = Roboto({
//   subsets: ["latin"],
//   weight: [
//     "100",
//     "300", // Light
//     "400", // Regular
//     "500", // Medium
//     "700", // Bold
//     "900", // Black
//   ],
// });
const font = Gelasio({
  subsets: ["latin"],
  weight: [
    "variable",
  ],
});
// const font = Lora({
//   subsets: ["latin"],
//   weight: [
//     "variable",
//   ],
// });

export default function Layout({ children }) {
  const router = useRouter();
  const { data } = useSession();
  const [isMounted, setIsMounted] = useState(false);

  return (
    <div className={`${font.className} text-base-content`}>{children}</div>
  );
}
