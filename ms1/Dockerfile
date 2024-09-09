FROM python:3.8-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt
COPY producer.py /app
COPY example_data.py /app

CMD ["python","producer.py"]