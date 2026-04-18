from flask import Flask, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route("/")
def home():
    return send_from_directory(BASE_DIR, "index.html")

@app.route("/assets/<path:filename>")
def assets(filename):
    return send_from_directory(os.path.join(BASE_DIR, "assets"), filename)

@app.route("/health")
def health():
    return {"status": "ok"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)