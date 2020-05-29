from flask import Flask, request
from flask_cors import CORS, cross_origin
from database_opearations import database_operations
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/*":{"origins":"*"}})

database_operations_object = database_operations()

@app.route("/")
def home():
    return database_operations_object.get_projects()

@app.route("/blog")
def show_blog_posts():
    return database_operations_object.get_posts()

@app.route('/blog/<int:postID>')
def show_blog(postID):
   return database_operations_object.get_post_details(postID)

if __name__ == "__main__":
	app.run(debug=True, host='0.0.0.0')