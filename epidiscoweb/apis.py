# -*- coding: utf-8 -*-
"""All RESTful API definitions/operations."""
from flask import request
from flask_restful import Api, Resource


class WorkflowAPI(Resource):
    """Handle workflows."""

    def get(self, id):
        """Obtain workflow identified by the id."""
        workflow = open('/epi/submissions/{}.json'.format(id), 'r')
        return {'workflow': workflow.read()}

    def put(self, id):
        """Persist workflow and indexes via its id."""
        workflow = request.form['data']
        wf = open('/epi/submissions/{}.json'.format(id), 'w')
        wf.write(workflow)
        wf.close()
        return workflow

    def delete(self, id):
        """Delete a workflow given its ID."""
        pass


def register_apis(app):
    """Helper function to register RESTful components to Flask app."""
    api = Api(app)
    api.add_resource(WorkflowAPI,
                     '/workflows/<string:id>/',
                     endpoint='workflow')
