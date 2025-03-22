<script>
  import Scatterplot from './components/ScatterPlot.svelte';

  // Math expressions for MathJax rendering
  let mathExpression1 = '\\( \\vec{w}^\\star = \\sum_{i \\in S} y_i a_i \\text{Aug}(\\vec{x}^{(i)}) \\)';
  let mathExpression2 = '\\( \\min_{\\vec{w}, \\vec{\\epsilon}} \\lVert{\\vec{w}}\\rVert^2 + C \\sum \\epsilon_i \\)';
</script>

<main class="max-w-3xl mx-auto px-6 py-12 space-y-10 text-gray-800">

  <!-- Intro -->
  <section class="bg-white rounded-xl shadow-md p-8">
    <h1 class="text-4xl font-extrabold mb-4 text-center text-gray-900">What is a Linear SVM?</h1>
    <p>Have you ever wondered how banks detect fraudulent transactions or how Gmail classifies spam? That’s the magic of Support Vector Machines (SVMs).</p>
    <p class="mt-2">SVMs draw a decision boundary to help machines separate data and make decisions. Let’s see this in action with baseball pitch types!</p>
  </section>

  <!-- Pitch Types -->
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold mb-4">The Problem</h2>
    <ul class="list-disc list-inside ml-4 space-y-1">
      <li>Four-Seam Fastball (FF)</li>
      <li>Cutter (FC)</li>
      <li>Changeup (CH)</li>
      <li>Slider (SL)</li>
    </ul>
    <p class="mt-4">Can a machine predict the pitch type using only Release Speed and Spin Rate?</p>
  </section>

  <!-- Visualization -->
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold mb-4">The Visualization</h2>
    <p>Below is the SVM-trained decision boundary. Try switching pitch pairs to see how the boundary changes.</p>

    <div class="mt-6 border border-gray-300 rounded-lg p-4 bg-gray-100">
      <Scatterplot />
    </div>
  </section>

  <!-- Prediction Example -->
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold mb-4">Prediction Example</h2>
    <p>If a new data point has a speed of 87 mph and spin rate of 2500 rpm, and the pitch pair is CH & SL, the machine will likely classify it as SL.</p>
  </section>

  <!-- SVM Limitations -->
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold mb-4">Limitations of SVM</h2>
    <p>Some pitch pairs have no clear boundary — the data is too close. This can cause occasional misclassifications.</p>
  </section>

  <!-- Takeaway -->
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold mb-4">Key Takeaway</h2>
    <p>Decision boundaries are essential. This is how tools like spam filters and fraud detection work.</p>
  </section>

  <!-- Math Section -->
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold mb-4">The Math Behind SVM</h2>
    <ul class="list-disc list-inside ml-4 mt-2">
      <!-- Render math using @html to allow MathJax to parse LaTeX -->
      <li>{@html mathExpression1}</li>
      <li>{@html mathExpression2}</li>
    </ul>
    <p class="mt-2">Where \\( C \\) balances margin width and misclassification tolerance.</p>
  </section>

  <!-- Resources -->
  <section class="bg-white rounded-xl shadow-md p-8 text-center">
    <h2 class="text-2xl font-bold mb-4">Resources</h2>
    <p><a href="https://youtu.be/S2YA47COMnk" class="text-blue-600 hover:underline">Watch the Explanation Video</a></p>
    <p><a href="https://github.com/raoguchi/svm_viz_mlb" class="text-blue-600 hover:underline">View Source on GitHub</a></p>
  </section>

</main>

<style>
  /* Add Tailwind CSS directives here */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
