import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(250,80%,15%)]/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-end h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
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

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white"
                data-testid="nav-mobile-toggle"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[hsl(250,80%,15%)] border-purple-500/20">
              <div className="flex flex-col gap-4 mt-8">
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("what-you-get")}
                  className="text-gray-300 hover:text-white justify-start text-lg"
                  data-testid="nav-mobile-what-you-get"
                >
                  What you get
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("why-choose-us")}
                  className="text-gray-300 hover:text-white justify-start text-lg"
                  data-testid="nav-mobile-why-choose-us"
                >
                  Why choose us
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("pricing")}
                  className="text-gray-300 hover:text-white justify-start text-lg"
                  data-testid="nav-mobile-pricing"
                >
                  Pricing
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
