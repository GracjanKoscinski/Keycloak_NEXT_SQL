FROM python:3.9

# Set the working directory

WORKDIR /app

# Copy the requirements file

COPY requirements.txt .

# Install the requirements

RUN pip install -r requirements.txt

# Copy the rest of the application code

COPY . .

# Expose the port the app runs on

EXPOSE 5000

# Run the app

CMD ["python3", "server.py"]