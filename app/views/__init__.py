from flask import Blueprint, render_template, request, jsonify

main_blueprint = Blueprint(
                        "index",
                        __name__,
                        template_folder="templates",
                        static_folder="static"
                    )

from app.views import api, routes