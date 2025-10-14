import { Shield, Gift, Gamepad2, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Ops & Control",
    icon: Shield,
    items: [
      "Advanced Moderation",
      "Ticket System",
      "Welcome/Goodbye Messages",
      "Custom Command Builder",
      "Auto-Responder",
    ],
  },
  {
    title: "Engage & Reward",
    icon: Gift,
    items: [
      "Full Economy System",
      "Level & XP System",
      "Inventory System",
      "Giveaway Bot",
      "Shops",
      "Role Rewards",
    ],
  },
  {
    title: "Play & Events",
    icon: Gamepad2,
    items: [
      "Raid Scheduler",
      "Tournament Manager",
      "Music Bot",
      "Trivia Games",
      "Mini-Games",
    ],
  },
  {
    title: "Data & AI",
    icon: Database,
    items: [
      "Game Stats Tracker",
      "Server Analytics",
      "Social Media Monitor",
      "Website Status Checker",
      "AI Chatbot",
    ],
  },
];

export default function WhatYouGet() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[hsl(240,70%,25%)] to-[hsl(250,80%,15%)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              What You Get
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Battle-tested features for every server
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-purple-950/30 border border-purple-500/20 p-8 rounded-2xl backdrop-blur-sm hover:translate-y-[-4px] transition-transform duration-300"
                data-testid={`card-feature-${index}`}
              >
                <div className="bg-purple-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-400 text-sm md:text-base flex items-start"
                    >
                      <span className="text-cyan-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-gray-400 italic text-sm md:text-base">
          Every build ships with pretty embeds, logs, and a quickstart handover.
        </p>
      </div>
    </section>
  );
}
