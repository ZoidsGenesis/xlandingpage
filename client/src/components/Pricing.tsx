import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-20 md:py-32 bg-gradient-to-b from-[hsl(245,75%,20%)] to-[hsl(240,70%,25%)]"
    >
      <div className="max-w-2xl mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Book a free demo
          </span>
        </h2>

        <div>
          <p className="text-lg md:text-xl text-gray-400">
            Get a walkthrough of a couple of bots we've made and a bespoke plan that fits your needs
          </p>
        </div>
      </div>
    </section>
  );
}
