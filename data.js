// ============================================================
// MIRA BOT — Product Database & Knowledge Base
// ============================================================

const MIRA_PRODUCTS = {
  primers: {
    nameKey: "cat_primers",
    icon: "🎨",
    products: [
      {
        id: "4180",
        name: "4180 primer",
        type: "Acrylic dispersion",
        classEN: "",
        consumption: "0.1–0.2 l/m²",
        descKey: "p_4180_desc",
        usage: ["walls", "floors", "interior", "exterior"],
        substrates: ["concrete", "cement_screed", "plaster", "wood", "gypsum"],
        notes: "Yellow pigment for application control. Dilute 1:3 for mineral substrates, use concentrated on wood.",
        tempRange: "+10…+25 °C",
        dryTime: "2–4 h",
        hazard: ["H315", "H318"]
      },
      {
        id: "4140",
        name: "4140 contact primer",
        type: "Two-component (acrylic + quartz + cement)",
        classEN: "",
        consumption: "500–800 g/m²",
        descKey: "p_4140_desc",
        usage: ["walls", "floors", "interior"],
        substrates: ["old_tile", "metal", "painted_surface", "non_porous"],
        notes: "Creates rough surface on non-porous substrates. Must be mixed before use.",
        tempRange: "+10…+25 °C",
        dryTime: "12–24 h",
        hazard: ["H315", "H318"]
      },
      {
        id: "4170",
        name: "4170 decor primer",
        type: "Polymer liquid",
        classEN: "",
        consumption: "100–200 g/m²",
        descKey: "p_4170_desc",
        usage: ["walls", "interior", "exterior"],
        substrates: ["concrete", "plaster", "cement_screed"],
        notes: "Pigmented, evens out substrate color before decorative plasters.",
        tempRange: "+10…+25 °C",
        dryTime: "4–6 h",
        hazard: ["H315"]
      },
      {
        id: "4410",
        name: "4410 vapourstop",
        type: "Specialized polymer",
        classEN: "",
        consumption: "min 150 g/m²",
        descKey: "p_4410_desc",
        usage: ["walls", "floors", "wet_rooms"],
        substrates: ["concrete", "cement_screed", "plaster"],
        notes: "Vapour barrier for wet zones. High water vapour diffusion resistance.",
        tempRange: "+10…+25 °C",
        dryTime: "4–6 h",
        hazard: ["H315"]
      },
      {
        id: "5335",
        name: "5335 quartz grund",
        type: "Quartz primer",
        classEN: "",
        consumption: "200–250 ml/m²",
        descKey: "p_5335_desc",
        usage: ["exterior", "facade"],
        substrates: ["concrete", "plaster"],
        notes: "For miratherm facade systems. Improves adhesion with mineral plasters.",
        tempRange: "+5…+25 °C",
        dryTime: "12–24 h",
        hazard: ["H315"]
      }
    ]
  },

  leveling: {
    nameKey: "cat_leveling",
    icon: "📐",
    products: [
      {
        id: "6600",
        name: "6600 cemplan",
        type: "Thin-layer leveling compound",
        classEN: "CT-C30-F7",
        consumption: "1.6 kg/m²/mm",
        descKey: "p_6600_desc",
        usage: ["floors", "interior"],
        thickness: "0.5–10 mm",
        strength: "30 N/mm²",
        walkable: "2–3 h",
        tileReady: "6–12 h",
        substrates: ["concrete", "cement_screed"],
        hazard: ["H315", "H318"]
      },
      {
        id: "6700",
        name: "6700 cemplan",
        type: "Universal self-leveling compound",
        classEN: "CT-C30-F7",
        consumption: "1.6 kg/m²/mm",
        descKey: "p_6700_desc",
        usage: ["floors", "interior"],
        thickness: "1–45 mm",
        strength: "30 N/mm²",
        walkable: "2–3 h",
        tileReady: "6–12 h",
        substrates: ["concrete", "cement_screed", "wood"],
        hazard: ["H315", "H318"]
      },
      {
        id: "xplan",
        name: "x-plan",
        type: "Fiber-reinforced leveling compound",
        classEN: "CT-C30-F7",
        consumption: "1.7 kg/m²/mm",
        descKey: "p_xplan_desc",
        usage: ["floors", "interior", "heated_floor"],
        thickness: "2–50 mm",
        strength: "30 N/mm²",
        walkable: "2–3 h",
        tileReady: "6–12 h",
        substrates: ["concrete", "cement_screed", "wood", "plywood", "chipboard"],
        notes: "Best for deformable substrates (wood, plywood). Use uninet mesh on wooden floors.",
        hazard: ["H315", "H318"]
      },
      {
        id: "6975",
        name: "6975 betomix flow",
        type: "Fast-hardening screed",
        classEN: "CT-C30-F7",
        consumption: "1.8 kg/m²/mm",
        descKey: "p_6975_desc",
        usage: ["floors", "interior"],
        thickness: "5–80 mm",
        strength: "30 N/mm²",
        walkable: "2–3 h",
        tileReady: "24 h",
        substrates: ["concrete", "cement_screed"],
        hazard: ["H315", "H318"]
      },
      {
        id: "6998",
        name: "6998 betomix quick",
        type: "Ultra-fast concrete",
        classEN: "CT-C40-F7",
        consumption: "2.0 kg/m²/mm",
        descKey: "p_6998_desc",
        usage: ["floors", "interior", "exterior"],
        thickness: "20–80 mm",
        strength: "40 N/mm²",
        walkable: "2–3 h",
        tileReady: "24 h",
        substrates: ["concrete", "cement_screed"],
        hazard: ["H315", "H318"]
      },
      {
        id: "eps360",
        name: "EPS lightbeton 360",
        type: "Lightweight concrete with EPS granules",
        classEN: "",
        consumption: "~6 kg/m²/10mm",
        descKey: "p_eps360_desc",
        usage: ["floors", "interior"],
        thickness: "> 15 mm",
        strength: "Low (lightweight base)",
        walkable: "24 h",
        tileReady: "3–7 days",
        substrates: ["concrete", "cement_screed"],
        hazard: ["H315"]
      },
      {
        id: "6950",
        name: "6950 express unirep",
        type: "Fast-hardening repair compound",
        classEN: "",
        consumption: "1.8 kg/m²/mm",
        descKey: "p_6950_desc",
        usage: ["floors", "walls", "interior", "exterior"],
        thickness: "2–30 mm",
        strength: "35 N/mm²",
        walkable: "1–2 h",
        tileReady: "3–4 h",
        substrates: ["concrete", "cement_screed"],
        hazard: ["H315", "H318"]
      },
      {
        id: "easyplan",
        name: "easyplan",
        type: "Easy-to-use self-leveler",
        classEN: "CT-C25-F5",
        consumption: "1.6 kg/m²/mm",
        descKey: "p_easyplan_desc",
        usage: ["floors", "interior"],
        thickness: "2–30 mm",
        strength: "25 N/mm²",
        walkable: "3–4 h",
        tileReady: "12–24 h",
        substrates: ["concrete", "cement_screed"],
        hazard: ["H315", "H318"]
      },
      {
        id: "projectplan",
        name: "projectplan",
        type: "Self-leveler for large areas",
        classEN: "CT-C25-F5",
        consumption: "1.6 kg/m²/mm",
        descKey: "p_projectplan_desc",
        usage: ["floors", "interior"],
        thickness: "3–60 mm",
        strength: "25 N/mm²",
        walkable: "3–4 h",
        tileReady: "12–24 h",
        substrates: ["concrete", "cement_screed"],
        hazard: ["H315", "H318"]
      },
      {
        id: "6990",
        name: "6990 betodeck",
        type: "Leveling compound for terraces/balconies",
        classEN: "",
        consumption: "1.8 kg/m²/mm",
        descKey: "p_6990_desc",
        usage: ["floors", "exterior", "terraces", "balconies"],
        thickness: "5–30 mm",
        strength: "30 N/mm²",
        walkable: "3–4 h",
        tileReady: "24 h",
        substrates: ["concrete", "cement_screed"],
        hazard: ["H315", "H318"]
      },
      {
        id: "4730",
        name: "4730 protect",
        type: "Protective coating",
        classEN: "",
        consumption: "1.5 kg/m²/mm",
        descKey: "p_4730_desc",
        usage: ["floors", "interior"],
        thickness: "2–10 mm",
        strength: "25 N/mm²",
        walkable: "3–4 h",
        tileReady: "24 h",
        substrates: ["concrete", "cement_screed"],
        hazard: ["H315"]
      }
    ]
  },

  waterproofing: {
    nameKey: "cat_waterproofing",
    icon: "💧",
    products: [
      {
        id: "4400",
        name: "4400 multicoat",
        type: "One-component elastic membrane",
        classEN: "ETAG 022",
        consumption: "min 1.0 kg/m² (2 layers)",
        descKey: "p_4400_desc",
        usage: ["walls", "floors", "wet_rooms", "interior"],
        notes: "Apply min 2 layers cross-wise. Sd = 6.8m. Use with seal bands, pipe collars, corners.",
        dryTime: "2–4 h per layer",
        tileReady: "12–24 h",
        substrates: ["concrete", "cement_screed", "plaster", "gypsum"],
        hazard: ["H315"]
      },
      {
        id: "4500",
        name: "4500 vapourmat 100",
        type: "Roll waterproofing membrane (PP/PE)",
        classEN: "ETAG 022",
        consumption: "1.1 m²/m² (10% overlap)",
        descKey: "p_4500_desc",
        usage: ["walls", "floors", "wet_rooms", "interior"],
        notes: "Bonded with 4630 aqua-flex 2K. Uniform thickness guaranteed. Tile immediately after installation.",
        substrates: ["concrete", "cement_screed"],
        hazard: []
      },
      {
        id: "4630",
        name: "4630 aqua-flex 2K membran",
        type: "Two-component flexible adhesive/membrane",
        classEN: "",
        consumption: "1.5–2.0 kg/m²",
        descKey: "p_4630_desc",
        usage: ["walls", "floors", "wet_rooms", "interior"],
        notes: "For bonding vapourmat 4500. Also works as standalone flexible membrane.",
        substrates: ["concrete", "cement_screed"],
        hazard: ["H315"]
      },
      {
        id: "4650",
        name: "4650 aqua stop flexibel",
        type: "Flexible waterproofing",
        classEN: "",
        consumption: "0.8–1.2 kg/m²",
        descKey: "p_4650_desc",
        usage: ["walls", "floors", "wet_rooms", "interior", "exterior"],
        substrates: ["concrete", "cement_screed", "plaster"],
        hazard: ["H315"]
      },
      {
        id: "3690",
        name: "3690 one-seal",
        type: "Hybrid sealant/adhesive",
        classEN: "",
        consumption: "Varies by joint",
        descKey: "p_3690_desc",
        usage: ["wet_rooms", "interior", "exterior"],
        notes: "For bonding seal bands, corners, pipe collars to waterproofing membrane. Also standalone sealant.",
        substrates: ["concrete", "cement_screed", "metal", "plastic", "wood"],
        hazard: []
      }
    ]
  },

  tile_adhesives: {
    nameKey: "cat_tile_adhesives",
    icon: "🧱",
    products: [
      {
        id: "zfix",
        name: "z-fix excellent",
        type: "Premium white cement adhesive",
        classEN: "C2TE S1",
        consumption: "2.0–4.0 kg/m²",
        descKey: "p_zfix_desc",
        usage: ["walls", "floors", "interior", "exterior", "heated_floor", "wet_rooms"],
        tileSize: "All sizes including large format",
        substrates: ["concrete", "cement_screed", "gypsum", "old_tile", "waterproofing"],
        color: "white",
        notes: "Premium adhesive. White cement base — ideal for glass mosaic & marble. S1 flexibility.",
        hazard: ["H315", "H318"]
      },
      {
        id: "3000",
        name: "3000 standardfix",
        type: "Standard tile adhesive",
        classEN: "C1T",
        consumption: "2.0–3.0 kg/m²",
        descKey: "p_3000_desc",
        usage: ["walls", "floors", "interior"],
        tileSize: "Up to 30x30 cm",
        substrates: ["concrete", "cement_screed", "plaster"],
        color: "grey",
        notes: "Economy standard adhesive. For standard ceramic tiles in dry interior rooms. Available in UA, EE, LT, LV markets.",
        regions: ["UA", "EE", "LT", "LV"],
        hazard: ["H315", "H318"]
      },
      {
        id: "3110",
        name: "3110 unifix",
        type: "Universal tile adhesive",
        classEN: "C2TE",
        consumption: "2.0–3.5 kg/m²",
        descKey: "p_3110_desc",
        usage: ["walls", "floors", "interior", "heated_floor"],
        tileSize: "Up to 40x40 cm",
        substrates: ["concrete", "cement_screed", "plaster", "gypsum"],
        color: "grey",
        hazard: ["H315", "H318"]
      },
      {
        id: "3130",
        name: "3130 superfix",
        type: "Flexible tile adhesive",
        classEN: "C2TE S1",
        consumption: "2.0–4.0 kg/m²",
        descKey: "p_3130_desc",
        usage: ["walls", "floors", "interior", "exterior", "heated_floor", "wet_rooms", "facade"],
        tileSize: "All sizes including large format",
        substrates: ["concrete", "cement_screed", "gypsum", "old_tile", "waterproofing"],
        color: "grey / white",
        notes: "S1 deformable. For facades, swimming pools, terraces. Available in white for marble/mosaic.",
        hazard: ["H315", "H318"]
      },
      {
        id: "3250",
        name: "3250 gigafix floor",
        type: "High-deformability floor adhesive",
        classEN: "C2E S2",
        consumption: "2.5–4.5 kg/m²",
        descKey: "p_3250_desc",
        usage: ["floors", "interior", "exterior", "heated_floor", "terraces"],
        tileSize: "Large format > 60x60 cm",
        substrates: ["concrete", "cement_screed", "waterproofing"],
        color: "grey",
        notes: "S2 highest deformability. For large format tiles on floors with thermal stress.",
        hazard: ["H315", "H318"]
      },
      {
        id: "3230",
        name: "3230 superrapidfix",
        type: "Fast-setting tile adhesive",
        classEN: "C2FT S1",
        consumption: "2.0–4.0 kg/m²",
        descKey: "p_3230_desc",
        usage: ["walls", "floors", "interior", "exterior"],
        tileSize: "All sizes",
        substrates: ["concrete", "cement_screed", "waterproofing"],
        color: "grey",
        notes: "Rapid set — groutable after 3 hours. For time-critical projects.",
        hazard: ["H315", "H318"]
      },
      {
        id: "lightfix",
        name: "light fix",
        type: "Lightweight tile adhesive",
        classEN: "C2TE S1",
        consumption: "2.0–3.5 kg/m²",
        descKey: "p_lightfix_desc",
        usage: ["walls", "interior"],
        tileSize: "Up to 60x60 cm",
        substrates: ["concrete", "plaster", "gypsum"],
        color: "grey",
        notes: "Low weight, easy to mix. Ideal for wall tiling — reduced sag.",
        hazard: ["H315", "H318"]
      },
      {
        id: "3600",
        name: "3600 multicrete",
        type: "Special multi-substrate adhesive",
        classEN: "Special",
        consumption: "Depends on trowel",
        descKey: "p_3600_desc",
        usage: ["walls", "floors", "interior", "exterior"],
        tileSize: "All sizes",
        substrates: ["metal", "wood", "plastic", "old_tile", "painted_surface"],
        color: "grey",
        notes: "Bonds to difficult substrates: metal, wood, plastic, PVC. Two-component.",
        hazard: ["H315", "H318"]
      },
      {
        id: "stonefix",
        name: "stonefix",
        type: "Natural stone adhesive",
        classEN: "C2TE S1",
        consumption: "2.5–4.0 kg/m²",
        descKey: "p_stonefix_desc",
        usage: ["walls", "floors", "interior", "exterior"],
        tileSize: "All sizes",
        substrates: ["concrete", "cement_screed", "waterproofing"],
        color: "white",
        notes: "White cement. Designed for natural stone, marble, travertine. No staining.",
        hazard: ["H315", "H318"]
      },
      {
        id: "3650",
        name: "3650 multipox",
        type: "Epoxy adhesive and grout (2-in-1)",
        classEN: "R2T / RG",
        consumption: "2.0–5.0 kg/m²",
        descKey: "p_3650_desc",
        usage: ["walls", "floors", "interior", "wet_rooms", "pools", "industrial"],
        tileSize: "All sizes",
        substrates: ["concrete", "cement_screed", "metal", "waterproofing"],
        color: "Various",
        notes: "Chemical resistant. For pools, food industry, labs. Also serves as grout.",
        hazard: ["H315", "H317", "H319"]
      },
      {
        id: "6920",
        name: "6920 fireplace mortar",
        type: "Heat-resistant mortar",
        classEN: "",
        consumption: "2.0–3.0 kg/m²",
        descKey: "p_6920_desc",
        usage: ["walls", "interior", "fireplaces"],
        tileSize: "Standard tiles/bricks",
        substrates: ["concrete", "brick"],
        color: "grey",
        notes: "Resistant up to 1000°C. For fireplaces, stoves, ovens.",
        hazard: ["H315", "H318"]
      }
    ]
  },

  grouts: {
    nameKey: "cat_grouts",
    icon: "✨",
    products: [
      {
        id: "sce",
        name: "supercolour excellent",
        type: "Premium cement grout",
        classEN: "CG2 WA",
        consumption: "Formula-based",
        descKey: "p_sce_desc",
        usage: ["walls", "floors", "interior", "exterior", "wet_rooms", "heated_floor"],
        jointWidth: "1–20 mm",
        colors: 40,
        notes: "Water-repellent, anti-mold. Highest class CG2 WA. 40+ colors available.",
        hazard: ["H315", "H318"]
      },
      {
        id: "sc",
        name: "supercolour",
        type: "Standard cement grout",
        classEN: "CG2",
        consumption: "Formula-based",
        descKey: "p_sc_desc",
        usage: ["walls", "floors", "interior", "wet_rooms"],
        jointWidth: "1–15 mm",
        colors: 34,
        notes: "High-quality cement grout. 34 colors. For most tiling applications.",
        hazard: ["H315", "H318"]
      },
      {
        id: "classic",
        name: "classic",
        type: "Economy cement grout",
        classEN: "CG1",
        consumption: "Formula-based",
        descKey: "p_classic_desc",
        usage: ["walls", "floors", "interior"],
        jointWidth: "1–6 mm",
        colors: 10,
        notes: "Economy range. For standard interior tiling. Narrow joints.",
        hazard: ["H315", "H318"]
      },
      {
        id: "supersil",
        name: "supersil",
        type: "Silicone sealant",
        classEN: "",
        consumption: "Depends on joint size",
        descKey: "p_supersil_desc",
        usage: ["wet_rooms", "interior", "exterior"],
        jointWidth: "Movement joints",
        colors: 25,
        notes: "Sanitary silicone with anti-mold. For expansion joints, bath/shower perimeters. Color-matched to supercolour.",
        hazard: []
      },
      {
        id: "mastic",
        name: "mastic",
        type: "Acrylic sealant",
        classEN: "",
        consumption: "Depends on joint size",
        descKey: "p_mastic_desc",
        usage: ["interior"],
        jointWidth: "Movement joints",
        colors: 5,
        notes: "Paintable acrylic sealant. For interior joints between tile and other surfaces.",
        hazard: []
      },
      {
        id: "3650g",
        name: "3650 multipox (grout use)",
        type: "Epoxy grout",
        classEN: "RG",
        consumption: "Formula-based",
        descKey: "p_3650g_desc",
        usage: ["walls", "floors", "wet_rooms", "pools", "industrial"],
        jointWidth: "1–15 mm",
        colors: 12,
        notes: "Chemical-resistant epoxy grout. For pools, food industry, labs. Stain-proof.",
        hazard: ["H315", "H317"]
      }
    ]
  },

  cleaning: {
    nameKey: "cat_cleaning",
    icon: "🧹",
    products: [
      {
        id: "7110",
        name: "7110 base cleaner",
        type: "Acid-based cement residue remover",
        classEN: "",
        consumption: "Depends on contamination",
        descKey: "p_7110_desc",
        usage: ["floors", "walls", "interior", "exterior"],
        notes: "Removes cement haze, grout residue, limescale after tiling. Do NOT use on marble/natural stone.",
        hazard: ["H314"]
      },
      {
        id: "7120",
        name: "7120 ceramic cleaner",
        type: "Daily ceramic tile cleaner",
        classEN: "",
        consumption: "50–100 ml/m²",
        descKey: "p_7120_desc",
        usage: ["floors", "walls", "interior"],
        notes: "pH-neutral. Safe for daily cleaning of all tile types including natural stone.",
        hazard: []
      },
      {
        id: "7230",
        name: "7230 ceramic wash",
        type: "Deep cleaning concentrate",
        classEN: "",
        consumption: "Depends on dilution",
        descKey: "p_7230_desc",
        usage: ["floors", "walls", "interior", "exterior"],
        notes: "For deep cleaning of heavily soiled ceramic and porcelain tiles.",
        hazard: ["H315"]
      },
      {
        id: "7360",
        name: "7360 tile sealer",
        type: "Protective impregnation",
        classEN: "",
        consumption: "50–100 ml/m²",
        descKey: "p_7360_desc",
        usage: ["floors", "walls", "interior", "exterior"],
        notes: "Protects natural stone, unglazed tiles from staining. Apply after grouting.",
        hazard: []
      },
      {
        id: "7250",
        name: "7250 epoxy remover",
        type: "Epoxy residue remover",
        classEN: "",
        consumption: "Depends on contamination",
        descKey: "p_7250_desc",
        usage: ["floors", "walls", "interior"],
        notes: "Removes cured epoxy grout residue. Use within 24h of grouting for best results.",
        hazard: ["H315"]
      }
    ]
  },

  plasters: {
    nameKey: "cat_plasters",
    icon: "🏗️",
    products: [
      {
        id: "6845",
        name: "6845 cemplaster wall",
        type: "Wall leveling plaster",
        classEN: "",
        consumption: "1.5 kg/m²/mm",
        descKey: "p_6845_desc",
        usage: ["walls", "interior"],
        thickness: "3–30 mm",
        substrates: ["concrete", "brick", "lightweight_block"],
        hazard: ["H315", "H318"]
      },
      {
        id: "6850",
        name: "6850 cemplaster",
        type: "Universal cement plaster",
        classEN: "",
        consumption: "1.5 kg/m²/mm",
        descKey: "p_6850_desc",
        usage: ["walls", "interior", "exterior"],
        thickness: "5–30 mm",
        substrates: ["concrete", "brick", "lightweight_block"],
        hazard: ["H315", "H318"]
      },
      {
        id: "6870",
        name: "6870 fibreplaster",
        type: "Fiber-reinforced plaster",
        classEN: "",
        consumption: "1.4 kg/m²/mm",
        descKey: "p_6870_desc",
        usage: ["walls", "interior", "exterior"],
        thickness: "5–50 mm",
        substrates: ["concrete", "brick", "lightweight_block", "EPS"],
        notes: "Contains fibers for crack resistance. Good for uneven walls.",
        hazard: ["H315", "H318"]
      }
    ]
  },

  decorative: {
    nameKey: "cat_decorative",
    icon: "🎭",
    products: [
      {
        id: "6840",
        name: "6840 decor",
        type: "Decorative plaster",
        classEN: "",
        consumption: "2.5–4.0 kg/m²",
        descKey: "p_6840_desc",
        usage: ["walls", "interior", "exterior"],
        substrates: ["concrete", "plaster", "cement_screed"],
        notes: "Various textures available. Use with 4170 decor primer.",
        hazard: ["H315"]
      },
      {
        id: "4720",
        name: "4720 decor topcoating",
        type: "Finish coat for decorative plasters",
        classEN: "",
        consumption: "150–200 g/m²",
        descKey: "p_4720_desc",
        usage: ["walls", "interior", "exterior"],
        substrates: ["decorative_plaster"],
        notes: "Protective and decorative finish. Paintable.",
        hazard: []
      }
    ]
  },

  accessories: {
    nameKey: "cat_accessories",
    icon: "🔧",
    products: [
      {
        id: "uninet",
        name: "uninet",
        type: "Reinforcing mesh",
        classEN: "",
        descKey: "p_uninet_desc",
        usage: ["floors", "interior"],
        notes: "Fiberglass mesh for reinforcing leveling compounds on deformable substrates (wood, plywood)."
      },
      {
        id: "sealband",
        name: "seal band",
        type: "Waterproofing tape",
        classEN: "",
        descKey: "p_sealband_desc",
        usage: ["wet_rooms", "interior"],
        notes: "Elastic tape for sealing wall-floor joints, corners in waterproofing systems."
      },
      {
        id: "pipecollars",
        name: "pipe collars",
        type: "Waterproofing pipe sleeves",
        classEN: "",
        descKey: "p_pipecollars_desc",
        usage: ["wet_rooms", "interior"],
        notes: "Self-adhesive collars for sealing pipe penetrations in waterproofed areas."
      },
      {
        id: "corners",
        name: "inner/outer corners",
        type: "Preformed waterproofing corners",
        classEN: "",
        descKey: "p_corners_desc",
        usage: ["wet_rooms", "interior"],
        notes: "Pre-shaped corner pieces for perfect waterproofing at 90° junctions."
      },
      {
        id: "4840",
        name: "4840 silent step",
        type: "Sound dampening mat (thin)",
        classEN: "",
        descKey: "p_4840_desc",
        usage: ["floors", "interior"],
        notes: "Thin acoustic underlay for reducing impact sound transmission under tiles."
      },
      {
        id: "4850",
        name: "4850 silent step",
        type: "Sound dampening mat (thick)",
        classEN: "",
        descKey: "p_4850_desc",
        usage: ["floors", "interior"],
        notes: "Thicker acoustic underlay for maximum sound insulation. For apartment buildings."
      }
    ]
  },

  miratherm: {
    nameKey: "cat_miratherm",
    icon: "🏠",
    products: [
      {
        id: "miratherm_system",
        name: "miratherm ETICS system",
        type: "External thermal insulation composite system",
        classEN: "ETAG 004",
        descKey: "p_miratherm_desc",
        usage: ["exterior", "facade"],
        notes: "Complete facade insulation system: XPS/EPS boards + adhesive + mesh + base coat + finish coat."
      }
    ]
  }
};

// ============================================================
// DECISION TREE LOGIC
// ============================================================

const DECISION_TREE = {
  // Step 1: Location
  location: {
    options: [
      { id: "interior", nameKey: "loc_interior", icon: "🏠" },
      { id: "exterior", nameKey: "loc_exterior", icon: "🌤️" }
    ]
  },
  // Step 2: Room type
  roomType: {
    interior: [
      { id: "dry", nameKey: "room_dry", icon: "🛋️" },
      { id: "wet", nameKey: "room_wet", icon: "🚿" },
      { id: "special", nameKey: "room_special", icon: "⚙️" }
    ],
    exterior: [
      { id: "facade", nameKey: "room_facade", icon: "🏢" },
      { id: "terrace", nameKey: "room_terrace", icon: "🌿" },
      { id: "balcony", nameKey: "room_balcony", icon: "🏗️" }
    ]
  },
  // Step 3: Substrate
  substrate: [
    { id: "concrete", nameKey: "sub_concrete", icon: "⬜" },
    { id: "cement_screed", nameKey: "sub_screed", icon: "⬜" },
    { id: "lightweight_block", nameKey: "sub_lightweight", icon: "🧱" },
    { id: "wood", nameKey: "sub_wood", icon: "🪵" },
    { id: "plywood", nameKey: "sub_plywood", icon: "📋" },
    { id: "old_tile", nameKey: "sub_old_tile", icon: "🔲" },
    { id: "painted_surface", nameKey: "sub_painted", icon: "🎨" },
    { id: "gypsum", nameKey: "sub_gypsum", icon: "⬜" },
    { id: "metal", nameKey: "sub_metal", icon: "⚙️" }
  ],
  // Step 4: Finish type
  finish: [
    { id: "ceramic", nameKey: "fin_ceramic", icon: "🔲" },
    { id: "porcelain", nameKey: "fin_porcelain", icon: "⬛" },
    { id: "natural_stone", nameKey: "fin_stone", icon: "🪨" },
    { id: "glass_mosaic", nameKey: "fin_mosaic", icon: "🟦" },
    { id: "large_format", nameKey: "fin_large", icon: "📐" },
    { id: "pvc_vinyl", nameKey: "fin_pvc", icon: "📋" }
  ],
  // Step 5: Heated floor?
  heatedFloor: [
    { id: "yes", nameKey: "heated_yes", icon: "🔥" },
    { id: "no", nameKey: "heated_no", icon: "❄️" }
  ]
};

// ============================================================
// SYSTEM RECOMMENDATIONS (Full room solutions)
// ============================================================

const SYSTEM_SOLUTIONS = {
  bathroom_standard: {
    nameKey: "sys_bathroom",
    icon: "🚿",
    steps: [
      { step: 1, nameKey: "step_primer", product: "4180", note: "Dilute 1:3 for concrete" },
      { step: 2, nameKey: "step_waterproofing", product: "4400", note: "Min 2 layers, 1 kg/m²" },
      { step: 2.1, nameKey: "step_accessories", products: ["sealband", "pipecollars", "corners"] },
      { step: 3, nameKey: "step_adhesive", product: "3130", note: "C2TE S1 for wet rooms" },
      { step: 4, nameKey: "step_grout", product: "sce", note: "CG2 WA water-repellent" },
      { step: 5, nameKey: "step_silicone", product: "supersil", note: "At all movement joints" },
      { step: 6, nameKey: "step_cleaning", product: "7110", note: "Remove cement haze" }
    ]
  },
  bathroom_large_tile: {
    nameKey: "sys_bathroom_large",
    icon: "🚿",
    steps: [
      { step: 1, nameKey: "step_primer", product: "4180" },
      { step: 2, nameKey: "step_waterproofing", product: "4400" },
      { step: 2.1, nameKey: "step_accessories", products: ["sealband", "pipecollars", "corners"] },
      { step: 3, nameKey: "step_adhesive", product: "3250", note: "S2 for large format tiles on floor" },
      { step: 3.1, nameKey: "step_adhesive_walls", product: "3130", note: "S1 for walls" },
      { step: 4, nameKey: "step_grout", product: "sce" },
      { step: 5, nameKey: "step_silicone", product: "supersil" },
      { step: 6, nameKey: "step_cleaning", product: "7110" }
    ]
  },
  pool: {
    nameKey: "sys_pool",
    icon: "🏊",
    steps: [
      { step: 1, nameKey: "step_primer", product: "4180" },
      { step: 2, nameKey: "step_waterproofing", product: "4400", note: "Min 2 layers + seal bands" },
      { step: 3, nameKey: "step_adhesive", product: "3650", note: "Epoxy — chemical resistant" },
      { step: 4, nameKey: "step_grout", product: "3650g", note: "Epoxy grout — waterproof" },
      { step: 5, nameKey: "step_cleaning", product: "7250", note: "Epoxy remover for residue" }
    ]
  },
  kitchen_floor: {
    nameKey: "sys_kitchen",
    icon: "🍳",
    steps: [
      { step: 1, nameKey: "step_primer", product: "4180" },
      { step: 2, nameKey: "step_leveling", product: "6700", note: "If floor is uneven" },
      { step: 3, nameKey: "step_adhesive", product: "3110" },
      { step: 4, nameKey: "step_grout", product: "sc" },
      { step: 5, nameKey: "step_silicone", product: "supersil", note: "At wall-floor junction" },
      { step: 6, nameKey: "step_cleaning", product: "7110" }
    ]
  },
  terrace: {
    nameKey: "sys_terrace",
    icon: "🌿",
    steps: [
      { step: 1, nameKey: "step_primer", product: "4180" },
      { step: 2, nameKey: "step_leveling", product: "6990", note: "Create slope for drainage" },
      { step: 3, nameKey: "step_waterproofing", product: "4400" },
      { step: 4, nameKey: "step_adhesive", product: "3250", note: "S2 for thermal stress" },
      { step: 5, nameKey: "step_grout", product: "sce", note: "Frost-resistant" },
      { step: 6, nameKey: "step_silicone", product: "supersil" }
    ]
  },
  facade: {
    nameKey: "sys_facade",
    icon: "🏢",
    steps: [
      { step: 1, nameKey: "step_insulation", product: "miratherm_system" },
      { step: 2, nameKey: "step_primer", product: "5335" },
      { step: 3, nameKey: "step_plaster", product: "6870" },
      { step: 4, nameKey: "step_decorative", product: "6840" },
      { step: 5, nameKey: "step_topcoat", product: "4720" }
    ]
  },
  wooden_floor: {
    nameKey: "sys_wooden_floor",
    icon: "🪵",
    steps: [
      { step: 1, nameKey: "step_primer", product: "4180", note: "Concentrated, no dilution!" },
      { step: 2, nameKey: "step_mesh", product: "uninet", note: "Mandatory on wood" },
      { step: 3, nameKey: "step_leveling", product: "xplan", note: "Fiber-reinforced for flexible substrates" },
      { step: 4, nameKey: "step_adhesive", product: "3130", note: "S1 flexible" },
      { step: 5, nameKey: "step_grout", product: "sc" },
      { step: 6, nameKey: "step_silicone", product: "supersil" }
    ]
  },
  fireplace: {
    nameKey: "sys_fireplace",
    icon: "🔥",
    steps: [
      { step: 1, nameKey: "step_primer", product: "4180" },
      { step: 2, nameKey: "step_adhesive", product: "6920", note: "Heat-resistant up to 1000°C" },
      { step: 3, nameKey: "step_grout", product: "sce" },
      { step: 4, nameKey: "step_silicone", product: "supersil" }
    ]
  },
  heated_floor: {
    nameKey: "sys_heated_floor",
    icon: "♨️",
    steps: [
      { step: 1, nameKey: "step_primer", product: "4180" },
      { step: 2, nameKey: "step_leveling", product: "xplan", note: "Suitable for heated floors" },
      { step: 3, nameKey: "step_adhesive", product: "3130", note: "S1 compensates thermal expansion" },
      { step: 4, nameKey: "step_grout", product: "sce" },
      { step: 5, nameKey: "step_silicone", product: "supersil", note: "At perimeter expansion joints" }
    ]
  }
};

// ============================================================
// HAZARD PHRASES (Safety)
// ============================================================

const HAZARD_INFO = {
  H314: { icon: "☠️", textKey: "haz_H314" }, // Severe skin burns / eye damage
  H315: { icon: "⚠️", textKey: "haz_H315" }, // Skin irritation
  H317: { icon: "⚠️", textKey: "haz_H317" }, // Allergic skin reaction
  H318: { icon: "⚠️", textKey: "haz_H318" }, // Serious eye damage
  H319: { icon: "⚠️", textKey: "haz_H319" }  // Eye irritation
};

const PPE_RECOMMENDATION = {
  textKey: "ppe_text"
  // Gloves, safety goggles, P2 mask
};

// Export for use
if (typeof module !== 'undefined') {
  module.exports = { MIRA_PRODUCTS, DECISION_TREE, SYSTEM_SOLUTIONS, HAZARD_INFO, PPE_RECOMMENDATION };
}
