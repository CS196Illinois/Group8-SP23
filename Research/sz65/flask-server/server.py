from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Member API Route
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(debug=True, port=8000)

# @app.route("/add", methods=["POST"], strict_slashes=False)
# def add_articles():
#     title = request.json['title']
#     body = request.json['body']

#     article = Articles(
#         title=title,
#         body=body
#         )

#     db.session.add(article)
#     db.session.commit()

#     return article_schema.jsonify(article)