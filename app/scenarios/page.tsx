export default function ScenariosPage() {
  const scenarios = [
    {
      id: 1,
      title: "Scenario 1: Direct Provider Lease (Current Status - No Conversion)",
      priority: "HIGHEST",
      description: "Lease property in current condition: 3 beds, 2 baths, 1 bonus room, 3-car garage. Find existing operational AFH providers who can lease as-is and handle their own conversion. Property: 2,100 sq ft single-level home (built 2005) - Current capacity: 3 beds maximum",
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
      currentCapacity: "3 beds maximum (current status)",
      conversionOptions: "Provider can convert to 5, 6, or 8 beds at their own expense",
      rentRange: "$2,000-$3,000/month (3-bed capacity, lower rent due to limited capacity)",
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
      title: "Scenario 2: Conversion Option 1 - 5 Beds + Caregiver Room",
      priority: "RECOMMENDED",
      description: "Convert to 5 beds, 2 baths, 1 caregiver room, 3-car garage. Convert bonus room to 2 additional resident rooms, create dedicated caregiver room. Property: 2,100 sq ft single-level home (built 2005) - Target capacity: 5 beds",
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
      budget: "$35,000 - $50,000",
      landlordShare: "60-70%",
      tenantShare: "30-40%",
      conversionDetails: "Convert bonus room to 2 resident rooms, create caregiver room from existing space, modify bathrooms for 5-bed capacity, install handrails and call systems in all 5 resident rooms",
      rentRange: "$3,500-$4,500/month (5-bed capacity, good return on investment)",
      targetProviders: "Established providers looking to expand from 3-4 beds to 5 beds",
      steps: [
        "Days 1-15: Planning and permits phase - Obtain comprehensive WABO permit requirements checklist from local building department, hire architect or engineer for compliance drawings and specifications ($2,000), submit all permit applications including WABO, building, and fire department permits ($1,500), obtain contractor bids from 3-5 qualified contractors, review contractor qualifications and references",
        "Days 16-25: Contractor selection and contract - Review all contractor bids in detail comparing costs, timelines, and approaches, check contractor licenses, insurance, and bonding thoroughly, verify references and past project quality, negotiate final contract terms including cost-sharing arrangement, finalize contract with selected contractor and obtain insurance certificates",
        "Days 26-50: Bathroom construction phase - Demolition of existing bathroom fixtures and preparation ($1,500, landlord 70%, tenant 30%), installation of ADA-compliant toilets, grab bars, and roll-in shower systems ($12,000, shared costs), installation of non-slip flooring and adequate lighting throughout bathrooms ($3,000, shared), bathroom inspections and any necessary corrections ($500, shared)",
        "Days 51-70: Common area modifications - Installation of handrails in living room, dining room, and den areas at proper heights ($4,000, shared), kitchen modifications including accessible counter heights, fire suppression system, and adequate clearance ($5,000, shared), installation of emergency call systems in all resident rooms with central monitoring ($3,000, shared), patio ramp installation with handrails and non-slip surface ($4,000, shared)",
        "Days 71-85: Final inspections and certification - Schedule and complete WABO preliminary inspection ($500, landlord 100%), address any inspection corrections identified ($2,000, shared), complete fire department inspection and obtain approval ($300, landlord), final WABO certification and permit issuance ($500, landlord), document all approvals and certifications",
        "Days 86-120: Marketing and provider search - Create professional marketing materials including photos, floor plan, and property description ($500, landlord), post listings on AFH locator websites and Facebook communities ($200, landlord), actively screen interested providers using comprehensive questionnaire (35 days), conduct property tours and answer provider questions, negotiate lease terms with selected provider including rent, term, and responsibilities, execute lease agreement and coordinate move-in ($1,000, landlord)"
      ],
      marketingApproach: "Market as 'WABO-ready 5-bed property' to attract providers looking to expand to 5 beds"
    },
    {
      id: 3,
      title: "Scenario 3: Conversion Option 2 - 6 Beds + Caregiver Room",
      priority: "OPTIMAL",
      description: "Convert to 6 beds, 2 baths, 1 caregiver room, 3-car garage. Maximum conversion within existing structure. Convert bonus room and optimize all space for 6 resident rooms. Property: 2,100 sq ft single-level home (built 2005) - Target capacity: 6 beds",
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
      timeline: "120-150 days (90-120 conversion + 30 provider search)",
      budget: "$50,000 - $70,000",
      landlordShare: "70-80%",
      tenantShare: "20-30%",
      conversionDetails: "Convert bonus room to 3 private single resident rooms (80 sq ft minimum each, code-regulated), optimize all space for maximum capacity with private single rooms only, create dedicated caregiver room, modify bathrooms for 6-bed capacity, install comprehensive handrails and call systems in all 6 private single rooms, optimize common areas for 6 residents. IMPORTANT: All rooms must be private single rooms - market preference requires private rooms only, no shared/double rooms.",
      rentRange: "$4,500-$6,000/month (6-bed capacity, premium return)",
      targetProviders: "Established providers with multiple locations seeking 6-bed operations",
      steps: [
        "Days 1-30: Planning and design phase - Hire experienced architect specializing in AFH design for comprehensive architectural drawings ($5,000, landlord 100%), complete detailed architectural drawings including all rooms, common areas, and systems, submit comprehensive permit applications including WABO, building, fire, and any special permits ($2,500, landlord), coordinate permit review process with all departments, obtain all necessary permit approvals before starting construction",
        "Days 31-80: Major construction phase - Complete structural modifications if needed including any framing changes or structural reinforcements ($15,000, landlord 80%, tenant 20%), upgrade electrical systems including emergency systems, adequate outlets, and proper lighting throughout ($8,000, shared), modify HVAC systems for proper ventilation, temperature control, and air quality ($6,000, shared), upgrade plumbing systems for all bathrooms and ensure adequate water pressure ($10,000, shared), install comprehensive fire suppression system meeting all code requirements ($8,000, shared)",
        "Days 81-120: Room finishes and ADA compliance - Complete all bathroom conversions with full ADA compliance including grab bars, roll-in showers, accessible toilets and sinks ($20,000, shared), modify all resident rooms with handrails, emergency call systems, adequate lighting, and accessibility features ($12,000, shared), complete common area modifications including handrails, lighting, accessibility, and activity spaces ($8,000, shared), finish kitchen and dining area with full conversion including commercial-grade equipment if needed ($10,000, shared)",
        "Days 121-150: Final systems and inspections - Install all safety systems including emergency call buttons in all rooms, central monitoring system, fire alarms, and security systems ($5,000, shared), complete WABO preliminary inspection and address any issues identified ($1,000, landlord), complete fire department and building department final inspections ($800, landlord), address all inspection corrections promptly and professionally ($5,000, shared), obtain final WABO certification and all necessary permits ($1,200, landlord), document all certifications and create property documentation package",
        "Days 151-180: Premium provider search - Create professional marketing package with high-quality photography, detailed floor plans, and comprehensive property description ($2,000, landlord), list property on premium AFH platforms, commercial real estate sites, and targeted marketing channels ($500, landlord), actively screen and interview premium providers using comprehensive evaluation process (30 days), conduct detailed property tours highlighting premium features and quality, negotiate long-term lease terms (10+ years) with premium providers including rent structure, adjustments, and responsibilities (15 days), finalize lease agreement with legal review and execute with selected premium provider ($2,000, landlord)"
      ],
      marketingApproach: "Target established providers with multiple locations and strong financials"
    },
    {
      id: 4,
      title: "Scenario 4: Conversion Option 3 - 8 Beds + Caregiver Room (Garage Conversion)",
      priority: "MAXIMUM CAPACITY",
      description: "Convert to 8 beds, 2 baths, 1 caregiver room, with garage conversion. Maximum capacity conversion including converting 3-car garage to additional resident rooms. Property: 2,100 sq ft + garage conversion - Target capacity: 8 beds",
      pros: [
        "Maximum rent potential ($6,000-$8,500/month) - Highest possible rental income, 200-300% higher than as-is",
        "Maximum property utilization - Uses every available square foot for revenue generation",
        "Attracts large-scale providers - Providers operating multiple 8-bed facilities, very stable operations",
        "Highest property value increase - Maximum conversion adds significant long-term value",
        "Economies of scale - Higher capacity allows for better operational efficiency for providers",
        "Long-term leases (10-15 years) - Large providers commit to very long terms",
        "Premium provider pool - Only established, well-capitalized providers can operate 8-bed facilities",
        "Reduced per-bed costs - Higher capacity spreads fixed costs across more beds",
        "Market leadership position - 8-bed capacity positions property as premium offering",
        "Strong cash flow - Highest monthly income potential",
        "Exit strategy premium - Maximum conversion commands highest sale price",
        "Tax benefits - Maximum depreciation from comprehensive capital improvements"
      ],
      cons: [
        "Highest upfront investment ($75,000-$100,000+) - Requires substantial capital investment",
        "Longest timeline (150-210 days) - Extended period with no income, significant cash flow requirement",
        "Most complex project - Garage conversion adds structural complexity, multiple permits needed",
        "Highest risk exposure - Maximum capital at risk, complex project management",
        "Longest payback period - 24-36 months to recoup investment",
        "Garage conversion challenges - Structural modifications, permits, and inspections more complex",
        "Parking considerations - Loss of garage parking requires alternative parking solutions",
        "Zoning and permit complexity - Garage conversion may require special permits and zoning approvals",
        "Contractor coordination - Multiple specialized contractors for garage conversion and main structure",
        "Inspection challenges - More systems and spaces to inspect, higher chance of corrections",
        "Market dependency - Requires very strong AFH market to justify maximum investment",
        "Opportunity cost - Maximum capital tied up, longest time to revenue"
      ],
      timeline: "150-210 days (120-180 conversion + 30 provider search)",
      budget: "$75,000 - $100,000+",
      landlordShare: "75-85%",
      tenantShare: "15-25%",
      conversionDetails: "Convert 3-car garage to 2 private single resident rooms (80 sq ft minimum each, code-regulated), convert bonus room to 3 private single resident rooms (80 sq ft minimum each), optimize all existing space for private single rooms only, create dedicated caregiver room, modify bathrooms for 8-bed capacity, install comprehensive systems throughout all 8 private single rooms, ensure adequate common area space for 8 residents, address parking requirements. IMPORTANT: All rooms must be private single rooms - market preference requires private rooms only, no shared/double rooms.",
      rentRange: "$6,000-$8,500/month (8-bed capacity, maximum return)",
      targetProviders: "Large-scale providers with multiple 8-bed facilities, well-capitalized operators",
      steps: [
        "Days 1-45: Planning, design, and permits phase - Hire experienced architect specializing in AFH and garage conversions for comprehensive architectural drawings including garage conversion ($8,000, landlord 100%), complete detailed architectural drawings for main structure and garage conversion, coordinate with structural engineer for garage conversion feasibility ($3,000, landlord), submit comprehensive permit applications including WABO, building, fire, zoning, and special permits for garage conversion ($4,000, landlord), coordinate permit review process with all departments including zoning board if needed, obtain all necessary permit approvals including garage conversion approval before starting construction",
        "Days 46-120: Garage conversion and structural phase - Complete garage conversion including structural modifications, insulation, HVAC, electrical, and plumbing ($25,000, landlord 80%, tenant 20%), create 2 resident rooms in converted garage space with full AFH compliance ($15,000, shared), complete structural modifications to main structure if needed ($10,000, landlord 80%, tenant 20%), upgrade electrical systems throughout including garage conversion ($12,000, shared), modify HVAC systems for entire property including garage conversion ($10,000, shared), upgrade plumbing systems for all bathrooms and garage conversion ($15,000, shared), install comprehensive fire suppression system for entire property ($12,000, shared), address parking requirements and create alternative parking solutions ($5,000, landlord)",
        "Days 121-180: Room finishes and ADA compliance - Complete all bathroom conversions with full ADA compliance for 8-bed capacity ($25,000, shared), modify all 8 resident rooms with handrails, emergency call systems, adequate lighting, and accessibility features ($18,000, shared), complete common area modifications ensuring adequate space for 8 residents ($12,000, shared), finish kitchen and dining area with full conversion including commercial-grade equipment for 8 residents ($15,000, shared), create dedicated caregiver room with proper amenities ($5,000, shared), complete all finishing work including flooring, paint, and fixtures ($10,000, shared)",
        "Days 181-210: Final systems, inspections, and certification - Install all safety systems including emergency call buttons in all 8 rooms, central monitoring system, fire alarms, and security systems ($8,000, shared), complete WABO preliminary inspection and address any issues identified ($2,000, landlord), complete fire department, building department, and zoning final inspections ($1,500, landlord), address all inspection corrections promptly and professionally ($8,000, shared), obtain final WABO certification and all necessary permits including garage conversion approval ($2,000, landlord), document all certifications and create comprehensive property documentation package",
        "Days 211-240: Premium large-scale provider search - Create professional marketing package with high-quality photography, detailed floor plans including garage conversion, and comprehensive property description ($3,000, landlord), list property on premium AFH platforms, commercial real estate sites, and targeted marketing to large-scale providers ($1,000, landlord), actively screen and interview large-scale providers using comprehensive evaluation process (30 days), conduct detailed property tours highlighting 8-bed capacity and premium features, negotiate long-term lease terms (10-15 years) with large-scale providers including rent structure, adjustments, and responsibilities (20 days), finalize lease agreement with legal review and execute with selected premium provider ($3,000, landlord)"
      ],
      marketingApproach: "Target large-scale providers with multiple 8-bed facilities, emphasize maximum capacity and premium features"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Property Conversion Scenarios</h1>
        <p className="text-gray-600 mb-8">Compare solutions: Current status (3 beds) and future conversion options (5, 6, or 8 beds)</p>

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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 bg-gray-100 p-5 rounded-lg border-2 border-gray-300 shadow-md">
                <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                  <div className="text-base font-bold text-black mb-2">Timeline</div>
                  <div className="font-bold text-xl text-blue-700 leading-relaxed">{scenario.timeline}</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                  <div className="text-base font-bold text-black mb-2">Total Budget</div>
                  <div className="font-bold text-xl text-green-700 leading-relaxed">{scenario.budget}</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
                  <div className="text-base font-bold text-black mb-2">Landlord Share</div>
                  <div className="font-bold text-xl text-purple-700 leading-relaxed">{scenario.landlordShare}</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-orange-300">
                  <div className="text-base font-bold text-black mb-2">Tenant Share</div>
                  <div className="font-bold text-xl text-orange-700 leading-relaxed">{scenario.tenantShare}</div>
                </div>
              </div>

              {(scenario.currentCapacity || scenario.conversionDetails || scenario.rentRange || scenario.targetProviders) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-blue-100 p-5 rounded-lg border-2 border-blue-400 shadow-md">
                  {scenario.currentCapacity && (
                    <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                      <div className="text-base font-bold text-black mb-2">Current Capacity</div>
                      <div className="font-bold text-xl text-blue-700 leading-relaxed">{scenario.currentCapacity}</div>
                    </div>
                  )}
                  {scenario.rentRange && (
                    <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                      <div className="text-base font-bold text-black mb-2">Expected Rent Range</div>
                      <div className="font-bold text-xl text-green-700 leading-relaxed">{scenario.rentRange}</div>
                    </div>
                  )}
                  {scenario.conversionDetails && (
                    <div className="md:col-span-2 bg-white p-4 rounded-lg border-2 border-gray-300">
                      <div className="text-base font-bold text-black mb-2">Conversion Details</div>
                      <div className="text-lg text-black font-semibold leading-relaxed">{scenario.conversionDetails}</div>
                    </div>
                  )}
                  {scenario.targetProviders && (
                    <div className="md:col-span-2 bg-white p-4 rounded-lg border-2 border-gray-300">
                      <div className="text-base font-bold text-black mb-2">Target Providers</div>
                      <div className="text-lg text-black font-semibold leading-relaxed">{scenario.targetProviders}</div>
                    </div>
                  )}
                </div>
              )}

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

