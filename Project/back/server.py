from flask import Flask, request, send_file, json, jsonify
from flask_cors import CORS
import functions;

app = Flask(__name__)
CORS(app)

# Member API Route
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route("/mainpage", methods=['Get'])
def mainpage():
    return {
        send_file("page.html")
    }

@app.route("/posttest", methods=['Post'])
def posttest():
    request_data = json.loads(request.data)
    return request_data['age']

def calculate_interest():
    # Get the request parameters
    p = float(request.form['p'])
    r = float(request.form['r'])
    t = float(request.form['t'])
    interest_type = request.form['interest_type']

    if interest_type == 'simple':
        result = functions.simple_interest(p, r, t)
    elif interest_type == 'compound':
        result = functions.compound_interest(p, r, t)
    elif interest_type == 'CAGR':
        a = float(request.form['a'])
        result = functions.CAGR(p, a, t)
    elif interest_type == 'double':
        result = functions.double(r)
    elif interest_type == 'pur_power':
        result = functions.pur_power(p, r, t)
    else:
        return 'Invalid interest type'

    return str(result)
    
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