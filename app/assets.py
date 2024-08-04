from flask_assets import Environment, Bundle


def configure_assets(app):
    assets = Environment(app)
    
    # CSS bundle
    common_css = Bundle(
        "css/scrollbar.css",
        "css/header.css",
        "css/aside.css",
        "css/folder.css",
        "css/main.css",
        filters="cssmin",
        output="assets/common.css"
    )
    # JS bundle
    common_js = Bundle(
        "js/main.js",
        filters="jsmin",
        output="assets/common.js"
    )
    
    # Register bundle
    assets.register("common.css", common_css)
    assets.register("common.js", common_js)