import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/Hero/Hero";
import Button from "~/components/common/Button/Button";

export default component$(() => {
  return (
    <>
      <Hero>
        <div className="hero-illustration">
          <div className="flex flex-col md:w-1/2 2xl:left-56 relative justify-center px-8 sm:px-16 space-y-4 md:space-y-8 md:mt-16 md:h-full">
            <h1>
              All wearable <br /> data in one API
            </h1>
            <p className="text-base">
              Build or enhance your health or fitness service by integrating
              your customers wearable devices. Connect to any wearable device
              through our single, easy-to-use API.
            </p>
            <Button
              glow
              text="Get access"
              href="https://dtyl3ii63lk.typeform.com/to/SFVX49Iz"
            />
          </div>
        </div>
      </Hero>
      <div className="container mx-auto px-8 sm:px-16">
        <HowItWorks />
        <Features />
        <WhyUntied />
        <CTA />
      </div>
    </>
  );
});

export const HowItWorks = () => {
  return (
    <section className="my-12 lg:my-24 flex flex-col">
      <h2 className="text-center mb-12 lg:mb-24">How it works</h2>
      <div className="flex justify-center space-x-8 lg:space-x-24 mb-32">
        <div className="justify-center flex flex-col">
          <img
            src="/assets/images/step-1.svg"
            alt="Step 1"
            width="135px"
            className="shadow-glow-green rounded-phone"
          />
        </div>
        <div className="flex space-x-4 md:space-x-16 items-center w-1/2 flex-col md:flex-row">
          <h3 class="text-heading-2 md:text-heading-1 mb-8 md:mb-0">1.</h3>
          <div className="space-y-3">
            <h3>Select your wearable device</h3>
            <p>
              In your application, you display the Untied Widget to your user,
              so they can select their wearable device.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-8 lg:space-x-24 mb-32">
        <div className="flex space-x-4 md:space-x-16 items-center w-1/2 flex-col md:flex-row">
          <h3 className="text-heading-2 md:text-heading-1 mb-8 md:mb-0">2.</h3>
          <div className="space-y-3">
            <h3>Authenticate with permissions</h3>
            <p>
              The user gets redirected to the wearable’s authentication page,
              where they enter their credentials and give access to the
              requested scopes.
            </p>
          </div>
        </div>
        <div className="flex flex-row space-x-2 md:space-x-16">
          <div className="justify-center flex flex-col">
            <img
              src="/assets/images/step-2-1.svg"
              alt="Step 2.1: Authenticate with your wearable device provider"
              width="135px"
              className="shadow-glow-green rounded-phone"
            />
          </div>
          <div className="justify-center flex flex-col">
            <img
              src="/assets/images/step-2-2.svg"
              alt="Step 2.2: Allow the requested permissions"
              width="135px"
              className="shadow-glow-green rounded-phone"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-8 lg:space-x-24 mb-32">
        <div className="justify-center flex flex-col">
          <img
            src="/assets/images/step-3.svg"
            alt="Step 3: Receive the data"
            width="135px"
            className="shadow-glow-green rounded-phone"
          />
        </div>
        <div className="flex space-x-4 md:space-x-16 items-center w-1/2 flex-col md:flex-row">
          <h3 className="text-heading-2 md:text-heading-1 mb-8 md:mb-0">3.</h3>
          <div className="space-y-3">
            <h3>You’re in!</h3>
            <p>
              When the user has authenticated, your application will receive an
              API token from Untied, so your business logic can take over and
              request whatever data your need, in a standardized format.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Features = () => {
  return (
    <section className="my-12 lg:my-24 flex flex-col">
      <h2 className="text-center mb-12 lg:mb-24">Features</h2>
      <div className="flex justify-center lg:space-x-12 xl:space-x-24 flex-col-reverse lg:flex-row">
        <div className="flex flex-col lg:w-1/2 space-y-12">
          <div>
            <h3 className="mb-3">Open source, self-hostable</h3>
            <p>
              We understand the importance of transparency and being in charge
              of your own data.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Integrate with ease</h3>
            <p>
              Support any wearable, and get it done by the end of the day - easy
              peasy.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Connect and forget</h3>
            <p>
              Spend your time where it matters, we’ll take good care of your
              integrations.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Standardized data types</h3>
            <p>
              We map device data into standardized formats, so you know what you
              get.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-8 md:mb-0 justify-center flex">
          <img
            src="/assets/images/one-api.svg"
            alt="Illustration of different wearable providers being connected to your applications through a single API."
          />
        </div>
      </div>
    </section>
  );
};

export const WhyUntied = () => {
  return (
    <section className="my-12 lg:my-24 flex flex-col">
      <h2 className="text-center mb-12 lg:mb-24">Why Untied?</h2>
      <div className="flex justify-center lg:space-x-12 xl:space-x-24 flex-col lg:flex-row">
        <div className="flex flex-col lg:w-1/2 space-y-12">
          <div className="textbox-gradient">
            <h3 className="mb-3">It’s open source software</h3>
            <p>
              Whether you want to host Untied by yourself, or want us to just
              solve it for you - there’s a solution for you. Untied is open
              source software (OSS), which means that you can read all of our
              source code. Hosting it on the server of your choice is easy,
              you’re even free to modify the source code to fit your specific
              needs.
            </p>
          </div>
          <div className="textbox-gradient">
            <h3 className="mb-3">Privacy centered architecture</h3>
            <p>
              We believe that your data is yours, and that you should be in
              control of it. That’s why we’ve built Untied with privacy in mind.
              We only store the data that is necessary to make Untied work, and
              we don’t share it with anyone.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-8 md:mb-0 justify-center flex">
          <img
            className="right-6 relative"
            src="/assets/images/funnel.svg"
            alt="Illustration of different wearable providers being connected to your applications through a single API."
          />
        </div>
      </div>
    </section>
  );
};

export const CTA = () => {
  return (
    <section className="my-12 lg:my-24 flex flex-col mb-24 items-center">
      <h2 className="text-center mb-12 lg:mb-18">
        Build your health or <br /> fitness app with Untied.
      </h2>
      <Button text={"Get started"} glow/>
    </section>
  );
};

// sets the title and meta properties of the page
export const head: DocumentHead = {
  title: "One API, all wearable devices - Untied",
  meta: [
    {
      name: "description",
      content:
        "Build or enhance your health or fitness service by integrating your customers wearable devices. Connect to any wearable device through our single, easy-to-use API.",
    },
  ],
};
