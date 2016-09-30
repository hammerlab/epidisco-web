# -*- coding: utf-8 -*-
"""User forms."""
from flask_wtf import Form
from wtforms import StringField
from wtforms.validators import DataRequired, Email, Length

from .models import User

class SaveForm(Form):
    """Save workflow."""
    workflow_id = StringField('WorkflowId',
                             validators=[DataRequired(), Length(min=3, max=25)])
    email = StringField('Email',
                     validators=[DataRequired(), Email(), Length(min=6, max=40)])
    workflow_json = StringField('Workflow', validators=[DataRequired()])

    def __init__(self, *args, **kwargs):
        """Create instance."""
        super(SaveForm, self).__init__(*args, **kwargs)

    def validate(self):
        """Validate the form."""
        initial_validation = super(SaveForm, self).validate()
        if not initial_validation:
            return False
