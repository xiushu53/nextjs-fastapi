from fastapi import FastAPI
from datetime import datetime as dt
import locale

locale.setlocale(locale.LC_ALL, "ja_JP.UTF-8")

app = FastAPI()

@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}


@app.get("/api/now")
def get_now():
    now = dt.now()
    return {"now": dt.strftime(now, "%Y年%m月%d日 %H時%M分%S秒")}