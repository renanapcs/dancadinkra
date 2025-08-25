from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

class CustomHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Define quais caminhos são para arquivos estáticos e quais são páginas.
        if self.path.startswith('/assets') or self.path.startswith('/js') or self.path.startswith('/css'):
            # Arquivo estático: trata normalmente.
            return super().do_GET()
        else:
            # Se não for arquivo estático, busca em /app/templates
            if self.path == '/':
                filename = 'index.html'
            else:
                # Para outras rotas, considera o nome informado.
                filename = self.path.lstrip('/')
            template_path = os.path.join('app', 'templates', filename)
            if os.path.isfile(template_path):
                self.path = template_path
            # Se o arquivo não existir, o handler padrão enviará 404.
            return super().do_GET()

def run(server_class=HTTPServer, handler_class=CustomHandler, port=8000):
    # Altera o diretório de trabalho para a raiz do projeto.
    os.chdir(os.path.join(os.path.dirname(__file__), '..'))
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Serving on port {port}...')
    httpd.serve_forever()

if __name__ == "__main__":
    run()