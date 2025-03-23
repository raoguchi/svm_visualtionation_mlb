<script>
  import ScatterPlot from './components/ScatterPlot.svelte';
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

  :global(body) {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 2rem;
    background-color: #f9fafb;
    color: #1f2937;
    line-height: 1.6;
  }

  h1, h2 {
    color: #1e3a8a;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p {
    max-width: 70ch;
    margin-bottom: 1rem;
  }

  a {
    color: #2563eb;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .pitch-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0;
  }

  .pitch-item {
    background: #e0f2fe;
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
    font-weight: bold;
    color: #0369a1;
    flex: 1 1 200px;
    text-align: center;
  }

  .math-box {
    background: #f3f4f6;
    padding: 1rem;
    border-left: 4px solid #60a5fa;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
</style>

<div class="container">
  <h1>What is a Linear SVM?</h1>

  <p>Have you ever wondered how banks detect fraudulent transactions or how Gmail classifies spam emails? This is often thanks to Support Vector Machines (SVMs), a powerful algorithm that slices through complex data to uncover hidden patterns.</p>

  <p>In simple terms, SVMs create a decision boundary that helps machines decide what category a new data point belongs to. Let's walk through how it works.</p>

  <p>Suppose we're analyzing different pitch types in baseball. We'll focus on these four:</p>

  <div class="pitch-list">
    <div class="pitch-item">Four-Seam Fastball (FF)</div>
    <div class="pitch-item">Cutter (FC)</div>
    <div class="pitch-item">Changeup (CH)</div>
    <div class="pitch-item">Slider (SL)</div>
  </div>

  <p>We'll use just the Release Speed and Release Spin Rate to train a machine that has no baseball knowledge. Let’s see what pitch it predicts.</p>

  <p>The visualization below shows how the trained model makes its decision and displays the SVM-calculated decision boundary. Explore different pitch pairs to see where the boundary lies!</p>

  <main>
    <ScatterPlot />
  </main>

  <p>Notice how new data points fall on either side of the boundary. For example, if you're looking at CH vs SL and a new pitch has 87 mph speed and 2500 rpm spin rate, it’ll likely be classified as SL.</p>

  <p>However, some pitch pairs may lack a visible boundary — the data is too close together for the SVM to clearly separate them. This is a key limitation and can explain why some predictions (like fraud detection) aren’t always accurate.</p>

  <p>Despite this, SVMs remain one of the most powerful tools in machine learning, especially when a clear decision boundary can be formed.</p>

  <p><strong>Key Takeaway:</strong> This project shows how machines make decisions and why the SVM’s boundary is essential. Without it, models like Gmail spam filters or fraud detectors couldn’t work as reliably.</p>

  <h2>The Math Behind SVM</h2>

  <div class="math-box">
    <p>The idea behind maximum margin classifiers is to use linear separability to classify data correctly. SVMs aim for the largest margin between the decision boundary and data points.</p>

    {@html `<p>For SVMs, a support vector is a training point such that \\(y_i \\vec{w} \\cdot \\text{Aug}(\\vec{x}^{(i)}) = 1\\).</p>`}

    {@html `<p>Hard-SVMs seek perfect classification (no slack):<br>
    \\(\\vec{w}^\\star = \\sum_{i \\in S} y_i a_i \\text{Aug}(\\vec{x}^{(i)})\\)</p>`}

    {@html `<p>Soft-SVMs allow some classification error with slack \\(\\epsilon_i\\):<br>
    \\(\\min_{\\vec{w} \\in \\mathbb{R}^{d+1}, \\vec{\\epsilon} \\in \\mathbb{R}^n} \\lVert \\vec{w} \\rVert^2 + C \\sum_{i=1}^n \\epsilon_i\\)</p>`}

    {@html `<p>Here, \\(C\\) is the slack parameter: Large \\(C\\) reduces misclassifications; small \\(C\\) allows more slack for noisy data.</p>`}
  </div>

  <h2>Resource Links</h2>
  <p>Video Link: <a href="https://youtu.be/S2YA47COMnk">CLICK HERE</a></p>
  <p>GitHub Repo: <a href="https://github.com/raoguchi/svm_viz_mlb">CLICK HERE</a></p>
</div>
