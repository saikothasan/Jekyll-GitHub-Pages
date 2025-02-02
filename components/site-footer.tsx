import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-[#1c1f26] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Jekyll Themes</h3>
            <p className="text-gray-400">
              We curate the best Jekyll themes for developers, designers, and content creators.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/themes" className="text-gray-400 hover:text-white">
                  All Themes
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/submit-theme" className="text-gray-400 hover:text-white">
                  Submit Theme
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com/jekyllthemes" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/jekyllthemes" className="text-gray-400 hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.gg/jekyllthemes" className="text-gray-400 hover:text-white">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jekyll Themes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

