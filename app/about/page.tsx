import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Jekyll Themes and our mission to provide high-quality themes for static site generators.",
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Jekyll Themes</h1>
      <div className="prose prose-lg">
        <p>
          Jekyll Themes is a curated directory of high-quality themes for Jekyll, the popular static site generator. Our
          mission is to help developers, designers, and content creators find the perfect theme for their projects.
        </p>
        <p>
          Founded in 2020, we've grown to become one of the largest collections of Jekyll themes on the web. We
          carefully review each theme submission to ensure it meets our standards for code quality, design, and
          functionality.
        </p>
        <h2>Our Team</h2>
        <p>
          We're a small team of passionate developers and designers who love working with Jekyll and static site
          generators. Our diverse backgrounds and experiences allow us to curate a wide range of themes that cater to
          various needs and preferences.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Quality: We prioritize well-designed, well-coded themes that provide a great user experience.</li>
          <li>Diversity: We strive to offer themes for various purposes, from personal blogs to e-commerce sites.</li>
          <li>Community: We support and encourage theme developers by providing a platform to showcase their work.</li>
          <li>Education: We create resources to help users make the most of their Jekyll sites.</li>
        </ul>
        <h2>Contact Us</h2>
        <p>
          Have questions or suggestions? We'd love to hear from you! Reach out to us at{" "}
          <a href="mailto:contact@jekyllthemes.com">contact@jekyllthemes.com</a>.
        </p>
      </div>
    </div>
  )
}

