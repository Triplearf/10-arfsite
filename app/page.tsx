import Container from "@/components/container";
import LineBar from "@/components/linebar";
import InLineLink from "@/components/inLineLink"
import Image from "next/image"

import { AnimatePresence } from "framer-motion"

export default function Home() {
  return (
    <div className="h-[85vh] flex flex-col justify-center items-center">
      <Container>
        <div className="flex flex-col justify-center">
        <p className="text-5xl font-extrabold">Look Around!</p>
        <p className="text-center">{":>"}</p>
        </div>
      </Container>
    </div>
  );
}
