FROM python:alpine

EXPOSE 80

# Install gunicorn
RUN pip install gunicorn

# Install falcon
RUN pip install falcon

# Add demo app
COPY ./backend /backend
WORKDIR /backend

CMD ["gunicorn", "-b", "0.0.0.0:80", "app:API"]