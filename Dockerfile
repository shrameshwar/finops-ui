FROM python:3.11-slim
WORKDIR /app
COPY . .
RUN pip install -r requirments.txt
EXPOSE 8080
CMD ["python","app.py"]