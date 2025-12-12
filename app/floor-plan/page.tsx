'use client';

import { useState } from 'react';

export default function FloorPlanPage() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const rooms = {
    'primary-bedroom': {
      name: 'Primary Bedroom',
      afhUse: 'Resident Room (Bed 1)',
      compliance: 'Good - Large enough for resident room',
      modifications: 'Add handrails along walls (especially near bed area at 34-38 inch height), install emergency call system button within reach of bed (both sides), ensure adequate lighting (minimum 20 foot-candles throughout room, task lighting near bed), verify door width meets 32-inch minimum requirement, check window accessibility and egress requirements, ensure adequate floor space for wheelchair maneuverability (60-inch turning radius), install accessible closet rods and storage, verify electrical outlets are accessible and meet code requirements, ensure heating/cooling controls are accessible, add visual contrast for safety (door frames, thresholds)',
      cost: '$2,000-$3,000',
      dimensions: 'Approximately 200-250 sq ft',
      timeline: '3-5 days for modifications',
      waboRequirements: 'Meets minimum 80 sq ft requirement, needs handrails and call system for full compliance',
      accessibility: 'Good - Large space allows for wheelchair access, may need minor adjustments',
      notes: 'This is the largest bedroom, ideal for resident who may need more space for equipment or mobility aids. Location near primary bathroom is advantageous.'
    },
    'bedroom-1': {
      name: 'Bedroom 1',
      afhUse: 'Resident Room (Bed 2)',
      compliance: 'Good - Standard size',
      modifications: 'Add handrails along walls at proper height (34-38 inches), install emergency call system button accessible from bed, ensure adequate lighting throughout (minimum 20 foot-candles), verify door width meets 32-inch minimum, check window accessibility and emergency egress, ensure floor space allows wheelchair turning radius (60 inches), install accessible storage solutions, verify electrical outlets are accessible, ensure heating/cooling controls are reachable, add visual contrast for doorways and thresholds, verify closet accessibility',
      cost: '$1,500-$2,000',
      dimensions: 'Approximately 120-150 sq ft',
      timeline: '2-4 days for modifications',
      waboRequirements: 'Meets minimum 80 sq ft requirement, needs handrails and call system',
      accessibility: 'Good - Standard size suitable for resident room',
      notes: 'Standard bedroom size, suitable for most residents. Location provides good access to common areas and bathroom.'
    },
    'bedroom-2': {
      name: 'Bedroom 2',
      afhUse: 'Resident Room (Bed 3)',
      compliance: 'Good - Standard size',
      modifications: 'Add handrails along walls at proper height (34-38 inches), install emergency call system button accessible from bed, ensure adequate lighting throughout (minimum 20 foot-candles), verify door width meets 32-inch minimum, check window accessibility and emergency egress, ensure floor space allows wheelchair turning radius (60 inches), install accessible storage solutions, verify electrical outlets are accessible, ensure heating/cooling controls are reachable, add visual contrast for doorways and thresholds, verify closet accessibility',
      cost: '$1,500-$2,000',
      dimensions: 'Approximately 120-150 sq ft',
      timeline: '2-4 days for modifications',
      waboRequirements: 'Meets minimum 80 sq ft requirement, needs handrails and call system',
      accessibility: 'Good - Standard size suitable for resident room',
      notes: 'Standard bedroom size, suitable for most residents. Adjacent to Bedroom 1, good for residents who may benefit from proximity.'
    },
    'cg-room': {
      name: 'CG Room',
      afhUse: 'Resident Room (Bed 4) or Staff Room',
      compliance: 'Good - Can serve multiple purposes',
      modifications: 'If used as resident room: Add handrails along walls (34-38 inch height), install emergency call system, ensure adequate lighting (20 foot-candles minimum), verify door width (32-inch minimum), check window accessibility, ensure wheelchair turning radius (60 inches), install accessible storage. If used as staff room: Minimal modifications needed, ensure adequate lighting and ventilation, provide storage for staff belongings, ensure privacy for staff breaks',
      cost: '$1,500-$2,000 (if resident room), $500-$1,000 (if staff room)',
      dimensions: 'Approximately 100-120 sq ft',
      timeline: '2-4 days (resident room), 1-2 days (staff room)',
      waboRequirements: 'If resident room: Must meet 80 sq ft minimum, needs handrails and call system. If staff room: Minimal requirements',
      accessibility: 'Good - Flexible space can accommodate either use',
      notes: 'This room offers flexibility - can serve as additional resident room or dedicated staff space. Decision depends on operational needs and capacity goals.'
    },
    'primary-bath': {
      name: 'Primary Bathroom',
      afhUse: 'Resident Bathroom',
      compliance: 'Needs modifications',
      modifications: 'Install grab bars at toilet (side and rear, 33-36 inches high), install grab bars in shower/tub area (horizontal and vertical, properly anchored), convert to roll-in shower capability (36x36 inch minimum, no threshold, proper slope), replace toilet with ADA-compliant model (17-19 inch height, proper clearance), install accessible sink (knee clearance 27 inches high, 30 inches wide, 19 inches deep), ensure adequate clearance for wheelchair (60-inch turning radius), install non-slip flooring throughout (coefficient of friction 0.6 minimum), ensure adequate lighting (20 foot-candles minimum), install emergency call system, ensure proper ventilation, verify water temperature controls (anti-scald), install accessible mirror (bottom edge 40 inches max from floor), ensure adequate storage at accessible height',
      cost: '$5,000-$8,000',
      dimensions: 'Approximately 50-80 sq ft',
      timeline: '10-15 days for complete conversion',
      waboRequirements: 'Must meet ADA bathroom requirements, one accessible bathroom per 4 residents minimum',
      accessibility: 'Needs significant modifications for full ADA compliance',
      notes: 'This is a critical modification area. Bathroom accessibility is essential for resident safety and compliance. Consider professional contractor with ADA experience.'
    },
    'bath': {
      name: 'Bath',
      afhUse: 'Resident Bathroom',
      compliance: 'Needs modifications',
      modifications: 'Install grab bars at toilet (side and rear, 33-36 inches high), install grab bars in shower/tub area (horizontal and vertical, properly anchored), convert to roll-in shower capability (36x36 inch minimum, no threshold, proper slope), replace toilet with ADA-compliant model (17-19 inch height, proper clearance), install accessible sink (knee clearance 27 inches high, 30 inches wide, 19 inches deep), ensure adequate clearance for wheelchair (60-inch turning radius), install non-slip flooring throughout (coefficient of friction 0.6 minimum), ensure adequate lighting (20 foot-candles minimum), install emergency call system, ensure proper ventilation, verify water temperature controls (anti-scald), install accessible mirror (bottom edge 40 inches max from floor), ensure adequate storage at accessible height',
      cost: '$5,000-$8,000',
      dimensions: 'Approximately 40-60 sq ft',
      timeline: '10-15 days for complete conversion',
      waboRequirements: 'Must meet ADA bathroom requirements, one accessible bathroom per 4 residents minimum',
      accessibility: 'Needs significant modifications for full ADA compliance',
      notes: 'Second bathroom is essential for 5-6 bed capacity. Both bathrooms must be fully accessible. Location relative to resident rooms should be considered.'
    },
    'living': {
      name: 'Living Room',
      afhUse: 'Common Area / Activity Room',
      compliance: 'Excellent - Large open space',
      modifications: 'Install handrails along walls at proper height (34-38 inches) especially near seating areas, ensure adequate lighting throughout (minimum 20 foot-candles, task lighting for activities), clearly mark emergency exits with illuminated signs, ensure wheelchair accessibility throughout (60-inch turning radius, 36-inch wide pathways), install accessible seating options (various heights, armrests), ensure adequate space for activities (minimum 35 sq ft per resident), verify electrical outlets are accessible, ensure heating/cooling is adequate and accessible, add visual contrast for doorways and thresholds, ensure furniture arrangement allows for mobility aids, install activity tables at accessible height, verify adequate space for group activities',
      cost: '$2,000-$3,000',
      dimensions: 'Approximately 300-400 sq ft',
      timeline: '5-7 days for modifications',
      waboRequirements: 'Must provide minimum 35 sq ft per resident in common areas, adequate lighting and accessibility required',
      accessibility: 'Excellent - Large space provides excellent accessibility options',
      notes: 'This is the primary common area. Large size allows for various activities and comfortable resident interaction. Excellent foundation for AFH operations.'
    },
    'kitchen': {
      name: 'Kitchen',
      afhUse: 'Resident Dining / Meal Prep',
      compliance: 'Needs modifications',
      modifications: 'Ensure accessible counter heights (34 inches maximum, with knee clearance), provide adequate space for wheelchair maneuverability (60-inch turning radius, 36-inch wide pathways), install fire suppression system meeting code requirements, ensure accessible storage (shelves and cabinets at reachable heights), install accessible appliances (front-control ranges, side-opening ovens if possible), ensure adequate lighting (20 foot-candles minimum, task lighting over work areas), verify electrical outlets are accessible, ensure adequate ventilation, install accessible sink (knee clearance, lever handles), ensure adequate workspace for meal preparation, verify adequate space for food storage, ensure proper food safety compliance, install accessible controls for all appliances',
      cost: '$3,000-$5,000',
      dimensions: 'Approximately 150-200 sq ft',
      timeline: '7-10 days for modifications',
      waboRequirements: 'Must meet accessibility requirements, fire suppression required for commercial use',
      accessibility: 'Needs modifications for full accessibility',
      notes: 'Kitchen modifications are critical for AFH operations. Consider whether commercial-grade equipment is needed based on resident capacity and meal service requirements.'
    },
    'dining': {
      name: 'Dining Room',
      afhUse: 'Resident Dining Area',
      compliance: 'Good - Dedicated dining space',
      modifications: 'Install accessible tables (wheelchair height, 27-34 inch table height, knee clearance), ensure adequate lighting (20 foot-candles minimum, pleasant dining atmosphere), add handrails along walls if needed (34-38 inch height), ensure wheelchair accessibility throughout (60-inch turning radius, space for mobility aids), provide adequate seating capacity (minimum 6 residents plus staff), ensure tables are appropriately sized and spaced, verify electrical outlets for any equipment, ensure adequate space for serving, install accessible storage for dining supplies, ensure proper ventilation, add visual contrast for safety, verify adequate space for meal service carts',
      cost: '$1,500-$2,500',
      dimensions: 'Approximately 120-160 sq ft',
      timeline: '3-5 days for modifications',
      waboRequirements: 'Must provide adequate dining space for all residents, accessibility required',
      accessibility: 'Good - Dedicated space allows for proper accessibility modifications',
      notes: 'Dedicated dining area is excellent for AFH operations. Provides separation from living area and allows for structured meal times.'
    },
    'den': {
      name: 'Den',
      afhUse: 'Common Area / TV Room',
      compliance: 'Good - Additional common space',
      modifications: 'Add handrails along walls at proper height (34-38 inches), ensure adequate lighting (20 foot-candles minimum, adjustable for TV viewing), ensure wheelchair accessibility (60-inch turning radius, 36-inch pathways), install accessible seating (various heights, good visibility), ensure TV is mounted at appropriate height and angle, verify electrical outlets are accessible, ensure adequate space for residents and mobility aids, install accessible storage for media equipment, ensure proper ventilation, add visual contrast for doorways, ensure adequate space for group viewing, verify sound system accessibility if installed',
      cost: '$1,500-$2,000',
      dimensions: 'Approximately 100-150 sq ft',
      timeline: '3-5 days for modifications',
      waboRequirements: 'Common area requirements apply, adequate lighting and accessibility needed',
      accessibility: 'Good - Additional common space enhances resident options',
      notes: 'Secondary common area provides variety for residents. Can serve as quiet space or TV room, separate from main living area.'
    },
    'office': {
      name: 'Office',
      afhUse: 'Administrative Office / Staff Room',
      compliance: 'Good - Private space for staff',
      modifications: 'Ensure adequate lighting (20 foot-candles minimum, task lighting for desk work), ensure proper ventilation, provide adequate workspace for administrative tasks, install accessible storage for records and supplies, ensure privacy for staff and resident records, verify electrical outlets for equipment, ensure adequate space for filing and storage, install accessible desk and seating, ensure proper security for records storage, verify adequate space for staff meetings if needed, ensure proper temperature control',
      cost: '$500-$1,000',
      dimensions: 'Approximately 80-120 sq ft',
      timeline: '1-2 days for modifications',
      waboRequirements: 'Minimal requirements for staff spaces, adequate lighting and ventilation needed',
      accessibility: 'Good - Private space for administrative work',
      notes: 'Office space is essential for AFH operations. Provides space for records, administrative work, and staff coordination. Privacy is important for resident records.'
    },
    'laundry': {
      name: 'Laundry',
      afhUse: 'Resident Laundry Facility',
      compliance: 'Good - Existing laundry space',
      modifications: 'Ensure accessible washer/dryer (front-loading preferred, controls at accessible height), ensure adequate ventilation (proper exhaust, air circulation), provide adequate space for laundry operations (60-inch turning radius if residents use), install accessible storage for laundry supplies, ensure proper drainage and water supply, verify electrical requirements are met, ensure adequate lighting (20 foot-candles minimum), install accessible work surfaces if needed, ensure proper organization for efficiency, verify adequate space for sorting and folding, ensure safety features (anti-scald, proper electrical)',
      cost: '$1,000-$2,000',
      dimensions: 'Approximately 40-60 sq ft',
      timeline: '2-3 days for modifications',
      waboRequirements: 'Adequate facilities for resident laundry needs, accessibility if residents use',
      accessibility: 'Good - Existing space can be made accessible',
      notes: 'Laundry facilities are important for AFH operations. Consider whether residents will use or if staff-only. Accessibility requirements vary accordingly.'
    },
    'patio': {
      name: 'Patio',
      afhUse: 'Outdoor Common Area',
      compliance: 'Excellent - Outdoor space for residents',
      modifications: 'Install wheelchair-accessible ramp (maximum 1:12 slope, proper width, landing areas), add handrails along ramp and patio edges (34-38 inch height, proper anchoring), install non-slip surface throughout (coefficient of friction 0.6 minimum, weather-resistant), ensure adequate lighting for evening use (20 foot-candles minimum), consider weather protection (covered area, wind protection), ensure proper drainage (no standing water, proper slope), install accessible seating options (various heights, armrests), ensure adequate space for activities (minimum 35 sq ft per resident if counted as common area), verify accessibility from interior (proper door, threshold), ensure safety features (proper railings, no tripping hazards), consider accessibility for different weather conditions',
      cost: '$3,000-$5,000',
      dimensions: 'Approximately 400-500 sq ft (30x14 feet)',
      timeline: '7-10 days for modifications',
      waboRequirements: 'Outdoor common areas must be accessible, proper ramps and safety features required',
      accessibility: 'Excellent - Large outdoor space with good modification potential',
      notes: 'Outdoor space is highly valued by residents and families. Large patio area provides excellent opportunity for outdoor activities and fresh air. Ramp installation is critical for accessibility.'
    },
    'garage': {
      name: '3 Car Garage',
      afhUse: 'Storage / Vehicle Parking',
      compliance: 'Good - Large storage area',
      modifications: 'Ensure adequate organization for storage (shelving, labeling), provide adequate lighting (20 foot-candles minimum), ensure proper ventilation if used for storage, verify accessibility if residents or staff need access, ensure proper security for stored items, provide adequate space for equipment storage, ensure proper organization for efficiency, verify adequate space for vehicle parking if needed, ensure proper drainage, consider accessibility if used for resident storage, ensure proper temperature control if storing sensitive items',
      cost: '$500-$1,000',
      dimensions: 'Approximately 600-750 sq ft (30x24 feet)',
      timeline: '1-2 days for modifications',
      waboRequirements: 'Minimal requirements for storage areas, adequate organization and safety needed',
      accessibility: 'Good - Large space for storage and parking',
      notes: 'Large garage provides excellent storage capacity. Can be used for equipment, supplies, and vehicle parking. Organization is key for efficient use.'
    }
  };

  const afhAnalysis = {
    totalBeds: '5-6 beds possible',
    residentRooms: ['Primary Bedroom', 'Bedroom 1', 'Bedroom 2', 'CG Room', 'Living (if partitioned)'],
    commonAreas: ['Living Room', 'Dining Room', 'Den', 'Patio'],
    bathrooms: 2,
    complianceScore: '75% - Good foundation, needs modifications',
    estimatedConversionCost: '$25,000 - $40,000 (minimal)',
    estimatedConversionCostFull: '$50,000 - $75,000 (full)',
    totalSquareFootage: 'Approximately 3,000+ sq ft',
    residentRoomTotal: 'Approximately 640-820 sq ft (4-5 rooms)',
    commonAreaTotal: 'Approximately 920-1,210 sq ft',
    bathroomTotal: 'Approximately 90-140 sq ft (2 bathrooms)',
    supportSpaceTotal: 'Approximately 1,350+ sq ft (kitchen, office, laundry, garage)',
    keyStrengths: [
      'Large common areas provide excellent space for resident activities',
      'Multiple resident rooms allow for 5-6 bed capacity',
      'Outdoor patio space is highly valued by residents and families',
      'Good room sizes meet minimum requirements comfortably',
      'Layout allows for good flow and accessibility',
      'Garage provides excellent storage capacity'
    ],
    keyChallenges: [
      'Both bathrooms need significant ADA modifications',
      'Kitchen requires accessibility improvements',
      'Handrails needed throughout resident rooms and common areas',
      'Emergency call systems needed in all resident rooms',
      'Patio requires ramp installation for accessibility',
      'Some rooms may need structural considerations for modifications'
    ],
    compliancePriorities: [
      'Bathroom modifications (highest priority - $10,000-$16,000)',
      'Emergency call systems in all resident rooms ($3,000)',
      'Handrail installation throughout ($4,000-$6,000)',
      'Kitchen accessibility improvements ($3,000-$5,000)',
      'Patio ramp and accessibility ($3,000-$5,000)',
      'Lighting improvements throughout ($1,000-$2,000)'
    ],
    timelineEstimate: '60-90 days for minimal conversion, 90-120 days for full conversion',
    permitRequirements: [
      'WABO permit for AFH operation',
      'Building permit for structural modifications',
      'Fire department permit and inspection',
      'Electrical permit if major electrical work',
      'Plumbing permit for bathroom modifications'
    ]
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
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 font-semibold mb-1">AFH Use</div>
                    <div className="font-semibold text-gray-900">{rooms[selectedRoom as keyof typeof rooms].afhUse}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-semibold mb-1">Compliance Status</div>
                    <div className="font-semibold text-gray-900">{rooms[selectedRoom as keyof typeof rooms].compliance}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-semibold mb-1">Dimensions</div>
                    <div className="text-sm text-gray-700">{rooms[selectedRoom as keyof typeof rooms].dimensions}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-semibold mb-1">Required Modifications</div>
                    <div className="text-sm text-gray-700 leading-relaxed">{rooms[selectedRoom as keyof typeof rooms].modifications}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-semibold mb-1">Estimated Cost</div>
                    <div className="font-semibold text-blue-600 text-lg">{rooms[selectedRoom as keyof typeof rooms].cost}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-semibold mb-1">Modification Timeline</div>
                    <div className="text-sm text-gray-700">{rooms[selectedRoom as keyof typeof rooms].timeline}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-semibold mb-1">WABO Requirements</div>
                    <div className="text-sm text-gray-700">{rooms[selectedRoom as keyof typeof rooms].waboRequirements}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-semibold mb-1">Accessibility Assessment</div>
                    <div className="text-sm text-gray-700">{rooms[selectedRoom as keyof typeof rooms].accessibility}</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                    <div className="text-sm text-gray-600 font-semibold mb-1">Additional Notes</div>
                    <div className="text-sm text-gray-700">{rooms[selectedRoom as keyof typeof rooms].notes}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">AFH Capacity Analysis</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 font-semibold mb-1">Total Bed Capacity</div>
                  <div className="font-semibold text-lg text-blue-700">{afhAnalysis.totalBeds}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-semibold mb-2">Resident Rooms Available</div>
                  <div className="text-sm">
                    {afhAnalysis.residentRooms.map((room, i) => (
                      <span key={i} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 mb-2">
                        {room}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Total: {afhAnalysis.residentRoomTotal}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-semibold mb-2">Common Areas</div>
                  <div className="text-sm">
                    {afhAnalysis.commonAreas.map((area, i) => (
                      <span key={i} className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded mr-2 mb-2">
                        {area}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Total: {afhAnalysis.commonAreaTotal}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-semibold mb-1">Bathrooms</div>
                  <div className="font-semibold">{afhAnalysis.bathrooms} (need modifications)</div>
                  <div className="text-xs text-gray-500 mt-1">Total: {afhAnalysis.bathroomTotal}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-semibold mb-1">Total Square Footage</div>
                  <div className="font-semibold">{afhAnalysis.totalSquareFootage}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-semibold mb-1">Compliance Score</div>
                  <div className="font-semibold text-lg">{afhAnalysis.complianceScore}</div>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="text-sm text-gray-600 font-semibold mb-2">Key Strengths</div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                    {afhAnalysis.keyStrengths.map((strength, i) => (
                      <li key={i}>{strength}</li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="text-sm text-gray-600 font-semibold mb-2">Key Challenges</div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                    {afhAnalysis.keyChallenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold mb-3">Conversion Cost Estimates</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold mb-1">Minimal WABO Compliance</div>
                  <div className="text-blue-700 font-semibold text-base">{afhAnalysis.estimatedConversionCost}</div>
                  <div className="text-xs text-gray-600 mt-1">Timeline: {afhAnalysis.timelineEstimate.split(',')[0]}</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Full AFH Conversion</div>
                  <div className="text-blue-700 font-semibold text-base">{afhAnalysis.estimatedConversionCostFull}</div>
                  <div className="text-xs text-gray-600 mt-1">Timeline: {afhAnalysis.timelineEstimate.split(',')[1]}</div>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="font-semibold mb-2">Compliance Priorities (by cost)</div>
                  <ol className="list-decimal list-inside space-y-1 text-xs text-gray-700">
                    {afhAnalysis.compliancePriorities.map((priority, i) => (
                      <li key={i}>{priority}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold mb-3">Permit Requirements</h3>
              <div className="space-y-2 text-sm">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {afhAnalysis.permitRequirements.map((requirement, i) => (
                    <li key={i}>{requirement}</li>
                  ))}
                </ul>
                <div className="mt-3 text-xs text-gray-600">
                  <strong>Note:</strong> All permits must be obtained before starting conversion work. Allow 2-4 weeks for permit processing.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

