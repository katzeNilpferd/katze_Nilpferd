from flask import Blueprint, render_template, request, jsonify

main_blueprint = Blueprint(
                        "index",
                        __name__,
                        template_folder="templates",
                        static_folder="static"
                    )

@main_blueprint.route("/")
def index():
    return render_template("index.html")