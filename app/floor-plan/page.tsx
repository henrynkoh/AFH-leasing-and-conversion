'use client';

import { useState } from 'react';

export default function FloorPlanPage() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const rooms = {
    'primary-bedroom': {
      name: 'Primary Bedroom',
      afhUse: 'Resident Room (Bed 1)',
      compliance: 'Good - Large enough for resident room',
      modifications: 'Add handrails, emergency call system, adequate lighting',
      cost: '$2,000-$3,000'
    },
    'bedroom-1': {
      name: 'Bedroom 1',
      afhUse: 'Resident Room (Bed 2)',
      compliance: 'Good - Standard size',
      modifications: 'Add handrails, emergency call system',
      cost: '$1,500-$2,000'
    },
    'bedroom-2': {
      name: 'Bedroom 2',
      afhUse: 'Resident Room (Bed 3)',
      compliance: 'Good - Standard size',
      modifications: 'Add handrails, emergency call system',
      cost: '$1,500-$2,000'
    },
    'cg-room': {
      name: 'CG Room',
      afhUse: 'Resident Room (Bed 4) or Staff Room',
      compliance: 'Good - Can serve multiple purposes',
      modifications: 'Add handrails if used as resident room',
      cost: '$1,500-$2,000'
    },
    'primary-bath': {
      name: 'Primary Bathroom',
      afhUse: 'Resident Bathroom',
      compliance: 'Needs modifications',
      modifications: 'Add grab bars, roll-in shower capability, ADA toilet, non-slip flooring',
      cost: '$5,000-$8,000'
    },
    'bath': {
      name: 'Bath',
      afhUse: 'Resident Bathroom',
      compliance: 'Needs modifications',
      modifications: 'Add grab bars, roll-in shower capability, ADA toilet, non-slip flooring',
      cost: '$5,000-$8,000'
    },
    'living': {
      name: 'Living Room',
      afhUse: 'Common Area / Activity Room',
      compliance: 'Excellent - Large open space',
      modifications: 'Add handrails along walls, adequate lighting, emergency exits marked',
      cost: '$2,000-$3,000'
    },
    'kitchen': {
      name: 'Kitchen',
      afhUse: 'Resident Dining / Meal Prep',
      compliance: 'Needs modifications',
      modifications: 'Ensure accessible counter heights, adequate space for wheelchairs, fire suppression system',
      cost: '$3,000-$5,000'
    },
    'dining': {
      name: 'Dining Room',
      afhUse: 'Resident Dining Area',
      compliance: 'Good - Dedicated dining space',
      modifications: 'Add accessible tables, adequate lighting, handrails',
      cost: '$1,500-$2,500'
    },
    'den': {
      name: 'Den',
      afhUse: 'Common Area / TV Room',
      compliance: 'Good - Additional common space',
      modifications: 'Add handrails, adequate lighting',
      cost: '$1,500-$2,000'
    },
    'office': {
      name: 'Office',
      afhUse: 'Administrative Office / Staff Room',
      compliance: 'Good - Private space for staff',
      modifications: 'Minimal - Ensure adequate lighting and ventilation',
      cost: '$500-$1,000'
    },
    'laundry': {
      name: 'Laundry',
      afhUse: 'Resident Laundry Facility',
      compliance: 'Good - Existing laundry space',
      modifications: 'Ensure accessible washer/dryer, adequate ventilation',
      cost: '$1,000-$2,000'
    },
    'patio': {
      name: 'Patio',
      afhUse: 'Outdoor Common Area',
      compliance: 'Excellent - Outdoor space for residents',
      modifications: 'Add wheelchair-accessible ramp, handrails, non-slip surface',
      cost: '$3,000-$5,000'
    },
    'garage': {
      name: '3 Car Garage',
      afhUse: 'Storage / Vehicle Parking',
      compliance: 'Good - Large storage area',
      modifications: 'Minimal - Ensure adequate organization',
      cost: '$500-$1,000'
    }
  };

  const afhAnalysis = {
    totalBeds: '5-6 beds possible',
    residentRooms: ['Primary Bedroom', 'Bedroom 1', 'Bedroom 2', 'CG Room', 'Living (if partitioned)'],
    commonAreas: ['Living Room', 'Dining Room', 'Den', 'Patio'],
    bathrooms: 2,
    complianceScore: '75% - Good foundation, needs modifications',
    estimatedConversionCost: '$25,000 - $40,000 (minimal)',
    estimatedConversionCostFull: '$50,000 - $75,000 (full)'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Floor Plan Analysis</h1>
        <p className="text-gray-600 mb-8">Interactive analysis of property for AFH operation</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Floor Plan Visualization</h2>
              <div className="bg-gray-100 p-8 rounded-lg relative" style={{ minHeight: '600px' }}>
                {/* Simplified floor plan representation */}
                <svg viewBox="0 0 800 600" className="w-full h-full">
                  {/* Patio */}
                  <rect x="200" y="0" width="400" height="140" fill="#e3f2fd" stroke="#1976d2" strokeWidth="2" 
                    className="cursor-pointer" 
                    onMouseEnter={(e) => e.currentTarget.setAttribute('fill', '#bbdefb')}
                    onMouseLeave={(e) => e.currentTarget.setAttribute('fill', '#e3f2fd')}
                    onClick={() => setSelectedRoom('patio')} />
                  <text x="400" y="70" textAnchor="middle" className="text-sm font-semibold">Patio</text>

                  {/* Primary Bedroom Section */}
                  <rect x="0" y="140" width="200" height="200" fill="#fff3e0" stroke="#f57c00" strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.setAttribute('fill', '#ffe0b2')}
                    onMouseLeave={(e) => e.currentTarget.setAttribute('fill', '#fff3e0')}
                    onClick={() => setSelectedRoom('primary-bedroom')} />
                  <text x="100" y="240" textAnchor="middle" className="text-sm font-semibold">Primary Bedroom</text>

                  {/* Primary Bath */}
                  <rect x="0" y="0" width="200" height="140" fill="#fce4ec" stroke="#c2185b" strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.setAttribute('fill', '#f8bbd0')}
                    onMouseLeave={(e) => e.currentTarget.setAttribute('fill', '#fce4ec')}
                    onClick={() => setSelectedRoom('primary-bath')} />
                  <text x="100" y="70" textAnchor="middle" className="text-xs">Primary Bath</text>

                  {/* Bedrooms */}
                  <rect x="0" y="340" width="100" height="120" fill="#fff3e0" stroke="#f57c00" strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.setAttribute('fill', '#ffe0b2')}
                    onMouseLeave={(e) => e.currentTarget.setAttribute('fill', '#fff3e0')}
                    onClick={() => setSelectedRoom('bedroom-1')} />
                  <text x="50" y="400" textAnchor="middle" className="text-xs">Bedroom 1</text>
                  <rect x="100" y="340" width="100" height="120" fill="#fff3e0" stroke="#f57c00" strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.setAttribute('fill', '#ffe0b2')}
                    onMouseLeave={(e) => e.currentTarget.setAttribute('fill', '#fff3e0')}
                    onClick={() => setSelectedRoom('bedroom-2')} />
                  <text x="150" y="400" textAnchor="middle" className="text-xs">Bedroom 2</text>

                  {/* Bath */}
                  <rect x="0" y="280" width="100" height="60" fill="#fce4ec" stroke="#c2185b" strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.setAttribute('fill', '#f8bbd0')}
                    onMouseLeave={(e) => e.currentTarget.setAttribute('fill', '#fce4ec')}
                    onClick={() => setSelectedRoom('bath')} />
                  <text x="50" y="310" textAnchor="middle" className="text-xs">Bath</text>

                  {/* Living Room */}
                  <rect x="200" y="140" width="300" height="200" fill="#e8f5e9" stroke="#388e3c" strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.setAttribute('fill', '#c8e6c9')}
                    onMouseLeave={(e) => e.currentTarget.setAttribute('fill', '#e8f5e9')}
                    onClick={() => setSelectedRoom('living')} />
                  <text x="350" y="240" textAnchor="middle" className="text-sm font-semibold">Living</text>

                  {/* Kitchen */}
                  <rect x="500" y="140" width="150" height="200" fill="#fff9c4" stroke="#fbc02d" strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.setAttribute('fill', '#fff59d')}
                    onMouseLeave={(e) => e.currentTarget.setAttribute('fill', '#fff9c4')}
                    onClick={() => setSelectedRoom('kitchen')} />
                  <text x="575" y="240" textAnchor="middle" className="text-sm font-semibold">Kitchen</text>

                  {/* Den */}
                  <rect x="650" y="140" width="150" height="200" fill="#e1bee7" stroke="#7b1fa2" strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.setAttribute('fill', '#ce93d8')}
                    onMouseLeave={(e) => e.currentTarget.setAttribute('fill', '#e1bee7')}
                    onClick={() => setSelectedRoom('den')} />
                  <text x="725" y="240" textAnchor="middle" className="text-sm font-semibold">Den</text>

                  {/* Office */}
                  <rect x="650" y="340" width="150" height="120" fill="#b2dfdb" stroke="#00796b" strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.setAttribute('fill', '#80cbc4')}
                    onMouseLeave={(e) => e.currentTarget.setAttribute('fill', '#b2dfdb')}
                    onClick={() => setSelectedRoom('office')} />
                  <text x="725" y="400" textAnchor="middle" className="text-sm font-semibold">Office</text>

                  {/* Laundry */}
                  <rect x="650" y="460" width="150" height="60" fill="#b2dfdb" stroke="#00796b" strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.setAttribute('fill', '#80cbc4')}
                    onMouseLeave={(e) => e.currentTarget.setAttribute('fill', '#b2dfdb')}
                    onClick={() => setSelectedRoom('laundry')} />
                  <text x="725" y="490" textAnchor="middle" className="text-sm font-semibold">Laundry</text>

                  {/* Dining */}
                  <rect x="200" y="340" width="200" height="120" fill="#e8f5e9" stroke="#388e3c" strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.setAttribute('fill', '#c8e6c9')}
                    onMouseLeave={(e) => e.currentTarget.setAttribute('fill', '#e8f5e9')}
                    onClick={() => setSelectedRoom('dining')} />
                  <text x="300" y="400" textAnchor="middle" className="text-sm font-semibold">Dining</text>

                  {/* Garage */}
                  <rect x="400" y="340" width="250" height="180" fill="#cfd8dc" stroke="#455a64" strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.setAttribute('fill', '#b0bec5')}
                    onMouseLeave={(e) => e.currentTarget.setAttribute('fill', '#cfd8dc')}
                    onClick={() => setSelectedRoom('garage')} />
                  <text x="525" y="430" textAnchor="middle" className="text-sm font-semibold">3 Car Garage</text>

                  {/* CG Room */}
                  <rect x="0" y="460" width="200" height="60" fill="#fff3e0" stroke="#f57c00" strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => e.currentTarget.setAttribute('fill', '#ffe0b2')}
                    onMouseLeave={(e) => e.currentTarget.setAttribute('fill', '#fff3e0')}
                    onClick={() => setSelectedRoom('cg-room')} />
                  <text x="100" y="490" textAnchor="middle" className="text-sm font-semibold">CG Room</text>
                </svg>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Click on any room to see AFH compliance details and modification requirements
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {selectedRoom && rooms[selectedRoom as keyof typeof rooms] && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">{rooms[selectedRoom as keyof typeof rooms].name}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-600">AFH Use</div>
                    <div className="font-semibold">{rooms[selectedRoom as keyof typeof rooms].afhUse}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Compliance Status</div>
                    <div className="font-semibold">{rooms[selectedRoom as keyof typeof rooms].compliance}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Required Modifications</div>
                    <div className="text-sm">{rooms[selectedRoom as keyof typeof rooms].modifications}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Estimated Cost</div>
                    <div className="font-semibold text-blue-600">{rooms[selectedRoom as keyof typeof rooms].cost}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">AFH Capacity Analysis</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600">Total Bed Capacity</div>
                  <div className="font-semibold text-lg">{afhAnalysis.totalBeds}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Resident Rooms Available</div>
                  <div className="text-sm">
                    {afhAnalysis.residentRooms.map((room, i) => (
                      <span key={i} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 mb-2">
                        {room}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Common Areas</div>
                  <div className="text-sm">
                    {afhAnalysis.commonAreas.map((area, i) => (
                      <span key={i} className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded mr-2 mb-2">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                  <div className="font-semibold">{afhAnalysis.bathrooms} (need modifications)</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Compliance Score</div>
                  <div className="font-semibold">{afhAnalysis.complianceScore}</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold mb-3">Conversion Cost Estimates</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="font-semibold">Minimal WABO Compliance</div>
                  <div className="text-blue-700">{afhAnalysis.estimatedConversionCost}</div>
                </div>
                <div>
                  <div className="font-semibold">Full AFH Conversion</div>
                  <div className="text-blue-700">{afhAnalysis.estimatedConversionCostFull}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

