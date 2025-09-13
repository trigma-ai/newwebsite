import { Button } from "@/components/ui/button";
import { ChevronDown, User, Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="relative z-50 w-full px-4 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Menu and Reserve */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-foreground font-poppins text-sm">
            <span>Menu</span>
            <ChevronDown className="w-3 h-3 text-neon-green" />
          </div>
          
          <div className="hidden md:flex items-center gap-3 bg-surface-glass/20 backdrop-blur-sm rounded-3xl px-4 py-2">
            <span className="text-foreground font-poppins text-sm">Reserve Now</span>
            <div className="flex items-center -space-x-1">
              <div className="w-6 h-6 bg-surface-glass/40 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-foreground" />
              </div>
              <div className="w-6 h-6 bg-surface-glass/40 rounded-full flex items-center justify-center">
                <Menu className="w-3 h-3 text-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Auth buttons */}
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className="bg-neon-green/20 border-neon-green/30 text-foreground hover:bg-neon-green/30 font-poppins text-sm px-6 py-2 h-10 rounded-3xl"
          >
            Sign Up
          </Button>
          <Button 
            className="bg-neon-green text-dark-green hover:bg-neon-green-dark font-poppins text-sm px-6 py-2 h-10 rounded-3xl"
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;