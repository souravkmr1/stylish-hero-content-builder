import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import scholarHatLogo from "@/assets/scholarhat-logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:50px_50px] opacity-30" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors">
              <TrendingUp className="w-4 h-4 mr-2" />
              Join 50,000+ Developers
            </Badge>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                ScholarHat{" "}
                <span className="text-accent relative">
                  .NET
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent rounded-full" />
                </span>{" "}
                Skill Test
              </h1>
              
              {/* Enhanced Content */}
              <div className="space-y-6 text-lg text-white/90">
                <p className="text-xl">
                  Enhance your programming skills and boost your career with our comprehensive assessment platform.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-accent" />
                      <div>
                        <p className="font-semibold text-white">50,000+</p>
                        <p className="text-sm text-white/70">Active Learners</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4">
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-accent" />
                      <div>
                        <p className="font-semibold text-white">Industry</p>
                        <p className="text-sm text-white/70">Recognized</p>
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">What you'll get:</h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Comprehensive .NET skill assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Instant detailed performance report</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Personalized learning recommendations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Industry-recognized certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto font-semibold"
              >
                Start Assessment Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Side - Logo */}
          <div className="flex items-center justify-center animate-fade-in delay-300">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-150" />
              
              {/* Logo container */}
              <Card className="relative bg-white/10 backdrop-blur-sm border-white/20 p-12 rounded-3xl shadow-card">
                <img 
                  src={scholarHatLogo} 
                  alt="ScholarHat Logo" 
                  className="w-64 h-64 object-contain mx-auto filter drop-shadow-2xl"
                />
              </Card>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-accent/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;