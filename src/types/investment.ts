export interface QuestionnaireData {
  age: number;
  investmentFor: 'myself' | 'kids' | 'parents';
  investmentTerm: 'short-term' | 'long-term';
  investmentType: 'recurring' | 'lumpsum';
  frequency?: 'monthly' | 'fortnightly';
  amount: number;
  duration: number;
  currentCorpus?: number;
}

export interface InvestmentOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  minInvestment: number;
  expectedReturns: string;
  suitabilityScore: number;
  recommendedFor: string[];
}