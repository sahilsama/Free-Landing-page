import { FOOTER_CONTENT } from "../constants"
import { RiTwitterXLine, RiLinkedinLine, RiGithubLine, RiInstagramLine } from "@remixicon/react"

const Footer = () => {
  return (
    <footer className="mt-20 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Lyca</h3>
            <p className="text-neutral-400 text-sm">
              Empowering professionals with cutting-edge tools for success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <RiTwitterXLine className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <RiLinkedinLine className="w-5 h-5" />
              </a>
              <a href="https://github.com/sahilsama/Free-Landing-page" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <RiGithubLine className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <RiInstagramLine className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#works" className="text-neutral-400 hover:text-white text-sm transition-colors">How it Works</a></li>
              <li><a href="#pricing" className="text-neutral-400 hover:text-white text-sm transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-neutral-400 hover:text-white text-sm transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">API Reference</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Community</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 text-sm">
              {FOOTER_CONTENT.copyrightText}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Status</a>
              <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Contact</a>
              <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer