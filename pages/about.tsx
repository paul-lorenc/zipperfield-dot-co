import { Container } from "@/components/Container";
import { ExpandingCard } from "@/components/ExpandingCard";
export default function About() {
  return (
    <Container>
      <div className="h-full min-h-screen flex flex-col text-center px-4 text-black dark:text-white text-3xl font-extrabold max-w-2xl">
        <div className="mt-20">{"Performance, "}</div>
        <div className="mb-2">{"without sacrificing personalization."}</div>
        <div className="my-5 space-y-4">
          <ExpandingCard title="Performance" href="/about/performance">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut sint occaecat cupidatat et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud.
          </ExpandingCard>
          <ExpandingCard title="Design" href="/about/design">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in.
          </ExpandingCard>
          <ExpandingCard title="Branding" href="/about/branding">
            Id donec ultrices tincidunt arcu non sodales. Elit scelerisque
            mauris pellentesque pulvinar pellentesque habitant. Nunc id cursus
            metus aliquam eleifend mi in nulla.
          </ExpandingCard>
        </div>
      </div>
    </Container>
  );
}
