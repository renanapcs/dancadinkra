FROM python:3.6.2

WORKDIR /app

COPY ./simple-web-server/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt 

COPY . .

CMD ["python", "app/servidorweb.py"]