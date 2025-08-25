# Simple Web Server Project

This project sets up a simple web server using Python's built-in libraries. It serves an HTML page and can be easily run in a Docker container.

## Project Structure

```
simple-web-server
├── app
│   ├── servidorweb.py
│   └── templates
│       └── index.html
├── Dockerfile
├── requirements.txt
└── README.md
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd simple-web-server
   ```

2. **Install dependencies**:
   You can install the required Python packages using pip. Make sure you have Python and pip installed on your machine.
   ```
   pip install -r requirements.txt
   ```

3. **Run the web server**:
   You can start the web server by running the following command:
   ```
   python app/servidorweb.py
   ```
   The server will be accessible at `http://localhost:8000`.

## Docker Instructions

To run the web server in a Docker container, follow these steps:

1. **Build the Docker image**:
   ```
   docker build -t simple-web-server .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 8000:8000 simple-web-server
   ```
   The web server will be accessible at `http://localhost:8000`.

## Usage

Open your web browser and navigate to `http://localhost:8000` to view the web page served by the server.

## License

This project is licensed under the MIT License.