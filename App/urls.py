from flask_restful import Api

from App.apis import Hello

api = Api()

def init_urls(app):
    api.init_app(app=app)

api.add_resource(Hello, "/hello/")