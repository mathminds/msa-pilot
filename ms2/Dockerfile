FROM python:3.8-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt
COPY consumer2.py /app

CMD ["python","consumer2.py"]