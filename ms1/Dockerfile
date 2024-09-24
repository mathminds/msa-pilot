FROM python:3.8-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt
COPY . /app
# COPY example_data.py /app
CMD ["sh", "-c", "sleep 15 && python producer.py"]
# CMD ["python","producer.py"]