import { Container } from "@/components/Container";
import { ExpandingCard } from "@/components/ExpandingCard";
export default function About() {
  return (
    <Container>
      <div className="h-full min-h-screen flex flex-col text-center px-4 text-black dark:text-white text-3xl font-extrabold max-w-6xl">
        <div className="mt-16 md:mt-36 mb-7">
          {"Performance meets Personalization"}
        </div>
        <div className="flex flex-col md:flex-row font-thin text-xl space-y-4 md:space-x-4 md:space-y-0">
          <div className="border border-black dark:border-white p-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut sint occaecat cupidatat et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud.
          </div>
          <div className="border border-black dark:border-white p-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut sint occaecat cupidatat et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud.
          </div>
        </div>

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
