"""
API Service Project

This is a Python service application that exposes APIs for various operations.
"""

__author__ = "Your Name"
__version__ = "1.0"
__email__ = "your_email@example.com"
__status__ = "Development"

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
db = SQLAlchemy(app)

# Import and configure dependencies
from .models import User, Item
from .routes import api

# Initialize the API routes
app.register_blueprint(api)

# Create a logger
import logging
logger = logging.getLogger(__name__)

# Initialize the application
if __name__ == "__main__":
    app.run(debug=True)