from flask import Flask

from App.ext import init_ext
from App.urls import init_urls


def creat_app():
    app = Flask(__name__)
    app.config["DEBUG"] = True
    app.config["SECRET_KEY"] = "110"
    app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:970813@39.107.65.141:3306/axf"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    init_ext(app)
    init_urls(app)

    return app