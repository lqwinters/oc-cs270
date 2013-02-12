import os
from flask import Flask, redirect, url_for

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello World!'

# Assignment 1: Chapter two section 2.4-2.8
@app.route('/assignment-1')
def assignment_1():
    return redirect(url_for('static', filename='assignment-1.html'))

# Assignment 3: Exercise 3.1
@app.route('/assignment-3')
def assignment_1():
    return redirect(url_for('static', filename='assignment-3.html'))

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)