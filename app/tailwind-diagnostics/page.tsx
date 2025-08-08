"use client";

import { useEffect, useState } from "react";

interface StyleDiagnostic {
  element: string;
  property: string;
  computedValue: string;
  expectedValue: string;
  matches: boolean;
  overridingRules: Array<{
    selector: string;
    property: string;
    value: string;
    source: string;
    specificity: number;
  }>;
}

export default function TailwindDiagnostics() {
  const [diagnostics, setDiagnostics] = useState<StyleDiagnostic[]>([]);
  const [overallStatus, setOverallStatus] = useState<'checking' | 'pass' | 'fail'>('checking');

  useEffect(() => {
    // Wait for styles to load
    setTimeout(() => {
      runDiagnostics();
    }, 1000);
  }, []);

  const runDiagnostics = () => {
    const results: StyleDiagnostic[] = [];
    
    // Test red card
    const redCard = document.getElementById('red-test-card');
    if (redCard) {
      const computedStyle = window.getComputedStyle(redCard);
      
      results.push({
        element: '#red-test-card',
        property: 'background-color',
        computedValue: computedStyle.backgroundColor,
        expectedValue: 'rgb(239, 68, 68)', // bg-red-500
        matches: computedStyle.backgroundColor === 'rgb(239, 68, 68)',
        overridingRules: findOverridingRules(redCard, 'background-color')
      });

      results.push({
        element: '#red-test-card',
        property: 'color',
        computedValue: computedStyle.color,
        expectedValue: 'rgb(255, 255, 255)', // text-white
        matches: computedStyle.color === 'rgb(255, 255, 255)',
        overridingRules: findOverridingRules(redCard, 'color')
      });

      results.push({
        element: '#red-test-card',
        property: 'padding',
        computedValue: computedStyle.padding,
        expectedValue: '16px', // p-4
        matches: computedStyle.padding === '16px' || computedStyle.paddingTop === '16px',
        overridingRules: findOverridingRules(redCard, 'padding')
      });

      results.push({
        element: '#red-test-card',
        property: 'border-radius',
        computedValue: computedStyle.borderRadius,
        expectedValue: '8px', // rounded-lg
        matches: computedStyle.borderRadius === '8px',
        overridingRules: findOverridingRules(redCard, 'border-radius')
      });
    }

    // Test color bars
    ['blue-bar', 'green-bar', 'yellow-bar'].forEach((id, index) => {
      const element = document.getElementById(id);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        const expectedColors = ['rgb(37, 99, 235)', 'rgb(34, 197, 94)', 'rgb(250, 204, 21)'];
        
        results.push({
          element: `#${id}`,
          property: 'background-color',
          computedValue: computedStyle.backgroundColor,
          expectedValue: expectedColors[index],
          matches: computedStyle.backgroundColor === expectedColors[index],
          overridingRules: findOverridingRules(element, 'background-color')
        });
      }
    });

    setDiagnostics(results);
    setOverallStatus(results.every(r => r.matches) ? 'pass' : 'fail');
  };

  const findOverridingRules = (element: Element, property: string) => {
    const rules: Array<{
      selector: string;
      property: string;
      value: string;
      source: string;
      specificity: number;
    }> = [];

    try {
      // Get all stylesheets
      for (let i = 0; i < document.styleSheets.length; i++) {
        const styleSheet = document.styleSheets[i];
        try {
          const cssRules = styleSheet.cssRules || styleSheet.rules;
          if (cssRules) {
            for (let j = 0; j < cssRules.length; j++) {
              const rule = cssRules[j] as CSSStyleRule;
              if (rule.style && rule.selectorText) {
                try {
                  if (element.matches(rule.selectorText) && rule.style.getPropertyValue(property)) {
                    rules.push({
                      selector: rule.selectorText,
                      property: property,
                      value: rule.style.getPropertyValue(property),
                      source: styleSheet.href || 'inline',
                      specificity: calculateSpecificity(rule.selectorText)
                    });
                  }
                } catch (e) {
                  // Ignore invalid selectors
                }
              }
            }
          }
        } catch (e) {
          // Ignore CORS errors for external stylesheets
        }
      }
    } catch (e) {
      console.warn('Could not analyze CSS rules:', e);
    }

    return rules.sort((a, b) => b.specificity - a.specificity);
  };

  const calculateSpecificity = (selector: string): number => {
    // Simple specificity calculation
    const ids = (selector.match(/#/g) || []).length * 100;
    const classes = (selector.match(/\./g) || []).length * 10;
    const elements = (selector.match(/[a-zA-Z]/g) || []).length;
    return ids + classes + elements;
  };

  const getStatusBadge = () => {
    switch (overallStatus) {
      case 'checking':
        return <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg">🔍 Checking Tailwind utilities...</div>;
      case 'pass':
        return <div className="bg-green-500 text-white px-4 py-2 rounded-lg">✅ Tailwind utilities have precedence</div>;
      case 'fail':
        return <div className="bg-red-500 text-white px-4 py-2 rounded-lg">❌ CSS overrides detected</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Tailwind CSS Diagnostics</h1>
        
        {/* Status Badge */}
        <div className="mb-8">
          {getStatusBadge()}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Test Elements */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Test Elements</h2>
            
            {/* Red Test Card */}
            <div id="red-test-card" className="bg-red-500 text-white p-4 rounded-lg shadow-lg max-w-md">
              <p className="text-xl font-bold">Red Test Card</p>
              <p className="mt-2">This should be bright red with white text.</p>
            </div>

            {/* Color Bars */}
            <div className="space-y-2">
              <div id="blue-bar" className="bg-blue-600 p-3 rounded text-white text-sm">Blue Bar Test</div>
              <div id="green-bar" className="bg-green-500 p-3 rounded text-white text-sm">Green Bar Test</div>
              <div id="yellow-bar" className="bg-yellow-400 text-black p-3 rounded text-sm">Yellow Bar Test</div>
            </div>

            <button 
              onClick={runDiagnostics}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Re-run Diagnostics
            </button>
          </div>

          {/* Diagnostics Report */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Diagnostics Report</h2>
            
            <div className="space-y-4">
              {diagnostics.map((diagnostic, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{diagnostic.element} - {diagnostic.property}</h3>
                    <span className={`px-2 py-1 rounded text-sm ${
                      diagnostic.matches ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {diagnostic.matches ? '✅ Match' : '❌ Override'}
                    </span>
                  </div>
                  
                  <div className="text-sm space-y-1">
                    <div><strong>Expected:</strong> {diagnostic.expectedValue}</div>
                    <div><strong>Computed:</strong> {diagnostic.computedValue}</div>
                  </div>

                  {diagnostic.overridingRules.length > 0 && (
                    <div className="mt-3">
                      <h4 className="font-medium text-sm mb-2">Overriding Rules:</h4>
                      <div className="space-y-1">
                        {diagnostic.overridingRules.map((rule, ruleIndex) => (
                          <div key={ruleIndex} className="bg-gray-50 p-2 rounded text-xs">
                            <div><strong>Selector:</strong> {rule.selector}</div>
                            <div><strong>Value:</strong> {rule.value}</div>
                            <div><strong>Source:</strong> {rule.source}</div>
                            <div><strong>Specificity:</strong> {rule.specificity}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS Import Order Check */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">CSS Import Analysis</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Loaded Stylesheets (in order):</h3>
            <div className="space-y-2">
              {Array.from(document.styleSheets).map((sheet, index) => (
                <div key={index} className="text-sm bg-gray-50 p-2 rounded">
                  <strong>#{index + 1}:</strong> {sheet.href || 'Inline styles'}
                  {sheet.href && sheet.href.includes('tailwind') && (
                    <span className="ml-2 text-blue-600 font-medium">(Tailwind detected)</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
