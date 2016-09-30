# -*- coding: utf-8 -*-
"""User models."""
import datetime as dt

from epidiscoweb.database import Column, Model, SurrogatePK, db


class Workflow(SurrogatePK, Model):
    """A workflow."""

    __tablename__ = 'workflows'
    workflow_id = Column(db.String(80), unique=True, nullable=False)
    email = Column(db.String(80), unique=True, nullable=False)
    workflow = Column(db.Blob(80), nullable=False)
    created_at = Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)

    def __init__(self, workflow_id, email, workflow, **kwargs):
        """Create instance."""
        db.Model.__init__(self,
                          workflow_id=workflow_id,
                          email=email,
                          workflow=workflow,
                          **kwargs)

    def __repr__(self):
        """Represent instance as a unique string."""
        return '<Workflow({wid!r})>'.format(wid=self.workflow_id)
