import Image from "next/image";
import { Headers } from "./components/Headers/page";
import { Footer } from "./components/Footer/page";
import Body from "./components/Body/page";

export default function Home() {
  return (
    <div>
    <Headers />
    <Body />
    <Footer />
    </div>
  );
}
