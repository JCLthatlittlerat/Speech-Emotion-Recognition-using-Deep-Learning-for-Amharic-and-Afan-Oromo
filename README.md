# Speech Emotion Recognition using Deep Learning (Amharic and Afan Oromo)

Speech emotion recognition using deep learning for local Ethiopian languages. The project focuses on **Amharic** and **Afan Oromo**. The approach combines deep learning and semi-supervised learning. Datasets are collected from multiple sources and combined for training.

## Project layout

| File | Description |
| --- | --- |
| `speech-emotion-recognition-using-deep-learning.ipynb` | Main notebook: log-mel features, CNN–BiLSTM model, training |
| `nlp-pipeline-and-dataset-link.txt` | NLP pipeline notes and dataset references |

## Environment setup

Use a virtual environment (recommended on Debian/Ubuntu: `sudo apt install python3-venv` if `python3 -m venv` fails):

```bash
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

Start Jupyter if you use the notebook locally:

```bash
jupyter lab
# or: jupyter notebook
```

## Data

The notebook was written for a Kaggle-style path. For local runs, point `data_path` in the notebook to a folder of emotion class subdirectories containing `.wav` files, or use the [Amharic Speech Emotion Dataset (ASED)](https://github.com/Ethio2021/ASED_V1) and similar sources described in `nlp-pipeline-and-dataset-link.txt`.

## Contributing

1. Fork the repository and create a branch for your changes.
2. Run the environment setup above and verify the notebook or scripts you touch.
3. Open a pull request with a short description of your changes.

## New contribution: simple project website

A basic website is included to make the project easier to understand and contribute to.

### Files added
- `index.html` - project landing page
- `styles.css` - visual styling
- `app.js` - dynamic rendering for pipeline, datasets, and model cards

### How to run website locally
1. Open the project folder.
2. Double-click `index.html` (or run it with a static file server).
3. Use the page sections to review pipeline steps, dataset links, and candidate models.
