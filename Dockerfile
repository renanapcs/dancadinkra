FROM httpd:2.4

# Remove os arquivos de exemplo do httpd
RUN rm -rf /usr/local/apache2/htdocs/*

# Copia os templates (páginas HTML) para o diretório padrão do Apache
COPY ./app/templates/ /usr/local/apache2/htdocs/

# Copia os arquivos estáticos (ajuste os caminhos se necessário)
COPY ./assets/ /usr/local/apache2/htdocs/assets/