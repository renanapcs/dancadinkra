FROM python:3.6.2

WORKDIR /app

RUN pip install --upgrade pip

# Copia o requirements.txt do caminho correto para o diretório WORKDIR
COPY ./requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "app/servidorweb.py"]