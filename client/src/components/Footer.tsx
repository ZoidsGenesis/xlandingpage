import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative py-12 bg-[hsl(250,90%,10%)] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center space-y-8">
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold px-10 py-6 rounded-full shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105"
          data-testid="button-book-demo-footer"
        >
          <a href="https://calendly.com/xyroaqw/30min" target="_blank" rel="noopener noreferrer">
            Book a demo →
          </a>
        </Button>
        
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-400 text-sm">
            Too shy to call us? Text us instead!
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://discord.com/channels/@me/1346856971902386267"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center hover-elevate active-elevate-2 rounded-md p-1 transition-all"
              data-testid="link-discord"
            >
              <SiDiscord className="w-5 h-5 text-[#5865F2]" />
            </a>
            <span className="text-gray-400 text-sm">basedxy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
