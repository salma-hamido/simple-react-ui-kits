import React, { useState } from 'react';
import { 
  Button, 
  Input, 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  Badge,
  useToggle,
  useLocalStorage,
  cn,
  formatCurrency,
  formatDate
} from './src/index';

function ExampleApp() {
  const [email, setEmail] = useState('');
  const [isVisible, toggleVisible] = useToggle(false);
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Simple React UI Kit Examples</h1>
      
      {/* Button Examples */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="space-x-4 space-y-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button loading>Loading Button</Button>
        </div>
        
        <div className="mt-4 space-x-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Input Examples */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Inputs</h2>
        <div className="space-y-4 max-w-md">
          <Input 
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            helperText="We'll never share your email"
          />
          
          <Input 
            label="Password"
            placeholder="Enter your password"
            type="password"
            error="Password is required"
          />
          
          <Input 
            label="Search"
            placeholder="Search..."
            leftIcon={<span>🔍</span>}
          />
        </div>
      </section>

      {/* Card Examples */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Card Title</h3>
              <p className="text-sm text-gray-600">Card subtitle</p>
            </CardHeader>
            <CardBody>
              <p>This is the card content. You can put any content here.</p>
            </CardBody>
            <CardFooter>
              <Button variant="primary" size="sm">Action</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardBody>
              <h3 className="text-lg font-semibold mb-2">Simple Card</h3>
              <p>This card only has a body section.</p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Badge Examples */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Badges</h2>
        <div className="space-x-4 space-y-4">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
        
        <div className="mt-4 space-x-4">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </section>

      {/* Hook Examples */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hooks</h2>
        <div className="space-y-4">
          <div>
            <Button onClick={toggleVisible}>
              {isVisible ? 'Hide' : 'Show'} Content
            </Button>
            {isVisible && (
              <p className="mt-2 p-4 bg-gray-100 rounded">
                This content is toggled using the useToggle hook!
              </p>
            )}
          </div>
          
          <div>
            <p>Current theme: <Badge variant="primary">{theme}</Badge></p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              Toggle Theme
            </Button>
          </div>
        </div>
      </section>

      {/* Utility Examples */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Utilities</h2>
        <div className="space-y-2">
          <p>Formatted currency: {formatCurrency(1234.56)}</p>
          <p>Formatted date: {formatDate(new Date())}</p>
          <p>Combined classes: <code className="bg-gray-100 px-2 py-1 rounded">
            {cn('text-red-500', 'font-bold', { 'underline': true })}
          </code></p>
        </div>
      </section>
    </div>
  );
}

export default ExampleApp; 