# Use the official Python base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the container
COPY Pipfile* ./

# Install pipenv
RUN pip install --no-cache-dir pipenv

# Install the dependencies using pipenv
RUN pipenv install --system --deploy --ignore-pipfile

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the FastAPI service will run on
EXPOSE 8000

# Start the FastAPI service
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]