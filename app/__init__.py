from flask import Flask
from .config import Config
from .assets import configure_assets
from .views import main_blueprint


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    app.register_blueprint(main_blueprint)
    
    configure_assets(app)
    
    return app