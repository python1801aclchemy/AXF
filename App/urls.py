from flask_restful import Api

from App.apis import Hello, Home

api = Api()

def init_urls(app):
    api.init_app(app=app)

api.add_resource(Hello, "/hello/")
api.add_resource(Home, "/home/")