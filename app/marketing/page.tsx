'use client';

export default function MarketingPage() {
  const marketingScripts = {
    facebookPost: {
      title: "Facebook Community Post Template",
      content: `🏠 WABO-READY AFH PROPERTY FOR LEASE - Centralia, WA

📍 Location: 1713 Winterwood Dr, Centralia, WA
📏 Property: 5-6 bed capacity Adult Family Home
✅ Status: WABO permit-ready (or fully converted)

PROPERTY HIGHLIGHTS:
• Spacious 3,000+ sq ft single-family home
• Ideal layout for AFH operation
• 5-6 resident rooms available
• Large common areas (Living, Dining, Den)
• Outdoor patio space for residents
• 3-car garage for storage
• Prime Centralia location

CONVERSION STATUS:
[Choose one based on scenario]
Option A: Property ready for conversion - we'll work with you on modifications
Option B: Minimal WABO compliance completed - ready for your customization
Option C: Fully converted and certified - turnkey operation ready

LEASE TERMS:
• Long-term lease preferred (5-10 years)
• Competitive rent with cost-sharing on improvements
• Flexible terms for qualified providers
• Landlord open to tenant improvement allowances

IDEAL FOR:
• Existing AFH providers looking to expand
• New providers ready to start operations
• Providers seeking prime Centralia location

CONTACT:
[Your contact information]

Interested? Message me for floor plan, photos, and detailed information!`
    },
    afhLocatorListing: {
      title: "AFH Locator Website Listing",
      content: `PROPERTY TITLE: WABO-Ready AFH Property - Centralia, WA - 5-6 Bed Capacity

PROPERTY DESCRIPTION:

Available for lease: Prime Adult Family Home property in Centralia, Washington. This spacious single-family residence is ideally suited for AFH operation with capacity for 5-6 residents.

PROPERTY DETAILS:
• Address: 1713 Winterwood Dr, Centralia, WA
• Property Type: Single-family home, AFH-converted or conversion-ready
• Bed Capacity: 5-6 beds
• Square Footage: Approximately 3,000+ sq ft
• Layout: Open floor plan with dedicated resident rooms and common areas

FEATURES:
✓ Multiple resident rooms (Primary Bedroom + 2 additional bedrooms + flexible space)
✓ Two full bathrooms (ADA-compliant or ready for conversion)
✓ Large living room and den for common activities
✓ Dedicated dining area
✓ Fully equipped kitchen
✓ Outdoor patio space
✓ 3-car garage for storage and parking
✓ Office space for administrative use
✓ Laundry facilities

LOCATION ADVANTAGES:
• Centralia, WA location - growing AFH market
• Residential neighborhood setting
• Easy access to medical facilities
• Close to shopping and services

LEASE INFORMATION:
• Lease Term: 5-10 years preferred
• Rent: Competitive market rate (negotiable based on conversion status)
• Cost-Sharing: Landlord and tenant share conversion costs (terms negotiable)
• Tenant Improvement Allowance: Available for qualified providers

CONVERSION STATUS:
[Select based on your chosen scenario]
- Ready for conversion (tenant handles modifications)
- Minimal WABO compliance completed
- Fully converted and certified

IDEAL TENANT:
• Licensed AFH provider (existing or prospective)
• Experience in AFH operations preferred
• Strong financials and references
• Commitment to long-term lease

CONTACT INFORMATION:
[Your name, phone, email]

Please contact for:
• Detailed floor plan
• Property photos
• Lease terms and conditions
• Conversion cost estimates
• Property viewing appointment`
    },
    emailTemplate: {
      title: "Email Outreach Template for Providers",
      content: `Subject: AFH Property Opportunity - Centralia, WA - 5-6 Bed Capacity

Dear [Provider Name],

I hope this message finds you well. I'm reaching out because I have a property that may be of interest for your Adult Family Home operations.

PROPERTY OVERVIEW:
• Location: 1713 Winterwood Dr, Centralia, WA
• Capacity: 5-6 beds
• Status: [Conversion-ready / WABO-compliant / Fully converted]
• Layout: Ideal for AFH with dedicated resident rooms and common areas

WHY THIS PROPERTY:
This property offers an excellent opportunity for AFH providers looking to establish or expand operations in Centralia. The floor plan is well-suited for resident care, with:
- Multiple resident rooms
- Large common areas for activities
- Outdoor space for residents
- Adequate storage and parking

FLEXIBLE ARRANGEMENTS:
I understand that finding the right property can be challenging. I'm open to discussing:
• Lease terms that work for both parties
• Cost-sharing arrangements for any needed modifications
• Timeline flexibility for your operational needs

NEXT STEPS:
I'd welcome the opportunity to discuss this property with you further. Would you be available for a brief call or property viewing? I can provide:
• Detailed floor plan
• Property photos
• Conversion cost estimates (if applicable)
• Lease term proposals

Thank you for your time, and I look forward to hearing from you.

Best regards,
[Your Name]
[Contact Information]`
    },
    phoneScript: {
      title: "Phone Call Script for Provider Outreach",
      content: `PHONE SCRIPT: AFH Property Lease Inquiry

OPENING (30 seconds):
"Hi [Provider Name], this is [Your Name]. I'm calling about a property I have available for lease that might be perfect for your AFH operations. Do you have a few minutes to discuss?"

PROPERTY INTRODUCTION (1-2 minutes):
"I have a property at 1713 Winterwood Dr in Centralia that's ideally suited for an Adult Family Home. It's a spacious single-family home with capacity for 5-6 residents. The layout is excellent for AFH operations with multiple resident rooms and large common areas."

KEY POINTS TO MENTION:
• Location: Centralia, WA
• Capacity: 5-6 beds
• Status: [Ready for conversion / WABO-compliant / Fully converted]
• Size: 3,000+ sq ft
• Features: Multiple rooms, common areas, outdoor space, garage

ADDRESS CONCERNS (2-3 minutes):
Listen for their questions and concerns:
• "What's the conversion status?" → Explain current state and what's needed
• "What are the lease terms?" → Discuss flexible terms, long-term preferred
• "What about modifications?" → Explain cost-sharing arrangement
• "When is it available?" → Provide timeline

HIGHLIGHT FLEXIBILITY (1 minute):
"I'm really looking for the right provider who can make this property work for their operations. I'm open to discussing lease terms, cost-sharing on improvements, and working with you on the timeline that makes sense."

CLOSE (30 seconds):
"Would you be interested in seeing the property? I can send you the floor plan and photos, or we could schedule a viewing. What works best for you?"

FOLLOW-UP:
• Send floor plan and photos within 24 hours
• Provide lease term proposal
• Schedule property viewing if interested`
    }
  };

  const marketingChannels = [
    {
      name: "AFH Locator Websites",
      description: "List property on specialized AFH property listing sites",
      examples: [
        "Washington State AFH Locator",
        "Adult Family Home Network",
        "AFH Property Exchange"
      ],
      cost: "$0-$200/month",
      effectiveness: "High - targets active AFH providers"
    },
    {
      name: "Facebook AFH Communities",
      description: "Join and post in Washington AFH provider groups",
      examples: [
        "Washington AFH Providers",
        "Adult Family Home Owners WA",
        "AFH Business Network - Washington",
        "Centralia/Chehalis Business Network"
      ],
      cost: "Free",
      effectiveness: "Very High - direct access to providers"
    },
    {
      name: "Local Real Estate Listings",
      description: "List on commercial real estate platforms",
      examples: [
        "LoopNet",
        "Crexi",
        "CommercialCafe"
      ],
      cost: "$100-$500/month",
      effectiveness: "Medium - broader audience"
    },
    {
      name: "Direct Outreach",
      description: "Contact existing AFH providers in the area",
      examples: [
        "Search AFH locator for providers in Centralia/Chehalis",
        "Contact providers within 10-mile radius",
        "Network at AFH association meetings"
      ],
      cost: "Time investment",
      effectiveness: "High - targeted approach"
    }
  ];

  const scenarios = [
    {
      title: "Scenario 1: No Conversion - Direct Provider Lease",
      marketingFocus: "Target existing providers looking to expand",
      message: "Property available for lease - provider handles conversion",
      timeline: "30-60 days to find provider",
      budget: "$200-$500 (listing fees only)"
    },
    {
      title: "Scenario 2: Minimal WABO Conversion",
      marketingFocus: "Market as 'WABO-ready' to attract both existing and new providers",
      message: "WABO-compliant property ready for your customization",
      timeline: "60-90 days (conversion) + 30 days (provider search)",
      budget: "$500-$1,000 (marketing materials + listings)"
    },
    {
      title: "Scenario 3: Full Conversion",
      marketingFocus: "Premium providers seeking turnkey operations",
      message: "Fully converted, certified AFH property - ready for immediate operation",
      timeline: "120-150 days (conversion) + 30-60 days (provider search)",
      budget: "$2,000-$3,000 (professional marketing + premium listings)"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Marketing Materials & Scripts</h1>
        <p className="text-gray-600 mb-8">Ready-to-use marketing content for AFH provider outreach</p>

        <div className="space-y-8">
          {/* Marketing Scripts */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Marketing Scripts & Templates</h2>
            <div className="space-y-6">
              {Object.entries(marketingScripts).map(([key, script]) => (
                <div key={key} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">{script.title}</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                      {script.content}
                    </pre>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(script.content);
                      alert('Copied to clipboard!');
                    }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Copy to Clipboard
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Channels */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Marketing Channels & Platforms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {marketingChannels.map((channel, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-2">{channel.name}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="mb-4">
                    <div className="text-sm font-semibold mb-2">Examples:</div>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {channel.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-600">Cost</div>
                      <div className="font-semibold">{channel.cost}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Effectiveness</div>
                      <div className="font-semibold text-green-600">{channel.effectiveness}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scenario-Specific Marketing */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Scenario-Specific Marketing Strategies</h2>
            <div className="space-y-6">
              {scenarios.map((scenario, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Marketing Focus</div>
                      <div className="font-semibold">{scenario.marketingFocus}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Key Message</div>
                      <div className="font-semibold">{scenario.message}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Timeline</div>
                      <div className="font-semibold">{scenario.timeline}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Marketing Budget</div>
                      <div className="font-semibold text-blue-600">{scenario.budget}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Marketing Best Practices</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Content Strategy</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Be specific:</strong> Include floor plan, photos, and detailed property information - providers need complete information to make decisions</li>
                  <li><strong>Highlight flexibility:</strong> Emphasize willingness to work with providers on terms - flexibility is a key differentiator</li>
                  <li><strong>Show floor plan:</strong> Visual representation helps providers envision the space and understand layout immediately</li>
                  <li><strong>Emphasize location:</strong> Centralia is a growing AFH market with good demographics - highlight market advantages</li>
                  <li><strong>Be transparent:</strong> Clearly state conversion status and what's needed - honesty builds trust</li>
                  <li><strong>Include cost information:</strong> Provide cost estimates and cost-sharing details - helps providers plan</li>
                  <li><strong>Show timeline:</strong> Include conversion timeline if applicable - helps providers plan operations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Response Strategy</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Respond quickly:</strong> AFH providers are often actively searching and move fast - respond within 2-4 hours if possible</li>
                  <li><strong>Follow up:</strong> Reach out to interested parties within 24-48 hours - don't let leads go cold</li>
                  <li><strong>Personalize responses:</strong> Customize each response based on provider's specific situation and needs</li>
                  <li><strong>Provide value:</strong> Each communication should provide useful information, not just sales pitch</li>
                  <li><strong>Track interactions:</strong> Keep notes on all provider interactions to personalize future communications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Multi-Channel Approach</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Use multiple channels:</strong> Don't rely on just one platform - cast a wide net across all available channels</li>
                  <li><strong>Consistent messaging:</strong> Maintain consistent property description and key points across all channels</li>
                  <li><strong>Channel-specific optimization:</strong> Adapt content format for each platform while maintaining core message</li>
                  <li><strong>Cross-promote:</strong> Mention other channels where property is listed to increase visibility</li>
                  <li><strong>Track performance:</strong> Monitor which channels generate most inquiries and focus efforts there</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Professional Presentation</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>High-quality photos:</strong> Professional photography makes significant difference in attracting providers</li>
                  <li><strong>Clear floor plans:</strong> Easy-to-read floor plans help providers understand property layout</li>
                  <li><strong>Professional writing:</strong> Well-written descriptions show professionalism and attention to detail</li>
                  <li><strong>Complete information:</strong> Provide all necessary information upfront to avoid back-and-forth</li>
                  <li><strong>Organized materials:</strong> Well-organized marketing materials make good impression</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Marketing Metrics & Tracking</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Key Metrics to Track:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Inquiry Rate:</strong> Number of inquiries per listing/channel</li>
                  <li><strong>Response Rate:</strong> Percentage of inquiries that respond to follow-up</li>
                  <li><strong>Viewing Rate:</strong> Percentage of inquiries that schedule property viewings</li>
                  <li><strong>Conversion Rate:</strong> Percentage of viewings that result in lease applications</li>
                  <li><strong>Time to Lease:</strong> Average days from first listing to lease execution</li>
                  <li><strong>Cost per Lead:</strong> Marketing costs divided by number of qualified leads</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tracking Methods:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Use unique contact methods for each channel (different email, phone extension)</li>
                  <li>Ask providers how they found the property during initial contact</li>
                  <li>Track all inquiries in spreadsheet with source, date, and status</li>
                  <li>Monitor social media engagement (likes, shares, comments)</li>
                  <li>Track website analytics if using property website</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

