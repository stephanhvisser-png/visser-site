export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">
        Terms & Disclaimer
      </h1>

      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Independent Services
          </h2>

          <p>
            Career services are independently provided by Stephan Visser
            and are not affiliated with any employer, manufacturer,
            dealership group, or automotive brand.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Professional Disclaimer
          </h2>

          <p>
            Services provided are intended to assist with professional
            presentation, resume structure, LinkedIn optimization, and
            interview preparation. No guarantee of employment, interviews,
            visa approval, or job placement is provided or implied.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Privacy
          </h2>

          <p>
            Personal information and career documents shared for consulting
            purposes will be treated confidentially and will not be sold or
            shared with third parties.
          </p>
        </section>
      </div>
    </main>
  );
}