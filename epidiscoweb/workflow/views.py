# -*- coding: utf-8 -*-
"""User views."""
from flask import Blueprint, render_template
from flask_login import login_required

blueprint = Blueprint('workflows', __name__, url_prefix='/workflows', static_folder='../static')


@blueprint.route('/')
def workflows():
    """List workflows."""
    return render_template('workflows.html')
