# Simple React UI Kit

A lightweight, customizable React component library built with TypeScript and Tailwind CSS.

## 🚀 Live Demo

<a href="https://salma-hamido.github.io/simple-react-ui-kits/" target="_blank" rel="noopener noreferrer">**View the interactive playground →**</a>

Experience all components with real-time theme customization, including:

- 🎨 **12 Color Palettes**: Blue, Green, Purple, Red, Orange, Gray, Pink, Indigo, Teal, Yellow, Emerald, Rose
- 📐 **6 Border Radius Options**: None, Small, Medium, Large, Extra Large, Full
- 📏 **3 Size Variants**: Small, Medium, Large
- 🔄 **Real-time Updates**: See changes instantly as you adjust theme controls

## Features

- 🎨 **Modern Design**: Clean and accessible components
- 📦 **TypeScript**: Full TypeScript support with proper type definitions
- 🎯 **Customizable**: Easy to customize with Tailwind CSS classes
- 🚀 **Lightweight**: Minimal bundle size with tree-shaking support
- ♿ **Accessible**: Built with accessibility in mind

## Installation

```bash
npm install simple-react-ui-kits
# or
yarn add simple-react-ui-kits
```

**Note**: This package requires Tailwind CSS to be installed in your project for styling to work properly.

## React Version Compatibility

This library is compatible with React versions 16.8.0 and above, including:

- ✅ React 16.8+ (with hooks support)
- ✅ React 17.x
- ✅ React 18.x
- ✅ React 19.x

**Important**: React 16.8.0 is the minimum version required because this library uses React hooks. If you're using an older version of React, you'll need to upgrade to at least 16.8.0.

## Usage

```tsx
import { Button, Input, Card, Badge } from "simple-react-ui-kits";

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        Click me
      </Button>

      <Input label="Email" placeholder="Enter your email" type="email" />

      <Card>
        <CardHeader>
          <h3>Card Title</h3>
        </CardHeader>
        <CardBody>
          <p>Card content goes here</p>
        </CardBody>
      </Card>

      <Badge variant="success">Success</Badge>
    </div>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from "simple-react-ui-kits";

// Variants: primary, secondary, outline, ghost, danger
// Sizes: sm, md, lg
<Button variant="primary" size="md" loading={false}>
  Click me
</Button>;
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean
- All standard button HTML attributes

### Input

A flexible input component with support for labels, errors, and icons.

```tsx
import { Input } from "simple-react-ui-kits";

<Input
  label="Email"
  placeholder="Enter your email"
  error="Please enter a valid email"
  helperText="We'll never share your email"
/>;
```

**Props:**

- `label`: string
- `error`: string
- `helperText`: string
- `leftIcon`: React.ReactNode
- `rightIcon`: React.ReactNode
- All standard input HTML attributes

### Card

A card component with header, body, and footer sections.

```tsx
import { Card, CardHeader, CardBody, CardFooter } from "simple-react-ui-kits";

<Card>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>Card content goes here</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>;
```

### Badge

A badge component for displaying status, labels, or counts.

```tsx
import { Badge } from "simple-react-ui-kits";

// Variants: default, primary, secondary, success, warning, danger
// Sizes: sm, md, lg
<Badge variant="success" size="md">
  Active
</Badge>;
```

## Hooks

### useToggle

A custom hook for toggle functionality.

```tsx
import { useToggle } from "simple-react-ui-kits";

function MyComponent() {
  const [isOpen, toggle, setIsOpen] = useToggle(false);

  return <button onClick={toggle}>{isOpen ? "Close" : "Open"}</button>;
}
```

### useLocalStorage

A custom hook for localStorage functionality.

```tsx
import { useLocalStorage } from "simple-react-ui-kits";

function MyComponent() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current theme: {theme}
    </button>
  );
}
```

## Utils

### cn

A utility function for combining class names.

```tsx
import { cn } from "simple-react-ui-kits";

const className = cn("base-class", condition && "conditional-class", {
  "object-class": true,
});
```

### Formatters

Utility functions for formatting data.

```tsx
import {
  formatNumber,
  formatDate,
  formatCurrency,
  truncateText,
} from "simple-react-ui-kits";

formatNumber(1234567); // "1,234,567"
formatDate(new Date()); // "12/25/2023"
formatCurrency(99.99); // "$99.99"
truncateText("Long text here", 10); // "Long text..."
```

## Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the library:

   ```bash
   npm run build
   ```

4. Development mode:
   ```bash
   npm run dev
   ```

### Scripts

- `npm run build` - Build the library
- `npm run dev` - Development mode with watch
- `npm run type-check` - Type checking
- `npm run clean` - Clean dist folder

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT
