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
            Pricing
          </span>
        </h2>

        <div>
          <p className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-2">
            Starting at $200
          </p>
          <p className="text-lg md:text-xl text-gray-400">
            Most servers go live in 7–14 days. Book a 20-min call for a same-day quote and see a demo of the bots we've made
          </p>
        </div>
      </div>
    </section>
  );
}
