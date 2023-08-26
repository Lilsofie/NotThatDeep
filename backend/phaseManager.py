from flask import jsonify, request

phase = 0

def change_phase():
    global phase
    phase = request.get_json()["phase"]
    return []


def get_phase():
    return jsonify(phase), 200