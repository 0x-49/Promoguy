import { Link } from "wouter";
import { BsDiscord, BsTwitterX, BsInstagram, BsYoutube } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const legalLinks = [
    { href: "/legal/privacy-policy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms of Service" },
    { href: "/legal/cookies", label: "Cookie Policy" },
  ];

  const socialLinks = [
    { icon: <BsDiscord className="h-5 w-5" />, href: "#", label: "Discord" },
    { icon: <BsTwitterX className="h-5 w-5" />, href: "https://x.com/promoguyus", label: "Twitter" },
    { icon: <BsInstagram className="h-5 w-5" />, href: "https://instagram.com/promoguyus", label: "Instagram" },
    { icon: <BsYoutube className="h-5 w-5" />, href: "https://www.youtube.com/@promoguyus", label: "YouTube" }
  ];

  return (
    <footer className="bg-accent/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">PromoGuy Plus</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in +EV betting success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>(800) 896-3456</p>
              <p>info@JoinPromoGuyPlus.com</p>
              <p>7768 Cumming Hwy, Canton, GA 30115</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/#features" className="block text-sm text-muted-foreground hover:text-primary">Features</Link>
              <Link href="/#pricing" className="block text-sm text-muted-foreground hover:text-primary">Pricing</Link>
              <Link href="/#testimonials" className="block text-sm text-muted-foreground hover:text-primary">Testimonials</Link>
              <Link href="/#faq" className="block text-sm text-muted-foreground hover:text-primary">FAQ</Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} PromoGuy Plus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
