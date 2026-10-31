from fastapi.testclient import TestClient

from booktravaling.main import app


def test_health_endpoint_reports_process_status() -> None:
    response = TestClient(app).get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}
