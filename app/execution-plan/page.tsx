'use client';

import { useState } from 'react';

export default function ExecutionPlanPage() {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const basicPlan = {
    projectName: "1713 Winterwood Drive AFH Conversion - 5 Bed Capacity",
    targetCapacity: "5 beds, 2 baths, 1 caregiver room, 3-car garage",
    totalTimeline: "90-120 days",
    totalBudget: "$35,000 - $50,000",
    location: "1713 Winterwood Drive, Centralia, WA 98531",
    jurisdiction: "City of Centralia Building Department",
    projectGoal: "Convert existing 3-bed home to 5-bed AFH facility with private single rooms (80 sq ft minimum each)"
  };

  const detailedPlan = {
    phases: [
      {
        phase: 1,
        name: "Planning & Design Phase",
        duration: "Days 1-25",
        description: "Complete planning, design, and permit preparation"
      },
      {
        phase: 2,
        name: "Permit Submission & Approval",
        duration: "Days 26-45",
        description: "Submit all permits to City of Centralia and obtain approvals"
      },
      {
        phase: 3,
        name: "Construction - Bonus Room Conversion",
        duration: "Days 46-65",
        description: "Convert bonus room to 2 private single resident rooms"
      },
      {
        phase: 4,
        name: "Construction - Caregiver Room & Bathrooms",
        duration: "Days 66-85",
        description: "Create caregiver room and modify bathrooms for 5-bed capacity"
      },
      {
        phase: 5,
        name: "Construction - Common Areas & Systems",
        duration: "Days 86-100",
        description: "Install handrails, call systems, and common area modifications"
      },
      {
        phase: 6,
        name: "Inspections & Certification",
        duration: "Days 101-115",
        description: "Complete all inspections and obtain WABO certification"
      },
      {
        phase: 7,
        name: "Provider Search & Lease",
        duration: "Days 116-120",
        description: "Market property and secure provider lease"
      }
    ]
  };

  const constructionSchedule = {
    title: "시공계획서 (Construction Schedule)",
    phases: [
      {
        phase: "Phase 1: Planning & Design",
        startDate: "Day 1",
        endDate: "Day 25",
        activities: [
          "Architect/Engineer selection and contract",
          "Site measurements and assessment",
          "Architectural drawings preparation",
          "Structural engineering review",
          "Specifications development",
          "Permit application preparation"
        ],
        responsible: "Landlord + Architect/Engineer",
        deliverables: ["Architectural drawings", "Specifications", "Permit applications"]
      },
      {
        phase: "Phase 2: Permits & Approvals",
        startDate: "Day 26",
        endDate: "Day 45",
        activities: [
          "Submit permits to City of Centralia",
          "WABO permit application",
          "Building permit application",
          "Fire department permit",
          "Electrical permit",
          "Plumbing permit",
          "Permit review and approval"
        ],
        responsible: "Landlord + Architect",
        deliverables: ["All permit approvals"]
      },
      {
        phase: "Phase 3: Bonus Room Conversion",
        startDate: "Day 46",
        endDate: "Day 65",
        activities: [
          "Demolition of existing bonus room features",
          "Framing for 2 private single rooms (80 sq ft minimum each)",
          "Electrical rough-in for 2 rooms",
          "HVAC modifications for 2 rooms",
          "Insulation and drywall",
          "Flooring installation",
          "Door installation (32-inch minimum width)",
          "Window verification for egress"
        ],
        responsible: "General Contractor + Subcontractors",
        deliverables: ["2 private single resident rooms completed"]
      },
      {
        phase: "Phase 4: Caregiver Room & Bathrooms",
        startDate: "Day 66",
        endDate: "Day 85",
        activities: [
          "Create dedicated caregiver room",
          "Bathroom 1: ADA modifications (grab bars, roll-in shower)",
          "Bathroom 2: ADA modifications (grab bars, roll-in shower)",
          "Install accessible toilets (17-19 inch height)",
          "Install accessible sinks (knee clearance)",
          "Non-slip flooring installation",
          "Emergency call systems in bathrooms"
        ],
        responsible: "General Contractor + Plumbing Subcontractor",
        deliverables: ["Caregiver room completed", "2 ADA-compliant bathrooms"]
      },
      {
        phase: "Phase 5: Common Areas & Safety Systems",
        startDate: "Day 86",
        endDate: "Day 100",
        activities: [
          "Install handrails in all common areas (34-38 inch height)",
          "Install emergency call systems in all 5 resident rooms",
          "Kitchen accessibility modifications",
          "Fire suppression system installation",
          "Patio ramp installation with handrails",
          "Lighting improvements throughout",
          "Exit signage installation"
        ],
        responsible: "General Contractor + Electrical Subcontractor",
        deliverables: ["All safety systems installed", "Common areas modified"]
      },
      {
        phase: "Phase 6: Inspections & Certification",
        startDate: "Day 101",
        endDate: "Day 115",
        activities: [
          "WABO preliminary inspection",
          "Building department inspection",
          "Fire department inspection",
          "Electrical inspection",
          "Plumbing inspection",
          "Address inspection corrections",
          "Final WABO certification",
          "Obtain occupancy permit"
        ],
        responsible: "Landlord + Contractor + Inspectors",
        deliverables: ["All inspections passed", "WABO certification", "Occupancy permit"]
      },
      {
        phase: "Phase 7: Provider Search",
        startDate: "Day 116",
        endDate: "Day 120",
        activities: [
          "Create marketing materials",
          "List on AFH locator websites",
          "Post on Facebook AFH groups",
          "Screen interested providers",
          "Negotiate lease terms",
          "Execute lease agreement"
        ],
        responsible: "Landlord",
        deliverables: ["Provider lease executed"]
      }
    ]
  };

  const specifications = {
    title: "시방서 (Specifications)",
    sections: [
      {
        section: "Room Size Requirements",
        items: [
          "All resident rooms must be private single rooms",
          "Minimum 80 sq ft per private single room (code-regulated)",
          "Each room must have minimum 60-inch turning radius for wheelchair",
          "Door width: Minimum 32 inches clear opening",
          "Window: Must meet egress requirements (minimum 5.7 sq ft opening)"
        ]
      },
      {
        section: "Bathroom Specifications",
        items: [
          "ADA-compliant toilets: 17-19 inch height",
          "Grab bars: 33-36 inches high, properly anchored",
          "Roll-in showers: 36x36 inch minimum, no threshold",
          "Accessible sinks: 27 inches high, 30 inches wide, 19 inches deep knee clearance",
          "Non-slip flooring: Coefficient of friction 0.6 minimum",
          "Emergency call system in each bathroom",
          "Adequate lighting: 20 foot-candles minimum"
        ]
      },
      {
        section: "Safety Systems",
        items: [
          "Emergency call system: Button accessible from bed in all 5 resident rooms",
          "Central monitoring system for all call buttons",
          "Handrails: 34-38 inch height throughout common areas and resident rooms",
          "Fire suppression system: Meeting code requirements",
          "Smoke detectors: In all rooms and common areas",
          "Exit signage: Illuminated, clearly marked"
        ]
      },
      {
        section: "Accessibility Requirements",
        items: [
          "Wheelchair turning radius: 60 inches minimum in all rooms",
          "Pathways: 36 inches wide minimum",
          "Thresholds: Maximum 1/2 inch height",
          "Visual contrast: Door frames and thresholds",
          "Controls: Accessible height (48 inches maximum)",
          "Lighting: 20 foot-candles minimum throughout"
        ]
      },
      {
        section: "Materials & Finishes",
        items: [
          "Flooring: Non-slip, easy to clean, appropriate for healthcare",
          "Walls: Smooth, washable surfaces",
          "Doors: 32-inch minimum width, lever handles",
          "Windows: Double-pane, operable for egress",
          "HVAC: Adequate ventilation, temperature control accessible"
        ]
      }
    ]
  };

  const dailyTasks = [
    {
      phase: 1,
      name: "Planning & Design Phase",
      days: [
        {
          day: "Day 1-3",
          tasks: [
            {
              task: "Research and identify architects/engineers",
              who: "Landlord",
              where: "Online research, referrals",
              contact: "Local architect associations, contractor referrals",
              script: "Hello, I'm looking for an architect with experience in AFH conversions and WABO permits. Do you have experience with Adult Family Home projects in Centralia?",
              deliverable: "List of 3-5 qualified architects"
            },
            {
              task: "Contact City of Centralia Building Department",
              who: "Landlord",
              where: "City of Centralia Building Department, 118 W Maple St, Centralia, WA 98531",
              contact: "Phone: (360) 330-7662, Email: building@cityofcentralia.com",
              script: "Hello, I'm planning an AFH conversion at 1713 Winterwood Drive. I need information on WABO permit requirements, building permits, and the application process. Can you provide a checklist of required documents?",
              deliverable: "Permit requirements checklist"
            }
          ]
        },
        {
          day: "Day 4-7",
          tasks: [
            {
              task: "Interview and select architect/engineer",
              who: "Landlord",
              where: "Architect's office or property site",
              contact: "Selected architect",
              script: "I'd like to discuss my AFH conversion project. The property is 2,100 sq ft, and I need to convert it to 5 beds with private single rooms (80 sq ft minimum each). Can you provide a quote for architectural drawings and permit assistance?",
              deliverable: "Architect contract signed"
            },
            {
              task: "Site visit with architect",
              who: "Landlord + Architect",
              where: "1713 Winterwood Drive, Centralia, WA",
              contact: "Architect",
              script: "This is the property. The bonus room needs to be converted to 2 private single rooms, each meeting 80 sq ft minimum. We also need to create a caregiver room and modify both bathrooms for ADA compliance.",
              deliverable: "Site measurements and notes"
            }
          ]
        },
        {
          day: "Day 8-15",
          tasks: [
            {
              task: "Architect prepares architectural drawings",
              who: "Architect",
              where: "Architect's office",
              contact: "Architect",
              script: "Please ensure all drawings show: 1) Bonus room converted to 2 private single rooms (80 sq ft minimum each), 2) Caregiver room location, 3) ADA-compliant bathroom modifications, 4) All safety systems locations, 5) Handrail locations, 6) Emergency egress paths.",
              deliverable: "Architectural drawings (ready for permit submission)"
            },
            {
              task: "Structural engineer review (if needed)",
              who: "Architect + Structural Engineer",
              where: "Engineer's office",
              contact: "Structural engineer (if architect recommends)",
              script: "We need structural review for the bonus room conversion to ensure the framing can support the modifications. Can you review the architectural drawings?",
              deliverable: "Structural engineering report (if required)"
            }
          ]
        },
        {
          day: "Day 16-20",
          tasks: [
            {
              task: "Develop specifications (시방서)",
              who: "Architect + Landlord",
              where: "Architect's office",
              contact: "Architect",
              script: "Please prepare detailed specifications including: room sizes (80 sq ft minimum for private single rooms), bathroom ADA requirements, handrail specifications, emergency call system requirements, materials and finishes.",
              deliverable: "Complete specifications document"
            },
            {
              task: "Prepare construction schedule (시공계획서)",
              who: "Architect + Landlord",
              where: "Architect's office",
              contact: "Architect",
              script: "Please create a detailed construction schedule showing all phases, activities, timelines, and responsible parties. This will be submitted with the permit application.",
              deliverable: "Construction schedule document"
            }
          ]
        },
        {
          day: "Day 21-25",
          tasks: [
            {
              task: "Review and finalize all documents",
              who: "Landlord + Architect",
              where: "Architect's office or virtual meeting",
              contact: "Architect",
              script: "Let's review all documents together: architectural drawings, specifications, construction schedule. Ensure everything meets City of Centralia requirements and WABO standards.",
              deliverable: "All documents finalized and ready for submission"
            },
            {
              task: "Obtain contractor bids",
              who: "Landlord",
              where: "Property site for contractor visits",
              contact: "3-5 qualified contractors",
              script: "I'm converting this property to a 5-bed AFH. I have architectural drawings ready. Can you provide a detailed bid for the construction work? The scope includes: bonus room conversion to 2 private single rooms, caregiver room creation, bathroom ADA modifications, and all safety systems.",
              deliverable: "3-5 contractor bids"
            }
          ]
        }
      ]
    },
    {
      phase: 2,
      name: "Permit Submission & Approval",
      days: [
        {
          day: "Day 26-30",
          tasks: [
            {
              task: "Submit WABO permit application",
              who: "Landlord + Architect",
              where: "City of Centralia Building Department, 118 W Maple St, Centralia, WA 98531",
              contact: "Building Department: (360) 330-7662",
              script: "I'm submitting a WABO permit application for AFH conversion at 1713 Winterwood Drive. I have all required documents: architectural drawings, specifications, construction schedule. What is the review timeline?",
              deliverable: "WABO permit application submitted"
            },
            {
              task: "Submit building permit application",
              who: "Landlord + Architect",
              where: "City of Centralia Building Department",
              contact: "Building Department: (360) 330-7662",
              script: "I'm submitting a building permit for structural modifications and room conversions. The work includes converting bonus room to 2 private single rooms and creating a caregiver room.",
              deliverable: "Building permit application submitted"
            },
            {
              task: "Submit fire department permit",
              who: "Landlord + Architect",
              where: "Centralia Fire Department, 200 E Locust St, Centralia, WA 98531",
              contact: "Fire Department: (360) 330-7642",
              script: "I'm submitting a fire permit application for AFH conversion. The project includes fire suppression system installation and safety system upgrades. What are the fire department requirements?",
              deliverable: "Fire department permit submitted"
            }
          ]
        },
        {
          day: "Day 31-35",
          tasks: [
            {
              task: "Submit electrical permit",
              who: "Landlord + Architect",
              where: "City of Centralia Building Department",
              contact: "Building Department: (360) 330-7662",
              script: "I need an electrical permit for the AFH conversion. The work includes: new electrical for 2 converted rooms, emergency call systems, and lighting upgrades.",
              deliverable: "Electrical permit submitted"
            },
            {
              task: "Submit plumbing permit",
              who: "Landlord + Architect",
              where: "City of Centralia Building Department",
              contact: "Building Department: (360) 330-7662",
              script: "I need a plumbing permit for bathroom ADA modifications. The work includes: accessible toilet installation, grab bar installation, roll-in shower conversion.",
              deliverable: "Plumbing permit submitted"
            },
            {
              task: "Follow up on permit status",
              who: "Landlord",
              where: "Phone/Email",
              contact: "Building Department: (360) 330-7662",
              script: "I submitted permit applications on [date]. Can you provide an update on the review status? Are there any questions or additional information needed?",
              deliverable: "Permit status update"
            }
          ]
        },
        {
          day: "Day 36-40",
          tasks: [
            {
              task: "Respond to permit review comments",
              who: "Landlord + Architect",
              where: "Architect's office",
              contact: "Building Department",
              script: "We received review comments on [date]. We'll address all items and resubmit revised drawings by [date]. Thank you for the feedback.",
              deliverable: "Revised permit documents"
            },
            {
              task: "Select and contract with general contractor",
              who: "Landlord",
              where: "Contractor's office or property",
              contact: "Selected contractor",
              script: "I've reviewed your bid and would like to proceed. The project is converting to 5-bed AFH with private single rooms (80 sq ft minimum each). Can we schedule a contract signing meeting?",
              deliverable: "General contractor contract signed"
            }
          ]
        },
        {
          day: "Day 41-45",
          tasks: [
            {
              task: "Obtain all permit approvals",
              who: "Landlord + Architect",
              where: "City of Centralia Building Department",
              contact: "Building Department: (360) 330-7662",
              script: "Thank you for the permit approval. We have received approval for: WABO permit, building permit, fire permit, electrical permit, and plumbing permit. We're ready to begin construction.",
              deliverable: "All permits approved"
            },
            {
              task: "Pre-construction meeting with contractor",
              who: "Landlord + Contractor",
              where: "Property site",
              contact: "General contractor",
              script: "Let's review the construction schedule and coordinate the start date. The project must maintain 80 sq ft minimum for each private single room. Do you have all subcontractors lined up?",
              deliverable: "Construction start date confirmed"
            }
          ]
        }
      ]
    },
    {
      phase: 3,
      name: "Construction - Bonus Room Conversion",
      days: [
        {
          day: "Day 46-50",
          tasks: [
            {
              task: "Demolition of bonus room",
              who: "General Contractor + Demolition crew",
              where: "Property - Bonus room",
              contact: "General contractor",
              script: "Begin demolition of existing bonus room features. Preserve structural elements. Ensure proper disposal of materials according to local regulations.",
              deliverable: "Bonus room cleared and ready for conversion"
            },
            {
              task: "Framing for 2 private single rooms",
              who: "General Contractor + Framing crew",
              where: "Property - Bonus room area",
              contact: "General contractor",
              script: "Frame 2 separate private single rooms, each meeting 80 sq ft minimum requirement. Ensure proper wall placement, door openings (32-inch minimum), and window locations for egress.",
              deliverable: "Framing completed for 2 rooms"
            }
          ]
        },
        {
          day: "Day 51-55",
          tasks: [
            {
              task: "Electrical rough-in for 2 rooms",
              who: "Electrical subcontractor",
              where: "Property - 2 new rooms",
              contact: "Electrical contractor",
              script: "Install electrical rough-in for both rooms: outlets (accessible height), lighting circuits, emergency call system wiring, and adequate outlets per code.",
              deliverable: "Electrical rough-in completed"
            },
            {
              task: "HVAC modifications",
              who: "HVAC subcontractor",
              where: "Property - 2 new rooms",
              contact: "HVAC contractor",
              script: "Modify HVAC system to provide adequate heating and cooling for both new rooms. Ensure temperature controls are accessible.",
              deliverable: "HVAC modifications completed"
            }
          ]
        },
        {
          day: "Day 56-60",
          tasks: [
            {
              task: "Insulation and drywall",
              who: "General Contractor + Drywall crew",
              where: "Property - 2 new rooms",
              contact: "General contractor",
              script: "Install insulation and complete drywall work for both rooms. Ensure smooth, washable surfaces suitable for healthcare facility.",
              deliverable: "Drywall completed"
            },
            {
              task: "Flooring installation",
              who: "General Contractor + Flooring crew",
              where: "Property - 2 new rooms",
              contact: "General contractor",
              script: "Install appropriate flooring: non-slip, easy to clean, suitable for healthcare. Ensure smooth transitions and accessibility.",
              deliverable: "Flooring installed"
            }
          ]
        },
        {
          day: "Day 61-65",
          tasks: [
            {
              task: "Door and window installation",
              who: "General Contractor",
              where: "Property - 2 new rooms",
              contact: "General contractor",
              script: "Install doors with 32-inch minimum clear opening width, lever handles. Verify windows meet egress requirements (minimum 5.7 sq ft opening).",
              deliverable: "Doors and windows installed"
            },
            {
              task: "Room completion inspection",
              who: "Landlord + Contractor",
              where: "Property - 2 new rooms",
              contact: "General contractor",
              script: "Inspect both rooms to verify: 80 sq ft minimum each, proper door width, window egress, electrical, HVAC. Document completion.",
              deliverable: "2 private single rooms completed"
            }
          ]
        }
      ]
    },
    {
      phase: 4,
      name: "Construction - Caregiver Room & Bathrooms",
      days: [
        {
          day: "Day 66-70",
          tasks: [
            {
              task: "Create dedicated caregiver room",
              who: "General Contractor",
              where: "Property - designated area",
              contact: "General contractor",
              script: "Create dedicated caregiver room with adequate space, lighting, and ventilation. Include storage for staff belongings and records.",
              deliverable: "Caregiver room created"
            },
            {
              task: "Bathroom 1: Demolition and preparation",
              who: "Plumbing subcontractor",
              where: "Property - Primary bathroom",
              contact: "Plumbing contractor",
              script: "Remove existing fixtures carefully. Prepare surfaces for ADA-compliant installations. Ensure proper plumbing rough-in.",
              deliverable: "Bathroom 1 prepared"
            }
          ]
        },
        {
          day: "Day 71-75",
          tasks: [
            {
              task: "Bathroom 1: Install ADA-compliant fixtures",
              who: "Plumbing subcontractor",
              where: "Property - Primary bathroom",
              contact: "Plumbing contractor",
              script: "Install ADA-compliant toilet (17-19 inch height), accessible sink (knee clearance), roll-in shower (36x36 inch minimum, no threshold).",
              deliverable: "Bathroom 1 fixtures installed"
            },
            {
              task: "Bathroom 1: Install grab bars",
              who: "General Contractor",
              where: "Property - Primary bathroom",
              contact: "General contractor",
              script: "Install grab bars at toilet (side and rear, 33-36 inches high) and in shower area (horizontal and vertical). Ensure proper anchoring to studs.",
              deliverable: "Bathroom 1 grab bars installed"
            }
          ]
        },
        {
          day: "Day 76-80",
          tasks: [
            {
              task: "Bathroom 2: ADA modifications",
              who: "Plumbing subcontractor",
              where: "Property - Second bathroom",
              contact: "Plumbing contractor",
              script: "Complete same ADA modifications for second bathroom: accessible toilet, sink, roll-in shower, grab bars.",
              deliverable: "Bathroom 2 ADA modifications completed"
            },
            {
              task: "Install non-slip flooring in both bathrooms",
              who: "General Contractor + Flooring crew",
              where: "Property - Both bathrooms",
              contact: "General contractor",
              script: "Install non-slip flooring with coefficient of friction 0.6 minimum in both bathrooms. Ensure proper drainage.",
              deliverable: "Bathroom flooring completed"
            }
          ]
        },
        {
          day: "Day 81-85",
          tasks: [
            {
              task: "Install emergency call systems in bathrooms",
              who: "Electrical subcontractor",
              where: "Property - Both bathrooms",
              contact: "Electrical contractor",
              script: "Install emergency call system buttons in both bathrooms, connected to central monitoring system.",
              deliverable: "Bathroom call systems installed"
            },
            {
              task: "Bathroom completion inspection",
              who: "Landlord + Contractor",
              where: "Property - Both bathrooms",
              contact: "General contractor",
              script: "Inspect both bathrooms for ADA compliance: toilet height, grab bars, roll-in shower, sink clearance, non-slip flooring, call systems.",
              deliverable: "2 ADA-compliant bathrooms completed"
            }
          ]
        }
      ]
    },
    {
      phase: 5,
      name: "Construction - Common Areas & Safety Systems",
      days: [
        {
          day: "Day 86-90",
          tasks: [
            {
              task: "Install handrails in common areas",
              who: "General Contractor",
              where: "Property - Great room, living room, dining room, hallways",
              contact: "General contractor",
              script: "Install handrails at 34-38 inch height throughout all common areas. Ensure proper anchoring and smooth surfaces.",
              deliverable: "Common area handrails installed"
            },
            {
              task: "Install emergency call systems in all 5 resident rooms",
              who: "Electrical subcontractor",
              where: "Property - All 5 resident rooms",
              contact: "Electrical contractor",
              script: "Install emergency call system buttons in all 5 resident rooms, accessible from bed. Connect to central monitoring system.",
              deliverable: "Call systems installed in all rooms"
            }
          ]
        },
        {
          day: "Day 91-95",
          tasks: [
            {
              task: "Kitchen accessibility modifications",
              who: "General Contractor",
              where: "Property - Kitchen",
              contact: "General contractor",
              script: "Modify kitchen for accessibility: counter heights (34 inches maximum), accessible sink, adequate clearance, accessible storage.",
              deliverable: "Kitchen modifications completed"
            },
            {
              task: "Install fire suppression system",
              who: "Fire system subcontractor",
              where: "Property - Throughout",
              contact: "Fire system contractor",
              script: "Install comprehensive fire suppression system meeting code requirements. Include smoke detectors in all rooms and common areas.",
              deliverable: "Fire suppression system installed"
            }
          ]
        },
        {
          day: "Day 96-100",
          tasks: [
            {
              task: "Patio ramp installation",
              who: "General Contractor",
              where: "Property - Patio area",
              contact: "General contractor",
              script: "Install wheelchair-accessible ramp (maximum 1:12 slope) with handrails (34-38 inch height) and non-slip surface.",
              deliverable: "Patio ramp completed"
            },
            {
              task: "Lighting improvements and exit signage",
              who: "Electrical subcontractor",
              where: "Property - Throughout",
              contact: "Electrical contractor",
              script: "Ensure adequate lighting (20 foot-candles minimum) throughout. Install illuminated exit signage at all exits.",
              deliverable: "Lighting and signage completed"
            }
          ]
        }
      ]
    },
    {
      phase: 6,
      name: "Inspections & Certification",
      days: [
        {
          day: "Day 101-105",
          tasks: [
            {
              task: "Schedule WABO preliminary inspection",
              who: "Landlord",
              where: "City of Centralia Building Department",
              contact: "Building Department: (360) 330-7662",
              script: "I'd like to schedule a WABO preliminary inspection for the AFH conversion at 1713 Winterwood Drive. The project is complete and ready for inspection. What dates are available?",
              deliverable: "WABO inspection scheduled"
            },
            {
              task: "WABO preliminary inspection",
              who: "WABO Inspector + Landlord + Contractor",
              where: "Property site",
              contact: "WABO Inspector",
              script: "Welcome to the property. We've completed the conversion to 5-bed AFH with private single rooms (80 sq ft minimum each). All rooms, bathrooms, and safety systems are ready for your inspection.",
              deliverable: "WABO inspection completed"
            }
          ]
        },
        {
          day: "Day 106-110",
          tasks: [
            {
              task: "Building department inspection",
              who: "Building Inspector + Landlord + Contractor",
              where: "Property site",
              contact: "Building Department: (360) 330-7662",
              script: "The building inspector will verify structural modifications, room conversions, and code compliance. Be prepared to show all work and documentation.",
              deliverable: "Building inspection completed"
            },
            {
              task: "Fire department inspection",
              who: "Fire Inspector + Landlord + Contractor",
              where: "Property site",
              contact: "Fire Department: (360) 330-7642",
              script: "The fire inspector will verify fire suppression system, smoke detectors, exit signage, and emergency egress. All systems should be operational.",
              deliverable: "Fire inspection completed"
            }
          ]
        },
        {
          day: "Day 111-115",
          tasks: [
            {
              task: "Address inspection corrections",
              who: "General Contractor",
              where: "Property site",
              contact: "General contractor",
              script: "We received inspection corrections. Please address all items promptly. Schedule reinspection once corrections are complete.",
              deliverable: "All corrections completed"
            },
            {
              task: "Obtain final WABO certification",
              who: "Landlord",
              where: "City of Centralia Building Department",
              contact: "Building Department: (360) 330-7662",
              script: "All inspections are passed and corrections completed. I'm ready to obtain final WABO certification and occupancy permit. What is the process?",
              deliverable: "WABO certification and occupancy permit obtained"
            }
          ]
        }
      ]
    },
    {
      phase: 7,
      name: "Provider Search & Lease",
      days: [
        {
          day: "Day 116-120",
          tasks: [
            {
              task: "Create marketing materials",
              who: "Landlord",
              where: "Property site for photos",
              contact: "Photographer (if needed)",
              script: "I need professional photos of the converted AFH property. The property is 5-bed capacity with private single rooms, ready for immediate occupancy.",
              deliverable: "Marketing materials completed"
            },
            {
              task: "List on AFH locator websites",
              who: "Landlord",
              where: "Online - AFH locator websites",
              contact: "AFH locator website administrators",
              script: "I'm listing a 5-bed AFH property for lease in Centralia. The property is WABO-certified with private single rooms (80 sq ft minimum each). Can you help me create an effective listing?",
              deliverable: "Property listed on AFH locator"
            },
            {
              task: "Post on Facebook AFH groups",
              who: "Landlord",
              where: "Facebook - AFH groups",
              contact: "Facebook group administrators",
              script: "I have a 5-bed AFH property available for lease in Centralia. WABO-certified, private single rooms, ready for immediate occupancy. Looking for qualified AFH providers.",
              deliverable: "Property posted on Facebook groups"
            },
            {
              task: "Screen interested providers and negotiate lease",
              who: "Landlord",
              where: "Property site or virtual",
              contact: "Interested providers",
              script: "Thank you for your interest. The property is 5-bed capacity with private single rooms. I'm looking for a long-term lease (5-10 years) with a qualified AFH provider. Let's discuss terms.",
              deliverable: "Provider selected and lease negotiated"
            },
            {
              task: "Execute lease agreement",
              who: "Landlord + Provider + Attorney",
              where: "Attorney's office or property",
              contact: "Attorney",
              script: "We've agreed on lease terms. Let's finalize the lease agreement with legal review. The property is ready for occupancy upon lease execution.",
              deliverable: "Lease agreement executed"
            }
          ]
        }
      ]
    }
  ];

  const contacts = {
    cityOfCentralia: {
      name: "City of Centralia Building Department",
      address: "118 W Maple St, Centralia, WA 98531",
      phone: "(360) 330-7662",
      email: "building@cityofcentralia.com",
      website: "https://www.cityofcentralia.com",
      contactPerson: "Building Official",
      purpose: "Building permits, WABO permits, inspections"
    },
    fireDepartment: {
      name: "Centralia Fire Department",
      address: "200 E Locust St, Centralia, WA 98531",
      phone: "(360) 330-7642",
      email: "fire@cityofcentralia.com",
      purpose: "Fire permits, fire inspections, fire suppression system approval"
    },
    dshs: {
      name: "Washington State DSHS - AFH Licensing",
      address: "PO Box 45600, Olympia, WA 98504",
      phone: "(360) 725-2300",
      website: "https://www.dshs.wa.gov/altsa/home-and-community-services/adult-family-home",
      purpose: "AFH licensing information, regulations, requirements"
    },
    wabo: {
      name: "Washington Association of Building Officials",
      website: "https://www.wabo.org",
      purpose: "WABO code information, standards, resources"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">구체적인 실행방안</h1>
        <h2 className="text-2xl text-gray-700 mb-2">Detailed Execution Plan</h2>
        <p className="text-gray-600 mb-8">Scenario 2: Conversion Option 1 - 5 Beds + Caregiver Room</p>

        {/* Basic Plan */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-2 border-red-300">
          <h2 className="text-2xl font-bold mb-4 text-red-700">Basic Plan (기본 계획)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300 shadow-md">
              <div className="text-base font-bold text-black mb-2">Project Name</div>
              <div className="font-bold text-xl text-red-900 leading-relaxed">{basicPlan.projectName}</div>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300 shadow-md">
              <div className="text-base font-bold text-black mb-2">Target Capacity</div>
              <div className="font-bold text-xl text-red-900 leading-relaxed">{basicPlan.targetCapacity}</div>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300 shadow-md">
              <div className="text-base font-bold text-black mb-2">Total Timeline</div>
              <div className="font-bold text-xl text-red-900 leading-relaxed">{basicPlan.totalTimeline}</div>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300 shadow-md">
              <div className="text-base font-bold text-black mb-2">Total Budget</div>
              <div className="font-bold text-xl text-red-900 leading-relaxed">{basicPlan.totalBudget}</div>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300 shadow-md">
              <div className="text-base font-bold text-black mb-2">Location</div>
              <div className="font-bold text-lg text-red-900 leading-relaxed">{basicPlan.location}</div>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300 shadow-md">
              <div className="text-base font-bold text-black mb-2">Jurisdiction</div>
              <div className="font-bold text-lg text-red-900 leading-relaxed">{basicPlan.jurisdiction}</div>
            </div>
          </div>
        </div>

        {/* Detailed Plan */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Detailed Plan (상세 계획)</h2>
          <div className="space-y-4">
            {detailedPlan.phases.map((phase, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {phase.phase}
                  </span>
                  <h3 className="text-xl font-semibold">{phase.name}</h3>
                  <span className="text-base font-semibold text-gray-700">{phase.duration}</span>
                </div>
                <p className="text-gray-700">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Construction Schedule */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">시공계획서 (Construction Schedule)</h2>
          <div className="space-y-6">
            {constructionSchedule.phases.map((phase, index) => (
              <div key={index} className="border-2 border-gray-400 rounded-lg p-6 bg-gray-100 shadow-lg mb-5">
                <div className="flex justify-between items-start mb-5">
                  <h3 className="text-2xl font-bold text-black">{phase.phase}</h3>
                  <div className="text-lg font-bold text-black bg-white px-4 py-2 rounded-lg border-2 border-gray-400">
                    {phase.startDate} - {phase.endDate}
                  </div>
                </div>
                <div className="mb-5 bg-white p-4 rounded-lg border-2 border-gray-300">
                  <div className="text-lg font-bold text-black mb-2">Responsible:</div>
                  <div className="font-bold text-xl text-black">{phase.responsible}</div>
                </div>
                <div className="mb-5 bg-white p-4 rounded-lg border-2 border-gray-300">
                  <div className="text-lg font-bold text-black mb-3">Activities:</div>
                  <ul className="list-disc list-inside space-y-2 text-lg text-black">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="leading-relaxed font-semibold">{activity}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-300">
                  <div className="text-lg font-bold text-black mb-2">Deliverables:</div>
                  <div className="text-lg font-bold text-black leading-relaxed">{phase.deliverables.join(", ")}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">시방서 (Specifications)</h2>
          <div className="space-y-6">
            {specifications.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-green-600 pl-5 bg-green-100 p-5 rounded-r-lg mb-5">
                <h3 className="text-2xl font-bold text-black mb-4">{section.section}</h3>
                <ul className="list-disc list-inside space-y-3 text-lg text-black">
                  {section.items.map((item, i) => (
                    <li key={i} className="leading-relaxed font-semibold">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Tasks */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Daily Tasks / Activities (일일 작업 및 활동)</h2>
          <div className="mb-4">
            <div className="flex gap-2 flex-wrap">
              {dailyTasks.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhase(index)}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    selectedPhase === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Phase {phase.phase}: {phase.name}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {dailyTasks[selectedPhase].days.map((day, dayIndex) => (
              <div key={dayIndex} className="border-2 border-gray-400 rounded-lg p-6 bg-gray-100 shadow-lg mb-5">
                <h3 className="text-2xl font-bold mb-5 text-blue-800 bg-white px-5 py-3 rounded-lg border-2 border-blue-500">{day.day}</h3>
                <div className="space-y-5">
                  {day.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="bg-white p-6 rounded-lg border-l-4 border-blue-600 shadow-lg mb-5">
                      <div className="font-bold text-2xl mb-4 text-black">{task.task}</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-4 rounded-lg border-2 border-gray-300">
                          <div className="text-black font-bold mb-2 text-lg">Who:</div>
                          <div className="font-bold text-lg text-black">{task.who}</div>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg border-2 border-gray-300">
                          <div className="text-black font-bold mb-2 text-lg">Where:</div>
                          <div className="font-bold text-lg text-black">{task.where}</div>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg border-2 border-gray-300">
                          <div className="text-black font-bold mb-2 text-lg">Contact:</div>
                          <div className="font-bold text-lg text-black">{task.contact}</div>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg border-2 border-green-500">
                          <div className="text-black font-bold mb-2 text-lg">Deliverable:</div>
                          <div className="font-bold text-xl text-green-800">{task.deliverable}</div>
                        </div>
                      </div>
                      <div className="mt-5 p-5 bg-blue-100 rounded-lg border-2 border-blue-500">
                        <div className="text-black font-bold mb-3 text-xl">Script:</div>
                        <div className="text-lg font-semibold text-black leading-relaxed">"{task.script}"</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Contacts (주요 연락처)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-gray-400 rounded-lg p-6 bg-white shadow-lg">
              <h3 className="font-bold text-2xl mb-4 text-black">{contacts.cityOfCentralia.name}</h3>
              <div className="text-lg space-y-3">
                <div><strong className="text-black text-xl">Address:</strong> <span className="font-bold text-lg text-black">{contacts.cityOfCentralia.address}</span></div>
                <div><strong className="text-black text-xl">Phone:</strong> <span className="font-bold text-lg text-black">{contacts.cityOfCentralia.phone}</span></div>
                <div><strong className="text-black text-xl">Email:</strong> <span className="font-bold text-lg text-black">{contacts.cityOfCentralia.email}</span></div>
                <div><strong className="text-black text-xl">Purpose:</strong> <span className="font-bold text-lg text-black">{contacts.cityOfCentralia.purpose}</span></div>
              </div>
            </div>
            <div className="border-2 border-gray-400 rounded-lg p-6 bg-white shadow-lg">
              <h3 className="font-bold text-2xl mb-4 text-black">{contacts.fireDepartment.name}</h3>
              <div className="text-lg space-y-3">
                <div><strong className="text-black text-xl">Address:</strong> <span className="font-bold text-lg text-black">{contacts.fireDepartment.address}</span></div>
                <div><strong className="text-black text-xl">Phone:</strong> <span className="font-bold text-lg text-black">{contacts.fireDepartment.phone}</span></div>
                <div><strong className="text-black text-xl">Email:</strong> <span className="font-bold text-lg text-black">{contacts.fireDepartment.email}</span></div>
                <div><strong className="text-black text-xl">Purpose:</strong> <span className="font-bold text-lg text-black">{contacts.fireDepartment.purpose}</span></div>
              </div>
            </div>
            <div className="border-2 border-gray-400 rounded-lg p-6 bg-white shadow-lg">
              <h3 className="font-bold text-2xl mb-4 text-black">{contacts.dshs.name}</h3>
              <div className="text-lg space-y-3">
                <div><strong className="text-black text-xl">Phone:</strong> <span className="font-bold text-lg text-black">{contacts.dshs.phone}</span></div>
                <div><strong className="text-black text-xl">Website:</strong> <span className="font-bold text-lg text-black">{contacts.dshs.website}</span></div>
                <div><strong className="text-black text-xl">Purpose:</strong> <span className="font-bold text-lg text-black">{contacts.dshs.purpose}</span></div>
              </div>
            </div>
            <div className="border-2 border-gray-400 rounded-lg p-6 bg-white shadow-lg">
              <h3 className="font-bold text-2xl mb-4 text-black">{contacts.wabo.name}</h3>
              <div className="text-lg space-y-3">
                <div><strong className="text-black text-xl">Website:</strong> <span className="font-bold text-lg text-black">{contacts.wabo.website}</span></div>
                <div><strong className="text-black text-xl">Purpose:</strong> <span className="font-bold text-lg text-black">{contacts.wabo.purpose}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

