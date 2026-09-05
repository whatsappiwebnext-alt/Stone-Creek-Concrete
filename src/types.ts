export interface ConcreteService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  recommendedThickness: string;
  typicalReinforcement: string;
  idealFinish: string;
  features: string[];
  imageUrl: string;
  category: "residential" | "commercial" | "decorative" | "structural";
}

export interface GalleryProject {
  id: string;
  title: string;
  category: "Driveways" | "Patios" | "Sidewalks" | "Decorative Concrete" | "Foundations" | "Commercial Projects";
  location: string;
  description: string;
  specs: string;
  finishType: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  projectType: string;
  comment: string;
  rating: number;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  projectAddress: string;
  projectType: string;
  projectSize: string;
  timeframe: string;
  description: string;
  hasPhoto: boolean;
  photoFileName?: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}
