from posture_corrector import app

@app.route('/')
def home():
    return "Hello world!"