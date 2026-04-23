const pipelineSteps = [
  "Data acquisition and preparation",
  "Text and audio cleaning",
  "Normalization and token/feature extraction",
  "Feature engineering (MFCCs, spectrograms, embeddings)",
  "Model building and initialization",
  "Training and validation",
  "Testing and evaluation",
  "Deployment and contribution feedback loop"
];

const datasets = [
  {
    name: "Amharic Speech Emotion Dataset (ASED)",
    link: "https://github.com/Ethio2021/ASED_V1/tree/main"
  },
  {
    name: "Afan Oromo Speech Dataset (Mendeley)",
    link: "https://data.mendeley.com/datasets/mpy85ns82z/1"
  },
  {
    name: "TESS (English reference)",
    link: "https://www.kaggle.com/datasets/ejlok1/toronto-emotional-speech-set-tess?select=TESS+Toronto+emotional+speech+set+data"
  }
];

const models = [
  { name: "CNN-BiLSTM", note: "Recommended baseline for sequence + spectral features." },
  { name: "ResNet50", note: "Strong for image-like features when data is larger." },
  { name: "VGG Variant", note: "Good baseline, computationally heavier." },
  { name: "AlexNet", note: "Legacy architecture for quick experiments." }
];

function renderPipeline() {
  const list = document.getElementById("pipelineList");
  pipelineSteps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    list.appendChild(item);
  });
}

function renderDatasets() {
  const list = document.getElementById("datasetList");
  datasets.forEach((dataset) => {
    const item = document.createElement("li");
    item.innerHTML = `<a href="${dataset.link}" target="_blank" rel="noreferrer">${dataset.name}</a>`;
    list.appendChild(item);
  });
}

function renderModels() {
  const grid = document.getElementById("modelGrid");
  models.forEach((model) => {
    const card = document.createElement("article");
    card.className = "model-item";
    card.innerHTML = `<h3>${model.name}</h3><p>${model.note}</p>`;
    grid.appendChild(card);
  });
}

function wireStatusButton() {
  const button = document.getElementById("statusButton");
  const statusText = document.getElementById("statusText");

  button.addEventListener("click", () => {
    statusText.textContent =
      "Current state: website baseline is ready. Next step is integrating model inference APIs.";
  });
}

renderPipeline();
renderDatasets();
renderModels();
wireStatusButton();
