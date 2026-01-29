import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = ['Home', 'Shop All', 'About Us', 'Blog', 'Contact Us', 'FAQs'];
  const categories = ['Mango Pickle', 'Lime Pickle', 'Mixed Pickle', 'Chili Pickle', 'Gift Sets', 'Combo Packs'];
  const policies = ['Privacy Policy', 'Return Policy', 'Shipping Policy', 'Terms & Conditions'];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container-main py-14 md:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-md">
              <h3 className="font-serif text-3xl font-semibold text-background mb-3">
                Stay Updated
              </h3>
              <p className="text-background/60">
                Subscribe for exclusive offers, recipes & updates delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 text-background placeholder:text-background/40 border-background/20 focus:border-primary rounded-full px-6 min-w-[280px]"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">A</span>
              </div>
              <div>
                <h2 className="font-serif font-semibold text-xl">Aachar House</h2>
                <p className="text-sm text-background/50">Authentic Indian Pickles</p>
              </div>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Bringing authentic Indian pickles to the UAE. Made with traditional recipes, 
              premium ingredients, and lots of love.
            </p>
            <div className="flex gap-2">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-xl bg-background/5 hover:bg-primary flex items-center justify-center transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-base mb-5">Categories</h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base mb-5">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+971501234567" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +971 50 123 4567
              </a>
              <a href="mailto:hello@aacharhouse.ae" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                hello@aacharhouse.ae
              </a>
              <div className="flex items-start gap-3 text-background/60 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Al Quoz Industrial Area 3,<br />Dubai, UAE</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-background/50 mb-3">We Accept</p>
              <div className="flex gap-2">
                {['VISA', 'MC', 'AMEX', 'COD'].map((method) => (
                  <div key={method} className="px-3 py-2 bg-background/5 rounded-lg text-xs font-medium">
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              © 2024 Aachar House. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {policies.map((policy) => (
                <a key={policy} href="#" className="text-sm text-background/50 hover:text-primary transition-colors">
                  {policy}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
