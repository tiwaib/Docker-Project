# Use Python 2.7 base image
FROM python:2.7

# Set the working directory inside the container
WORKDIR /code

# Copy all application files into the container
ADD . /code

# Expose the desired port (you can adjust the port based on your requirements)
EXPOSE 80

# Run the Python script
CMD ["python", "index.py"]
