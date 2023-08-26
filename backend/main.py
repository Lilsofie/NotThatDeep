import userManager
import phaseManager
import questionManager
from flask import Flask
import asyncio
from datetime import datetime
from flask_cors import CORS, cross_origin

app = Flask(__name__)
trophy_type = ""
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

async def gameLoop():
    global phase
    while True:
        hour = datetime.now().hour
        if hour == 12 and phase == 1:
            userManager.reset_users()
            generate_qotd()
            phase = 0
        elif phase == 0:
            userManager.add_trophy(trophy_type)
            phase = 1
        await asyncio.sleep(1)
asyncio.ensure_future(gameLoop())


@app.route("/get-user-data")
def get_user_data():
    return userManager.get_user_data()


@app.route("/create-user", methods = ["POST"])
def create_user():
    userManager.create_user()
    return []


@app.route("/update-vote", methods = ["PUT"])
def update_vote():
    userManager.update_vote()
    return []


@app.route("/get-user-list")
def get_user_list():
    return userManager.get_user_list()


@app.route("/get-rank")
def get_rank():
    return userManager.get_rank()


@app.route("/get-percentage")
def get_percentage():
    return userManager.get_percentage()


@app.route("/generate-qotd", methods = ["PUT"])
def generate_qotd():
    global trophy_type
    trophy_type = questionManager.generate_qotd()
    return []


@app.route("/get-qotd")
def get_qotd():
    return questionManager.get_qotd()


@app.route("/change-phase", methods = ["PUT"])
def change_phase():
    phaseManager.change_phase()
    return []


@app.route("/get-phase")
def get_phase():
    return phaseManager.get_phase()


@app.route("/remove-user", methods = ["PUT"])
def remove_user():
    userManager.remove_user()
    return []


if __name__ == "__main__":
    app.run(debug=True)