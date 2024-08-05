from ..utils import get_random_color, get_current_timestamp

def set_folder_parameters(data):
    print(data)
    # user_id = data.userId
    color_icon = get_random_color()
    folder_id = data["folderId"]
    folder_name = f"test_{color_icon}"
    
    return {
        "success": True,
        "colorIcon": color_icon,
        "folderId": folder_id,
        "folderName": folder_name
    }