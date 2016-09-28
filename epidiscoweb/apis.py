from flask import Flask, request
from flask_restful import Api, Resource

class WorkflowAPI(Resource):
    def get(self, id):
        workflow = open('/epi/{}.json'.format(id), 'r');
        return {'workflow': workflow.read()};

    def put(self, id):
        workflow = request.form['data'];
        wf = open('/epi/{}.json'.format(id), 'w');
        wf.write(workflow);
        wf.close();
        return workflow;

    def delete(self, id):
        pass

def register_apis(app):
    api = Api(app)
    api.add_resource(WorkflowAPI, '/workflows/<string:id>/', endpoint = 'workflow')
