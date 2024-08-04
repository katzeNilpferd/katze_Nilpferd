from app.views import *


@main_blueprint.route("/api/create-folder", methods=["POST"])
def create_folder():
   data = request.json
   user_id = data.get("userId")
   folder_name = f"folder_{user_id}"
   print(user_id, folder_name)
   
   return jsonify({
       "success": True,
       "imageColor": "test",
       "folderName": folder_name,
   })