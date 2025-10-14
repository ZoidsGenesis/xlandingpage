import { Button } from "@/components/ui/button";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(250,80%,15%)]/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-end h-16 gap-6">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("what-you-get")}
            className="text-gray-300 hover:text-white"
            data-testid="nav-what-you-get"
          >
            What you get
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("why-choose-us")}
            className="text-gray-300 hover:text-white"
            data-testid="nav-why-choose-us"
          >
            Why choose us
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("pricing")}
            className="text-gray-300 hover:text-white"
            data-testid="nav-pricing"
          >
            Pricing
          </Button>
        </div>
      </div>
    </nav>
  );
}
