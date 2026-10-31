"""Minimal service health endpoint; domain functionality is not implemented yet."""

from fastapi import FastAPI

app = FastAPI(title="BookTravaling API", version="0.1.0")


@app.get("/health")
def health() -> dict[str, str]:
    """Report API process availability; does not check database or worker."""
    return {"status": "ok"}
