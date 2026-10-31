"""Celery worker configuration for future processing tasks."""

import os

from celery import Celery

celery_app = Celery(
    "booktravaling",
    broker=os.environ.get("CELERY_BROKER_URL", "redis://localhost:6379/0"),
)
