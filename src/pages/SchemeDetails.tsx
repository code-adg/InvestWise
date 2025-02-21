import React from 'react';
import { useParams } from 'react-router-dom';
import { Calculator } from 'lucide-react';

export const SchemeDetails = () => {
  const { id } = useParams();

  const schemeInfo = {
    sip: {
      title: 'Systematic Investment Plan (SIP)',
      description: 'A Systematic Investment Plan (SIP) is an investment strategy where you invest a fixed amount regularly in mutual funds. This disciplined approach helps in wealth creation over time through the power of compounding.',
      features: [
        'Regular investment intervals (monthly, quarterly)',
        'Rupee cost averaging benefits',
        'Start with as little as ₹500 per month',
        'Automated investment process',
        'Long-term wealth creation'
      ]
    },
    swp: {
      title: 'Systematic Withdrawal Plan (SWP)',
      description: 'A Systematic Withdrawal Plan allows you to withdraw a fixed amount from your mutual fund investments at regular intervals. It\'s ideal for generating regular income from your investments.',
      features: [
        'Regular withdrawal facility',
        'Flexibility in withdrawal amount',
        'Tax-efficient withdrawals',
        'Better than traditional fixed deposits',
        'Maintain investment growth potential'
      ]
    },
    fd: {
      title: 'Fixed Deposit',
      description: 'Fixed Deposits are secure investment instruments offered by banks that provide guaranteed returns. They\'re ideal for risk-averse investors looking for steady returns.',
      features: [
        'Guaranteed returns',
        'Flexible tenure options',
        'Higher interest rates than savings accounts',
        'Loan facility against FD',
        'Safe and secure investment'
      ]
    },
    rd: {
      title: 'Recurring Deposit',
      description: 'Recurring Deposits help you save regularly by depositing a fixed amount monthly. It\'s perfect for building a savings habit while earning guaranteed returns.',
      features: [
        'Monthly investment discipline',
        'Fixed interest rates',
        'Flexible tenure',
        'No market risk',
        'Ideal for short-term goals'
      ]
    },
    'post-office': {
      title: 'Post Office Schemes',
      description: 'Post Office Savings Schemes are government-backed investment options offering secure returns. They include various schemes catering to different investment needs.',
      features: [
        'Government backed security',
        'Higher interest rates',
        'Tax benefits available',
        'Wide accessibility',
        'Multiple scheme options'
      ]
    },
    pension: {
      title: 'Pension Scheme',
      description: 'Pension schemes are long-term retirement savings products that help you build a corpus for your retirement years while providing tax benefits.',
      features: [
        'Regular pension post retirement',
        'Tax benefits on investment',
        'Life coverage included',
        'Multiple investment options',
        'Inflation protection'
      ]
    },
    sukanya: {
      title: 'Sukanya Samriddhi Yojana',
      description: 'A government-backed savings scheme for girl children that offers high interest rates and tax benefits. It\'s designed to secure the financial future of girl children.',
      features: [
        'Higher interest rates',
        'Tax-free returns',
        'Government backed scheme',
        'Long-term savings plan',
        'Partial withdrawal facility'
      ]
    },
    'senior-citizen': {
      title: 'Senior Citizen Savings Scheme',
      description: 'A government-sponsored savings scheme exclusively for senior citizens that offers higher interest rates and regular income options.',
      features: [
        'Higher interest rates than FDs',
        'Regular quarterly interest payout',
        'Tax benefits available',
        'Secure government backing',
        'Simple documentation'
      ]
    }
  };

  const currentScheme = schemeInfo[id as keyof typeof schemeInfo];

  if (!currentScheme) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Scheme not found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Scheme Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {currentScheme.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {currentScheme.description}
        </p>
      </div>

      {/* Features */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Key Features</h2>
        <ul className="space-y-4">
          {currentScheme.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-500 dark:text-blue-400 mr-3">•</span>
              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Calculator Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
        <div className="flex items-center mb-6">
          <Calculator className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Investment Calculator</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Use our calculator to plan your investment and estimate returns.
        </p>
        {/* Calculator will be implemented in the next iteration */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center">
          <p className="text-gray-500 dark:text-gray-400">Calculator coming soon...</p>
        </div>
      </div>
    </div>
  );
};