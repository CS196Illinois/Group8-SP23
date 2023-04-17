from flask import Flask, request, send_file, json, jsonify
from flask_cors import CORS
import functions;

app = Flask(__name__)
CORS(app)

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

        return request_data['userId']
    else:
        return {"blah": ""}
    
@app.route("/interestCalculation", methods=['POST', 'GET'])
def calculate_interest():
    request_data = json.loads(request.data)
    # Get the request parameters
    p = float(request_data['p'])
    r = float(request_data['r'])
    t = float(request_data['t'])
    interest_type = request_data['type']

    
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
    print("------------------")
    print(result)
    return str(result)

if __name__ == "__main__":
    app.run(debug=True, port=8000)
