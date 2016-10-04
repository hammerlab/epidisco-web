"""Module for sending notification emails to users and admins."""
import requests

from epidiscoweb import app

REQUIRED_MAILGUN_KEYS = \
  ['MAILGUN_API_KEY', 'MAILGUN_VALIDATION_KEY', 'MAILGUN_DOMAIN', 'ADMIN_FROM_EMAIL']


def _can_send_emails():
    disabled = app.config.get('DISABLE_EMAILS')
    if disabled and disabled.upper() == 'TRUE':
        return False
    else:
        for key in REQUIRED_MAILGUN_KEYS:
            if key not in app.config:
                raise KeyError('Missing required key in config: {}'.format(key))
        return True


def send_receipt_email(user, workflow):
    """Send user submitting workflow an email confirming receipt of the workflow."""
    if not _can_send_emails():
        return False
    message = 'You\'ll be hearing from us soon with news\
    about your workflow, id {}'.format(workflow.workflow_id)
    return requests.post(
        'https://api.mailgun.net/v3/{}/messages'.format(app.config['MAILGUN_DOMAIN']),
        auth=('api', app.config['MAILGUN_API_KEY']),
        data={'from': app.config['ADMIN_FROM_EMAIL'],
              'to': [user.email],
              'subject': 'Your Epidisco Workflow was submitted',
              'text': message})


def send_admin_notify_email(user, workflow):
    """Send the admin an email notifying them about a newly submitted workflow."""
    if not _can_send_emails():
        return False
    message = 'Workflow {} was just submitted by {}'\
              .format(workflow.workflow_id, user.email)
    admin = app.config['ADMIN_FROM_EMAIL']
    return requests.post(
        'https://api.mailgun.net/v3/{}/messages'.format(app.config['MAILGUN_DOMAIN']),
        auth=('api', app.config['MAILGUN_API_KEY']),
        data={'from': admin,
              'to': [admin],
              'subject': 'EPIDISCO: New workflow submitted!',
              'text': message})
