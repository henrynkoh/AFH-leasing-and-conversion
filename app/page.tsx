import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Property Analysis Dashboard
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              1713 Winterwood Dr, Centralia, WA
            </h2>
            <p className="text-gray-700">
              Property purchased for AFH (Adult Family Home) lease operation. 
              Target: 5-6 bed capacity with minimal conversion costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/scenarios" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Top 3 Scenarios</h3>
              <p className="text-gray-600">
                Compare the best solutions for finding AFH providers and property conversion
              </p>
            </Link>

            <Link href="/floor-plan" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2">Floor Plan Analysis</h3>
              <p className="text-gray-600">
                Interactive floor plan with AFH compliance analysis and room assignments
              </p>
            </Link>

            <Link href="/providers" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Provider Search</h3>
              <p className="text-gray-600">
                Search AFH locator and Facebook communities for potential tenants
              </p>
            </Link>

            <Link href="/timeline" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">Timeline & Budget</h3>
              <p className="text-gray-600">
                Daily activity breakdown with costs and landlord/tenant cost sharing
              </p>
            </Link>

            <Link href="/marketing" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="text-xl font-semibold mb-2">Marketing Materials</h3>
              <p className="text-gray-600">
                Scripts, scenarios, and marketing content for provider outreach
              </p>
            </Link>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2">Lease Terms</h3>
              <p className="text-gray-600">
                Recommended terms and conditions for long-term AFH lease agreements
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Quick Summary</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg">Property Status</h3>
              <p className="text-gray-600">Ready for conversion analysis and provider search</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-lg">Target Capacity</h3>
              <p className="text-gray-600">5-6 AFH beds (WABO permit requirements)</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg">Strategy</h3>
              <p className="text-gray-600">
                Find existing providers OR convert to WABO-ready and market to prospective providers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
