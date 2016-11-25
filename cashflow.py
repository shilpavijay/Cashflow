from flask import Flask
from flask import render_template, request, Response
from cashflow import *
import sqlalchemy as sa
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
import os, json
from flask.ext.sqlalchemy import SQLAlchemy
from collections import defaultdict

app = Flask(__name__)
app.secret_key = 'development key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:a@localhost/calcexp'
db = SQLAlchemy(app)
from models import *

# newuser = User('vijay','y','vijay@y.com','a')
# db.session.add(newuser)
# db.session.commit()
# users = User.query.all()
# print users[0].firstname

@app.route('/')
def mainpg():
	return render_template('login.html')

@app.route('/main/')
def mainpg():
	return render_template('main.html')	

@app.route('/api/insertexp/', methods=['POST', 'GET'])	
def inpData():	
	expense = request.get_json(force=True)
	newExp = Expenses(expense['exp_name'],expense['exp_amt']) 
	db.session.add(newExp)  				# add to mysql
	db.session.commit()
	return render_template('main.html')

@app.route('/api/showexp/', methods=['GET','POST'])
def showExp():
	expdict = defaultdict()
	all_exp = Expenses.query.all() 		#get all expenses from db
	expdict = [{'desc': exp.expname,'amt': exp.amount} for exp in all_exp] #store in dict to serialize & pass as json format
	resp = Response(response=json.dumps(expdict), status=200, mimetype="application/json")
	return (resp)

@app.route('/api/delexp/', methods=['GET','POST'])
def delData():
	exp=request.get_json(force=True)
	# delexp = Expenses(exp['exp_name'],exp['exp_amt'])
	delexp = Expenses.query.filter_by(expname=exp['exp_name']).first()
	print exp['exp_name']
	
	print delexp
	db.session.delete(delexp)
	db.session.commit()
	return render_template('main.html')	
