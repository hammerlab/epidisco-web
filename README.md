epidisco-web
============

Web interface to easily describe and submit epidisco jobs

Using the docker image
----------------------

If you would like to deploy Epidisco Web using Docker,
you can use the one the ready-to-go images from [dockerhub:hammerlab/epidisco-web](https://hub.docker.com/r/hammerlab/epidisco-web/):

```
  $ docker pull hammerlab/epidisco-web

  # Simple settings
  $ export NUMOFWORKERS=1
  $ export EPIPORT=8000

  # Run the image in daemon mode (where gunicorn serves the website)
  $ docker run -d -p $EPIPORT:$EPIPORT hammerlab/epidisco-web -w $NUMOFWORKERS -b 0.0.0.0:$EPIPORT
```

and browse to [localhost:8000](http://localhost:8000).

Quickstart
----------

First, set your app’s secret key as an environment variable. For example, add
the following to `.bashrc` or `.bash_profile`.

```sourceCode
export EPIDISCO_WEB_SECRET='something-really-secret'
```

Before running shell commands, set the `FLASK_APP` and `FLASK_DEBUG` environment variables:

    export FLASK_APP=/path/to/epidisco-web/autoapp.py
    export FLASK_DEBUG=1

As well as your Mailgun keys, if you'd like to send emails:

    export MAILGUN_DOMAIN=mail.example.com
    export MAILGUN_API_KEY=key-foo
    export MAILGUN_VALIDATION_KEY=pubkey-foo
    export ADMIN_FROM_EMAIL=foo@example.com

If not, be sure to set the `DISABLE_EMAILS` variable to `true` (`export
DISABLE_EMAILS=true`) so that epidisco-web can be sure you didn't want to send
emails.

Although optional, it is highly recommended that you work within an isolated
Python environment (such as [conda](http://conda.pydata.org/miniconda.html)) for
the development:

    conda create -n eweb python=3
    source activate eweb

Then run the following commands to bootstrap your environment:

    git clone https://github.com/armish/epidisco-web
    cd epidisco-web
    pip install -r requirements/dev.txt
    npm install

and bundle the Javascript and run Flask:

    npm run bundle
    flask run

Browsing to [localhost:8080](localhost:8080), you will see a pretty welcome screen.

Once you have installed your DBMS, run the following to create your app’s
database tables and perform the initial migration :

    flask db init
    flask db migrate
    flask db upgrade
    flask run

Deployment
----------

In your production environment, make sure the `FLASK_DEBUG` environment variable
is unset or is set to `0`, so that `ProdConfig` is used.

Shell
-----

To open the interactive shell, run :

    flask shell

By default, you will have access to the flask `app`.

Running Tests
-------------

To run all tests, run :

    flask test

Migrations
----------

Whenever a database migration needs to be made. Run the following commands :

    flask db migrate

This will generate a new migration script. Then run :

    flask db upgrade

To apply the migration.

For a full migration command reference, run `flask db --help`.
