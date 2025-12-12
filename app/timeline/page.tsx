'use client';

import { useState } from 'react';

export default function TimelinePage() {
  const [selectedScenario, setSelectedScenario] = useState<'minimal' | 'full'>('minimal');

  const minimalTimeline = [
    {
      phase: 'Phase 1: Planning & Permits (Days 1-15)',
      days: 15,
      activities: [
        { day: '1-3', activity: 'Research WABO requirements, obtain permit checklist', cost: 0, landlord: 100, tenant: 0 },
        { day: '4-7', activity: 'Hire architect/engineer for compliance drawings', cost: 2000, landlord: 100, tenant: 0 },
        { day: '8-12', activity: 'Submit permit applications (WABO, building, fire)', cost: 1500, landlord: 100, tenant: 0 },
        { day: '13-15', activity: 'Obtain contractor bids (3-5 contractors)', cost: 0, landlord: 100, tenant: 0 }
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
        { day: '26-30', activity: 'Demolition of existing bathroom fixtures', cost: 1500, landlord: 70, tenant: 30 },
        { day: '31-40', activity: 'Install ADA-compliant toilets, grab bars, roll-in showers', cost: 12000, landlord: 70, tenant: 30 },
        { day: '41-45', activity: 'Install non-slip flooring, adequate lighting', cost: 3000, landlord: 70, tenant: 30 },
        { day: '46-50', activity: 'Bathroom inspections and corrections', cost: 500, landlord: 70, tenant: 30 }
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

  const timeline = selectedScenario === 'minimal' ? minimalTimeline : fullTimeline;

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

        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setSelectedScenario('minimal')}
            className={`px-6 py-3 rounded-lg font-semibold ${
              selectedScenario === 'minimal'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border-2 border-gray-300'
            }`}
          >
            Minimal WABO Conversion
          </button>
          <button
            onClick={() => setSelectedScenario('full')}
            className={`px-6 py-3 rounded-lg font-semibold ${
              selectedScenario === 'full'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border-2 border-gray-300'
            }`}
          >
            Full AFH Conversion
          </button>
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
            <li><strong>Landlord pays 100%:</strong> Permits, inspections, initial design/planning (these add permanent value to property)</li>
            <li><strong>Landlord pays 70-80%:</strong> Construction and modifications (major improvements that benefit property long-term)</li>
            <li><strong>Tenant pays 20-30%:</strong> Operational improvements and tenant-specific customizations</li>
            <li><strong>Shared 50/50:</strong> Contract negotiations and lease finalization (mutual benefit)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

