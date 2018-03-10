from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
from sqlalchemy import create_engine
from json import dumps
from flask.ext.jsonpify import jsonify

db_connect = create_engine('sqlite:///myaula.db')
app = Flask(__name__)
CORS(app)
api = Api(app)

class alunos(Resource):
    def get(self):
        conn = db_connect.connect() # connect to database
        query = conn.execute("select * from aluno;") # This line performs query and returns json result
        return [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor] # Fetches first column that is Employee ID
    def post(self):
        data = request.form
        conn = db_connect.connect() # connect to database
        query = conn.execute("insert into aluno values ('%s','%s','%s');" % (data.get('matricula'), data.get('nome'), data.get('senha'))) # This line performs query and returns json result
        return jsonify(data) # Fetches first column that is Employee ID

class turmas(Resource):
    def get(self):
        conn = db_connect.connect()
        query = conn.execute("select * from turma;")
        return [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor]

class aluno_turmas(Resource):
    def get(self, matricula):
        conn = db_connect.connect()
        query = conn.execute("select * from turma join aluno_turma on turma.id = aluno_turma.turma_id where aluno_turma.matricula = %s;" % (matricula))
        return [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor]
        

api.add_resource(alunos, '/alunos') # Route_1
api.add_resource(turmas, '/turmas') # Route_2
api.add_resource(aluno_turmas, '/aluno/<matricula>/turmas') # Route_3

if __name__ == '__main__':
     app.run(port=5002)