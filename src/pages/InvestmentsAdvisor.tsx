import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Question } from '../components/Question';
import { RecommendationCard } from '../components/RecommendationCard';
import { QuestionnaireData, InvestmentOption } from '../types/investment';

const investmentOptions: InvestmentOption[] = [
  {
    id: 'sip-equity',
    name: 'Equity Mutual Fund SIP',
    description: 'Systematic investment in diversified equity funds for long-term wealth creation',
    icon: '📈',
    riskLevel: 'Medium',
    minInvestment: 500,
    expectedReturns: '12-15% p.a.',
    suitabilityScore: 0,
    recommendedFor: [
      'Long-term investors',
      'Regular income earners',
      'Those seeking wealth creation'
    ]
  },
  {
    id: 'child-plan',
    name: 'Child Education Plan',
    description: 'Hybrid investment plan combining insurance and investment for child\'s future',
    icon: '👶',
    riskLevel: 'Low',
    minInvestment: 2000,
    expectedReturns: '8-10% p.a.',
    suitabilityScore: 0,
    recommendedFor: [
      'Parents planning for child\'s education',
      'Long-term systematic investors',
      'Those seeking insurance + investment'
    ]
  },
  {
    id: 'senior-fd',
    name: 'Senior Citizen Fixed Deposit',
    description: 'Special fixed deposit scheme with higher interest rates for senior citizens',
    icon: '👴',
    riskLevel: 'Low',
    minInvestment: 10000,
    expectedReturns: '7.5-8.5% p.a.',
    suitabilityScore: 0,
    recommendedFor: [
      'Senior citizens',
      'Conservative investors',
      'Those seeking regular income'
    ]
  },
  {
    id: 'balanced-fund',
    name: 'Balanced Advantage Fund',
    description: 'Dynamic asset allocation between equity and debt based on market conditions',
    icon: '⚖️',
    riskLevel: 'Medium',
    minInvestment: 1000,
    expectedReturns: '10-12% p.a.',
    suitabilityScore: 0,
    recommendedFor: [
      'First-time investors',
      'Risk-averse equity investors',
      'Those seeking moderate returns'
    ]
  },
  {
    id: 'gold-etf',
    name: 'Gold ETF',
    description: 'Electronic investment in gold without physical storage',
    icon: '💰',
    riskLevel: 'Medium',
    minInvestment: 1000,
    expectedReturns: '8-10% p.a.',
    suitabilityScore: 0,
    recommendedFor: [
      'Gold enthusiasts',
      'Portfolio diversification',
      'Long-term wealth preservation'
    ]
  }
];

export const InvestmentsAdvisor = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuestionnaireData>({
    age: 0,
    investmentFor: 'myself',
    investmentTerm: 'long-term',
    investmentType: 'recurring',
    amount: 0,
    duration: 0
  });

  const questions = [
    {
      question: "What's your age?",
      component: (
        <input
          type="number"
          value={data.age || ''}
          onChange={(e) => setData({ ...data, age: parseInt(e.target.value) })}
          className="w-full bg-gray-700 text-white rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your age"
        />
      ),
      isValid: () => data.age > 0
    },
    {
      question: "Who are you investing for?",
      component: (
        <div className="grid grid-cols-3 gap-4">
          {['myself', 'kids', 'parents'].map((option) => (
            <button
              key={option}
              onClick={() => setData({ ...data, investmentFor: option as any })}
              className={`p-4 rounded-lg transition-all ${
                data.investmentFor === option
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      ),
      isValid: () => Boolean(data.investmentFor)
    },
    {
      question: "What's your investment horizon?",
      component: (
        <div className="grid grid-cols-2 gap-4">
          {['short-term', 'long-term'].map((option) => (
            <button
              key={option}
              onClick={() => setData({ ...data, investmentTerm: option as any })}
              className={`p-4 rounded-lg transition-all ${
                data.investmentTerm === option
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {option.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>
      ),
      isValid: () => Boolean(data.investmentTerm)
    },
    {
      question: "How would you like to invest?",
      component: (
        <div className="grid grid-cols-2 gap-4">
          {['recurring', 'lumpsum'].map((option) => (
            <button
              key={option}
              onClick={() => setData({ ...data, investmentType: option as any })}
              className={`p-4 rounded-lg transition-all ${
                data.investmentType === option
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      ),
      isValid: () => Boolean(data.investmentType)
    },
    {
      question: data.investmentType === 'recurring' ? "Choose your investment frequency" : "Enter your lumpsum amount",
      component: data.investmentType === 'recurring' ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {['monthly', 'fortnightly'].map((option) => (
              <button
                key={option}
                onClick={() => setData({ ...data, frequency: option as any })}
                className={`p-4 rounded-lg transition-all ${
                  data.frequency === option
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
          <input
            type="number"
            value={data.amount || ''}
            onChange={(e) => setData({ ...data, amount: parseInt(e.target.value) })}
            className="w-full bg-gray-700 text-white rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount per installment"
          />
        </div>
      ) : (
        <input
          type="number"
          value={data.amount || ''}
          onChange={(e) => setData({ ...data, amount: parseInt(e.target.value) })}
          className="w-full bg-gray-700 text-white rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter lumpsum amount"
        />
      ),
      isValid: () => data.investmentType === 'recurring' ? (Boolean(data.frequency) && data.amount > 0) : data.amount > 0
    },
    {
      question: "For how many years do you want to invest?",
      component: (
        <input
          type="number"
          value={data.duration || ''}
          onChange={(e) => setData({ ...data, duration: parseInt(e.target.value) })}
          className="w-full bg-gray-700 text-white rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter number of years"
        />
      ),
      isValid: () => data.duration > 0
    }
  ];

  const getRecommendations = () => {
    return investmentOptions.map(option => {
      let score = 0;
      
      // Age-based scoring
      if (data.investmentFor === 'kids' && option.id === 'child-plan') score += 3;
      if (data.investmentFor === 'parents' && option.id === 'senior-fd') score += 3;
      
      // Term-based scoring
      if (data.investmentTerm === 'long-term' && option.riskLevel === 'Medium') score += 2;
      if (data.investmentTerm === 'short-term' && option.riskLevel === 'Low') score += 2;
      
      // Investment type scoring
      if (data.investmentType === 'recurring' && option.minInvestment <= data.amount) score += 2;
      if (data.investmentType === 'lumpsum' && option.id === 'balanced-fund') score += 1;
      
      return {
        ...option,
        suitabilityScore: score
      };
    })
    .sort((a, b) => b.suitabilityScore - a.suitabilityScore)
    .slice(0, 5);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Smart Investment Advisor
        </h1>
        
        <AnimatePresence mode="wait">
          {step < questions.length ? (
            <Question
              key={step}
              question={questions[step].question}
              onNext={() => setStep(step + 1)}
              canProgress={questions[step].isValid()}
            >
              {questions[step].component}
            </Question>
          ) : (
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-center text-white mb-8">
                Here are your personalized investment recommendations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getRecommendations().map((option, index) => (
                  <RecommendationCard key={option.id} option={option} index={index} />
                ))}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};