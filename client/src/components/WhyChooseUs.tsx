import { DollarSign, Shield, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const reasons = [
  {
    icon: DollarSign,
    title: "No price creeps",
    subtitle: "",
    description:
      "Get a fixed price as soon as scope is finalized",
  },
  {
    icon: Shield,
    title: "Wipe-proof reliability",
    subtitle: "",
    description:
      "Rate-limit handling, idempotent actions (no double credits/clicks), error logging, and scheduled backups.",
  },
  {
    icon: Rocket,
    title: "Ready to deploy, fast support",
    subtitle: "",
    description:
      "Hosting-ready code, step-by-step docs, and say day maintenance TAT",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-20 md:py-32 bg-gradient-to-b from-[hsl(250,80%,15%)] to-[hsl(245,75%,20%)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={index}
                className="bg-purple-950/30 border border-cyan-500/20 p-8 rounded-2xl backdrop-blur-sm hover:translate-y-[-4px] transition-transform duration-300"
                data-testid={`card-reason-${index}`}
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-purple-400 text-sm font-semibold mb-3">
                  {reason.subtitle}
                </p>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
