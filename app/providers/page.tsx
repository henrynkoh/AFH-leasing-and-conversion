export default function ProvidersPage() {
  const searchResources = [
    {
      name: "Washington State AFH Locator",
      type: "Official State Database",
      url: "https://www.dshs.wa.gov/altsa/home-and-community-services/adult-family-home-locator",
      description: "Official Washington State database of licensed AFH providers",
      howToUse: [
        "Search for providers in Centralia, Chehalis, and surrounding areas",
        "Filter by capacity (look for providers with 4-6 beds who might want to expand)",
        "Contact providers directly to inquire about expansion plans",
        "Note providers who have been operating 3+ years (more likely to expand)"
      ],
      cost: "Free"
    },
    {
      name: "Facebook: Washington AFH Providers",
      type: "Facebook Group",
      url: "Search Facebook for 'Washington AFH Providers'",
      description: "Active Facebook community of AFH providers in Washington",
      howToUse: [
        "Join the group (may require approval)",
        "Post your property listing with floor plan",
        "Engage with existing posts to build relationships",
        "Direct message providers who show interest",
        "Look for providers posting about expansion needs"
      ],
      cost: "Free"
    },
    {
      name: "Facebook: Adult Family Home Owners WA",
      type: "Facebook Group",
      url: "Search Facebook for 'Adult Family Home Owners WA'",
      description: "Network of AFH owners and operators",
      howToUse: [
        "Join and introduce yourself",
        "Share your property opportunity",
        "Network at virtual or in-person meetups",
        "Ask for referrals from existing members"
      ],
      cost: "Free"
    },
    {
      name: "AFH Business Network - Washington",
      type: "Facebook Group",
      url: "Search Facebook for 'AFH Business Network Washington'",
      description: "Business-focused AFH networking group",
      howToUse: [
        "Join for business networking",
        "Post property listing in appropriate threads",
        "Connect with providers looking for properties",
        "Attend networking events if available"
      ],
      cost: "Free"
    },
    {
      name: "Local AFH Association Meetings",
      type: "In-Person/Online Events",
      url: "Contact local AFH associations",
      description: "Regional AFH provider associations",
      howToUse: [
        "Find local AFH associations in Lewis County/Centralia area",
        "Attend meetings or webinars",
        "Network with providers",
        "Present your property opportunity",
        "Get referrals from association members"
      ],
      cost: "May require membership fee ($50-$200/year)"
    },
    {
      name: "Direct Provider Outreach",
      type: "Manual Research",
      url: "Use AFH Locator + Google Maps",
      description: "Identify and contact providers directly",
      howToUse: [
        "Use AFH Locator to find all providers within 10 miles of Centralia",
        "Research each provider online (website, reviews, capacity)",
        "Identify providers with 4-6 beds (likely candidates for expansion)",
        "Call or email to introduce property opportunity",
        "Follow up with floor plan and property details"
      ],
      cost: "Time investment"
    }
  ];

  const providerCriteria = {
    ideal: [
      "Licensed AFH provider (existing or prospective)",
      "3+ years of AFH operation experience (if existing)",
      "Strong financials and credit history",
      "Good references from previous landlords (if applicable)",
      "Commitment to long-term lease (5-10 years)",
      "Understanding of WABO requirements",
      "Professional business approach"
    ],
    redFlags: [
      "Poor credit or financial instability",
      "No AFH license or experience (unless very motivated and well-funded)",
      "Unwilling to commit to long-term lease",
      "History of property damage or lease violations",
      "Unrealistic expectations about rent or terms",
      "Lack of references or unwillingness to provide them"
    ]
  };

  const screeningQuestions = [
    "How long have you been operating an AFH?",
    "How many beds do you currently operate?",
    "What is your current occupancy rate?",
    "Are you looking to expand or relocate?",
    "What is your timeline for starting operations?",
    "What modifications would you need to make to the property?",
    "What lease term are you comfortable with?",
    "How do you plan to finance any needed modifications?",
    "Can you provide references from previous landlords or business partners?",
    "What is your experience with WABO permits and inspections?",
    "Do you have a business plan for this location?",
    "What are your expectations for rent and lease terms?"
  ];

  const leaseTermsRecommendations = {
    term: "5-10 years (preferred), minimum 3 years",
    rent: {
      noConversion: "$2,500-$3,500/month (property as-is)",
      minimalConversion: "$3,500-$5,000/month (WABO-ready)",
      fullConversion: "$5,000-$7,000/month (fully converted)"
    },
    costSharing: {
      landlord: "60-80% of conversion costs (adds permanent value)",
      tenant: "20-40% of conversion costs (operational improvements)",
      shared: "50/50 on contract negotiations and lease finalization"
    },
    tenantImprovements: "Landlord may provide improvement allowance ($5,000-$15,000) amortized into rent",
    securityDeposit: "2-3 months rent",
    maintenance: "Tenant responsible for routine maintenance, landlord for structural",
    insurance: "Tenant must carry liability insurance ($1M+), landlord maintains property insurance",
    subletting: "Not permitted without landlord approval",
    assignment: "May be permitted to qualified assignee with landlord approval",
    renewal: "Automatic renewal option with rent adjustment (CPI-based)"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">AFH Provider Search</h1>
        <p className="text-gray-600 mb-8">Resources and strategies for finding qualified AFH providers</p>

        <div className="space-y-8">
          {/* Search Resources */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Provider Search Resources</h2>
            <div className="space-y-6">
              {searchResources.map((resource, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{resource.name}</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {resource.type}
                      </span>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold">
                      {resource.cost}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <div>
                    <div className="font-semibold mb-2">How to Use:</div>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                      {resource.howToUse.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>
                  {resource.url && (
                    <div className="mt-4 text-sm text-blue-600">
                      <strong>Resource:</strong> {resource.url}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Provider Criteria */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Ideal Provider Criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold mb-4 text-green-700">✅ Ideal Qualities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {providerCriteria.ideal.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold mb-4 text-red-700">⚠️ Red Flags</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {providerCriteria.redFlags.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Screening Questions */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Provider Screening Questions</h2>
            <p className="text-gray-600 mb-4">
              Use these questions when interviewing potential providers to assess fit and qualifications
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {screeningQuestions.map((question, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="font-semibold text-sm text-gray-600 mb-1">Question {index + 1}</div>
                  <div className="text-gray-900">{question}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lease Terms Recommendations */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Recommended Lease Terms & Conditions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Lease Term</h3>
                <p className="text-gray-700">{leaseTermsRecommendations.term}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Rent Structure</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div><strong>No Conversion:</strong> {leaseTermsRecommendations.rent.noConversion}</div>
                    <div><strong>Minimal WABO Conversion:</strong> {leaseTermsRecommendations.rent.minimalConversion}</div>
                    <div><strong>Full Conversion:</strong> {leaseTermsRecommendations.rent.fullConversion}</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Cost-Sharing Arrangement</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div><strong>Landlord Share:</strong> {leaseTermsRecommendations.costSharing.landlord}</div>
                    <div><strong>Tenant Share:</strong> {leaseTermsRecommendations.costSharing.tenant}</div>
                    <div><strong>Shared Costs:</strong> {leaseTermsRecommendations.costSharing.shared}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Tenant Improvements</h4>
                  <p className="text-sm text-gray-700">{leaseTermsRecommendations.tenantImprovements}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Security Deposit</h4>
                  <p className="text-sm text-gray-700">{leaseTermsRecommendations.securityDeposit}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Maintenance</h4>
                  <p className="text-sm text-gray-700">{leaseTermsRecommendations.maintenance}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Insurance</h4>
                  <p className="text-sm text-gray-700">{leaseTermsRecommendations.insurance}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Subletting</h4>
                  <p className="text-sm text-gray-700">{leaseTermsRecommendations.subletting}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Assignment</h4>
                  <p className="text-sm text-gray-700">{leaseTermsRecommendations.assignment}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Renewal</h4>
                  <p className="text-sm text-gray-700">{leaseTermsRecommendations.renewal}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Plan */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">30-Day Provider Search Action Plan</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">1</span>
                <div>
                  <strong>Week 1:</strong> Join Facebook AFH groups (request access to 3-5 groups), list on AFH locator websites (create comprehensive listings), create marketing materials (photos, floor plan, descriptions), set up tracking spreadsheet for all inquiries, research local AFH providers in area, identify top 10-15 target providers
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">2</span>
                <div>
                  <strong>Week 2:</strong> Post property listings on all channels (Facebook groups, AFH locator, commercial sites), start direct outreach to 10-15 providers in area (phone calls and emails), respond to all inquiries within 24 hours, schedule initial property viewings, begin screening process for interested providers
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">3</span>
                <div>
                  <strong>Week 3:</strong> Follow up on all inquiries (second contact for non-responders), conduct property tours with interested providers (schedule 3-5 tours), screen interested providers using comprehensive questionnaire, check references for top candidates, verify licenses and credentials, evaluate financial stability
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">4</span>
                <div>
                  <strong>Week 4:</strong> Negotiate terms with qualified providers (top 2-3 candidates), finalize lease agreements with selected provider, coordinate legal review of lease documents, execute lease agreement, begin lease term and property handover
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded border">
              <h4 className="font-semibold mb-2">Extended Timeline (60-90 days):</h4>
              <div className="text-xs text-gray-700 space-y-1">
                <div><strong>Days 31-45:</strong> Continue marketing if no provider selected, expand search radius, consider additional channels</div>
                <div><strong>Days 46-60:</strong> Re-evaluate marketing approach, adjust pricing or terms if needed, consider conversion options</div>
                <div><strong>Days 61-90:</strong> Final provider selection, complete all negotiations, execute lease</div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Provider Relationship Management</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Building Relationships:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Be responsive and professional in all communications</li>
                  <li>Show genuine interest in provider's business success</li>
                  <li>Be flexible and willing to work together on solutions</li>
                  <li>Maintain regular communication throughout process</li>
                  <li>Provide value beyond just property (market insights, connections)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Long-Term Partnership:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>View relationship as long-term partnership, not just transaction</li>
                  <li>Support provider's success - their success is your success</li>
                  <li>Maintain open communication after lease execution</li>
                  <li>Be available for questions and support</li>
                  <li>Consider renewal incentives for good tenants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

