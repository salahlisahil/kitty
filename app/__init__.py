from flask import Flask

app = Flask(__name__)

from app.routes.routes import main_bp
app.register_blueprint(main_bp)