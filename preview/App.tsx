import React, { useState, createContext, useContext } from 'react';
import { Button } from '../src/components/Button';
import { Card, CardHeader, CardBody, CardFooter } from '../src/components/Card';
import { Input } from '../src/components/Input';
import { Badge } from '../src/components/Badge';

// Theme Context
interface ThemeContextType {
  radius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  colorPalette: 'blue' | 'green' | 'purple' | 'red' | 'orange' | 'gray' | 'pink' | 'indigo' | 'teal' | 'yellow' | 'emerald' | 'rose';
  size: 'sm' | 'md' | 'lg';
}

const ThemeContext = createContext<ThemeContextType>({
  radius: 'md',
  colorPalette: 'blue',
  size: 'md',
});

const useTheme = () => useContext(ThemeContext);

// Theme Controls Component
interface ThemeControlsProps {
  radius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  setRadius: (radius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full') => void;
  colorPalette: 'blue' | 'green' | 'purple' | 'red' | 'orange' | 'gray' | 'pink' | 'indigo' | 'teal' | 'yellow' | 'emerald' | 'rose';
  setColorPalette: (colorPalette: 'blue' | 'green' | 'purple' | 'red' | 'orange' | 'gray' | 'pink' | 'indigo' | 'teal' | 'yellow' | 'emerald' | 'rose') => void;
  size: 'sm' | 'md' | 'lg';
  setSize: (size: 'sm' | 'md' | 'lg') => void;
}

const ThemeControls: React.FC<ThemeControlsProps> = ({
  radius,
  setRadius,
  colorPalette,
  setColorPalette,
  size,
  setSize
}) => {

  const radiusOptions: Array<{ value: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'; label: string; class: string }> = [
    { value: 'none', label: 'None', class: 'rounded-none' },
    { value: 'sm', label: 'Small', class: 'rounded-sm' },
    { value: 'md', label: 'Medium', class: 'rounded-md' },
    { value: 'lg', label: 'Large', class: 'rounded-lg' },
    { value: 'xl', label: 'Extra Large', class: 'rounded-xl' },
    { value: 'full', label: 'Full', class: 'rounded-full' },
  ];

  const colorOptions: Array<{ value: 'blue' | 'green' | 'purple' | 'red' | 'orange' | 'gray' | 'pink' | 'indigo' | 'teal' | 'yellow' | 'emerald' | 'rose'; label: string; class: string; bgClass: string }> = [
    { value: 'blue', label: 'Blue', class: 'bg-blue-500', bgClass: 'bg-blue-600' },
    { value: 'green', label: 'Green', class: 'bg-green-500', bgClass: 'bg-green-600' },
    { value: 'purple', label: 'Purple', class: 'bg-purple-500', bgClass: 'bg-purple-600' },
    { value: 'red', label: 'Red', class: 'bg-red-500', bgClass: 'bg-red-600' },
    { value: 'orange', label: 'Orange', class: 'bg-orange-500', bgClass: 'bg-orange-600' },
    { value: 'gray', label: 'Gray', class: 'bg-gray-500', bgClass: 'bg-gray-600' },
    { value: 'pink', label: 'Pink', class: 'bg-pink-500', bgClass: 'bg-pink-600' },
    { value: 'indigo', label: 'Indigo', class: 'bg-indigo-500', bgClass: 'bg-indigo-600' },
    { value: 'teal', label: 'Teal', class: 'bg-teal-500', bgClass: 'bg-teal-600' },
    { value: 'yellow', label: 'Yellow', class: 'bg-yellow-500', bgClass: 'bg-yellow-600' },
    { value: 'emerald', label: 'Emerald', class: 'bg-emerald-500', bgClass: 'bg-emerald-600' },
    { value: 'rose', label: 'Rose', class: 'bg-rose-500', bgClass: 'bg-rose-600' },
  ];

  const sizeOptions: Array<{ value: 'sm' | 'md' | 'lg'; label: string }> = [
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
  ];

  return (
    <div className="space-y-6">
      {/* Radius Control */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Border Radius</h3>
        <div className="grid grid-cols-3 gap-2">
          {radiusOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setRadius(option.value)}
              className={`p-2 text-xs border ${
                radius === option.value
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              } ${option.class} transition-colors`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Color Palette Control */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Color Palette</h3>
        <div className="grid grid-cols-6 gap-2">
          {colorOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setColorPalette(option.value)}
              className={`w-7 h-7 rounded-full ${option.class} border-2 transition-all ${
                colorPalette === option.value
                  ? 'border-gray-800 scale-110 shadow-lg'
                  : 'border-gray-200 hover:border-gray-400 hover:scale-100'
              }`}
              title={option.label}
            />
          ))}
        </div>
      </div>

      {/* Size Control */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Size</h3>
        <div className="grid grid-cols-3 gap-2">
          {sizeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSize(option.value)}
              className={`p-2 text-xs border ${
                size === option.value
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              } rounded transition-colors`}
            >
              {option.label}
    </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Playground Component
const Playground: React.FC = () => {
  const { radius, colorPalette, size } = useTheme();

  const getColorClasses = (palette: string) => {
    const colors = {
      blue: {
        primary: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        input: 'focus:border-blue-500 focus:ring-blue-500',
        card: 'border-gray-200',
        badgePrimary: 'bg-blue-600 text-white',
      },
      green: {
        primary: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        input: 'focus:border-green-500 focus:ring-green-500',
        card: 'border-gray-200',
        badgePrimary: 'bg-green-600 text-white',
      },
      purple: {
        primary: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        input: 'focus:border-purple-500 focus:ring-purple-500',
        card: 'border-gray-200',
        badgePrimary: 'bg-purple-600 text-white',
      },
      red: {
        primary: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        input: 'focus:border-red-500 focus:ring-red-500',
        card: 'border-gray-200',
        badgePrimary: 'bg-red-600 text-white',
      },
      orange: {
        primary: 'bg-orange-600 hover:bg-orange-700 focus:ring-orange-500',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        input: 'focus:border-orange-500 focus:ring-orange-500',
        card: 'border-gray-200',
        badgePrimary: 'bg-orange-600 text-white',
      },
      gray: {
        primary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        input: 'focus:border-gray-500 focus:ring-gray-500',
        card: 'border-gray-200',
        badgePrimary: 'bg-gray-600 text-white',
      },
      pink: {
        primary: 'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        input: 'focus:border-pink-500 focus:ring-pink-500',
        card: 'border-gray-200',
        badgePrimary: 'bg-pink-600 text-white',
      },
      indigo: {
        primary: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        input: 'focus:border-indigo-500 focus:ring-indigo-500',
        card: 'border-gray-200',
        badgePrimary: 'bg-indigo-600 text-white',
      },
      teal: {
        primary: 'bg-teal-600 hover:bg-teal-700 focus:ring-teal-500',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        input: 'focus:border-teal-500 focus:ring-teal-500',
        card: 'border-gray-200',
        badgePrimary: 'bg-teal-600 text-white',
      },
      yellow: {
        primary: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        input: 'focus:border-yellow-500 focus:ring-yellow-500',
        card: 'border-gray-200',
        badgePrimary: 'bg-yellow-600 text-white',
      },
      emerald: {
        primary: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        input: 'focus:border-emerald-500 focus:ring-emerald-500',
        card: 'border-gray-200',
        badgePrimary: 'bg-emerald-600 text-white',
      },
      rose: {
        primary: 'bg-rose-600 hover:bg-rose-700 focus:ring-rose-500',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        input: 'focus:border-rose-500 focus:ring-rose-500',
        card: 'border-gray-200',
        badgePrimary: 'bg-rose-600 text-white',
      },
    };
    return colors[palette as keyof typeof colors];
  };

  const getRadiusClass = (radius: string) => {
    const radiusMap = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    };
    return radiusMap[radius as keyof typeof radiusMap];
  };

  const colorClasses = getColorClasses(colorPalette);
  const radiusClass = getRadiusClass(radius);

  return (
    <div className="space-y-8">
      {/* Buttons Section */}
      <Card className={`${radiusClass} ${colorClasses.card}`}>
        <CardHeader>
          <h3 className="text-lg font-semibold">Buttons</h3>
          <p className="text-sm text-gray-600">Different button variants and sizes</p>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size={size} radius={radius} className={colorClasses.primary}>
                Primary
              </Button>
              <Button variant="secondary" size={size} radius={radius}>
                Secondary
              </Button>
              <Button variant="outline" size={size} radius={radius}>
                Outline
              </Button>
              <Button variant="ghost" size={size} radius={radius}>
                Ghost
              </Button>
              <Button variant="danger" size={size} radius={radius}>
                Danger
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size={size} radius={radius} className={colorClasses.primary} loading>
                Loading
              </Button>
              <Button variant="primary" size={size} radius={radius} className={colorClasses.primary} disabled>
                Disabled
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Inputs Section */}
      <Card className={`${radiusClass} ${colorClasses.card}`}>
        <CardHeader>
          <h3 className="text-lg font-semibold">Inputs</h3>
          <p className="text-sm text-gray-600">Form inputs with different states</p>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Small Input"
                placeholder="Small size..."
                size="sm"
                radius={radius}
                className={colorClasses.input}
              />
              <Input
                label="Medium Input"
                placeholder="Medium size..."
                size="md"
                radius={radius}
                className={colorClasses.input}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Large Input"
                placeholder="Large size..."
                size="lg"
                radius={radius}
                className={colorClasses.input}
              />
              <Input
                label="With Helper Text"
                placeholder="Enter your email..."
                helperText="We'll never share your email with anyone else"
                size={size}
                radius={radius}
                className={colorClasses.input}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Error State"
                placeholder="Enter password..."
                error="Password must be at least 8 characters"
                size={size}
                radius={radius}
                className={colorClasses.input}
              />
              <Input
                label="Disabled Input"
                placeholder="This field is disabled"
                disabled
                size={size}
                radius={radius}
                className={colorClasses.input}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="With Left Icon"
                placeholder="Search..."
                leftIcon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
                size={size}
                radius={radius}
                className={colorClasses.input}
              />
              <Input
                label="With Right Icon"
                placeholder="Enter amount..."
                rightIcon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                }
                size={size}
                radius={radius}
                className={colorClasses.input}
              />
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Cards Section */}
      <Card className={`${radiusClass} ${colorClasses.card}`}>
        <CardHeader>
          <h3 className="text-lg font-semibold">Cards</h3>
          <p className="text-sm text-gray-600">Card components with different content</p>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className={`${radiusClass} ${colorClasses.card}`}>
              <CardHeader>
                <h4 className="font-semibold">Card Title</h4>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">This is a sample card with some content.</p>
              </CardBody>
              <CardFooter>
                <Button variant="primary" size="sm" radius={radius} className={colorClasses.primary}>
                  Action
                </Button>
              </CardFooter>
            </Card>
            <Card className={`${radiusClass} ${colorClasses.card}`}>
              <CardHeader>
                <h4 className="font-semibold">Another Card</h4>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">Another card with different content.</p>
                <div className="mt-3">
                  <Badge variant="primary" className={colorClasses.badgePrimary}>
                    Badge
                  </Badge>
                </div>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>

      {/* Badges Section */}
      <Card className={`${radiusClass} ${colorClasses.card}`}>
        <CardHeader>
          <h3 className="text-lg font-semibold">Badges</h3>
          <p className="text-sm text-gray-600">Different badge variants</p>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-3">
            <Badge variant="primary" className={colorClasses.badgePrimary}>
              Primary
            </Badge>
            <Badge variant="secondary">
              Secondary
            </Badge>
            <Badge variant="success">
              Success
            </Badge>
            <Badge variant="danger">
              Danger
            </Badge>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <Badge 
              variant="primary" 
              className={colorClasses.badgePrimary}
              leftIcon={
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              }
            >
              With Left Icon
            </Badge>
            <Badge 
              variant="success"
              rightIcon={
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              }
            >
              With Right Icon
            </Badge>
            <Badge 
              variant="warning"
              leftIcon={
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              }
              rightIcon={
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              }
            >
              Both Icons
            </Badge>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

function App() {
  const [radius, setRadius] = useState<'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');
  const [colorPalette, setColorPalette] = useState<'blue' | 'green' | 'purple' | 'red' | 'orange' | 'gray' | 'pink' | 'indigo' | 'teal' | 'yellow' | 'emerald' | 'rose'>('blue');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');

  return (
    <ThemeContext.Provider value={{ radius, colorPalette, size }}>
      <div className="min-h-screen bg-gray-50">
        <div className="flex h-screen">
          {/* Main Content Area */}
          <div className="flex-1 overflow-auto p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Simple React UI Kit</h1>
                <p className="text-lg text-gray-600">Interactive playground with theme controls</p>
              </div>
              
              <Playground />
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">Theme Controls</h2>
              <ThemeControls 
                radius={radius}
                setRadius={setRadius}
                colorPalette={colorPalette}
                setColorPalette={setColorPalette}
                size={size}
                setSize={setSize}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App; 