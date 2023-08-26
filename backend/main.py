from flask import Flask, request, jsonify
import random

app = Flask(__name__)
user_data = {}
user_list = []
questions = ["Who would steal animals from the zoo?", "Who would eat pet food?", "Who would marry someone they just met?"]
total_votes = 0
qotd = ""
phase = 0

@app.route("/")
def home():
    return "Home"

@app.route("/get-user-data")
def get_user_data():
    return jsonify(user_data), 200

@app.route("/create-user", methods = ["POST"])
def create_user():
    data = request.get_json()["name"]
    user_list.append(data)
    user_data[data] = {"rank": len(user_data) + 1, "vote_count": 0, "vote_percentage": 0}
    return []

@app.route("/update-vote", methods = ["PUT"])
def update_vote():
    data = request.get_json()
    votee = data["votee"]
    user_data[votee]["vote_count"] += 1
    global total_votes 
    total_votes += 1
    i = user_list.index(votee) - 1
    while i >= 0 and user_data[votee]["vote_count"] > user_data[user_list[i]]["vote_count"]:
        temp = user_list[i]
        user_list[i] = votee
        user_list[i+1] = temp
        i-=1
    for i in range(user_data[votee]["rank"]):
        user_data[user_list[i]]["rank"] = i + 1
    for i in range(len(user_list)):
        user = user_data[user_list[i]]
        user["vote_percentage"] = user["vote_count"] / total_votes * 100
    return []

@app.route("/get-user-list")
def get_user_list():
    return jsonify(user_list), 200

@app.route("/get-rank")
def get_rank():
    data = request.get_json()["name"]
    return jsonify(user_data[data]["rank"]), 200

@app.route("/get-percentage")
def get_percentage():
    data = request.get_json()["name"]
    return jsonify(user_data[data]["vote_percentage"]), 200

@app.route("/generate-qotd", methods = ["PUT"])
def generate_qotd():
    global qotd
    qotd = random.choice(questions)
    for i in range(len(user_list)):
        user_data[user_list[i]] = {"rank": len(user_data) + 1, "vote_count": 0, "vote_percentage": 0}
    return []

@app.route("/get-qotd")
def get_qotd():
    return jsonify(qotd), 200

@app.route("/change-phase", methods = ["PUT"])
def change_phase():
    global phase
    phase = request.get_json()["phase"]
    return []

@app.route("/remove-user", methods = ["PUT"])
def remove_user():
    global total_votes
    data = request.get_json()["name"]
    for i in range(user_list.index(data), len(user_list)):
        user_data[user_list[i]]["rank"] -= 1
    total_votes -= user_data[data]["vote_count"]
    del user_data[data]
    user_list.remove(data)
    for i in range(len(user_list)):
        user = user_data[user_list[i]]
        user["vote_percentage"] = user["vote_count"] / total_votes * 100
    return []

if __name__ == "__main__":
    app.run(debug=True)