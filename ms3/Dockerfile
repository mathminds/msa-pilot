# Use the official Python image from the Docker Hub
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Create and set the working directory
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt /app/

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . /app/

# Expose the port the FastAPI server will run on
# EXPOSE 8001

# Define the entry point for the container

CMD ["sh", "-c", "sleep 15 && uvicorn main:app --host 0.0.0.0 --port 8000"]

# CMD ["uvicorn", "my_microservice:app", "--host", "0.0.0.0", "--port", "8001"]
