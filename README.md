# Linear SVM Visualizer

An interactive educational web app that demonstrates how linear Support Vector Machines (SVMs) work. Built with **Svelte** and **Vite**, it allows users to explore the concepts of hard and soft SVMs, support vectors, and margin optimization through hands-on manipulation of parameters and decision boundaries.

## 🔍 Overview

This tool visualizes the behavior of linear SVM classifiers. It highlights:

- The concept of maximum margin classifiers.
- The role of support vectors.
- The optimization objectives for hard and soft SVMs.
- How changing weights (\(\vec{w}\)) affects classification boundaries.

MathJax is used to render mathematical equations on the page, enhancing clarity for mathematical concepts.

## ⚙️ Tech Stack

- **Framework**: [Svelte](https://svelte.dev/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Visualization**: [D3.js](https://d3js.org/), [Plotly.js](https://plotly.com/javascript/)
- **Machine Learning**: `ml-svm`, `libsvm-js`, `ml-levenberg-marquardt`

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18.x

### Installation

```bash
git clone <your-repo-url>
cd final_project
npm install
