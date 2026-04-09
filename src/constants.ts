export interface ServiceItem {
  name: string;
  price: string;
  duration?: string;
  description?: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
  note?: string;
}

export const SERVICES: Record<string, ServiceCategory> = {
  massage: {
    title: "Therapeutic Massage",
    items: [
      { name: "Signature Serene (80 mins)", price: "RM 180", description: "65 mins body + 15 mins face" },
      { name: "Signature Serene (110 mins)", price: "RM 220", description: "95 mins body + 15 mins face" },
      { name: "Signature Serene (140 mins)", price: "RM 260", description: "125 mins body + 15 mins face" },
      { name: "Foot Reflexology (60 mins)", price: "RM 168", description: "20 mins head & shoulders" },
      { name: "Foot Reflexology (90 mins)", price: "RM 218", description: "30 mins head & shoulders" },
      { name: "Back Massage (60 mins)", price: "RM 168" },
      { name: "Back Massage (90 mins)", price: "RM 218", description: "60 mins back, 30 mins front" },
      { name: "Pre-Natal Massage (80 mins)", price: "RM 180", description: "Inc 15 mins face" },
      { name: "Pre-Natal Massage (110 mins)", price: "RM 220" },
      { name: "Pre-Natal Massage (140 mins)", price: "RM 260" },
    ],
    note: "*Please prepare mattress / comforter to massage on the floor"
  },
  nailCare: {
    title: "Professional Nail Care",
    items: [
      { name: "Manicure Express", price: "RM 55", description: "Cut, shape, buffing, vitamin" },
      { name: "Manicure Basic", price: "RM 65", description: "Cut, shape, cuticle trim, massage, vitamin" },
      { name: "Manicure Signature", price: "RM 80", description: "Cut, shape, cuticle trim, buffing, massage, vitamin" },
      { name: "Pedicure Express", price: "RM 65" },
      { name: "Pedicure Basic", price: "RM 75" },
      { name: "Pedicure Signature", price: "RM 90" },
      { name: "Combo Signature Mani Pedi", price: "RM 170" },
      { name: "Private Tool Kit", price: "RM 300", description: "Your own set of tools, used only on you" },
    ]
  },
  facial: {
    title: "Advanced Facial Treatments",
    items: [
      { name: "Deep Facial", price: "RM 180", description: "Cleanse, scrub, extraction, face lifting, mask, toner, moisturiser" },
      { name: "Express Facial", price: "RM 150", description: "Cleanse, scrub, mask, toner, moisturiser" },
    ]
  },
  waxing: {
    title: "Gentle Waxing Services",
    items: [
      { name: "Back", price: "RM 195", description: "Full back, full arm, underarm" },
      { name: "The Limb-O", price: "RM 225", description: "Full leg, full arm, underarm" },
      { name: "Front", price: "RM 216", description: "Stomach, chest + nipples, underarm, full arm" },
      { name: "Face & Pit-Stop", price: "RM 185", description: "Full face, underarm" },
    ]
  },
  packages: {
    title: "Exclusive Wellness Packages",
    items: [
      { name: "Body & Nails", price: "RM 350", duration: "2h 30m", description: "80 mins massage + Signature mani pedi" },
      { name: "Body & Facial", price: "RM 360", duration: "2h 30m", description: "80 mins massage + Deep facial" },
      { name: "180° Renewal", price: "RM 530", duration: "4h", description: "80 mins massage + Deep facial + Signature mani pedi" },
      { name: "Massage Renewal", price: "RM 385", duration: "2h 35m", description: "80 mins massage + Tungku & tummy + Body scrub" },
    ]
  }
};
