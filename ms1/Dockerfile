# Use the official Python image from the Docker Hub
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY . /app
# COPY example_data.py /app
# CMD ["sh", "-c", "sleep 15 && python main.py"]
# CMD ["python","producer.py"]the FastAPI server will run on

# Define the entry point for the container

CMD ["sh", "-c", "sleep 15 && uvicorn main:app --host 0.0.0.0 --port 8000"]