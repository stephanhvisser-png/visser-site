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

        <p className="text-lg max-w-4xl text-gray-300">
          Modern AI tools can generate resumes in seconds. The difference is
          knowing what employers and hiring managers actually look for.
          With over three decades of automotive industry experience, I help
          professionals present their experience clearly, credibly, and
          professionally.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-gray-800 rounded-2xl p-6 bg-black/30"
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
    </main>
  );
}