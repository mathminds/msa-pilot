const fs = require('fs');
const path = require('path');

const componentsDir = './src/components';
const testTemplate = (componentName) => `
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ${componentName} from './${componentName}';

describe('${componentName}', () => {
  const handleEvent = jest.fn();

  beforeEach(() => {
    render(<${componentName} onEvent={handleEvent} />);
  });

  test('renders the component correctly', () => {
    // Add your assertions here
  });

  test('calls onEvent when event is triggered', () => {
    // Simulate event and add your assertions here
  });
});
`;

fs.readdir(componentsDir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    const componentName = path.basename(file, '.js');
    const testFilePath = path.join(componentsDir, `${componentName}.test.js`);
    fs.writeFileSync(testFilePath, testTemplate(componentName));
  });
});