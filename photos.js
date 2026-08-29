// ============================================================
//  HANDI-WORK PHOTO LIST  —  this is the only file you need to
//  edit to add or remove photos from the website gallery.
//
//  TO ADD A PHOTO:
//  1. Put your photo in the "img" folder (e.g. new-kitchen.jpg)
//  2. Copy one of the lines below and change three things:
//        file:     the photo's file name
//        category: one of  "kitchens"  "bathrooms"  "tiling"  "decorating"
//        caption:  a short description shown under the photo
//  3. Make sure every line except the last one ends with a comma
//  4. Save this file and upload it (and the photo) to the website
//
//  TO REMOVE A PHOTO: delete its whole line.
//  The order below is the order photos appear on the page.
// ============================================================

const PHOTOS = [
  { file: "kitchen-grey-gloss.jpg",  category: "kitchens",  caption: "Grey gloss kitchen with exposed brick and metro tiles" },
  { file: "bathroom-brass-bath.jpg",  category: "bathrooms",  caption: "Brushed brass shower and bath filler" },
  { file: "tiling-green-bath.jpg",  category: "tiling",  caption: "Vertical-stack green tiling around bath and window" },
  { file: "kitchen-cream-range.jpg",  category: "kitchens",  caption: "Cream country kitchen with range cooker and glazed cabinets" },
  { file: "bathroom-walkin-shower.jpg",  category: "bathrooms",  caption: "Walk-in shower with black tray and combined vanity unit" },
  { file: "decorating-sage-bedroom.jpg",  category: "decorating",  caption: "Bedroom in sage green with louvre wardrobe doors" },
  { file: "kitchen-cube-splashback.jpg",  category: "kitchens",  caption: "Geometric cube splashback with under-cabinet lighting" },
  { file: "bathroom-black-shower.jpg",  category: "bathrooms",  caption: "Matt black shower set and heated towel rail" },
  { file: "tiling-grey-shower.jpg",  category: "tiling",  caption: "Textured grey large-format shower tiling" },
  { file: "kitchen-farmhouse-sink.jpg",  category: "kitchens",  caption: "Double farmhouse sink with pull-down mixer tap" },
  { file: "bathroom-shower-room.jpg",  category: "bathrooms",  caption: "Compact shower room with recessed storage niches" },
  { file: "decorating-panelling.jpg",  category: "decorating",  caption: "Period panelling, dresser and cornice in fresh white" },
  { file: "kitchen-herringbone.jpg",  category: "kitchens",  caption: "Herringbone splashback with angled extractor hood" },
  { file: "bathroom-towel-rail.jpg",  category: "bathrooms",  caption: "Matt black ladder towel rail beside the walk-in shower" },
  { file: "tiling-green-detail.jpg",  category: "tiling",  caption: "Handmade-effect green tiles, brick-bond detail" },
  { file: "kitchen-glazed-cabinets.jpg",  category: "kitchens",  caption: "Glazed wall cabinets over bevelled metro tiling" },
  { file: "bathroom-brass-shower.jpg",  category: "bathrooms",  caption: "Brass rainfall shower column on porcelain tiling" },
  { file: "decorating-cornice.jpg",  category: "decorating",  caption: "Ornate cornice work picked out in white" },
  { file: "kitchen-walnut-worktop.jpg",  category: "kitchens",  caption: "Induction hob and integrated oven on walnut worktop" },
  { file: "tiling-wall-hung-wc.jpg",  category: "tiling",  caption: "Wall-hung WC with tiled cistern boxing" }
];
