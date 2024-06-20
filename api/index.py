from fastapi import FastAPI
from datetime import datetime as dt

app = FastAPI()

@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}


@app.get("/api/now")
def get_now():
    now = dt.now()
    return {"now": dt.strftime(now, "%Y年%m月%d日 %H:%M:%s")}