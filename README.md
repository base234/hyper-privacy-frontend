# Hyper Privacy - Frontend

A next-generation ad recommendation engine that delivers hyper-relevant suggestions leaving your personal data in your device.

Backend: [https://github.com/base234/hyper-privacy-backend](https://github.com/base234/hyper-privacy-backend)

## Overview

Traditional Ad targeting relies on collecting vast amounts of data which also includes your personal data, thus creating privacy concerns.

The project creates effective Ad recommendations while respecting user privacy. It uses contextual analysis and privacy-preserving techniques (Privacy Layer) to provide relevant recommendations without tracking users.

It make use of Natural Language Processing (NLP) to extract relevant information from the webpage content, and then uses a Machine Learning for feature extraction and similarity matching for the Ads to deliver relevant recommendations.

## Key Features

- **Content-based Analysis**: Analyze webpage content to understand context and topics
- **Privacy-Preserving Techniques**:
  - Differential Privacy: Add statistical noise to prevent identification
  - Local Processing: Simulate processing on the user's device
  - Anonymization: Remove any potentially identifying information
- **Contextual Matching**: Match ads based on content relevance, not user behavior
- **Transparency**: Clear explanation of how ad recommendations are made

To ensure no personal data is used.

## How It Works

1. **Content Analysis**: Webpage content is analyzed to extract topics, entities, and keywords
2. **Privacy Layer**: Personal identifiers are removed, and privacy-preserving techniques are applied
3. **Ad Matching**: The system matches ads to content based on relevance
4. **Result Delivery**: Relevant ads are returned without tracking the user

## Future Scope

- Instead of content, it will receive a website URL, and it can scrape the website to see recommended ads.
- Implement federated learning for improving recommendations without collecting user data
- Add more sophisticated content analysis techniques
- Improve the ad matching algorithm
- Develop a browser extension for real-world testing
- Implement encrypted computation techniques

# Getting started with the project

### Clone the repo
```
git clone git@github.com:base234/hyper-privacy-frontend.git
```

### Navigate to the directory
```
cd hyper-privacy-frontend
```

### Install packages
```
npm install
```

### Start the app
```
npm run dev
```

**Note**: Make sure, the backend must be running.

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Demo

The application includes a web interface to interact with the application in a useful way, demonstrating how the system works:

1. Enter webpage content
2. See the recommended ads
3. The **relevance score** and how it **targeted the Ads**, thus shows how privacy is preserved.
