import Activity from "@/components/Activity";
import Albums from "@/components/Albums";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Albums />
      <Activity />
      <Partner />
      <Events />
      <Team />
    </>
  );
}
