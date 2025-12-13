'use client';

import { useState } from 'react';

export default function TimelinePage() {
  const [selectedScenario, setSelectedScenario] = useState<'current' | '5bed' | '6bed' | '8bed'>('current');

  const minimalTimeline = [
    {
      phase: 'Phase 1: Planning & Permits (Days 1-15)',
      days: 15,
      activities: [
        { day: '1-3', activity: 'Research WABO requirements thoroughly - Contact local building department for complete WABO permit checklist, review Washington State AFH regulations and building codes, identify all required modifications and compliance items, research local permit processing times and requirements, gather information on inspection schedules, review similar AFH conversion projects in area, create comprehensive requirements checklist, identify potential challenges early, establish relationships with permit office staff, understand cost implications of each requirement', cost: 0, landlord: 100, tenant: 0 },
        { day: '4-7', activity: 'Hire architect/engineer for compliance drawings - Research and identify 3-5 qualified architects/engineers with AFH experience, review portfolios and past AFH projects, check references and licenses, obtain detailed quotes for compliance drawings, interview candidates to assess understanding of AFH requirements, verify experience with WABO permits and ADA compliance, negotiate scope of work and pricing, select best candidate based on experience and cost, sign contract with selected professional, provide property access for measurements and assessment, establish communication schedule and deliverables timeline', cost: 2000, landlord: 100, tenant: 0 },
        { day: '8-12', activity: 'Submit permit applications (WABO, building, fire) - Complete WABO permit application with all required documentation including floor plans and compliance drawings, complete building permit application with structural and modification details, complete fire department permit application with safety system information, gather all supporting documents (property deeds, insurance, contractor information), pay all permit fees ($1,500 total), submit applications to respective departments, obtain receipt and tracking numbers, schedule any required pre-application meetings, follow up on application status, address any initial questions or requests for additional information', cost: 1500, landlord: 100, tenant: 0 },
        { day: '13-15', activity: 'Obtain contractor bids (3-5 contractors) - Identify 5-7 qualified contractors with AFH/conversion experience, verify licenses and insurance for each contractor, provide detailed scope of work and specifications to all contractors, schedule site visits for all contractors to assess property, allow adequate time for contractors to prepare detailed bids, request itemized bids showing labor and materials, request timeline estimates from each contractor, request references from past AFH or similar projects, establish bid deadline and submission requirements, review initial bids for completeness and competitiveness', cost: 0, landlord: 100, tenant: 0 }
      ]
    },
    {
      phase: 'Phase 2: Contractor Selection & Contract (Days 16-25)',
      days: 10,
      activities: [
        { day: '16-20', activity: 'Review bids, check contractor references', cost: 0, landlord: 100, tenant: 0 },
        { day: '21-23', activity: 'Negotiate contract with selected contractor', cost: 0, landlord: 50, tenant: 50 },
        { day: '24-25', activity: 'Finalize contract, obtain insurance certificates', cost: 0, landlord: 100, tenant: 0 }
      ]
    },
    {
      phase: 'Phase 3: Construction - Bathrooms (Days 26-50)',
      days: 25,
      activities: [
        { day: '26-30', activity: 'Demolition of existing bathroom fixtures - Remove existing toilets, vanities, and fixtures carefully to avoid damage to plumbing, remove existing tubs/showers and associated fixtures, dispose of materials properly according to local regulations, prepare surfaces for new installations, protect surrounding areas from damage during demolition, coordinate with plumbing contractor for proper shutoffs, ensure proper disposal of hazardous materials if any, clean and prepare work area for new installations, verify structural integrity after demolition, document any unexpected conditions discovered during demolition', cost: 1500, landlord: 70, tenant: 30 },
        { day: '31-40', activity: 'Install ADA-compliant toilets, grab bars, roll-in showers - Install ADA-compliant toilets at proper height (17-19 inches) with adequate clearance (60-inch turning radius), install grab bars at toilet (side and rear, 33-36 inches high, properly anchored to studs), install grab bars in shower/tub area (horizontal and vertical bars, properly positioned), convert to roll-in shower capability (36x36 inch minimum, no threshold, proper slope for drainage), install accessible vanities with knee clearance (27 inches high, 30 inches wide, 19 inches deep), ensure all fixtures meet ADA requirements and local codes, verify proper installation and anchoring of all safety features, test all fixtures for proper operation, coordinate with plumbing inspector for rough-in inspection', cost: 12000, landlord: 70, tenant: 30 },
        { day: '41-45', activity: 'Install non-slip flooring, adequate lighting', cost: 3000, landlord: 70, tenant: 30 },
        { day: '46-50', activity: 'Bathroom inspections and corrections - Schedule plumbing inspection with local building department, schedule accessibility inspection if required, accompany inspector during inspections, address any corrections identified during inspections promptly, verify all corrections meet inspector requirements, schedule reinspection if needed, obtain final inspection approvals, document all inspections and approvals, ensure all work meets WABO and ADA requirements, prepare bathrooms for final use', cost: 500, landlord: 70, tenant: 30 }
      ]
    },
    {
      phase: 'Phase 4: Construction - Common Areas (Days 51-70)',
      days: 20,
      activities: [
        { day: '51-55', activity: 'Install handrails in living, dining, den areas', cost: 4000, landlord: 70, tenant: 30 },
        { day: '56-60', activity: 'Kitchen modifications (accessible counters, fire suppression)', cost: 5000, landlord: 70, tenant: 30 },
        { day: '61-65', activity: 'Install emergency call systems in all resident rooms', cost: 3000, landlord: 70, tenant: 30 },
        { day: '66-70', activity: 'Patio ramp installation and handrails', cost: 4000, landlord: 70, tenant: 30 }
      ]
    },
    {
      phase: 'Phase 5: Final Inspections & Certification (Days 71-85)',
      days: 15,
      activities: [
        { day: '71-75', activity: 'WABO preliminary inspection', cost: 500, landlord: 100, tenant: 0 },
        { day: '76-80', activity: 'Address inspection corrections', cost: 2000, landlord: 70, tenant: 30 },
        { day: '81-83', activity: 'Fire department inspection', cost: 300, landlord: 100, tenant: 0 },
        { day: '84-85', activity: 'Final WABO certification and permit issuance', cost: 500, landlord: 100, tenant: 0 }
      ]
    },
    {
      phase: 'Phase 6: Marketing & Provider Search (Days 86-120)',
      days: 35,
      activities: [
        { day: '86-90', activity: 'Create marketing materials (photos, floor plan, description)', cost: 500, landlord: 100, tenant: 0 },
        { day: '91-95', activity: 'Post on AFH locator websites, Facebook communities', cost: 200, landlord: 100, tenant: 0 },
        { day: '96-110', activity: 'Screen interested providers, conduct property tours', cost: 0, landlord: 100, tenant: 0 },
        { day: '111-115', activity: 'Negotiate lease terms with selected provider', cost: 0, landlord: 50, tenant: 50 },
        { day: '116-120', activity: 'Execute lease agreement, finalize move-in', cost: 1000, landlord: 100, tenant: 0 }
      ]
    }
  ];

  const fullTimeline = [
    {
      phase: 'Phase 1: Planning & Design (Days 1-30)',
      days: 30,
      activities: [
        { day: '1-5', activity: 'Hire architect for full AFH design', cost: 5000, landlord: 100, tenant: 0 },
        { day: '6-20', activity: 'Complete architectural drawings and specifications', cost: 0, landlord: 100, tenant: 0 },
        { day: '21-25', activity: 'Submit all permit applications', cost: 2500, landlord: 100, tenant: 0 },
        { day: '26-30', activity: 'Permit review and approval', cost: 0, landlord: 100, tenant: 0 }
      ]
    },
    {
      phase: 'Phase 2: Major Construction - Structure (Days 31-80)',
      days: 50,
      activities: [
        { day: '31-40', activity: 'Structural modifications (if needed), framing', cost: 15000, landlord: 80, tenant: 20 },
        { day: '41-50', activity: 'Electrical upgrades (emergency systems, adequate outlets)', cost: 8000, landlord: 80, tenant: 20 },
        { day: '51-60', activity: 'HVAC modifications for proper ventilation', cost: 6000, landlord: 80, tenant: 20 },
        { day: '61-70', activity: 'Plumbing upgrades for all bathrooms', cost: 10000, landlord: 80, tenant: 20 },
        { day: '71-80', activity: 'Fire suppression system installation', cost: 8000, landlord: 80, tenant: 20 }
      ]
    },
    {
      phase: 'Phase 3: Room Finishes & ADA Compliance (Days 81-120)',
      days: 40,
      activities: [
        { day: '81-90', activity: 'All bathroom conversions (ADA-compliant)', cost: 20000, landlord: 80, tenant: 20 },
        { day: '91-100', activity: 'Resident room modifications (handrails, call systems)', cost: 12000, landlord: 80, tenant: 20 },
        { day: '101-110', activity: 'Common area modifications (handrails, lighting)', cost: 8000, landlord: 80, tenant: 20 },
        { day: '111-120', activity: 'Kitchen and dining area full conversion', cost: 10000, landlord: 80, tenant: 20 }
      ]
    },
    {
      phase: 'Phase 4: Final Systems & Inspections (Days 121-150)',
      days: 30,
      activities: [
        { day: '121-125', activity: 'Install all safety systems (call buttons, alarms)', cost: 5000, landlord: 80, tenant: 20 },
        { day: '126-135', activity: 'WABO preliminary and follow-up inspections', cost: 1000, landlord: 100, tenant: 0 },
        { day: '136-140', activity: 'Fire department and building inspections', cost: 800, landlord: 100, tenant: 0 },
        { day: '141-145', activity: 'Address all inspection corrections', cost: 5000, landlord: 80, tenant: 20 },
        { day: '146-150', activity: 'Final certifications and permit issuance', cost: 1200, landlord: 100, tenant: 0 }
      ]
    },
    {
      phase: 'Phase 5: Marketing & Premium Provider Search (Days 151-210)',
      days: 60,
      activities: [
        { day: '151-155', activity: 'Professional photography and marketing materials', cost: 2000, landlord: 100, tenant: 0 },
        { day: '156-165', activity: 'List on premium AFH platforms, Facebook communities', cost: 500, landlord: 100, tenant: 0 },
        { day: '166-180', activity: 'Screen and interview premium providers', cost: 0, landlord: 100, tenant: 0 },
        { day: '181-195', activity: 'Negotiate long-term lease (10+ years)', cost: 0, landlord: 50, tenant: 50 },
        { day: '196-210', activity: 'Finalize lease, provider onboarding', cost: 2000, landlord: 100, tenant: 0 }
      ]
    }
  ];

  // Current status timeline (no conversion, just provider search)
  const currentTimeline = [
    {
      phase: 'Phase 1: Research & Preparation (Days 1-14)',
      days: 14,
      activities: [
        { day: '1-7', activity: 'Research AFH providers in Centralia/Chehalis area using AFH locator, identify providers with 3-4 beds who might want to expand, research provider backgrounds and track records, compile list of 15-20 potential providers', cost: 0, landlord: 100, tenant: 0 },
        { day: '8-14', activity: 'Join Facebook AFH communities, create property listing materials, prepare floor plan and property description, set up tracking spreadsheet for inquiries', cost: 0, landlord: 100, tenant: 0 }
      ]
    },
    {
      phase: 'Phase 2: Marketing & Outreach (Days 15-45)',
      days: 31,
      activities: [
        { day: '15-21', activity: 'Post property listings on AFH locator websites and Facebook groups, create marketing materials with photos and floor plan', cost: 200, landlord: 100, tenant: 0 },
        { day: '22-35', activity: 'Contact identified providers directly via phone and email, send comprehensive property information package, schedule property viewings for interested parties', cost: 0, landlord: 100, tenant: 0 },
        { day: '36-45', activity: 'Follow up on all inquiries, conduct property tours, answer provider questions', cost: 0, landlord: 100, tenant: 0 }
      ]
    },
    {
      phase: 'Phase 3: Provider Screening (Days 46-60)',
      days: 15,
      activities: [
        { day: '46-55', activity: 'Screen interested providers using comprehensive questionnaire, check references from previous landlords, verify AFH licenses and credentials, evaluate financial stability', cost: 0, landlord: 100, tenant: 0 },
        { day: '56-60', activity: 'Conduct background checks, verify business licenses, review financial statements', cost: 500, landlord: 100, tenant: 0 }
      ]
    },
    {
      phase: 'Phase 4: Negotiation & Lease Execution (Days 61-90)',
      days: 30,
      activities: [
        { day: '61-75', activity: 'Negotiate lease terms including rent amount ($2,000-$3,000/month), lease duration (5-10 years), conversion responsibilities, maintenance and insurance requirements', cost: 0, landlord: 50, tenant: 50 },
        { day: '76-85', activity: 'Legal review of lease agreement, finalize all terms and conditions', cost: 1000, landlord: 100, tenant: 0 },
        { day: '86-90', activity: 'Execute lease documents, coordinate property handover, set up rent collection, begin lease term', cost: 500, landlord: 100, tenant: 0 }
      ]
    }
  ];

  // 5-bed conversion timeline
  const fiveBedTimeline = minimalTimeline; // Use minimal timeline as base for 5-bed

  // 6-bed conversion timeline  
  const sixBedTimeline = fullTimeline; // Use full timeline as base for 6-bed

  // 8-bed conversion timeline (most comprehensive)
  const eightBedTimeline = [
    {
      phase: 'Phase 1: Planning, Design & Permits (Days 1-45)',
      days: 45,
      activities: [
        { day: '1-10', activity: 'Hire architect specializing in AFH and garage conversions, coordinate with structural engineer for garage conversion feasibility assessment', cost: 8000, landlord: 100, tenant: 0 },
        { day: '11-30', activity: 'Complete detailed architectural drawings for main structure and garage conversion, coordinate permit applications including zoning for garage conversion', cost: 0, landlord: 100, tenant: 0 },
        { day: '31-40', activity: 'Submit comprehensive permit applications including WABO, building, fire, zoning, and special permits for garage conversion', cost: 4000, landlord: 100, tenant: 0 },
        { day: '41-45', activity: 'Permit review and approval process, coordinate with all departments, obtain all necessary approvals including garage conversion approval', cost: 0, landlord: 100, tenant: 0 }
      ]
    },
    {
      phase: 'Phase 2: Garage Conversion & Structural (Days 46-120)',
      days: 75,
      activities: [
        { day: '46-70', activity: 'Complete garage conversion including structural modifications, insulation, HVAC, electrical, and plumbing for 2 resident rooms', cost: 25000, landlord: 80, tenant: 20 },
        { day: '71-90', activity: 'Create 2 resident rooms in converted garage space with full AFH compliance, install all safety systems', cost: 15000, landlord: 70, tenant: 30 },
        { day: '91-110', activity: 'Complete structural modifications to main structure, upgrade electrical and HVAC systems for 8-bed capacity', cost: 22000, landlord: 80, tenant: 20 },
        { day: '111-120', activity: 'Address parking requirements, create alternative parking solutions, complete all structural work', cost: 5000, landlord: 100, tenant: 0 }
      ]
    },
    {
      phase: 'Phase 3: Bonus Room & Main Structure Conversion (Days 121-150)',
      days: 30,
      activities: [
        { day: '121-135', activity: 'Convert bonus room to 3 resident rooms, optimize all existing space for maximum capacity, create dedicated caregiver room', cost: 18000, landlord: 75, tenant: 25 },
        { day: '136-150', activity: 'Complete all bathroom modifications for 8-bed capacity, install comprehensive handrails and call systems in all 8 rooms', cost: 25000, landlord: 75, tenant: 25 }
      ]
    },
    {
      phase: 'Phase 4: Common Areas & Finishing (Days 151-180)',
      days: 30,
      activities: [
        { day: '151-165', activity: 'Complete common area modifications ensuring adequate space for 8 residents, finish kitchen and dining area with commercial-grade equipment', cost: 15000, landlord: 70, tenant: 30 },
        { day: '166-180', activity: 'Complete all finishing work including flooring, paint, fixtures, install all safety systems for 8-bed capacity', cost: 10000, landlord: 70, tenant: 30 }
      ]
    },
    {
      phase: 'Phase 5: Final Inspections & Certification (Days 181-210)',
      days: 30,
      activities: [
        { day: '181-190', activity: 'Complete WABO preliminary inspection, fire department, building department, and zoning final inspections', cost: 2000, landlord: 100, tenant: 0 },
        { day: '191-200', activity: 'Address all inspection corrections promptly and professionally', cost: 8000, landlord: 75, tenant: 25 },
        { day: '201-210', activity: 'Obtain final WABO certification and all necessary permits including garage conversion approval, document all certifications', cost: 2000, landlord: 100, tenant: 0 }
      ]
    },
    {
      phase: 'Phase 6: Premium Provider Search (Days 211-240)',
      days: 30,
      activities: [
        { day: '211-220', activity: 'Create professional marketing package with high-quality photography, detailed floor plans including garage conversion', cost: 3000, landlord: 100, tenant: 0 },
        { day: '221-230', activity: 'List property on premium AFH platforms, commercial real estate sites, target large-scale providers', cost: 1000, landlord: 100, tenant: 0 },
        { day: '231-240', activity: 'Screen and interview large-scale providers, negotiate long-term lease (10-15 years), finalize lease agreement', cost: 3000, landlord: 100, tenant: 0 }
      ]
    }
  ];

  const timeline = 
    selectedScenario === 'current' ? currentTimeline :
    selectedScenario === '5bed' ? fiveBedTimeline :
    selectedScenario === '6bed' ? sixBedTimeline :
    eightBedTimeline;

  const calculateTotals = () => {
    let totalCost = 0;
    let landlordTotal = 0;
    let tenantTotal = 0;
    
    timeline.forEach(phase => {
      phase.activities.forEach(activity => {
        totalCost += activity.cost;
        landlordTotal += activity.cost * (activity.landlord / 100);
        tenantTotal += activity.cost * (activity.tenant / 100);
      });
    });

    return { totalCost, landlordTotal, tenantTotal };
  };

  const totals = calculateTotals();
  const totalDays = timeline.reduce((sum, phase) => sum + phase.days, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Timeline & Budget</h1>
        <p className="text-gray-600 mb-8">Detailed daily breakdown of activities, costs, and cost-sharing</p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Select Conversion Scenario:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => setSelectedScenario('current')}
              className={`px-6 py-4 rounded-lg font-semibold transition-all ${
                selectedScenario === 'current'
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-400'
              }`}
            >
              <div className="text-lg font-bold">Current Status</div>
              <div className="text-sm mt-1">3 Beds (No Conversion)</div>
              <div className="text-xs mt-1 text-gray-500">30-90 days</div>
            </button>
            <button
              onClick={() => setSelectedScenario('5bed')}
              className={`px-6 py-4 rounded-lg font-semibold transition-all ${
                selectedScenario === '5bed'
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-400'
              }`}
            >
              <div className="text-lg font-bold">Option 1: 5 Beds</div>
              <div className="text-sm mt-1">$35K-$50K</div>
              <div className="text-xs mt-1 text-gray-500">90-120 days</div>
            </button>
            <button
              onClick={() => setSelectedScenario('6bed')}
              className={`px-6 py-4 rounded-lg font-semibold transition-all ${
                selectedScenario === '6bed'
                  ? 'bg-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-400'
              }`}
            >
              <div className="text-lg font-bold">Option 2: 6 Beds</div>
              <div className="text-sm mt-1">$50K-$70K</div>
              <div className="text-xs mt-1 text-gray-500">120-150 days</div>
            </button>
            <button
              onClick={() => setSelectedScenario('8bed')}
              className={`px-6 py-4 rounded-lg font-semibold transition-all ${
                selectedScenario === '8bed'
                  ? 'bg-orange-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-400'
              }`}
            >
              <div className="text-lg font-bold">Option 3: 8 Beds</div>
              <div className="text-sm mt-1">$75K-$100K+</div>
              <div className="text-xs mt-1 text-gray-500">150-210 days</div>
            </button>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-gray-600">Total Timeline</div>
              <div className="text-2xl font-bold">{totalDays} days</div>
              <div className="text-sm text-gray-600">({Math.round(totalDays / 30)} months)</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Total Cost</div>
              <div className="text-2xl font-bold">${totals.totalCost.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Landlord Share</div>
              <div className="text-2xl font-bold text-blue-700">${Math.round(totals.landlordTotal).toLocaleString()}</div>
              <div className="text-sm text-gray-600">({Math.round((totals.landlordTotal / totals.totalCost) * 100)}%)</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Tenant Share</div>
              <div className="text-2xl font-bold text-green-700">${Math.round(totals.tenantTotal).toLocaleString()}</div>
              <div className="text-sm text-gray-600">({Math.round((totals.tenantTotal / totals.totalCost) * 100)}%)</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {timeline.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{phase.phase}</h2>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {phase.days} days
                </span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left">Days</th>
                      <th className="px-4 py-2 text-left">Activity</th>
                      <th className="px-4 py-2 text-right">Cost</th>
                      <th className="px-4 py-2 text-right">Landlord %</th>
                      <th className="px-4 py-2 text-right">Tenant %</th>
                      <th className="px-4 py-2 text-right">Landlord $</th>
                      <th className="px-4 py-2 text-right">Tenant $</th>
                    </tr>
                  </thead>
                  <tbody>
                    {phase.activities.map((activity, actIndex) => (
                      <tr key={actIndex} className="border-b">
                        <td className="px-4 py-2 font-mono text-sm">{activity.day}</td>
                        <td className="px-4 py-2">{activity.activity}</td>
                        <td className="px-4 py-2 text-right">${activity.cost.toLocaleString()}</td>
                        <td className="px-4 py-2 text-right">{activity.landlord}%</td>
                        <td className="px-4 py-2 text-right">{activity.tenant}%</td>
                        <td className="px-4 py-2 text-right text-blue-700">
                          ${Math.round(activity.cost * (activity.landlord / 100)).toLocaleString()}
                        </td>
                        <td className="px-4 py-2 text-right text-green-700">
                          ${Math.round(activity.cost * (activity.tenant / 100)).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50 font-semibold">
                      <td colSpan={2} className="px-4 py-2">Phase Total</td>
                      <td className="px-4 py-2 text-right">
                        ${phase.activities.reduce((sum, a) => sum + a.cost, 0).toLocaleString()}
                      </td>
                      <td colSpan={2}></td>
                      <td className="px-4 py-2 text-right text-blue-700">
                        ${Math.round(phase.activities.reduce((sum, a) => sum + (a.cost * a.landlord / 100), 0)).toLocaleString()}
                      </td>
                      <td className="px-4 py-2 text-right text-green-700">
                        ${Math.round(phase.activities.reduce((sum, a) => sum + (a.cost * a.tenant / 100), 0)).toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Cost-Sharing Rationale</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li><strong>Landlord pays 100%:</strong> Permits, inspections, initial design/planning (these add permanent value to property and are landlord's responsibility for property improvements)</li>
            <li><strong>Landlord pays 70-80%:</strong> Construction and modifications (major improvements that benefit property long-term, increase property value, and are required for AFH operation)</li>
            <li><strong>Tenant pays 20-30%:</strong> Operational improvements and tenant-specific customizations (items that benefit tenant operations directly and may be customized to their needs)</li>
            <li><strong>Shared 50/50:</strong> Contract negotiations and lease finalization (mutual benefit activities where both parties have equal interest in successful outcome)</li>
          </ul>
          <div className="mt-4 p-3 bg-white rounded border">
            <h4 className="font-semibold mb-2">Additional Cost Considerations:</h4>
            <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
              <li><strong>Contingency Budget:</strong> Add 10-15% buffer for unexpected costs, delays, or changes</li>
              <li><strong>Permit Delays:</strong> Budget extra time (2-4 weeks) for permit processing, especially during busy periods</li>
              <li><strong>Inspection Corrections:</strong> Plan for 5-10% additional cost for addressing inspection findings</li>
              <li><strong>Material Cost Fluctuations:</strong> Prices may vary, consider locking in prices with contractors</li>
              <li><strong>Timeline Buffer:</strong> Add 10-15% extra time to account for weather, delays, or coordination issues</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Timeline Management Tips</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li><strong>Start Early:</strong> Begin permit process as soon as possible to avoid delays</li>
            <li><strong>Coordinate Closely:</strong> Regular communication with contractors and inspectors prevents delays</li>
            <li><strong>Plan for Contingencies:</strong> Build buffer time into each phase for unexpected issues</li>
            <li><strong>Parallel Activities:</strong> Some activities can run simultaneously (e.g., marketing while construction completes)</li>
            <li><strong>Regular Updates:</strong> Weekly progress meetings help identify and address issues early</li>
            <li><strong>Document Everything:</strong> Keep detailed records of all activities, costs, and decisions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

