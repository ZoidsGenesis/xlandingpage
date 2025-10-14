import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative py-12 bg-[hsl(250,90%,10%)] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
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
      </div>
    </footer>
  );
}
