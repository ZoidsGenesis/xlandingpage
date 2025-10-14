import { Button } from "@/components/ui/button";
import { ShoppingCart, Gavel, Mail, Infinity, Coins } from "lucide-react";

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(250,80%,15%)] via-[hsl(245,75%,20%)] to-[hsl(240,70%,25%)]" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[15%] right-[12%] animate-float">
          <ShoppingCart className="w-12 h-12 md:w-16 md:h-16 text-purple-400 opacity-70" />
        </div>
        <div className="absolute top-[25%] right-[25%] animate-float-delayed">
          <Gavel className="w-10 h-10 md:w-14 md:h-14 text-cyan-400 opacity-70" />
        </div>
        <div className="absolute top-[40%] left-[15%] animate-float-slow">
          <Mail className="w-12 h-12 md:w-16 md:h-16 text-yellow-400 opacity-70" />
        </div>
        <div className="absolute top-[30%] left-[8%] animate-float">
          <Infinity className="w-14 h-14 md:w-20 md:h-20 text-blue-400 opacity-70" />
        </div>
        <div className="absolute bottom-[30%] right-[18%] animate-float-delayed">
          <Coins className="w-11 h-11 md:w-15 md:h-15 text-amber-400 opacity-70" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-20 text-center">
        <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed mb-8 tracking-wide drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          Ship a custom Discord<br className="sm:hidden" /> bot in 7 days
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light">
          Level up your server with battle-tested automations: roles, raids, tickets, economy, and analytics. Fixed-fee builds, clean slash commands, hosting-ready code.
        </p>

        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold px-8 py-6 rounded-full shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105"
            data-testid="button-get-quote"
          >
            <a href="https://calendly.com/xyroaqw/30min" target="_blank" rel="noopener noreferrer">
              Get a quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
