from flask import Blueprint, render_template, request, jsonify
from .views import main_blueprint
from ..controllers import set_folder_parameters


@main_blueprint.route("/api/create-folder", methods=["POST"])
def create_folder():
   data = request.json
   answer = set_folder_parameters(data)
   
   return jsonify(answer)