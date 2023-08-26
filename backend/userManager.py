from flask import jsonify, request
user_data = {}
user_list = []
total_votes = 0

def get_user_data():
    return jsonify(user_data), 200


def create_user():
    data = request.get_json()["name"]
    if data not in user_list:
        user_list.append(data)
        user_data[data] = {"rank": len(user_data) + 1, "vote_count": 0, "vote_percentage": 0, "trophies": 0}
    return []


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


def get_user_list():
    return jsonify(user_list), 200


def get_rank():
    data = request.get_json()["name"]
    return jsonify(user_data[data]["rank"]), 200


def get_percentage():
    data = request.get_json()["name"]
    return jsonify(user_data[data]["vote_percentage"]), 200


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

def add_trophy():
    user_data[user_list[0]]["trophies"] += 1

def reset_users():
    for i in range(len(user_list)):
        user = user_data[user_list[i]] 
        user["rank"] = len(user_data) + 1
        user["vote_count"] = 0
        user["vote_percentage"] = 0