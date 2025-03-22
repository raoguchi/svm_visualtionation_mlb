<script>
  import Scatterplot from './components/ScatterPlot.svelte';

  // Math expressions for MathJax rendering
  let mathExpression1 = '\\( y_i \\vec{w} \\cdot \\text{Aug}(\\vec{x}^{(i)}) = 1 \\)';
  let mathExpression2 = '\\( \\min_{\\vec{w}, \\vec{\\epsilon}} \\lVert{\\vec{w}}\\rVert^2 + C \\sum \\epsilon_i \\)';
  let mathExpression3 = '\\(y_i \\vec{w} \\cdot \\text{Aug}(\\vec{x}^{(i)}) = 1\\)';
</script>

<main class="max-w-3xl mx-auto px-6 py-12 space-y-10 text-gray-800">

  <!-- Intro -->
  <section class="bg-white rounded-xl shadow-md p-8">
    <h1 class="text-4xl font-extrabold mb-4 text-center text-gray-900">What is a Linear SVM?</h1>
    <p>Have you guys ever wondered how banks detect fraudulent transactions or how Gmail classifies which email is spam or not? 
      Well, this is all because of the Support Vector Machines or SVMs which is a powerful algorithm that slices through complex data to uncover any hidden patterns.</p>
    <p class="mt-2">In simple terms, SVMs basically create a decision boundary that allows the machine to decide what option to pick. Let's go through how this works:</p>
  </section>

  <!-- Pitch Types -->
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold mb-4">The Problem</h2>
    <p>Let's say we are looking at the different pitch types in baseball. More specifically, we will be looking at four different pitch types:</p>
    <p>  -  Four-Seam Fastball (FF)           - Cutter (FC) </p>
    <p>  - Changeup (CH)  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  - Slider (SL)  </p>
    <p class="mt-4">Given only the Release Speed and Release Spin Rate of the ball. Let's train a machine that has no knowledge of baseball and see what pitch type it will predict based on only the Release Speed and Release Spin Rate</p>
  </section>

  <!-- Visualization -->
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold mb-4">The Visualization</h2>
    <p>This visualization below represents the machine after it was trained with the baseball data and the decision boundary that was calculated by the SVM. Feel free to check out all of the different Pitch Pairs and see where the decision boundary is drawn for each of the combinations.</p>

    <div class="mt-6 border border-gray-300 rounded-lg p-4 bg-gray-100">
      <Scatterplot />
    </div>
  </section>

  <!-- Prediction Example -->
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold mb-4">Prediction Example</h2>
    <p>Observe that if a new data point is added to the graph, the machine will predict the pitch type to be the same as the majority pitch type on the left/right side of the decision boundary. 
      For instance, if we are looking at Pitch Pair CH & SL and the new point has a Release Speed of 87 mph and a Release Spin Rate of 2500 rpm then the machine will predict it to be SL as the pitch type.</p>
  </section>

  <!-- SVM Limitations -->
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold mb-4">Limitations of SVM</h2>
    <p>However, notice that in one of the pitch pairs, there was no decision boundary drawn. This is because the data was too close to each other so it wasn't able to calculate an accurate decision boundary. 
      This is one of the weaknesses of SVMs. This explains why in some rare cases banks would mark something as a fraudulent transaction even though it is not.</p>
    <p>Nevertheless, SVMs are still one of the most powerful algorithms that is used worldwide to train a machine to make a decision.</p>
  </section>

  <!-- Takeaway -->
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold mb-4">Key Takeaway</h2>
    <p>The Key Takeaway of this project is that we hope that people learn how the machine makes a decision behind the scenes and how vital SVM is since it calculates the decision boundary which ultimately decides 
      what decision the machine should make. With the help of our visualization, it clearly shows that without the decision boundary, the machine will be unable to make a good decision. This is how big companies like 
      Google or Meta detect spam emails or messages.</p>
  </section>

  <!-- Math Section -->
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold mb-4">The Math Behind SVM</h2>
    <p>The idea behind maximum margin classifiers are to implement linear separability to correctly classify data into categories.<br>
      Support Vector Machines are a form of margin classifiers that aim to have large margins between the decision boundary and training point.<br>
    </p>
    <p>For SVMs, a support vector is a training point such that {@html mathExpression3}<br>
      Solutions for Hard-SVMs aim to have perfect classification with no slack; therefore, the solution for the problem becomes {@html mathExpression1}</p>
    <p>Alternatively, we the soft-SVM problem allows for some classifications to be wrong with distance \(\epsilon_i\)<br>
      The problem becomes: {@html mathExpression2}<br>
      Where, \(C\) is considered the slack parameter: Large \(C\) avoids misclassifications with low slack and Small \(C\) allows for more slack at the cost of misclassifications.</p>
  </section>

  <!-- Resources -->
  <section class="bg-white rounded-xl shadow-md p-8 text-center">
    <h2 class="text-2xl font-bold mb-4">Resources Links</h2>
    <p>Video Link: <a href="https://youtu.be/S2YA47COMnk" class="text-blue-600 hover:underline">CLICK HERE</a></p>
    <p>Github Repo: <a href="https://github.com/raoguchi/svm_viz_mlb" class="text-blue-600 hover:underline">CLICK HERE</a>.</p>
  </section>

</main>

<style>
  /* Add Tailwind CSS directives here */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
