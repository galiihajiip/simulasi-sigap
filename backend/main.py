from fastapi import FastAPI
import pandas as pd

app = FastAPI(title="SIGAP.AI Backend")

@app.get("/traffic/realtime")
def get_realtime():
    df = pd.read_csv("data/traffic_realtime.csv")
    return df.tail(1).to_dict(orient="records")

@app.get("/traffic/prediction")
def get_prediction():
    df = pd.read_csv("data/traffic_prediction.csv")
    return df.to_dict(orient="records")

@app.get("/ai/recommendation")
def get_recommendation():
    df = pd.read_csv("data/ai_recommendation.csv")
    return df.to_dict(orient="records")

@app.post("/operator/approve")
def approve_action():
    return {
        "status": "APPROVED",
        "message": "Flush Strategy Applied"
    }
