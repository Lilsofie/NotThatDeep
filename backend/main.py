from flask import Flask, request, jsonify
import json

app = Flask(__name__)
user_data = {}

@app.route("/")
def home():
    return "Home"

@app.route("/get-user-data")
def get_user_data():
    return jsonify(user_data), 200

@app.route("/create-user", methods = ["POST"])
def create_user():
    data = request.get_json()
    user_data[data["name"]] = {"rank": len(user_data) + 1, "vote_count": 0, "vote_percentage": 0} #make rank last
    return []

@app.route("/update-vote", methods = ["PUT"])
def update_vote():
    data = request.get_json()
    user_data[data["votee"]]["vote_count"] += 1
    # update rank and percentage
    return []


if __name__ == "__main__":
    app.run(debug=True)