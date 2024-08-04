from app.views import *


@main_blueprint.route("/")
def index():
    return render_template("index.html")