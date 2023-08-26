import random
from flask import jsonify, request

questions = ["Who would steal animals from the zoo?", "Who would eat pet food?", "Who would marry someone they just met?"]
phase = 0
qotd = ""

def generate_qotd():
    global qotd
    qotd = random.choice(questions)
    return []


def get_qotd():
    return jsonify(qotd), 200


def change_phase():
    global phase
    phase = request.get_json()["phase"]
    return []


def get_phase():
    return jsonify(phase), 200