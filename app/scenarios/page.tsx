export default function ScenariosPage() {
  const scenarios = [
    {
      id: 1,
      title: "Scenario 1: Direct Provider Lease (No Conversion)",
      priority: "HIGHEST",
      description: "Find existing operational AFH providers who can lease the property as-is or with minimal modifications",
      pros: [
        "Fastest path to revenue (30-60 days) - Can start generating income quickly without waiting for conversion work",
        "No upfront conversion costs - Landlord invests $0-$5,000 maximum for minor repairs only",
        "Provider handles all permits and modifications - Tenant takes full responsibility for conversion work",
        "Lower risk for landlord - Minimal financial exposure, provider bears conversion risk",
        "Flexible terms - Can negotiate based on provider's specific needs and timeline",
        "Quick provider onboarding - Provider can begin operations faster since they control conversion timeline",
        "No contractor coordination needed - Landlord doesn't need to manage construction projects",
        "Lower maintenance initially - Property in current condition may need less immediate attention",
        "Tax benefits - Rental income starts immediately without capital improvements",
        "Market testing - Can test market demand before investing in conversion",
        "Provider commitment - Providers who invest in conversion are more committed long-term",
        "Customization freedom - Provider can customize to their specific operational needs"
      ],
      cons: [
        "Limited pool of providers willing to take on conversion - Fewer providers want to handle full conversion themselves",
        "May require longer lease term commitment - Providers may demand 7-10 year terms to justify their conversion investment",
        "Lower rent potential initially - Typically $2,500-$3,500/month compared to $3,500-$5,000 for converted properties",
        "Less control over conversion quality - Landlord has limited oversight of conversion work",
        "Potential property damage risk - Conversion work done by tenant may not meet landlord's standards",
        "Longer provider search timeline - May take 60-90 days to find right provider willing to convert",
        "Uncertainty about conversion timeline - Don't know when provider will complete conversion",
        "Potential permit issues - Provider's conversion may face delays or problems",
        "Lower property value increase - Property doesn't gain as much value without landlord-funded improvements",
        "Less attractive to premium providers - Top providers prefer turnkey properties",
        "Ongoing coordination needed - May need to coordinate with provider on conversion progress",
        "Risk of provider default - If provider fails, conversion work may be incomplete or substandard"
      ],
      timeline: "30-90 days to find provider",
      budget: "$0 - $5,000 (minor repairs only)",
      landlordShare: "0%",
      tenantShare: "100%",
      steps: [
        "Week 1-2: Research and preparation - Search AFH locator for providers in Centralia/Chehalis area, identify providers with 4-6 beds who might want to expand, research provider backgrounds and track records",
        "Week 3-4: Community engagement - Join Facebook AFH communities (WA AFH Providers, Adult Family Home Owners WA, etc.), introduce yourself and property opportunity, post property listing with detailed floor plan and analysis",
        "Week 5-6: Active outreach - Contact identified providers directly via phone and email, send comprehensive property information package including floor plan, compliance analysis, and cost estimates, schedule property viewings for interested parties",
        "Week 7-8: Provider screening - Screen interested providers using comprehensive questionnaire, check references from previous landlords and business partners, verify AFH licenses and credentials, evaluate financial stability and creditworthiness",
        "Week 9-10: Negotiations - Negotiate lease terms including rent amount, lease duration (5-10 year term recommended), conversion responsibilities and timeline, maintenance and insurance requirements, cost-sharing arrangements if any minor repairs needed",
        "Week 11-12: Lease execution - Finalize lease agreement with attorney review, execute lease documents with all parties, coordinate property handover including keys and access, set up rent collection and communication systems, begin lease term"
      ],
      marketingApproach: "Target existing providers looking to expand or relocate"
    },
    {
      id: 2,
      title: "Scenario 2: Minimal WABO Conversion + Provider Lease",
      priority: "RECOMMENDED",
      description: "Convert property to meet minimum WABO permit requirements, then lease to provider",
      pros: [
        "Property becomes 'turnkey' for providers - Ready for immediate AFH operations without additional conversion work needed",
        "Higher rent potential ($3,500-$5,000/month) - 40-100% higher than as-is properties, better return on investment",
        "Attracts more qualified providers - Larger pool of interested providers including established operators seeking expansion",
        "Faster provider onboarding (property ready) - Provider can start operations immediately after lease execution",
        "Shared cost burden - Tenant shares 30-40% of conversion costs, reducing landlord's total investment",
        "Property value increase - Conversion adds permanent value to property, improving long-term asset value",
        "Better lease terms - Can negotiate more favorable terms with qualified providers",
        "Quality assurance - Landlord controls conversion quality, ensuring proper workmanship and compliance",
        "Faster provider search - Property is more attractive, reducing time to find suitable tenant",
        "Professional presentation - Property looks professional and ready, making better impression on providers",
        "Reduced risk - Conversion completed before provider moves in, eliminating conversion completion risk",
        "Tax benefits - Capital improvements provide depreciation benefits and property value increase"
      ],
      cons: [
        "Upfront investment required ($25,000-$40,000) - Significant capital needed before revenue starts",
        "60-90 day conversion timeline - Property generates no income during conversion period",
        "Need to coordinate with contractors - Requires active project management and coordination",
        "Permit delays possible - WABO and building permits may face delays, extending timeline",
        "Cost overruns risk - Conversion costs may exceed estimates, requiring additional investment",
        "Market timing - Need to time conversion completion with provider search to minimize vacancy",
        "Contractor selection critical - Poor contractor choice can lead to delays, quality issues, or cost overruns",
        "Inspection delays - Building and WABO inspections may require corrections, adding time and cost",
        "Cash flow impact - No rental income during conversion period, only expenses",
        "Coordination complexity - Managing multiple contractors, inspections, and timelines requires effort",
        "Potential for rework - Inspections may require corrections, adding cost and time",
        "Market uncertainty - No guarantee of finding provider immediately after conversion completion"
      ],
      timeline: "90-120 days (60-90 conversion + 30 provider search)",
      budget: "$25,000 - $40,000",
      landlordShare: "60-70%",
      tenantShare: "30-40%",
      steps: [
        "Days 1-15: Planning and permits phase - Obtain comprehensive WABO permit requirements checklist from local building department, hire architect or engineer for compliance drawings and specifications ($2,000), submit all permit applications including WABO, building, and fire department permits ($1,500), obtain contractor bids from 3-5 qualified contractors, review contractor qualifications and references",
        "Days 16-25: Contractor selection and contract - Review all contractor bids in detail comparing costs, timelines, and approaches, check contractor licenses, insurance, and bonding thoroughly, verify references and past project quality, negotiate final contract terms including cost-sharing arrangement, finalize contract with selected contractor and obtain insurance certificates",
        "Days 26-50: Bathroom construction phase - Demolition of existing bathroom fixtures and preparation ($1,500, landlord 70%, tenant 30%), installation of ADA-compliant toilets, grab bars, and roll-in shower systems ($12,000, shared costs), installation of non-slip flooring and adequate lighting throughout bathrooms ($3,000, shared), bathroom inspections and any necessary corrections ($500, shared)",
        "Days 51-70: Common area modifications - Installation of handrails in living room, dining room, and den areas at proper heights ($4,000, shared), kitchen modifications including accessible counter heights, fire suppression system, and adequate clearance ($5,000, shared), installation of emergency call systems in all resident rooms with central monitoring ($3,000, shared), patio ramp installation with handrails and non-slip surface ($4,000, shared)",
        "Days 71-85: Final inspections and certification - Schedule and complete WABO preliminary inspection ($500, landlord 100%), address any inspection corrections identified ($2,000, shared), complete fire department inspection and obtain approval ($300, landlord), final WABO certification and permit issuance ($500, landlord), document all approvals and certifications",
        "Days 86-120: Marketing and provider search - Create professional marketing materials including photos, floor plan, and property description ($500, landlord), post listings on AFH locator websites and Facebook communities ($200, landlord), actively screen interested providers using comprehensive questionnaire (35 days), conduct property tours and answer provider questions, negotiate lease terms with selected provider including rent, term, and responsibilities, execute lease agreement and coordinate move-in ($1,000, landlord)"
      ],
      marketingApproach: "Market as 'WABO-ready' to attract both existing and new providers"
    },
    {
      id: 3,
      title: "Scenario 3: Full Conversion + Long-term Lease",
      priority: "OPTIMAL",
      description: "Complete full AFH conversion with all amenities, then secure long-term lease with premium provider",
      pros: [
        "Maximum rent potential ($5,000-$7,000/month) - Highest rental income, 100-180% higher than as-is properties",
        "Attracts premium providers with strong track records - Top-tier providers with multiple locations and excellent reputations",
        "Long-term stable income (10+ year leases) - Extended lease terms provide income stability and reduced turnover",
        "Property value appreciation - Significant increase in property value from premium conversion, excellent long-term investment",
        "Lowest maintenance needs - Premium finishes and systems require less ongoing maintenance",
        "Best tenant quality - Premium providers maintain higher standards, better property care",
        "Competitive advantage - Stand out in market with premium offering, less competition",
        "Higher occupancy rates - Premium providers typically maintain better occupancy, ensuring consistent rent",
        "Professional relationships - Work with established, professional operators, better business relationships",
        "Reduced vacancy risk - Premium providers are more stable, less likely to default or leave",
        "Tax benefits - Maximum depreciation benefits from capital improvements",
        "Exit strategy value - Premium property commands higher sale price if you decide to sell"
      ],
      cons: [
        "Highest upfront investment ($50,000-$75,000) - Requires significant capital before any revenue generation",
        "Longest timeline (120-180 days) - Extended period with no income, only expenses",
        "More complex project management - Multiple phases, contractors, and systems to coordinate",
        "Highest risk exposure - More capital at risk if project faces problems or market changes",
        "Longer payback period - Takes 18-24 months to recoup investment compared to 12-18 for minimal conversion",
        "Market dependency - Requires strong AFH market to justify premium investment",
        "Permit complexity - More permits needed, higher risk of delays or issues",
        "Contractor coordination - Managing multiple specialized contractors requires significant effort",
        "Cost overrun risk - More complex project, higher risk of exceeding budget",
        "Inspection challenges - More systems to inspect, higher chance of corrections needed",
        "Cash flow impact - Extended period with no rental income, significant cash flow requirement",
        "Opportunity cost - Capital tied up in conversion could be used for other investments"
      ],
      timeline: "120-180 days (90-120 conversion + 30-60 provider search)",
      budget: "$50,000 - $75,000",
      landlordShare: "70-80%",
      tenantShare: "20-30%",
      steps: [
        "Days 1-30: Planning and design phase - Hire experienced architect specializing in AFH design for comprehensive architectural drawings ($5,000, landlord 100%), complete detailed architectural drawings including all rooms, common areas, and systems, submit comprehensive permit applications including WABO, building, fire, and any special permits ($2,500, landlord), coordinate permit review process with all departments, obtain all necessary permit approvals before starting construction",
        "Days 31-80: Major construction phase - Complete structural modifications if needed including any framing changes or structural reinforcements ($15,000, landlord 80%, tenant 20%), upgrade electrical systems including emergency systems, adequate outlets, and proper lighting throughout ($8,000, shared), modify HVAC systems for proper ventilation, temperature control, and air quality ($6,000, shared), upgrade plumbing systems for all bathrooms and ensure adequate water pressure ($10,000, shared), install comprehensive fire suppression system meeting all code requirements ($8,000, shared)",
        "Days 81-120: Room finishes and ADA compliance - Complete all bathroom conversions with full ADA compliance including grab bars, roll-in showers, accessible toilets and sinks ($20,000, shared), modify all resident rooms with handrails, emergency call systems, adequate lighting, and accessibility features ($12,000, shared), complete common area modifications including handrails, lighting, accessibility, and activity spaces ($8,000, shared), finish kitchen and dining area with full conversion including commercial-grade equipment if needed ($10,000, shared)",
        "Days 121-150: Final systems and inspections - Install all safety systems including emergency call buttons in all rooms, central monitoring system, fire alarms, and security systems ($5,000, shared), complete WABO preliminary inspection and address any issues identified ($1,000, landlord), complete fire department and building department final inspections ($800, landlord), address all inspection corrections promptly and professionally ($5,000, shared), obtain final WABO certification and all necessary permits ($1,200, landlord), document all certifications and create property documentation package",
        "Days 151-180: Premium provider search - Create professional marketing package with high-quality photography, detailed floor plans, and comprehensive property description ($2,000, landlord), list property on premium AFH platforms, commercial real estate sites, and targeted marketing channels ($500, landlord), actively screen and interview premium providers using comprehensive evaluation process (30 days), conduct detailed property tours highlighting premium features and quality, negotiate long-term lease terms (10+ years) with premium providers including rent structure, adjustments, and responsibilities (15 days), finalize lease agreement with legal review and execute with selected premium provider ($2,000, landlord)"
      ],
      marketingApproach: "Target established providers with multiple locations and strong financials"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Top 3 Scenarios</h1>
        <p className="text-gray-600 mb-8">Compare solutions for finding AFH providers and property conversion</p>

        <div className="space-y-8">
          {scenarios.map((scenario, index) => (
            <div key={scenario.id} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {scenario.priority}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900">{scenario.title}</h2>
                  </div>
                  <p className="text-gray-700 text-lg">{scenario.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-green-700">Pros</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {scenario.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-red-700">Cons</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {scenario.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
                <div>
                  <div className="text-sm text-gray-600">Timeline</div>
                  <div className="font-semibold text-lg">{scenario.timeline}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Total Budget</div>
                  <div className="font-semibold text-lg">{scenario.budget}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Landlord Share</div>
                  <div className="font-semibold text-lg">{scenario.landlordShare}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Tenant Share</div>
                  <div className="font-semibold text-lg">{scenario.tenantShare}</div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">Implementation Steps</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  {scenario.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Marketing Approach</h3>
                <p className="text-gray-700">{scenario.marketingApproach}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Recommendation</h3>
          <p className="text-gray-700 mb-4">
            <strong>Scenario 2</strong> offers the best balance of speed, cost, and return on investment. 
            By completing minimal WABO conversion, you attract more qualified providers while sharing 
            costs with the tenant. This approach typically yields 60-70% higher rent than Scenario 1 
            with only moderate upfront investment.
          </p>
          <div className="mt-4 space-y-2">
            <h4 className="font-semibold">Why Scenario 2 is Recommended:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>Optimal ROI:</strong> 12-18 month payback period with 40-100% rent increase</li>
              <li><strong>Risk Management:</strong> Shared costs reduce landlord exposure while maintaining control</li>
              <li><strong>Market Appeal:</strong> Turnkey property attracts larger, more qualified provider pool</li>
              <li><strong>Timeline Balance:</strong> 90-120 days is reasonable without excessive wait time</li>
              <li><strong>Property Value:</strong> Conversion adds permanent value while remaining affordable</li>
              <li><strong>Flexibility:</strong> Can still negotiate terms while property is more attractive</li>
            </ul>
          </div>
          <div className="mt-4 p-4 bg-white rounded border">
            <h4 className="font-semibold mb-2">Financial Comparison:</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold">Scenario 1</div>
                <div>Investment: $0-$5K</div>
                <div>Rent: $2.5K-$3.5K/mo</div>
                <div>ROI: Immediate</div>
              </div>
              <div className="border-l pl-4">
                <div className="font-semibold text-blue-700">Scenario 2 ⭐</div>
                <div>Investment: $25K-$40K</div>
                <div>Rent: $3.5K-$5K/mo</div>
                <div>ROI: 12-18 months</div>
              </div>
              <div className="border-l pl-4">
                <div className="font-semibold">Scenario 3</div>
                <div>Investment: $50K-$75K</div>
                <div>Rent: $5K-$7K/mo</div>
                <div>ROI: 18-24 months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

