from flask import Flask, request, send_file, json, jsonify
from flask_cors import CORS

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

@app.route("/postForm", methods=['POST', 'GET'])
def postForm():
    if request.method == 'POST':
        # request.setHeader()
        request_data = json.loads(request.data)
        print('hhh')
        print('hhh')
        print('hhh')
        return {"blah": ""}
    else:
        return {"blah": ""}
    
if __name__ == "__main__":
    app.run(debug=True, port=8000)
