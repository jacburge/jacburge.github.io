from app import app
from flask import render_template

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/about/')
def about():
	return render_template('about.html')

@app.route('/repertoire/')
def schedule():
	return render_template('blog.html')

@app.route('/contact/')
def news():
	return render_template('contact.html')
