FROM python:3.6.2

WORKDIR /app

# Copia o requirements.txt do caminho correto
COPY ./simple-web-server/requirements.txt .

# Ou, se o arquivo estiver em simple-web-server/simple-web-server/
# COPY ./simple-web-server/simple-web-server/requirements.txt .

RUN pip install --no-cache-dir -r simple-web-server/requirements.txt

COPY . .

CMD ["python", "app/servidorweb.py"]