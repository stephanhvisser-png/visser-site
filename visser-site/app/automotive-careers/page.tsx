export default function AutomotiveCareersPage() {
  const services = [
    {
      title: "RESUME-BASIC",
      price: "AED 200",
      description:
        "Professional resume formatting, layout enhancement, grammar correction, and ATS-friendly optimization.",
    },
    {
      title: "RESUME-PRO",
      price: "AED 450",
      description:
        "Comprehensive resume rewrite tailored to automotive and GCC recruitment standards.",
    },
    {
      title: "RESUME-EXEC",
      price: "AED 600",
      description:
        "Executive-level career branding and leadership-focused professional positioning.",
    },
    {
      title: "LINKEDIN-PRO",
      price: "AED 400",
      description:
        "Professional LinkedIn profile enhancement and recruiter-focused optimization.",
    },
    {
      title: "CAREER-PRO",
      price: "AED 800",
      description:
        "Combined resume and LinkedIn optimization package for a consistent professional brand.",
    },
    {
      title: "INTERVIEW-1H",
      price: "AED 450",
      description:
        "One-on-one interview preparation focused on automotive and GCC hiring expectations.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Automotive Career Services
        </h1>

        <p className="text-xl mb-6 max-w-4xl">
          Helping automotive professionals improve resumes, LinkedIn profiles,
          and professional positioning for GCC and international opportunities.
        </p>

        <p className="text-lg max-w-4xl text-gray-300 mb-8">
          Modern AI tools can generate resumes in seconds. The difference is
          knowing what employers and hiring managers actually look for.
          With over three decades of automotive industry experience, I help
          professionals present their experience clearly, credibly, and
          professionally.
        </p>

        <div className="flex gap-4">
          <a
            href="mailto:admin@visser.one"
            className="px-7 py-3.5 rounded-xl border border-gray-700 hover:border-gray-500 hover:-translate-y-0.5 transition-all duration-300"
          >
            Request Consultation
          </a>

          <a
            href="https://www.linkedin.com/in/stephan2/"
            target="_blank"
            className="px-7 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-gray-200 hover:-translate-y-0.5 transition-all duration-300"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            
          >
            <h2 className="text-2xl font-semibold mb-2">
              {service.title}
            </h2>

            <p className="text-lg font-medium mb-4 text-gray-300">
              {service.price}
            </p>

            <p className="text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-20 border-t border-gray-900 pt-16">
        <h2 className="text-2xl font-semibold mb-4">
          Built on
        </h2>

        <ul className="flex flex-row items-center gap-6 text-gray-300 mb-10">
          <li className="whitespace-nowrap">Quality</li>
            <li className="whitespace-nowrap">Honesty</li>
            <li className="whitespace-nowrap">Industry Expertise</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6">
          Ready to Improve Your Professional Presentation?
        </h2>

        <p className="text-gray-300 max-w-3xl mb-8">
          Whether you are applying for GCC opportunities, preparing for a
          leadership role, or improving your professional profile, I can help
          you present your experience clearly and credibly.
        </p>

        <div className="flex gap-4">
          <a
            href="mailto:admin@visser.one"
            className="px-7 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-gray-200 hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Me
          </a>

          <a
            href="https://www.linkedin.com/in/stephan2/"
            target="_blank"
            className="px-7 py-3.5 rounded-xl border border-gray-700 hover:border-gray-500 hover:-translate-y-0.5 transition-all duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>