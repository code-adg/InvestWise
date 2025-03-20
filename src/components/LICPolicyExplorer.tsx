import React, { useEffect, useState } from 'react';
import { PiggyBank, Wallet, Clock, Shield, Landmark, Building2, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Policy {
  title: string;
  link: string;
  description: string;
}

interface PolicyCategories {
  [key: string]: Policy[];
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Endowment Plans':
      return Shield;
    case 'Money Back Plans':
      return Wallet;
    case 'Term Insurance Plans':
      return Clock;
    case 'Pension Plans':
      return Landmark;
    default:
      return PiggyBank;
  }
};

export function LICPolicyExplorer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [policies, setPolicies] = useState<PolicyCategories>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      const response = await fetch('http://localhost:5000/lic_policies');
      const data = await response.json();
      setPolicies(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch policies. Please try again later.');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4 bg-red-100 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {Object.entries(policies).map(([category, categoryPolicies]) => (
        <div key={category} className="space-y-6">
          <div className="flex items-center gap-3">
            <div className={`rounded-full w-12 h-12 flex items-center justify-center ${
              isDark ? 'bg-blue-900/30' : 'bg-blue-100'
            }`}>
              {React.createElement(getCategoryIcon(category), {
                className: `h-6 w-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`
              })}
            </div>
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {category}
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categoryPolicies.map((policy, index) => (
              <a
                key={`${category}-${index}`}
                href={policy.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800' 
                    : 'bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-white'
                } shadow-lg overflow-hidden`}
              >
                {/* LIC Logo */}
                <div className={`absolute top-4 right-4 w-10 h-10 rounded-full ${
                  isDark ? 'bg-gray-700' : 'bg-blue-100'
                } flex items-center justify-center`}>
                  <Building2 className={`w-5 h-5 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>

                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`mt-1 rounded-full p-2 ${
                      isDark ? 'bg-gray-700' : 'bg-blue-100'
                    }`}>
                      {React.createElement(getCategoryIcon(category), {
                        className: `h-5 w-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`
                      })}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {policy.title}
                      </h3>
                      <p className={`${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      } line-clamp-2`}>
                        {'Explore this LIC policy'}
                      </p>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className={`mt-4 flex items-center text-sm font-medium ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    View Details
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute inset-0 pointer-events-none ${
                  isDark ? 'opacity-10' : 'opacity-5'
                }`}>
                  <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-blue-500 blur-2xl"></div>
                  <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-blue-500 blur-2xl"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}