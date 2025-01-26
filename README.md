# even-odd-ai

A simple NPM package that uses OpenAI's GPT-4o to determine if a number is odd or even.

## Installation 

```bash
npm install even-odd-ai
```

## Environment Setup

Create a `.env` file in your project root and add your OpenAI API key:

```env
OPENAI_API_KEY=your_api_key_here
```

## Usage

```javascript
const { isOdd } = require('even-odd-ai');

console.log(isOdd(1)); // true
console.log(isOdd(2)); // false
```
