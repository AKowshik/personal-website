import mysql.connector
import json
from collections import OrderedDict

class database_operations():
    
    def __init__(self):

        self.mydb = mysql.connector.connect(
            host="localhost",
            user="user",
            passwd="password",
            database="database"
        )

        self.mycursor = self.mydb.cursor()


    def get_projects(self):

        command = "Select * from projects"
        self.mycursor.execute(command)
        projects_list  = self.mycursor.fetchall()
        return json.dumps(projects_list)

    def get_posts(self):

        command = "Select id, title, published_on from blog"
        self.mycursor.execute(command)
        blog_posts_list = self.mycursor.fetchall()
        return json.dumps(blog_posts_list)

    def get_post_details(self, id):
        command = "Select * from blog where id={}".format(id)
        self.mycursor.execute(command)
        post_details = self.mycursor.fetchall()
        return json.dumps(post_details)

    def main(self):

        self.get_projects()
        self.get_posts()
        self.get_post_details(1)


if __name__ == '__main__':
    database_operations_object = database_operations()
    database_operations_object.main()